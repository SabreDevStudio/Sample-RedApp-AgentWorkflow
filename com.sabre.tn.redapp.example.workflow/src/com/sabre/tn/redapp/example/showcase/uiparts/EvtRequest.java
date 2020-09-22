package com.sabre.tn.redapp.example.showcase.uiparts;

import com.sabre.edge.cf.model.IRequest;

public class EvtRequest implements IRequest {

	private String evtInfo = null;
	
	public EvtRequest(String evtInfo){
		this.evtInfo = evtInfo;
	}
	
	
	
	public String getEvtInfo() {
		return evtInfo;
	}



	public void setEvtInfo(String evtInfo) {
		this.evtInfo = evtInfo;
	}



	@Override
	public IRequest clone() {
		// TODO Auto-generated method stub
		
		return new EvtRequest(evtInfo);
	}
	
	

}
