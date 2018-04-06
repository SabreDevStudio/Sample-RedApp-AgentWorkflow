package com.sabre.tn.redapp.example.workflow.xtpointservices.interfaces;

import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointCommand;

public interface ICustomSvc {

	FlowExtPointCommand execute(FlowExtPointCommand extPointCommand);

}
