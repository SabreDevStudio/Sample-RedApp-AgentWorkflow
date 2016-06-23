# AgentWorkFlow

## Why / What
Why  

- Present RedApp sample code to enrich DevStudio content.
- Show Awarenes and Best Practices about the most common design patterns using RedApp SDK.
- ?Offer Public SandBox App where the End User can play with UI Components and Runtime COMM Services.


What

- Plugin Project Agent Workflow exposed on GitHub
- README.md File
- Published App on RAC 


## OverView


The Agent WorkFlow RedApp has been created to give developers, building systems using RedApp SDK, an overview of the SDK capabilities and integration points between the End User (Travel Agent), Sabre Red Workspace and DevStudio APIs.

The Defined Workflow for such app, follows the basic procedures done by Agents on daily basis, and it would represent the most common pattern used on RedApp development: Service Listening.


Flow

Basic workflow of creating an travel itinerary, consisting search and booking of a flight for one passenger, also completing the passenger name record (PNR) according to the system. 


- Asynchronous Event listener

	- About Event Handling and the asynchronous nature of the flow, that is, side by side the conversation between the agent and host.



	- Flight availability assistant - Shows UI sharing the emulator, there's where RedApps "compliment", or would say enhance, the content provided on the "blue screen"

		Parse search details from command line
		Parse flights returned from HOST response
		Call Service to get destination content (provider to be know, must be free because source code constrains)
		Call Service to get segment details
		
		UI
		View


	- After sell POS - Shows FULL Screen UI, letting the focus on a single area of interest, but not necessarily modal
		
		Validate and enforce agency sales policy
		Use EMULATOR commands to automate the process of CQ control

		UI
		Notification / Editor

Synchronous Services

	- About synch events and how they affect the agent session (or keyboard), special ability to enforce constraints imposed by the agency, since the app has prevalence over the flow, and can interrupt or customize it "at will".

- Command modification SVCs	
	- Quick sign Utility
		Call AgentProfile Services to get current user First and Last names.
		Modify the received from command (6) appending the agent name to it.
		
		UI
		Pop-up

- Command block SVCs
	- End command Blocker
		Call SWS to check if the itinerary already has record locator
		if PNR don't have record locator it should only allow end and redisplay
		case contrary it should allow it.
	
		UI
		Pop-up

- Custom command SVC
	- CUSTOMCMD format implementation to allow the user to type this command and "do something" in that case we will be opening the App about screen.


Red App Backend services - Core

	- First Run
	- Logging (troubleshooting)
	- User Preferences
	- Agent profile
	- Internationalization
	- Config.properties
	

## RedApp as Eclipse Plugin development

RedApp can be seen as an Sabre Branded Eclipse plug-in Project, running under Sabre Red Workspace Runtime environment.
Thus, in order to be able to develop a RedApp, a programmer must prepare itself by installing  an Eclipse IDE and Configure a Target Platform for the Red Workspace Runtime. [visit DevStudio](https://developer.sabre.com) 


- RedApp structure
- RedApp.xml
- Requirements and Dependencies


Under the RedApp scope it will differ from an standard Eclipse plug-in by the presence of a redapp.xml file, which contains the unique RedAppID and also all the Authorizations and Service subscriptions, required by the the App proposition.

```

	<RedApp id="com.sabre.tn.redapp.example.agentflow" >
		<Authorization name="com.sabre.edge.cf.sws.SWS" threshold="3" metric="tps"/>
		<Authorization name="com.sabre.edge.cf.emu.ExecuteInEmulator" threshold="1" />
	</RedApp>
	
	<Service name="EMU_COMMAND" version="1.0" handler_name="com.sabre.tn.redapp.example.agentflow.ServiceListeningHandler" action_code = "" />
	
```

On top of all Java OSGI Framework, the RedApp SDK offers u great set of tools, as well Requirements and Standards that allow the Developer to integrate his App seamlessly with Sabre Red Workspace, 

