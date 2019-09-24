package com.sabre.tn.redapp.example.workflow.xtpointservices;

import java.io.File;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Random;



/*
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
*/

import com.sabre.edge.platform.core.ui.threading.UiThreadInvoker;
import com.sabre.edge.platform.optional.notifications.INotificationService;
import com.sabre.edge.platform.optional.notifications.types.Notification;
import com.sabre.edge.platform.optional.notifications.types.Priority;
import com.sabre.edge.platform.optional.notifications.types.SideBarColor;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointButtonType;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointCommand;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointDataOperation;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointError;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointHint;
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
					String name = svcRQ.get().rqPayload.split("#")[0].toUpperCase();
					String profID = svcRQ.get().rqPayload.split("#")[1];
					CfServicesHelper.sendHostCommand("-"+name, 0, 0);
					Activator.getDefault().getTravelProfile().setProfileID(profID);
					CfServicesHelper.refreshTripSummary();

				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
					FlowExtPointError error = createMajorError("error copying name", e.getMessage(), null);
					addError(extPointCommand, error);
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
			case "showHint":
				
				FlowExtPointError error = createMajorError("HINT TITLE", "HINT MESSAGE", null);
				
				
				error.getHints().add(new FlowExtPointHint()
				.withLabel("hint btn label")
				.withActionCode("hintACTCODE")
				.withButtonType(FlowExtPointButtonType.PRIMARY));
				addError(extPointCommand, error);


				
				break;
				
			case "dbQuery":
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
				
				break;
			case "getFlows":
				
				String profCode = Activator.getDefault().getTravelProfile().getProfileID();
				if(profCode.isEmpty()){
					profCode = "profile1";
				}
				

				String hostRespgf="";
				try {
					hostRespgf = CfServicesHelper.sendHostCommand("*A", 0, extPointCommand.getLockId()!=null?extPointCommand.getLockId():-1);
				} catch (Exception e1) {
					// TODO Auto-generated catch block
					e1.printStackTrace();
				}
				
			
				CustomSvcRS rs = new CustomSvcRS();
				rs.setActionCode("getFlows");
				rs.setRsPayload(
						"[{\"id\":\"1\",\"label\":\"ack no hotel policy\",\"description\":\"no hotel policy description\",\"command\":\"5.MARKER-1\",\"checked\":\""
						+(hostRespgf.contains("MARKER-1")?"checked":"") 
						+"\",\"disabled\":\""
						+(hostRespgf.contains("MARKER-1")?"disabled":"") 
						+"\"},{\"id\":\"2\",\"label\":\"ack no car policy\",\"description\":\"no car policy descrition\",\"command\":\"5.MARKER-2\",\"checked\":\""
						+ (hostRespgf.contains("MARKER-2")?"checked":"") 
						+"\",\"disabled\":\""
						+ (hostRespgf.contains("MARKER-2")?"disabled":"") +"\"}]");
				
				FlowExtPointResponse dataFlow = new FlowExtPointResponse();

				dataFlow.setStructure(rs);
				
				
				FlowExtPointResponseWrapper rswpFlows = new FlowExtPointResponseWrapper();
				rswpFlows.setResponse(dataFlow);
				rswpFlows.setOperation(FlowExtPointDataOperation.ADD);
				
				//extPointCommand.getResponseOutput().add(data);
				extPointCommand.getResponses().add(rswpFlows);
				
			
				break;
			case "qcCheck":
				
				boolean checked = false;
				try {
					String hostResp = CfServicesHelper.sendHostCommand("*A", 0, -1);
					
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
					
					//extPointCommand.getResponseOutput().add(data);
					extPointCommand.getResponses().add(rswpFlows1);

					
				}
				
				
				break;
			case "fileFinish":
				CfServicesHelper.executeInEmu("ER");
				break;
			case "doTask":
				String idTask = svcRQ.get().getRqPayload();
				CfServicesHelper.executeInEmu("5.MARKER-".concat(idTask));
				break;
			case "raiseEvent":
				CfServicesHelper.PostEvent();
			default:
				break;
			}
			
		}else{
			addError(extPointCommand,createMajorError("No orders were given for Custom service request, i dont know what to do..."));


		}
		
		
		return extPointCommand;
	}
	
    private <T> Optional <T> fetchRequest(FlowExtPointCommand extPointCommand, Class <T> type)
    {
        return extPointCommand.getRequests().stream().map(wrapper -> wrapper.getRequest())
            .filter(type::isInstance).map(type::cast).findFirst();
    }
    
	/*
	public String getJSONValue(String key){
		
		JSONParser jp = new JSONParser();
		
		File xmlFile = Activator.getDefault().getDataFile(Activator.PLUGIN_ID, "/resources/configs.json");

		try(FileReader fr = new FileReader(xmlFile)){
			JSONObject obj = (JSONObject)jp.parse(fr);
			
			JSONObject objRet = null;
			JSONArray arrRet = null;
			String strRet = null;
			
			if(obj.containsKey(key)){
				try {
					arrRet = (JSONArray) obj.get(key);
					strRet = arrRet.toJSONString();
					
				} catch (Exception e) {
					try {
						objRet =  (JSONObject) obj.get(key);
						strRet = objRet.toJSONString();
					} catch (Exception e1) {
						e1.printStackTrace();
					}

				}
			
			}

			
			
			//Activator.getDefault().getLoggerService().info(arrRet.toJSONString());
			//Activator.getDefault().getLoggerService().info(objRet.toJSONString());

			return strRet;

        } catch (Exception e) {
			e.printStackTrace();
		}
		
		return null;
	}
	*/

}
