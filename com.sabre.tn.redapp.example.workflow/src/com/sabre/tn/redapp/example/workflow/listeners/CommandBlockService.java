package com.sabre.tn.redapp.example.workflow.listeners;

import java.io.File;

import javax.xml.namespace.NamespaceContext;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathConstants;
import javax.xml.xpath.XPathExpression;
import javax.xml.xpath.XPathFactory;

import org.eclipse.jface.dialogs.Dialog;
import org.eclipse.jface.preference.IPreferenceStore;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.ui.PlatformUI;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;

import com.sabre.edge.cf.common.service.ContextStatusAdvisor;
import com.sabre.edge.cf.emu.data.EmulatorCommand;
import com.sabre.edge.cf.emu.data.requests.EmulatorCommandRequest;
import com.sabre.edge.cf.emu.data.responses.EmulatorCommandResponse;
import com.sabre.edge.cf.model.IRequest;
import com.sabre.edge.cf.model.IService;
import com.sabre.edge.cf.model.IServiceContext;
import com.sabre.edge.cf.model.element.ServiceContext;
import com.sabre.edge.platform.core.ui.threading.UiThreadInvoker;
import com.sabre.tn.redapp.example.workflow.Activator;
import com.sabre.tn.redapp.example.workflow.preferences.PreferenceConstants;
import com.sabre.tn.redapp.example.workflow.uiparts.CfServicesHelper;
import com.sabre.tn.redapp.example.workflow.uiparts.OpenThingsHelper;
import com.sabre.tn.redapp.example.workflow.uiparts.SamplePopupDialog;


public class CommandBlockService implements IService {

	@Override
	public void process(IServiceContext context) {
		
		IPreferenceStore st = Activator.getDefault().getPreferenceStore();
		
		
		boolean shouldBlock=st.getBoolean(PreferenceConstants.P_BLOCK_ER);
		
		
		if(shouldBlock){

			ContextStatusAdvisor contextAdvisor = new ContextStatusAdvisor(context, getClass());
			IRequest rq = context.getRequest();
			
			if(rq instanceof EmulatorCommandRequest){
				EmulatorCommand emuCmd = ((EmulatorCommandRequest) rq).getEmulatorCommand();
				String format = emuCmd.getCommand();
				
				if(format.equalsIgnoreCase("E")){
					
					//trying to End current PNR, check if there's record locator by calling TIR from SWS
					File xmlFile = Activator.getDefault().getDataFile(Activator.PLUGIN_ID, "/resources/TravelItineraryReadRQ.xml");
					if(xmlFile.exists()){
						try {
							
							//Loads the XML payload from App resources
						    DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
						    DocumentBuilder dBuilder;
							dBuilder = dbFactory.newDocumentBuilder();
							Document docRQ = dBuilder.parse(xmlFile);
							
							Document docRs = CfServicesHelper.callSabreWebServices("TravelItineraryReadRQ", docRQ);
							
							
							docRs.getDocumentElement().normalize();
							
							//Parse the XML returned using XPath to locate record locator
							XPath xPath = XPathFactory.newInstance().newXPath();
							
							XPathExpression expXP = xPath.compile("//ItineraryRef");
							NodeList nodes = (NodeList)expXP.evaluate(docRs,XPathConstants.NODESET);
							//xPath.setNamespaceContext(new NamespaceContext docRs.getNamespaceURI());
							
							if(nodes.getLength()>0){
								Element itRef = (Element)nodes.item(0);
								if(itRef.hasAttribute("ID") && !itRef.getAttribute("ID").isEmpty()){
									//itinerary has record locator (let it continue)
									String recLoc = itRef.getAttribute("ID");
									Activator.getDefault().getLoggerService().info("PNR Ended Accordingly : " + recLoc + ".");
									
								}else{
									//no record locator, only allows to ER (end and redisplay)

									//show an popup indicating that the command is about to be blocked, let the user decide
									int resDialog = OpenThingsHelper.showDialog("The command you typed is about to be blocked, please confirm your operation by clicking on continue button.");
									
									
									if(resDialog==Dialog.OK){
										//sending an empty response back will prevent the command to reach the host
										EmulatorCommandResponse cmdResponse = new EmulatorCommandResponse();
										((ServiceContext) context).setResponse(cmdResponse);
									}									
									
								}
							}
							
							
							
							
						} catch (Exception e) {
							//log the exception using log services
							Activator.getDefault().getLoggerService().warning(e.getMessage());
							
						}
					    
					    		
						
						
					}

					
					
					
				}
				
			}
			


		}
		

	}

}
