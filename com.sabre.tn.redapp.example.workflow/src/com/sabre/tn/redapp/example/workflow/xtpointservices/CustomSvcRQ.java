package com.sabre.tn.redapp.example.workflow.xtpointservices;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "CustomSvcRQ",
                namespace = "http://example.redapp.tn.sabre.com/workflow/xtpointservices",
                propOrder = {"actionCode","rqPayload"})
@XmlRootElement(name = "CustomSvcRQ",
                namespace = "http://example.redapp.tn.sabre.com/workflow/xtpointservices")
public class CustomSvcRQ implements Serializable
{
    public String getActionCode() {
		return actionCode;
	}

	public void setActionCode(String actionCode) {
		this.actionCode = actionCode;
	}

	public String getRqPayload() {
		return rqPayload;
	}

	public void setRqPayload(String rqPayload) {
		this.rqPayload = rqPayload;
	}

	private static final long serialVersionUID = 1L;

    @XmlElement(namespace = "http://example.redapp.tn.sabre.com/workflow/xtpointservices",
                    required = true)
    protected String actionCode;

    @XmlElement(namespace = "http://example.redapp.tn.sabre.com/workflow/xtpointservices",
            required = true)
    protected String rqPayload;
}
