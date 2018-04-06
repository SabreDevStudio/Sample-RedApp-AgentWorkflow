package com.sabre.tn.redapp.example.workflow.xtpointservices;

import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointCommand;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointDataOperation;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointResponse;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointResponseWrapper;
import com.sabre.tn.redapp.example.workflow.xtpointservices.interfaces.IBeforeEndManualHandler;

public class BeforEndManualHandler implements IBeforeEndManualHandler {

	@Override
	public FlowExtPointCommand execute(FlowExtPointCommand extPointCommand) {
		
/*
		ManualExtensionPointEventData dtaToSend = new ManualExtensionPointEventData();
		
		FlowExtPointResponse rsFlow = new FlowExtPointResponse();
		rsFlow.setStructure(dtaToSend);
		
		FlowExtPointResponseWrapper rsWrapper = new FlowExtPointResponseWrapper();
		rsWrapper.setOperation(FlowExtPointDataOperation.ADD);
		rsWrapper.setResponse(rsFlow);
		
		extPointCommand.getResponses().add(rsWrapper);
*/
		return extPointCommand;
	}

}
