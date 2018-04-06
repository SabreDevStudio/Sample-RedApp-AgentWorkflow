package com.sabre.tn.redapp.example.workflow.xtpointservices;

import java.util.Optional;

import com.sabre.stl.pos.srw.nextgen.flow.ext.utils.FlowExtPointCommandUtils;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtControlAction;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointCommand;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointDataOperation;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointError;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointResponseWrapper;
import com.sabre.tn.redapp.example.workflow.xtpointservices.interfaces.IBeforeEndHandler;

public class BeforeEndHandler implements IBeforeEndHandler {

	@Override
	public FlowExtPointCommand execute(FlowExtPointCommand extPointCommand) {
    	
		
    	// not sure if works on both manual / auto
		// extPointCommand.setFlowControlAction(FlowExtControlAction.CANCEL);
    	return extPointCommand;
	}

}
