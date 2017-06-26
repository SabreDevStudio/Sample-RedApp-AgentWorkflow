package com.sabre.tn.redapp.example.workflow.xtpointservices;

import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointCommand;

public interface IWorkflowXTService {

	FlowExtPointCommand execute(FlowExtPointCommand extPointCommand);

}
