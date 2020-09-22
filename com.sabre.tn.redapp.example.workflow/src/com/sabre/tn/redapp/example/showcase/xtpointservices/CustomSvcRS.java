package com.sabre.tn.redapp.example.showcase.xtpointservices;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "CustomSvcRS",
                namespace = "http://example.redapp.tn.sabre.com/showcase/xtpointservices",
                propOrder = {"actionCode","rsPayload"})
@XmlRootElement(name = "CustomSvcRS",
                namespace = "http://example.redapp.tn.sabre.com/showcase/xtpointservices")
public class CustomSvcRS implements Serializable
{

	private static final long serialVersionUID = 1L;

    @XmlElement(namespace = "http://example.redapp.tn.sabre.com/showcase/xtpointservices",
                    required = true)
    protected String actionCode;

    @XmlElement(namespace = "http://example.redapp.tn.sabre.com/showcase/xtpointservices",
            required = true)
    protected String rsPayload;
    
    
    public String getActionCode() {
		return actionCode;
	}

	public void setActionCode(String actionCode) {
		this.actionCode = actionCode;
	}

	public String getRsPayload() {
		return rsPayload;
	}

	public void setRsPayload(String rsPayload) {
		this.rsPayload = rsPayload;
	}

}
