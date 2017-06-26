package com.sabre.tn.redapp.example.workflow.xtpointservices;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

@XmlRootElement(name = "ServiceData", namespace = "http://example.redapp.tn.sabre.com/workflow/xtpointservices")
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ServiceData", namespace = "http://example.redapp.tn.sabre.com/workflow/xtpointservices", propOrder = {"serviceID","requestedData","jsonPayload"})
public class ServiceData {
	protected String serviceID;
	protected String requestedData;
	protected String jsonPayload;
	
	public String getServiceID() {
		return serviceID;
	}
	public void setServiceID(String serviceID) {
		this.serviceID = serviceID;
	}
	public String getRequestedData() {
		return requestedData;
	}
	public void setRequestedData(String requestedData) {
		this.requestedData = requestedData;
	}
	public String getJsonPayload() {
		return jsonPayload;
	}
	public void setJsonPayload(String jsonPayload) {
		this.jsonPayload = jsonPayload;
	}
	
}
