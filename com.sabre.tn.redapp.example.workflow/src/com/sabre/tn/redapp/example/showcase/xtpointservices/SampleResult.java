package com.sabre.tn.redapp.example.showcase.xtpointservices;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "sampleResult", namespace = "http://example.redapp.tn.sabre.com/showcase/xtpointservices", propOrder = { "field1",
		"field2" })
public class SampleResult {
	@XmlElement(name = "field1", required = true)
	String field1;

	public String getField1() {
		return field1;
	}

	public void setField1(String field1) {
		this.field1 = field1;
	}

	public String getField2() {
		return field2;
	}

	public void setField2(String field2) {
		this.field2 = field2;
	}
/*
	public double getField3() {
		return field3;
	}

	public void setField3(double field3) {
		this.field3 = field3;
	}

	public boolean isField4() {
		return field4;
	}

	public void setField4(boolean field4) {
		this.field4 = field4;
	}
*/
	@XmlElement(name = "field2", required = true)
	String field2;

	/*
	@XmlElement(name = "field3", required = true)
	double field3;

	@XmlElement(name = "field4", required = true)
	boolean field4;
*/
}
