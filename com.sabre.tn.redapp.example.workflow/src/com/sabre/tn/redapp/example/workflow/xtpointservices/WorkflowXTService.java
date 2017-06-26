package com.sabre.tn.redapp.example.workflow.xtpointservices;

import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointCommand;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointData;
import com.sabre.tn.redapp.example.workflow.uiparts.OpenThingsHelper;


public class WorkflowXTService implements IWorkflowXTService {

	





	@Override
	public FlowExtPointCommand execute(FlowExtPointCommand extPointCommand) {
		
		

		FlowExtPointData data = new FlowExtPointData();
		
		OpenThingsHelper.showBrowserEditor("http://wwsw.sabre.com");
		
		ServiceData dtRet = new ServiceData();
		dtRet.setServiceID("workflow service");
		dtRet.setRequestedData("whatever");
		dtRet.setJsonPayload("");
		
		data.setStructure(dtRet);
		
		extPointCommand.getResponseOutput().add(data);
		
		
		return extPointCommand;
	}

}
