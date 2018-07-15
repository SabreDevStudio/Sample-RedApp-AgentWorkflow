package com.sabre.tn.redapp.example.workflow.xtpointservices;

import java.util.Optional;
import java.util.logging.Logger;

import com.sabre.edge.cf.model.IServiceContext;
import com.sabre.edge.platform.core.ui.threading.UiThreadInvoker;
import com.sabre.edge.platform.optional.notifications.INotificationService;
import com.sabre.edge.platform.optional.notifications.types.Notification;
import com.sabre.edge.platform.optional.notifications.types.Priority;
import com.sabre.edge.platform.optional.notifications.types.SideBarColor;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointCommand;
import com.sabre.stl.pos.srw.nextgen.redapp.nudge.v1.RedAppNudgeActionRQ;
import com.sabre.tn.redapp.example.workflow.Activator;
import com.sabre.tn.redapp.example.workflow.xtpointservices.interfaces.INudgeAction;


public class NudgeAction implements INudgeAction {

	@Override
	public FlowExtPointCommand execute(FlowExtPointCommand extPointCommand) {
		
		Activator.getDefault().getLoggerService().info("NUDGE Action handler reach");
		Optional<RedAppNudgeActionRQ> rq = fetchRequest(extPointCommand, RedAppNudgeActionRQ.class);
		if(rq.isPresent()){
			final INotificationService svc = Activator.getDefault().getServiceReference(INotificationService.class);
			final Notification not = new Notification();
			
			
			
			not.setWindowTitle("ShowCase RedApp");
			not.setPriority(Priority.NORMAL);
			not.setContent("Nudge Action Triggered: ".concat(rq.get().getActionId()));
			not.setLeftSideBarColor(SideBarColor.GREEN);
			not.setNotificationTime(500);	
			not.setId("nudgeAction");
			
			
		
			
			UiThreadInvoker<Object> invoker = new UiThreadInvoker<Object>() {
				
				@Override
				protected Object invoke() {
					String nId = svc.createNotification(not);
					return nId;
				}
			};
			
			invoker.asyncExec();
						
			
		}
		return null;
	}

    private <T> Optional <T> fetchRequest(FlowExtPointCommand extPointCommand, Class <T> type)
    {
        return extPointCommand.getRequests().stream().map(wrapper -> wrapper.getRequest())
            .filter(type::isInstance).map(type::cast).findFirst();
    }
}
