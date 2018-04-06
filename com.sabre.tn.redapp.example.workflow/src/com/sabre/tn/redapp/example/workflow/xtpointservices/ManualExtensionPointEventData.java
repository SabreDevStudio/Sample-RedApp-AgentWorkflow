package com.sabre.tn.redapp.example.workflow.xtpointservices;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ManualExtensionPointEventData",
                namespace = "http://example.redapp.tn.sabre.com/workflow/xtpointservices",
                propOrder = {"eventId","message","dialogType","dialogResult"})
@XmlRootElement(name = "ManualExtensionPointEventData",
                namespace = "http://example.redapp.tn.sabre.com/workflow/xtpointservices")
public class ManualExtensionPointEventData implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String eventId;
	private String message;
	private String dialogType;
	private String dialogResult;
	
	public String getEventId() {
		return eventId;
	}
	public void setEventId(String eventId) {
		this.eventId = eventId;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getDialogType() {
		return dialogType;
	}
	public void setDialogType(String dialogType) {
		this.dialogType = dialogType;
	}
	public String getDialogResult() {
		return dialogResult;
	}
	public void setDialogResult(String dialogResult) {
		this.dialogResult = dialogResult;
	}

}
