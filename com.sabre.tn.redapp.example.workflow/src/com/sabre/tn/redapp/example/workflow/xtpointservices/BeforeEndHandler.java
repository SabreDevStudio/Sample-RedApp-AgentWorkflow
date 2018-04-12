package com.sabre.tn.redapp.example.workflow.xtpointservices;

import java.util.Optional;

import org.eclipse.jface.preference.IPreferenceStore;

import com.sabre.stl.pos.srw.nextgen.flow.ext.utils.FlowExtPointCommandUtils;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtControlAction;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointCommand;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointDataOperation;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointError;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointResponseWrapper;
import com.sabre.tn.redapp.example.workflow.Activator;
import com.sabre.tn.redapp.example.workflow.preferences.PreferenceConstants;
import com.sabre.tn.redapp.example.workflow.xtpointservices.interfaces.IBeforeEndHandler;

public class BeforeEndHandler implements IBeforeEndHandler {

	@Override
	public FlowExtPointCommand execute(FlowExtPointCommand extPointCommand) {
    	
		IPreferenceStore st = Activator.getDefault().getPreferenceStore();
		
		
		boolean shouldListenBeforeEnd=st.getBoolean(PreferenceConstants.P_BEF_END_FLOW_EXT);
		
		if(shouldListenBeforeEnd){		
	    	// not sure if works on both manual / auto
			// extPointCommand.setFlowControlAction(FlowExtControlAction.CANCEL);
			return extPointCommand;
		}else{
			return null;
		}
	}

}
