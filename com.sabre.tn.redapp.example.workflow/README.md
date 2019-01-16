# ShowCase RedApp (formerly know as Agent Workflow RedApp)

## Why / What
Why  

- Present RedApp Developer Kit Capabilities (APIs and Services)
- Show Awarenes and Best Practices about the most common design patterns using RedApp SDK.
- Offer Public RedApp to enable techincal Sales demonstrations and generic use cases


What

- Plugin Project Agent Workflow exposed on GitHub
- README.md File
- Published App on RAC 


## OverView


The ShowCase RedApp has been created to give developers, building systems using RedApp SDK, an overview of the SDK capabilities and integration points between the End User (Travel Agent), Sabre Red Workspace and DevStudio APIs.

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
	

## Running RedApp on Eclipse Plugin development

RedApp can be imported and used on developer environment to serve as sample code and also as sandbox to know better the principal capabilities of the Sabre RedApp SDK
In order to do that, any developer could deonwload the RedApp Developer Toolkit and from there configure the Eclipse IDE (dev environment) and a Traget platform that will "emulate" Sabre Red Workspace Desktop to run on developer machine. Thats the same toll that thousands of Travel consultants use worlwide to SHOP, BOOK, PRICE and FULFILL Travel arrangments.

for more information please navigate to Sabre Dev Studio, register yourself, and follow the TOOLS->Sabre Developer Toolkit link to download resource and get more instruction on configurations settings. (https://developer.sabre.com/tools/Red_App/)

# Support

- [Stack Overflow](http://stackoverflow.com/questions/tagged/sabre "Stack Overflow")
- Need to report an issue/improvement? Use the built-in [issues] (https://github.com/SabreDevStudio/Sample-RedApp-AgentWorkflow/issues) section
- [Sabre Dev Studio](https://developer.sabre.com/)

## License

Copyright (c) 2018 Sabre Corp Licensed under the MIT license.

## Disclaimer of Warranty and Limitation of Liability

This software and any compiled programs created using this software are furnished “as is” without warranty of any kind, including but not limited to the implied warranties of merchantability and fitness for a particular purpose. No oral or written information or advice given by Sabre, its agents or employees shall create a warranty or in any way increase the scope of this warranty, and you may not rely on any such information or advice.
Sabre does not warrant, guarantee, or make any representations regarding the use, or the results of the use, of this software, compiled programs created using this software, or written materials in terms of correctness, accuracy, reliability, currentness, or otherwise. The entire risk as to the results and performance of this software and any compiled applications created using this software is assumed by you. Neither Sabre nor anyone else who has been involved in the creation, production or delivery of this software shall be liable for any direct, indirect, consequential, or incidental damages (including damages for loss of business profits, business interruption, loss of business information, and the like) arising out of the use of or inability to use such product even if Sabre has been advised of the possibility of such damages.