package com.sabre.tn.redapp.example.workflow.listeners;

import java.io.File;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathConstants;
import javax.xml.xpath.XPathExpression;
import javax.xml.xpath.XPathFactory;


import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;


import com.sabre.tn.redapp.example.workflow.Activator;
import com.sabre.tn.redapp.example.workflow.uiparts.CfServicesHelper;


public class PnrChecks {
	
	public static boolean hasRecLoc() {
		boolean retVal = false;
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
						//itinerary has record locator
						retVal = true;
					}else{
						//no record locator
						retVal = false;	
						
					}
				}
				
				
				
				
			} catch (Exception e) {
				//log the exception using log services
				Activator.getDefault().getLoggerService().warning(e.getMessage());
				
			}
		    
		    		
			
			
		}
		return retVal;

	}

	
	public static boolean hasRecLoc(long lockId) {
		boolean retVal = false;
		File xmlFile = Activator.getDefault().getDataFile(Activator.PLUGIN_ID, "/resources/TravelItineraryReadRQ.xml");
		if(xmlFile.exists()){
			try {
				
				//Loads the XML payload from App resources
			    DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
			    DocumentBuilder dBuilder;
				dBuilder = dbFactory.newDocumentBuilder();
				Document docRQ = dBuilder.parse(xmlFile);
				
				
				Document docRs = CfServicesHelper.callSabreWebServices("TravelItineraryReadRQ", docRQ, lockId);
				
				
				docRs.getDocumentElement().normalize();
				
				//Parse the XML returned using XPath to locate record locator
				XPath xPath = XPathFactory.newInstance().newXPath();
				
				XPathExpression expXP = xPath.compile("//ItineraryRef");
				NodeList nodes = (NodeList)expXP.evaluate(docRs,XPathConstants.NODESET);
				//xPath.setNamespaceContext(new NamespaceContext docRs.getNamespaceURI());
				
				if(nodes.getLength()>0){
					Element itRef = (Element)nodes.item(0);
					if(itRef.hasAttribute("ID") && !itRef.getAttribute("ID").isEmpty()){
						//itinerary has record locator
						retVal = true;
					}else{
						//no record locator
						retVal = false;	
						
					}
				}
				
				
				
				
			} catch (Exception e) {
				//log the exception using log services
				Activator.getDefault().getLoggerService().warning(e.getMessage());
				
			}
		    
		    		
			
			
		}
		return retVal;

	}

}
