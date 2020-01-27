package com.sabre.tn.redapp.example.workflow.uiparts;

import com.sabre.edge.platform.core.common.basic.workarea.IWorkAreaService;
import com.sabre.edge.platform.core.config.base.IBaseConfigService;
import com.sabre.edge.platform.core.sso.base.IAgentProfileService;
import com.sabre.tn.redapp.example.workflow.Activator;

public class CoreServicesHelper {
	
	public static IAgentProfileService getAgentProfile(){
		return Activator.getDefault().getProfileService();
	}
	
	public static IWorkAreaService getWorkAreaService(){
		return Activator.getDefault().getServiceReference(IWorkAreaService.class);
	}
	
	public static IBaseConfigService getConfigService() {
		return Activator.getDefault().getConfigService();
	}
}
