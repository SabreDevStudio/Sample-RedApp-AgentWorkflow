package com.sabre.tn.redapp.example.showcase.xtpointservices;

import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


@XmlRootElement(name = "RSResultSet", namespace = "http://example.redapp.tn.sabre.com/showcase/xtpointservices")
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "RSResultSet", namespace = "http://example.redapp.tn.sabre.com/showcase/xtpointservices", propOrder = {
		"sampleResult" })
public class RSResultSet {

	@XmlElement(name = "sampleResult", required = true)
	List<SampleResult> sampleResult;

	public List<SampleResult> getSampleResult() {
		if (sampleResult == null) {
			this.sampleResult = new ArrayList<SampleResult>();
		}
		return sampleResult;
	}

}
