package com.sabre.tn.redapp.example.workflow.listeners;

import org.eclipse.jface.preference.IPreferenceStore;
import org.eclipse.swt.widgets.Event;
import org.eclipse.swt.widgets.Listener;

import com.sabre.edge.cf.emu.data.EmulatorCommand;
import com.sabre.edge.cf.emu.data.requests.EmulatorCommandRequest;
import com.sabre.edge.cf.emu.data.responses.EmulatorCommandResponse;
import com.sabre.edge.cf.model.IEvent;
import com.sabre.edge.cf.model.IEventListener;
import com.sabre.edge.cf.model.element.ServiceContext;
import com.sabre.edge.platform.core.ui.threading.UiThreadInvoker;
import com.sabre.edge.platform.optional.notifications.INotificationService;
import com.sabre.edge.platform.optional.notifications.types.Notification;
import com.sabre.edge.platform.optional.notifications.types.Priority;
import com.sabre.edge.platform.optional.notifications.types.SideBarColor;
import com.sabre.tn.redapp.example.workflow.Activator;
import com.sabre.tn.redapp.example.workflow.preferences.PreferenceConstants;
import com.sabre.tn.redapp.example.workflow.uiparts.OpenThingsHelper;

public class SellListener implements IEventListener {

	/*
	 * 
	 * (non-Javadoc)
	 * @see com.sabre.edge.cf.model.IEventListener#handleEvent(com.sabre.edge.cf.model.IEvent)
	 */
	@Override
	public void handleEvent(IEvent evt) {

		IPreferenceStore st = Activator.getDefault().getPreferenceStore();
		
		boolean shouldListenSell=st.getBoolean(PreferenceConstants.P_LISTEN_SELL);
		
		
		if( shouldListenSell){

			ServiceContext sc = (ServiceContext)evt.getContext();
			EmulatorCommandRequest cmdRQ = (EmulatorCommandRequest) sc.getRequest();
			EmulatorCommandResponse cmdRS = (EmulatorCommandResponse) sc.getResponse();
			EmulatorCommand cmd = cmdRQ.getEmulatorCommand();
			String cmdTyped = cmd.getCommand();
			String cmdResp = cmdRS.getEmulatorResponse()!=null?cmdRS.getEmulatorResponse().getResponse():"";
			
			
			if(cmdTyped!=null && !cmdTyped.isEmpty()){
				
				if(shouldListenSell && cmdTyped.startsWith("0")){
					//sell flight segment command, show notification with link to editor extras
					showNotificationThenEditor("U just sold an segment for this PNR, please ensure Quality Control policies by following the link below", "${plugin_resources}/resources/AfterSellQC.html");
					
				}
			}
			
		}

	}
	
	private void showNotificationThenEditor(String notMessage, String urlToLoad) {
		
		final INotificationService svc = Activator.getDefault().getServiceReference(INotificationService.class);
		final Notification not = new Notification();
		
		
		not.setWindowTitle("Sample Notification - Agent Workflow");
		not.setPriority(Priority.NORMAL);
		not.setContent(notMessage);
		not.setLeftSideBarColor(SideBarColor.GREEN);
		not.setNotificationTime(3000);	
		not.setId("sampleNotification");
		
		
		not.setMoreLabel("more...");
		
		
		not.setMoreListener(new Listener() {
			
			@Override
			public void handleEvent(Event arg0) {
				
				OpenThingsHelper.showBrowserEditor(urlToLoad);
				svc.destroyNotification("sampleNotification");
			}
		});
	
		
		UiThreadInvoker<Object> invoker = new UiThreadInvoker<Object>() {
			
			@Override
			protected Object invoke() {
				String nId = svc.createNotification(not);
				return nId;
			}
		};
		
		invoker.asyncExec();
		
		
	}

}
