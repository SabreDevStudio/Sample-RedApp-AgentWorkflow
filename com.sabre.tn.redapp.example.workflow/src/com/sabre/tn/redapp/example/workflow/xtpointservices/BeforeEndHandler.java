package com.sabre.tn.redapp.example.workflow.xtpointservices;

import java.util.Optional;

import org.eclipse.jface.preference.IPreferenceStore;

import com.sabre.stl.pos.srw.nextgen.flow.ext.utils.FlowExtPointCommandUtils;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtControlAction;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointButtonType;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointCommand;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointDataOperation;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointError;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointHint;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointResponse;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointResponseWrapper;
import com.sabre.stl.pos.srw.nextgen.redapp.pnr.end.rq.v1.RedAppEndTransactionRq;
import com.sabre.tn.redapp.example.workflow.Activator;
import com.sabre.tn.redapp.example.workflow.listeners.PnrChecks;
import com.sabre.tn.redapp.example.workflow.preferences.PreferenceConstants;
import com.sabre.tn.redapp.example.workflow.uiparts.CfServicesHelper;
import com.sabre.tn.redapp.example.workflow.xtpointservices.interfaces.IBeforeEndHandler;

import static com.sabre.stl.pos.srw.nextgen.flow.ext.utils.FlowExtPointCommandUtils.addError;
import static com.sabre.stl.pos.srw.nextgen.flow.ext.utils.FlowExtPointErrorFactory.createMajorError;

public class BeforeEndHandler implements IBeforeEndHandler {

	@Override
	public FlowExtPointCommand execute(FlowExtPointCommand extPointCommand) {
    	
		IPreferenceStore st = Activator.getDefault().getPreferenceStore();
		
		
		boolean shouldListenBeforeEnd=st.getBoolean(PreferenceConstants.P_BEF_END_FLOW_EXT);
		boolean shouldListenBeforeEnd1=st.getBoolean(PreferenceConstants.P_BEF_END_FLOW_EXT_1);
		
		String lockid = extPointCommand.getLockId().toString();
		
		if(shouldListenBeforeEnd){
		
			
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
				}
			}
			
			
			//apply logic based if PNR will be retrieved after ended
			//if useing WebService call from within Workflow Extansion need to pass same token obtained from UI Command Flow. 
			//if(!willRedisp && !PnrChecks.hasRecLoc(extPointCommand.getLockId())){
			if(!willRedisp && !PnrChecks.hasRecLocFromGetPNR()){
				
				//implement as error
				addError(extPointCommand,  createMajorError("you cannot END a PNR without seeing a Record Locator, try END and Redisplay"));

				//cancel flow execution
				extPointCommand.setFlowControlAction(FlowExtControlAction.CANCEL);

			
			}
			
		}
		if(shouldListenBeforeEnd1) {
			//QC Flow, tries to find remarks from PNR with string MARKER-1 and MARKER-2
			boolean checked = false;
			try {
				String hostResp = CfServicesHelper.sendHostCommand("*A", 0, extPointCommand.getLockId()>0?extPointCommand.getLockId():-1);
				
				if(hostResp.contains("MARKER-1") && hostResp.contains("MARKER-2")){
					checked = true;
				}
				
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				checked = false;
			}
			
			if(!checked){
				FlowExtPointError errorCheck = createMajorError("QC Check", "There is missing information to perform QC, please verify mandatory elements", null);

				errorCheck.getHints().add(new FlowExtPointHint()
				.withLabel("APPLY QC CHECK")
				.withActionCode("hintACTCODE")
				.withButtonType(FlowExtPointButtonType.PRIMARY));
				addError(extPointCommand, errorCheck);
				
			}else{

				FlowExtPointResponse dataFlow1 = new FlowExtPointResponse();
				dataFlow1.setText("PASSED QC");
				
				FlowExtPointResponseWrapper rswpFlows1 = new FlowExtPointResponseWrapper();
				
				rswpFlows1.setResponse(dataFlow1);
				rswpFlows1.setOperation(FlowExtPointDataOperation.ADD);

				extPointCommand.getResponses().add(rswpFlows1);

				
			}


		}
		
		
		return extPointCommand;
	}
	
    private <T> Optional <T> fetchRequest(FlowExtPointCommand extPointCommand, Class <T> type)
    {
        return extPointCommand.getRequests().stream().map(wrapper -> wrapper.getRequest())
            .filter(type::isInstance).map(type::cast).findFirst();
    }	

}
