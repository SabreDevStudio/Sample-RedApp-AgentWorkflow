package com.sabre.tn.redapp.example.showcase.xtpointservices.interfaces;

import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointCommand;

public interface ICustomSvc {

	FlowExtPointCommand execute(FlowExtPointCommand extPointCommand);

}
