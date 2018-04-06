package com.sabre.tn.redapp.example.workflow.xtpointservices;

import java.util.Optional;

import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointCommand;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointDataOperation;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointResponse;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointResponseWrapper;
import com.sabre.tn.redapp.example.workflow.uiparts.CfServicesHelper;
import com.sabre.tn.redapp.example.workflow.uiparts.OpenThingsHelper;
import com.sabre.tn.redapp.example.workflow.xtpointservices.interfaces.ICustomSvc;


public class CustomSvcHandler implements ICustomSvc {

	





	@Override
	public FlowExtPointCommand execute(FlowExtPointCommand extPointCommand) {
		
		Optional <CustomSvcRQ> svcRQ = fetchRequest(extPointCommand, CustomSvcRQ.class);
		
		if(svcRQ.isPresent()){
			switch (svcRQ.get().actionCode) {
			case "addOTH":		
				try {
					String strTemplate = "0OTH[vendorCode][segStatus]/[pkgCode][travelDate]-[pkgName][pkgPrice][listPax]";
					
					strTemplate = strTemplate.replace("[vendorCode]", "TN");
					strTemplate = strTemplate.replace("[segStatus]", "GK1");
					//strTemplate = strTemplate.replace("[pkgCode]", pkgCode.subSequence(0, 4));
					strTemplate = strTemplate.replace("[pkgCode]", "FLOW");
					strTemplate = strTemplate.replace("[travelDate]", "10OCT");
					strTemplate = strTemplate.replace("[pkgName]", "ITEM SOLD");
					strTemplate = strTemplate.replace("[pkgPrice]", "10USD");
					strTemplate = strTemplate.replace("[listPax]", "");
					
					String resHost = CfServicesHelper.sendHostCommand(strTemplate, 0, 0);
					CustomSvcRS rsSvc = new CustomSvcRS();
					CfServicesHelper.refreshTripSummary();
					rsSvc.actionCode = "addOTH";
					rsSvc.rsPayload = resHost;
					
					FlowExtPointResponse data = new FlowExtPointResponse();

					
					data.setStructure(rsSvc);
					
					FlowExtPointResponseWrapper rswp = new FlowExtPointResponseWrapper();
					rswp.setOperation(FlowExtPointDataOperation.ADD);
					rswp.setResponse(data);
					
					
					//extPointCommand.getResponseOutput().add(data);
					extPointCommand.getResponses().add(rswp);

				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}				
				break;
			case "openWeb":
				OpenThingsHelper.showBrowserEditor("https://www.sabre.com");
				break;
			case "test":
				/*ServiceData dtRet = new ServiceData();
				dtRet.setServiceID("workflow service");
				dtRet.setRequestedData("whatever");
				dtRet.setJsonPayload("");
				FlowExtPointResponse data = new FlowExtPointResponse();

				
				data.setStructure(dtRet);
				
				FlowExtPointResponseWrapper rswp = new FlowExtPointResponseWrapper();
				rswp.setResponse(data);
				//rswp.setOperation(FlowExtPointDataOperation.ADD);
				
				//extPointCommand.getResponseOutput().add(data);
				extPointCommand.getResponses().add(rswp);*/
			default:
				break;
			}
			
		}else{
			CustomSvcRS rsSvc = new CustomSvcRS();
			CfServicesHelper.refreshTripSummary();
			rsSvc.actionCode = "addOTH";
			rsSvc.rsPayload = "resHost";
			
			
			RSResultSet rsR = new RSResultSet();
			
			for(int i=0;i<10;i++){
				SampleResult sr = new SampleResult();
				sr.field1 = "name " + i;
				sr.field2 = "age " + i+10;
				rsR.getSampleResult().add(sr);
				
			}
			
			FlowExtPointResponse data = new FlowExtPointResponse();

			
			data.setStructure(rsR);
			
			FlowExtPointResponseWrapper rswp = new FlowExtPointResponseWrapper();
			rswp.setResponse(data);
			rswp.setOperation(FlowExtPointDataOperation.ADD);
			
			//extPointCommand.getResponseOutput().add(data);
			extPointCommand.getResponses().add(rswp);
		}
		
		
		return extPointCommand;
	}
	
    private <T> Optional <T> fetchRequest(FlowExtPointCommand extPointCommand, Class <T> type)
    {
        return extPointCommand.getRequests().stream().map(wrapper -> wrapper.getRequest())
            .filter(type::isInstance).map(type::cast).findFirst();
    }

}
