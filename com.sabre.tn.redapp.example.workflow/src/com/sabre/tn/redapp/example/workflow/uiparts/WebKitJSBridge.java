package com.sabre.tn.redapp.example.workflow.uiparts;

public class WebKitJSBridge {
	
	public WebKitJSBridge() {
		super();
	}

	public String welcomeB (Object msg){
		return "hello " + msg.toString(); 
	}
	
	public String welcome (String msg){
		return "hello " + msg; 
	}

	
	public String welcomeA (){
		return "hello null" ; 
	}
	
	public Object getAvAssistData(){
		String greetings="";
		
		greetings = greetings.concat("Hello ");
		greetings = greetings.concat(CoreServicesHelper.getAgentProfile().getFirstName()+" "+CoreServicesHelper.getAgentProfile().getLastName() + " !");
		
		return greetings;
	}

}
