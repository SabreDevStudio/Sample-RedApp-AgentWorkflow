package com.sabre.tn.redapp.example.workflow.listeners;

import java.io.StringReader;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.eclipse.jface.preference.IPreferenceStore;
import org.w3c.dom.Document;
import org.xml.sax.InputSource;

import com.sabre.edge.cf.core.registry.service.ISRWCommunication;
import com.sabre.edge.cf.emu.data.EmulatorCommand;
import com.sabre.edge.cf.emu.data.requests.EmulatorCommandRequest;
import com.sabre.edge.cf.emu.data.responses.EmulatorCommandResponse;
import com.sabre.edge.cf.model.IEvent;
import com.sabre.edge.cf.model.IEventListener;
import com.sabre.edge.cf.model.IServiceContext;
import com.sabre.edge.cf.model.element.ServiceContext;
import com.sabre.edge.platform.core.ui.threading.UiThreadInvoker;
import com.sabre.edge.platform.optional.notifications.INotificationService;
import com.sabre.edge.platform.optional.notifications.types.Notification;
import com.sabre.edge.platform.optional.notifications.types.Priority;
import com.sabre.edge.platform.optional.notifications.types.SideBarColor;
import com.sabre.tn.redapp.example.workflow.Activator;
import com.sabre.tn.redapp.example.workflow.preferences.PreferenceConstants;
import com.sabre.tn.redapp.example.workflow.uiparts.CfServicesHelper;
import com.sabre.tn.redapp.example.workflow.uiparts.CoreServicesHelper;
import com.sabre.tn.redapp.example.workflow.uiparts.LockManager;
import com.sabre.tn.redapp.example.workflow.uiparts.OpenThingsHelper;

public class BusinessEventListener implements IEventListener {

	@Override
	public void handleEvent(IEvent evt) {
		
		/*IPreferenceStore st = Activator.getDefault().getPreferenceStore();
		
		
		boolean shouldListenAvailability=st.getBoolean(PreferenceConstants.P_LISTEN_AVAIL);*/
		final INotificationService svc = Activator.getDefault().getServiceReference(INotificationService.class);
		final Notification not = new Notification();
		
		IServiceContext ctx = evt.getContext();
		
		
		not.setWindowTitle("Agent Workflow");
		not.setPriority(Priority.NORMAL);
		not.setContent("Business Event Triggered: ".concat(evt.getId()).concat("-").concat(ctx!=null?ctx.toString():"no context"));
		not.setLeftSideBarColor(SideBarColor.GREEN);
		not.setNotificationTime(500);	
		not.setId("bizEvent");
		
		
	
		
		UiThreadInvoker<Object> invoker = new UiThreadInvoker<Object>() {
			
			@Override
			protected Object invoke() {
				String nId = svc.createNotification(not);
				return nId;
			}
		};
		
		invoker.asyncExec();
		

		if(evt.getId().equalsIgnoreCase("SP_COPY_TO_PNR")){
			LockManager lm = new LockManager(Activator.getDefault().getServiceReference(ISRWCommunication.class),Activator.getDefault().getLoggerService());
			try {
				lm.obtainLock();
				long lid = lm.getLockId();
				
			    DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
			    DocumentBuilder dBuilder;
				dBuilder = dbFactory.newDocumentBuilder();
				Document docRQ = dBuilder.parse(new InputSource(new StringReader("<SabreCommandLLSRQ xmlns=\"http://webservices.sabre.com/sabreXML/2003/07\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" TimeStamp=\"2014-03-04T14:00:00\" Version=\"1.8.1\"><Request Output=\"SCREEN\" CDATA=\"true\">"
						+ "<HostCommand>*A</HostCommand>"
						+ "</Request></SabreCommandLLSRQ>")));
				
				CfServicesHelper.callSabreWebServices("SabreCommandLLSRQ", docRQ, lid);
				lm.releaseLock();
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		}
		
		if(evt.getId().equalsIgnoreCase("EMU_RESPONSE")){
			String pcc = CoreServicesHelper.getWorkAreaService().getWorkAreaInUse().getPcc();
			Activator.getDefault().getLoggerService().info("Chenged Area"+pcc);
			
			//CfServicesHelper.executeInEmu("ER");
		}

		

	}

}
