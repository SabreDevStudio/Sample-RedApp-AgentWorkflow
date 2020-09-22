package com.sabre.tn.redapp.example.showcase.listeners;

import java.io.File;

import javax.xml.namespace.NamespaceContext;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathConstants;
import javax.xml.xpath.XPathExpression;
import javax.xml.xpath.XPathFactory;

import org.eclipse.jface.dialogs.Dialog;
import org.eclipse.jface.preference.IPreferenceStore;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.ui.PlatformUI;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;

import com.sabre.edge.cf.common.service.ContextStatusAdvisor;
import com.sabre.edge.cf.emu.data.EmulatorCommand;
import com.sabre.edge.cf.emu.data.requests.EmulatorCommandRequest;
import com.sabre.edge.cf.emu.data.responses.EmulatorCommandResponse;
import com.sabre.edge.cf.model.IRequest;
import com.sabre.edge.cf.model.IService;
import com.sabre.edge.cf.model.IServiceContext;
import com.sabre.edge.cf.model.element.ServiceContext;
import com.sabre.edge.platform.core.ui.threading.UiThreadInvoker;
import com.sabre.tn.redapp.example.showcase.Activator;
import com.sabre.tn.redapp.example.showcase.preferences.PreferenceConstants;
import com.sabre.tn.redapp.example.showcase.uiparts.CfServicesHelper;
import com.sabre.tn.redapp.example.showcase.uiparts.OpenThingsHelper;
import com.sabre.tn.redapp.example.showcase.uiparts.SamplePopupDialog;


public class CommandBlockService implements IService {

	@Override
	public void process(IServiceContext context) {
		
		IPreferenceStore st = Activator.getDefault().getPreferenceStore();
		
		
		boolean shouldBlock=st.getBoolean(PreferenceConstants.P_BLOCK_ER);
		
		
		if(shouldBlock){


			IRequest rq = context.getRequest();
			
			if(rq instanceof EmulatorCommandRequest){
				EmulatorCommand emuCmd = ((EmulatorCommandRequest) rq).getEmulatorCommand();
				String format = emuCmd.getCommand();
				
				if(format.equalsIgnoreCase("E")){
					
					//trying to End current PNR, check if there's record locator by calling TIR from SWS
					if(PnrChecks.hasRecLoc()){
						//itinerary has record locator (let it continue)
						Activator.getDefault().getLoggerService().info("PNR Ended Accordingly.");
						
					}else{
						//no record locator, only allows to ER (end and redisplay)
						//show an popup indicating that the command is about to be blocked, let the user decide
						int resDialog = OpenThingsHelper.showDialog("The command you typed is about to be blocked, please confirm your operation by clicking on continue button.");
						if(resDialog==Dialog.OK){
							//sending an empty response back will prevent the command to reach the host
							EmulatorCommandResponse cmdResponse = new EmulatorCommandResponse();
							((ServiceContext) context).setResponse(cmdResponse);
						}									
						
					}
					
				} else if(format.startsWith("X")){
					//Validate if the X command must be blocked, depending on ther logic implied by customer 
					//Make use of GetPNR access the itinerary (read segments) and check the one about to be deleted

					if(format.equalsIgnoreCase("X*")){
						Activator.getDefault().getLoggerService().info("########## DELETE ALL SEGMENTS");	
						//if they want to block execution, use pattern bellow
						EmulatorCommandResponse cmdResponse = new EmulatorCommandResponse();
						((ServiceContext) context).setResponse(cmdResponse);
						
						//if there feedback to the user, show a "message"
						CfServicesHelper.showInEmu("MESSAGE TO SHOW in EMU");

					}

				}
			}
		}
	}
}
