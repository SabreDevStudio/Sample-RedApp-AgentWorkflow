package com.sabre.tn.redapp.example.workflow.listeners;

import java.util.Random;

import org.eclipse.jface.dialogs.Dialog;

import com.sabre.edge.cf.common.service.ContextStatusAdvisor;
import com.sabre.edge.cf.emu.data.EmulatorCommand;
import com.sabre.edge.cf.emu.data.EmulatorResponse;
import com.sabre.edge.cf.emu.data.requests.EmulatorCommandRequest;
import com.sabre.edge.cf.emu.data.responses.EmulatorCommandResponse;
import com.sabre.edge.cf.model.IRequest;
import com.sabre.edge.cf.model.IService;
import com.sabre.edge.cf.model.IServiceContext;
import com.sabre.edge.cf.model.ServiceStatus;
import com.sabre.edge.cf.model.element.ServiceContext;
import com.sabre.edge.dynamo.transformer.ITransformer;
import com.sabre.edge.platform.core.sso.base.IAgentProfileService;
import com.sabre.edge.platform.core.ui.handlers.OpenViewHandler;
import com.sabre.edge.platform.core.ui.threading.UiThreadInvoker;
import com.sabre.edge.platform.core.ui.widgets.CGradientComposite;
import com.sabre.services.res.tir.v3_10.TravelItineraryReadRS;
import com.sabre.tn.redapp.example.workflow.Activator;
import com.sabre.tn.redapp.example.workflow.uiparts.CfServicesHelper;
import com.sabre.tn.redapp.example.workflow.uiparts.CoreServicesHelper;
import com.sabre.tn.redapp.example.workflow.uiparts.OpenThingsHelper;


public class CustomCommandService implements IService {
	
    private ITransformer transformer = Activator.getDefault().getServiceReference(
            ITransformer.class);
	
	final String[] quotes = {
			"“All journeys have secret destinations of which the traveler is unaware.” — Martin Buber",
			"“Though we travel the world over to find the beautiful, we must carry it with us or we find it not.” — Ralph Waldo Emerson",
			"“A man of ordinary talent will always be ordinary, whether he travels or not; but a man of superior talent will go to pieces if he remains forever in the same place.” — Wolfgang Amadeus Mozart",
			"“If you’re not living on the edge, you’re taking up too much space.”",
			"“A journey of a thousand miles must begin with a single step.” — Lao Tzu",
			"“A ship is safe in the harbor, but that’s not what ships are built for.” – Gael Attal",
			"“I have found out that there ain’t no surer way to find out whether you like people or hate them than to travel with them.” — Mark Twain",
			"“Once in a while it really hits people that they don’t have to experience the world in the way they have been told to.” – Alan Keightley"
	};

	@Override
	public void process(IServiceContext context) {

		
		Random rGen = new Random();
		int rInt = rGen.nextInt(quotes.length);
		
		IRequest rq = context.getRequest();
		
		String cmdPostFix="";
		
		if(rq instanceof EmulatorCommandRequest){
			EmulatorCommand cmd = ((EmulatorCommandRequest) rq).getEmulatorCommand();
			cmdPostFix = cmd.getCommand().replace("CUSTOMCMD", "");
		}
		
		if(cmdPostFix.isEmpty()){
			new UiThreadInvoker<Object>() {
				@Override
				protected Object invoke() {
					//Straight forward ShowView method, just give the viewId from extensions (plugin.xml)...
					OpenViewHandler.showView("com.sabre.tn.redapp.example.workflow.redapp.view");
					return null;
				};
			}.asyncExec();
			
			
			//IRequest rq = context.getRequest();
			EmulatorCommandResponse cmdResponse = new EmulatorCommandResponse();
			((ServiceContext) context).setResponse(cmdResponse);
			
		}else if (cmdPostFix.matches("MULT")) {
			
			
		}else if (cmdPostFix.startsWith("¤")) {
			String pcc = CoreServicesHelper.getWorkAreaService().getWorkAreaInUse().getPcc();
			Activator.getDefault().getLoggerService().info("Area changed: PCC " + pcc);
		}else if(cmdPostFix.startsWith("WEBKIT")){
			if(cmdPostFix.contains("HTTP") || cmdPostFix.contains("FILE:")){
				// OpenThingsHelper.showBrowserEditor(cmdPostFix.replace("WEBKIT", ""));
				OpenThingsHelper.showAdvWebView(cmdPostFix.replace("WEBKIT", ""),null);
			}else{
				OpenThingsHelper.showBrowserEditor("file:///C:/Dev/redapps/eclipse/runtime-nSRW/.metadata/.plugins/com.sabre.tn.redapp.example.ttx.workflow//resources/AvAssistant.html?destIata=NYC&detCommand=VA*1/2/3/4/5/6/7/8/9/10/11");
				// https://gtu.getthere.com/media/kuba/formatfinder3/alpha_0.1/
			}
		}else if(cmdPostFix.startsWith("GETPNR")) {
			try {
				TravelItineraryReadRS res = CfServicesHelper.readPNR();
				Activator.getDefault().getLoggerService().info("TIR_RESPONSE=>"+transformer.obj2xml(res));
				

			} catch (Exception e) {
				Activator.getDefault().getLoggerService().info("TIR_ERROR=>".concat(e.getMessage()));
			}
		}
		


	}

}
