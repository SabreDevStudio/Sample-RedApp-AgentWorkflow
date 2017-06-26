package com.sabre.tn.redapp.example.workflow.listeners;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.eclipse.jface.preference.IPreferenceStore;

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
		not.setContent("Business Event Triggered: ".concat(evt.getId()).concat("-").concat(ctx.toString()).concat("-").concat(evt.getState().getCode()));
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

		

	}

}
