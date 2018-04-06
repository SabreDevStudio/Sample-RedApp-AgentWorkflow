package com.sabre.tn.redapp.example.workflow.uiparts;

import java.io.StringReader;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.w3c.dom.Document;
import org.xml.sax.InputSource;

import com.sabre.edge.cf.core.registry.service.ClientResponse;
import com.sabre.edge.cf.core.registry.service.ISRWCommunication;
import com.sabre.edge.cf.emu.data.EmulatorCommand;
import com.sabre.edge.cf.emu.data.requests.EmulatorCommandRequest;
import com.sabre.edge.cf.emu.external.ExecuteInEmuServiceClient;
import com.sabre.edge.cf.emu.external.ShowInEmuServiceClient;
import com.sabre.edge.cf.host.data.HostCommand;
import com.sabre.edge.cf.host.data.HostResponse;
import com.sabre.edge.cf.host.service.external.HostServiceClient;
import com.sabre.edge.cf.model.IError;
import com.sabre.edge.cf.sws.data.SWSRequest;
import com.sabre.edge.cf.sws.data.SWSResponse;
import com.sabre.edge.cf.sws.external.SWSServiceClient;
import com.sabre.edge.dynamo.cf.tripsummary.client.TripSummaryServiceClient;
import com.sabre.edge.dynamo.cf.tripsummary.data.TripSummaryRequest;
import com.sabre.edge.dynamo.cf.tripsummary.data.TripSummaryResponse;
import com.sabre.tn.redapp.example.workflow.Activator;

public class CfServicesHelper {
	
	public static Document callSabreWebServices(String actionId, Document payload ) throws Exception{
		
		Document docRet=null;
		
		ISRWCommunication comm = Activator.getDefault().getServiceReference(ISRWCommunication.class);
		
		SWSRequest rq = new SWSRequest();
		rq.setAction(actionId);
		
		
		
		rq.setPayload(payload);
		
		SWSServiceClient cli = new SWSServiceClient(comm);
		ClientResponse<SWSResponse> rsp = cli.send(rq);
		
		
		if( rsp.isSuccess()){
			SWSResponse responsePl = rsp.getPayload();

//			Get the response payload as Dom document			
//			docRet = responsePl.getResponse();

//			String resStr = responsePl.getResponseText();
//			Activator.getDefault().getLoggerService().info(resStr);
			
			//Just "overriding" the default response Document so i can remove namespaces
			DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
			factory.setNamespaceAware(false);
			
			DocumentBuilder db;

			db = factory.newDocumentBuilder();
			
			InputSource is = new InputSource();
			is.setCharacterStream(new StringReader(responsePl.getResponseText()));
			
			docRet = db.parse(is);
			
			
			
			
		}else{
			String strResponse = "";
			strResponse = "Error calling WebServices :\n";
			for(IError err : rsp.getErrors()){
				strResponse += err.getCode() + "-" + err.getDescription() + "\n";
			}

			//Logs the exception
			Activator.getDefault().getLoggerService().warning(strResponse);
			throw new Exception(strResponse);
		}

		return docRet;
		
	}
	
	
	
	public static Document callSabreWebServices(String actionId, Document payload, long lockId ) throws Exception{
		
		Document docRet=null;
		
		ISRWCommunication comm = Activator.getDefault().getServiceReference(ISRWCommunication.class);
		
		SWSRequest rq = new SWSRequest(lockId);
		rq.setAction(actionId);
		
		
		
		rq.setPayload(payload);
		
		SWSServiceClient cli = new SWSServiceClient(comm);
		ClientResponse<SWSResponse> rsp = cli.send(rq);
		
		
		if( rsp.isSuccess()){
			SWSResponse responsePl = rsp.getPayload();

//			Get the response payload as Dom document			
//			docRet = responsePl.getResponse();

			String resStr = responsePl.getResponseText();
			Activator.getDefault().getLoggerService().info(resStr);
			
			//Just "overriding" the default response Document so i can remove namespaces
			DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
			factory.setNamespaceAware(false);
			
			DocumentBuilder db;

			db = factory.newDocumentBuilder();
			
			InputSource is = new InputSource();
			is.setCharacterStream(new StringReader(responsePl.getResponseText()));
			
			docRet = db.parse(is);
			
			
			
			
		}else{
			String strResponse = "";
			strResponse = "Error calling WebServices :\n";
			for(IError err : rsp.getErrors()){
				strResponse += err.getCode() + "-" + err.getDescription() + "\n";
			}

			//Logs the exception
			Activator.getDefault().getLoggerService().warning(strResponse);
			throw new Exception(strResponse);
		}

		return docRet;
		
	}
	public static void executeInEmu(String cmdToExecute ){
		
		ISRWCommunication comm = Activator.getDefault().getServiceReference(ISRWCommunication.class);
		
		
		EmulatorCommand cmd = new EmulatorCommand(cmdToExecute);
		EmulatorCommandRequest rq = new EmulatorCommandRequest(cmd);
		ExecuteInEmuServiceClient execEmu = new ExecuteInEmuServiceClient(comm);
		execEmu.send(rq);
		
	}
	
	public static void showInEmu(String cmdToExecute){
		
		ISRWCommunication comm = Activator.getDefault().getServiceReference(ISRWCommunication.class);
		
		
		EmulatorCommand cmd = new EmulatorCommand(cmdToExecute);
		cmd.setIsCommand(true);
		cmd.setShowCommand(true);
		cmd.setShowResponse(false);
		EmulatorCommandRequest rq = new EmulatorCommandRequest(cmd);
		
		
		ShowInEmuServiceClient showInEmu = new ShowInEmuServiceClient(comm);
		
		showInEmu.send(rq);	
		
	}

	public static String sendHostCommand(String cmd, long sleepBefore, long lockId) throws Exception{
		String strRet = null;
		
		if(sleepBefore>0){
			try {
				Thread.sleep(sleepBefore);
			} catch (InterruptedException e) {
				Thread.currentThread().interrupt();
			}
		}
		
		ISRWCommunication com = Activator.getDefault().getServiceReference(ISRWCommunication.class);
		HostCommand hostCmd;
		
		if(lockId>0){
			hostCmd = new HostCommand(lockId, cmd);
		}else{
			hostCmd = new HostCommand(cmd);
		}
		
		ClientResponse<HostResponse> rsp = new HostServiceClient(com).send(hostCmd);
		if(rsp.isSuccess()){
			String resHost = rsp.getPayload().getText();
			strRet = resHost;
		}else{
			String errorRet = "";
			for(IError er : rsp.getErrors()){
				errorRet += er.getDescription();
			}
			throw new Exception(errorRet);
		}
		return strRet;
	}
	
	public static boolean refreshTripSummary(){
		boolean retVal = false;
		ISRWCommunication comm = Activator.getDefault().getServiceReference(ISRWCommunication.class);
		ClientResponse<TripSummaryResponse> rsp = new TripSummaryServiceClient(comm).send(new TripSummaryRequest());
		if(rsp.isSuccess()){
			retVal = true;
		}else{
			retVal = false;
			Activator.getDefault().getLoggerService().info("error refreshing trip summary");
		}
		return retVal;
	}	

}
