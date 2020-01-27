package com.sabre.tn.redapp.example.workflow.listeners;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.eclipse.jface.preference.IPreferenceStore;

import com.sabre.edge.cf.emu.data.EmulatorCommand;
import com.sabre.edge.cf.emu.data.requests.EmulatorCommandRequest;
import com.sabre.edge.cf.emu.data.responses.EmulatorCommandResponse;
import com.sabre.edge.cf.model.IEvent;
import com.sabre.edge.cf.model.IEventListener;
import com.sabre.edge.cf.model.element.ServiceContext;
import com.sabre.tn.redapp.example.workflow.Activator;
import com.sabre.tn.redapp.example.workflow.preferences.PreferenceConstants;
import com.sabre.tn.redapp.example.workflow.uiparts.OpenThingsHelper;

public class AvailabilityListener implements IEventListener {

	@Override
	public void handleEvent(IEvent evt) {
		IPreferenceStore st = Activator.getDefault().getPreferenceStore();
		
		
		boolean shouldListenAvailability=st.getBoolean(PreferenceConstants.P_LISTEN_AVAIL);

		
		if(shouldListenAvailability){

			//Service Context - That's how u got accces to SRW Runtime Comm.
			ServiceContext sc = (ServiceContext)evt.getContext();
			EmulatorCommandRequest cmdRQ = (EmulatorCommandRequest) sc.getRequest();
			EmulatorCommandResponse cmdRS = (EmulatorCommandResponse) sc.getResponse();
			EmulatorCommand cmd = cmdRQ.getEmulatorCommand();
			
			
			String cmdTyped = cmd.getCommand();
			//Use regular expression to parse the command, accepts 1(date)(citypair) | 1(citypair)
			Pattern ptAv = Pattern.compile("1([0-9]{0,2}(JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)){0,1}([A-Z]{3})([A-Z]{3})");
			Matcher mtAv = ptAv.matcher(cmdTyped);
			
			String qsToPass = null;
			
			if(mtAv.matches()){
				
				
				//get the destination IATA
				qsToPass = "destIata="+mtAv.group(4);
				
				//Use regular expression to capture all line numbers returned from availability display
				String cmdResp = cmdRS.getEmulatorResponse()!=null?cmdRS.getEmulatorResponse().getResponse():"";
				Pattern ptLineNum = Pattern.compile("^[ ]{0,1}([0-9]{1,2})[A-Z]{2}[/| |*]{1}.*", Pattern.MULTILINE );
				Matcher mtLineNum = ptLineNum.matcher(cmdResp);
				
				
				String strAllLines = "";
				while(mtLineNum.find()){
					strAllLines = strAllLines.concat((strAllLines.isEmpty()?"":"/")+mtLineNum.group(1));
				}
				
				if(!strAllLines.isEmpty())
					qsToPass = qsToPass.concat("&detCommand=VA*" + strAllLines);
				
			}
			
			if(cmdTyped!=null && !cmdTyped.isEmpty()){
				
				if(shouldListenAvailability && cmdTyped.startsWith("1")){
					//availability command, show WebKit View
					OpenThingsHelper.showAdvWebView("${plugin_resources}/resources/AvAssistant.html".concat(qsToPass!=null?"?".concat(qsToPass):""), "callOSGIServices()");
					
					
				}

			}
			
		}

	}

}
