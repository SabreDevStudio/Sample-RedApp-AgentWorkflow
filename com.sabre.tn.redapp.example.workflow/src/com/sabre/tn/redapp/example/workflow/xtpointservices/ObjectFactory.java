package com.sabre.tn.redapp.example.workflow.xtpointservices;

import javax.xml.bind.annotation.XmlRegistry;

@XmlRegistry
public class ObjectFactory {
	
	public ObjectFactory()
	{
	
	}
	

	
	public Airline createAirline()
	{
		return new Airline();
	}

	public ManualExtensionPointEventData createManualExtensionPointEventData(){
		return new ManualExtensionPointEventData();
	}
	
	public CustomSvcRQ createCustomSvcRQ(){
		return new CustomSvcRQ();
	}

	public CustomSvcRS createCustomSvcRS(){
		return new CustomSvcRS();
	}
	
	public RSResultSet createRSResultSet(){
		return new RSResultSet();
		
	}
	
	public SampleResult createSampleResult(){
		return new SampleResult();
	}
}
