package com.sabre.tn.redapp.example.workflow.xtpointservices;

import java.util.Optional;
import java.util.Random;

import com.sabre.edge.platform.core.ui.threading.UiThreadInvoker;
import com.sabre.edge.platform.optional.notifications.INotificationService;
import com.sabre.edge.platform.optional.notifications.types.Notification;
import com.sabre.edge.platform.optional.notifications.types.Priority;
import com.sabre.edge.platform.optional.notifications.types.SideBarColor;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointCommand;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointDataOperation;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointResponse;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointResponseWrapper;
import com.sabre.tn.redapp.example.workflow.Activator;
import com.sabre.tn.redapp.example.workflow.uiparts.CfServicesHelper;
import com.sabre.tn.redapp.example.workflow.uiparts.OpenThingsHelper;
import com.sabre.tn.redapp.example.workflow.xtpointservices.interfaces.ICustomSvc;

import static com.sabre.stl.pos.srw.nextgen.flow.ext.utils.FlowExtPointCommandUtils.addError;
import static com.sabre.stl.pos.srw.nextgen.flow.ext.utils.FlowExtPointErrorFactory.createMajorError;

public class CustomSvcHandler implements ICustomSvc {
	
	
	String[] names = {"Michal", "John", "Paulo", "Maria", "Bob"};
	String[] surNames = {"Jones", "Woods", "Shingle", "Junior", "Simpson", "Flintstone"};

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
					strTemplate = strTemplate.replace("[travelDate]", "10MAY");
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
				// addError(extPointCommand,createMajorError("error processing order: "));

				break;
			case "test":
				addError(extPointCommand,createMajorError("error processing order"));
				break;
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
			case "copyname":
				try {
					CfServicesHelper.sendHostCommand("-"+svcRQ.get().rqPayload.toUpperCase(), 0, 0);
					CfServicesHelper.refreshTripSummary();

				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				break;
			case "resultButton":
				final INotificationService svc = Activator.getDefault().getServiceReference(INotificationService.class);
				final Notification not = new Notification();
				
				
				
				not.setWindowTitle("ShowCase RedApp");
				not.setPriority(Priority.NORMAL);
				not.setContent("Action button from Results Template was clicked");
				not.setLeftSideBarColor(SideBarColor.GREEN);
				not.setNotificationTime(500);	
				not.setId("nudgeAction");
				
				
			
				
				UiThreadInvoker<Object> invoker = new UiThreadInvoker<Object>() {
					
					@Override
					protected Object invoke() {
						String nId = svc.createNotification(not);
						return nId;
					}
				};
				
				invoker.asyncExec();
				break;
				
			default:
				break;
			}
			
		}else{
			CustomSvcRS rsSvc = new CustomSvcRS();
			CfServicesHelper.refreshTripSummary();
			rsSvc.actionCode = "addOTH";
			rsSvc.rsPayload = "resHost";
			
			
			RSResultSet rsR = new RSResultSet();
			
			Random rGen = new Random();
			
			
			for(int i=0;i<10;i++){
				SampleResult sr = new SampleResult();
				sr.field1 = names[rGen.nextInt(names.length)];
				sr.field2 = surNames[rGen.nextInt(surNames.length)];
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
