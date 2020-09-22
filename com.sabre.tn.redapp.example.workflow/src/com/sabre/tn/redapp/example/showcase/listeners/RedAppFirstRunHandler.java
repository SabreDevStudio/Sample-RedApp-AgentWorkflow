package com.sabre.tn.redapp.example.showcase.listeners;

import org.eclipse.swt.widgets.Event;
import org.eclipse.swt.widgets.Listener;

import com.sabre.edge.platform.core.ui.threading.UiThreadInvoker;
import com.sabre.edge.platform.optional.firstrun.worker.AbstractFirstRunWorker;
import com.sabre.edge.platform.optional.notifications.INotificationService;
import com.sabre.edge.platform.optional.notifications.types.Notification;
import com.sabre.edge.platform.optional.notifications.types.Priority;
import com.sabre.edge.platform.optional.notifications.types.SideBarColor;
import com.sabre.tn.redapp.example.showcase.Activator;
import com.sabre.tn.redapp.example.showcase.uiparts.OpenThingsHelper;


public class RedAppFirstRunHandler extends AbstractFirstRunWorker {

	@Override
	protected boolean performActions() {
		// On first run, let the user be aware of the App, show a notification about it.
		final INotificationService svc = Activator.getDefault().getServiceReference(INotificationService.class);
		final Notification not = new Notification();
		
		
		not.setWindowTitle("1st Run Notification - ShowCase Red App");
		not.setPriority(Priority.NORMAL);
		not.setContent("The ShowCase Red App was installed and that's the first time it runs, self configuration being completed...");
		not.setLeftSideBarColor(SideBarColor.GREEN);
		not.setNotificationTime(0);	
		not.setId("1stRunNotification");
		
		
	
		
		UiThreadInvoker<Object> invoker = new UiThreadInvoker<Object>() {
			
			@Override
			protected Object invoke() {
				String nId = svc.createNotification(not);
				return nId;
			}
		};
		
		invoker.asyncExec();
		
		
		//in order to clear the first run "flag", this method must return true, for demo purposes we're not reseting it
		return true;
	}

}
