package com.sabre.tn.redapp.example.showcase.xtpointservices;

import java.util.Optional;

import org.eclipse.jface.preference.IPreferenceStore;

import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointCommand;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointDataOperation;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointRequestWrapper;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointResponse;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointResponseWrapper;
import com.sabre.stl.pos.srw.nextgen.redapp.pnr.end.rq.v1.RedAppEndTransactionRq;
import com.sabre.tn.redapp.example.showcase.Activator;
import com.sabre.tn.redapp.example.showcase.listeners.PnrChecks;
import com.sabre.tn.redapp.example.showcase.preferences.PreferenceConstants;
import com.sabre.tn.redapp.example.showcase.xtpointservices.interfaces.IBeforeEndManualHandler;

public class BeforEndManualHandler implements IBeforeEndManualHandler {

	@Override
	public FlowExtPointCommand execute(FlowExtPointCommand extPointCommand) {
		
		IPreferenceStore st = Activator.getDefault().getPreferenceStore();
		
		
		boolean shouldListenBeforeEnd=st.getBoolean(PreferenceConstants.P_BEF_END_FLOW_EXT);
		
		if(shouldListenBeforeEnd){
			
			//validate if it was a command typed or button press
			boolean willRedisp = false;
			if(extPointCommand.getCommand()!=null && !extPointCommand.getCommand().isEmpty() && !extPointCommand.getCommand().startsWith("NGV:")){
				if(extPointCommand.getCommand().equalsIgnoreCase("ER"))
					willRedisp = true;
			}else{
				if(extPointCommand.getRequests()!=null && !extPointCommand.getRequests().isEmpty()){
					Optional<RedAppEndTransactionRq> trq = fetchRequest(extPointCommand, RedAppEndTransactionRq.class);
					if(trq.isPresent()){
						willRedisp = trq.get().isRetrievePNR();
					}
					//extPointCommand.getRequests().get(1).
				}
			}
			
			
			//apply logic based if PNR will be retrieved after ended
			if(!willRedisp && !PnrChecks.hasRecLoc()){
		
				ManualExtensionPointEventData dtaToSend = new ManualExtensionPointEventData();
				
				FlowExtPointResponse rsFlow = new FlowExtPointResponse();
				rsFlow.setStructure(dtaToSend);
				
				FlowExtPointResponseWrapper rsWrapper = new FlowExtPointResponseWrapper();
				rsWrapper.setOperation(FlowExtPointDataOperation.ADD);
				rsWrapper.setResponse(rsFlow);
				
				extPointCommand.getResponses().add(rsWrapper);
	
				return extPointCommand;
			}else{
				return null;
			}
			
			

		}else{
			return null;
		}
	}

    private <T> Optional <T> fetchRequest(FlowExtPointCommand extPointCommand, Class <T> type)
    {
        return extPointCommand.getRequests().stream().map(wrapper -> wrapper.getRequest())
            .filter(type::isInstance).map(type::cast).findFirst();
    }
}
