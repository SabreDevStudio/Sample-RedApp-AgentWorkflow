package com.sabre.tn.redapp.example.showcase.listeners;

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
import com.sabre.edge.cf.host.data.HostCommand;
import com.sabre.edge.cf.host.data.HostResponse;
import com.sabre.edge.cf.model.IEvent;
import com.sabre.edge.cf.model.IEventListener;
import com.sabre.edge.cf.model.IServiceContext;
import com.sabre.edge.cf.model.element.ServiceContext;
import com.sabre.edge.platform.core.ui.threading.UiThreadInvoker;
import com.sabre.edge.platform.optional.notifications.INotificationService;
import com.sabre.edge.platform.optional.notifications.types.Notification;
import com.sabre.edge.platform.optional.notifications.types.Priority;
import com.sabre.edge.platform.optional.notifications.types.SideBarColor;
import com.sabre.tn.redapp.example.showcase.Activator;
import com.sabre.tn.redapp.example.showcase.preferences.PreferenceConstants;
import com.sabre.tn.redapp.example.showcase.uiparts.CfServicesHelper;
import com.sabre.tn.redapp.example.showcase.uiparts.LockManager;
import com.sabre.tn.redapp.example.showcase.uiparts.OpenThingsHelper;

public class HostResponseListener implements IEventListener {

	@Override
	public void handleEvent(IEvent evt) {
		
		
		ServiceContext sc = (ServiceContext)evt.getContext();
		HostCommand cmdRQ = (HostCommand) sc.getRequest();
		HostResponse cmdRS = (HostResponse) sc.getResponse();
		
		//EmulatorCommand cmd = cmdRQ.getEmulatorCommand();
		String fmtRQ = cmdRQ.getText();
		String fmtRS = Integer.toString(cmdRS.getResponseNumber()).concat("-").concat(cmdRS.getText());
		
		/*IPreferenceStore st = Activator.getDefault().getPreferenceStore();
		
		
		boolean shouldListenAvailability=st.getBoolean(PreferenceConstants.P_LISTEN_AVAIL);*/
		final INotificationService svc = Activator.getDefault().getServiceReference(INotificationService.class);
		final Notification not = new Notification();
		
		IServiceContext ctx = evt.getContext();
		
		
		not.setWindowTitle("Agent Workflow");
		not.setPriority(Priority.NORMAL);
		not.setContent("Host command Triggered: ".concat(fmtRS));
		not.setLeftSideBarColor(SideBarColor.GREEN);
		not.setNotificationTime(100);	
		not.setId("hostEvent");
		
		
	
		
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
