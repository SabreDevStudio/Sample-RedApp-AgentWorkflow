package com.sabre.tn.redapp.example.workflow.xtpointservices;

import javax.xml.bind.annotation.XmlRegistry;

@XmlRegistry
public class ObjectFactory {
	
	public ObjectFactory()
	{
	
	}
	
	public ServiceData createServiceData(){
		return new ServiceData();
	}

}
