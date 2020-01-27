# Agent Workflow, showcase Red App
## Red App for demonstrating purposes only, showcasing SR360 customization capabilities available on the RedApp SDK in an interactive way.

### It would help Account Manages and Sales Rep to :
- Understanding how a RedApp could help customize the travel consultant work flow

	One very common design pattern utilized by Red App develoopers is the ability to intercept and analyze user actions, understand the context (or position on the workflow) and leverage this capabilty to compliment and enrich the SR360 functionality this could be by acting silently on the back-end to enforce business rules or interacting with End user using UI elements available. 
	
	- Actively listening for commands typed and parsing responses as they are shown to the screen.
	- Ability to intercept, modify or cancel execution of formats typed on manual command flow.
	- Using pre-defined workflow extension points to interact with Command helper flows and graphical operations done on SR360
	- Subscribe for contextual Busines Events that are triggered by user actions

	 During event handling, developer has access to runtime services and choice of development languages to implement their use cases

	- Consume Communication Foundation services offered by SR360 runtime (HOST, EMULATOR, SOAP/REST APIs).
	- Using custom workflow extensions to integrate SR360 custom front end application with the Java backend.
	- Connect to back end systems.
	- Programatically invoke UI elements and contribute the SR360 Desktop and its Main UI (NGV). 

	Knowing the context of the user during a workflow and  the most common User Interface elements offered to SDK Developers
	
	- Views , Editors and Notifications
	- Embedding existing websites inside SR360 Desktop
	- SR360 Graphical UI Widgets

### Walk trough over a PNR creation workflow and get insights on how SDK capabilities could be leveraged to fit different use cases.

- Travel Consultant (TC) signs into SR360 and create a session using Sabre Communication gateways, common proccess is to create a "Passenger Name Record" or simply a "PNR" using a workflow know as PRINT thats to add minimal data to reserve a trip for given passenger and itinerary (Phone field, Received from, Itinerary, Passenger Names, Ticketing limit),. Using Red App SDK, developers have a set of APIs to interact with SR360 Runtime Services and the user session on the front end.

#### 1. Add a passenger to PNR => TC uses Red App to query a local database for Travelers, after searching for specific email address he selects a passenger and copy passenger data to the PNR.
	- Select Command Helper flows
	- Push "DB Query" button and submit a query
	- Select a passenger from the query results display, expand the passenger panel allowing access to actions and details.
	- Push Backend Action button, this should display a Notification triggered by the SR3600 runtime services
	- Push Details Copy to PNR button, this will pop a view with Passenger details and Type.
	- Fill-up any additional data and select "Copy to PNR" to add the passnger to the trip.
	 
#### 2. Itinerary, Air shopping => TC uses an customized Air Shopping flow to search and book flights for one passenger , one way, from Dalls (DFW) to New York (NYC), Red App captures aditional parameters about the Traveler Company and apply filter to preferred airlines depending on the Destination.
	- Select Command Helper Flows.
	- Select Air button and Air Shopping Tab.
	- Fill in Air Shopping form with origin as DFW Airport and destination*** at NYC, few days ahead, ONE-WAY... press "Shop Airfare".
	- First custom pop-up appears to capture additional information to be added to the Shopping Request, if you have any specific Account Code or Corporate ID fill it, then press continue.
	- When results are displayed, and destination matches RedApp settings, the Shopping results should be filtered to a specific*** carrier (defaults to DL)

	***those values could be configured on the RedApp settings panel.

#### 3. Itinerary, Air shopping, Decision support => TC uses a customized widget on Air Shopping results display that will , based on the Shopping results payload, support shopping decision process.
	- Expand the Decision Support Bar by clicking on the chevron button to the right side.
	- Click on the widget titled "TILE WIDGET"
	- The different Tabs on the pop-up presents data available for the widget to consume, as well common UI elements that can used to present the data model and interact with the TC (or backend systems). Click Close button after investigating the widget and lets move ahead with Shopping flow.

#### 4. Itinerary, Air shopping, UPSell / Content generation => TC uses a customized wiget on Shopping Results panel that will, based on the Air Segment payload, access/offer custom content to the Trip, which are then registered on the PNR as specific type of Segment.
	- Choose a flight from the results rows
	- Expand its panel and locate the widget titled "TILE WIDGET", click over.
	- The different TAB presented on the pop-up illustrates the data available for the widget to consume, as well commo UI elements that can used to present the data model and interact with the TC (or backend systems).
	- On the Use Cases Tab, select ADD-OTH option, and click on the Action button. You should see a new segment (type OTH) on the Trip Summary panel.
	- On the Use Cases Tab, select openWeb option, and click on the Action button. You should see a new "full screen" Editor panel, showing a external URL Embedded on the SR360 workspace.
	- CLick CANCEL button and lets "Sell" the selected Air Segment. 

#### 5. Itinerary, Air shopping, Book => TC selects and books a flight returned from Air Shopping results.
	- Choose a flight from the results rows, expand its panel to access details, widgets and actions.
	- click on the "Sell & Save Price" button located on the the panel footer.
	- if the flight was successfuly "reserved" you should have a "Price quote" displayed on the view, open the PQ panel for details, widgets and actions related to the selection.

#### 6. Itinerary, Air, Manual Availability => TC issues a Sabre Format to look for flights to return from NYC to DFW. RedApp show additional information about the avalability on a side panel.
	- Select "Manual Command" flows
	- TC issues 1[DDMMM][ORIG APT][DEST APT] format, for example : 105FEBNYCDFW
	- On the Availability results, a RedApp will display an Web Application side by side the SR360 view, which compliments the information and actions presented to the TC, but without "disturbing" its main workflow and the resuts displayed on the screen.  
	- The Web applcation has access the SR360 runtime services which allow full integration with the worskpace (and the PNR in session):
		- Agent Profile
		- Command Payload
		- Response Payload
		- Direct HOST communication
		- Javascript Utils
	- Navigate on the availaility results, check some panels for details, widgests and actions, the lets "Book" an return to home fly.

#### 7. Itinerary, Air, Manual Sell => TC issues a Sabre Format to Select and Book a flight returned by the availability command, the RedApp displays an notification to let user interact and divert to customized workflow to apply Quality control procedures and or file finishing to the PNR.
	- Still on the "Manual Command" flow, Air Availability results display active.
	- TC issues Sell format : 0[LINE#][CLASS][QUANT], for example 01Y1.
	- After the command is issued and returned from processing, the RedApp pops a notification on the SR360 workspace, which alloww TC switch to a Web Application in a "full screen" Editor tab on the SR360 workspace.
	- The Web applcation has access the SR360 runtime services which allow full integration with the worskpace (and the PNR in session):
		- Execute in EMULATOR (add Phone Field, Ticketing Limit elements to the PNR)
		- Command Payload
		- Response Payload
		- Javascript Utils
	- if the Booking was sucessfull, TC has the Sell results displayed, opening the panel allows access to details, widgets and actions.
	
#### 8. Received From, Command Modification => TC issues a partial format which is automatically filled by the backend with data from the Travel Consultant.
	- Select "Manual Command" flows
	- TC issues "Received From" format : 6[TC SIGNATURE], for example 6, the - RedApp will query Agent Profile services on the back-end and fill the Travel consultant name automatically, then continue the format processing flow normally as if the user typed the entire of it.

#### 9. Command Block => TC issues an "END PNR" format, RedApp ensures Quality control logic to the PNR commit proccess, if not compliant the manual command typed by the TC is never sent for processing on the backend.
	- Select "Manual Command" flows
	- TC can issue E or ER to commit a PNR, RedApp ensures that formats that will not redisplay the PNR after execution are in conformance with policies. 

#### 10. Workflow Extensions => TC starts a "END PNR" Workflow, no matter if using Manual Commands or Graphical widgets on the SR360 UI, RedApp ensures Quality control logic to the PRN commit proccess, if not compliant, the Workflow execution is halted and a prompting action displayed to the user.
	- Expand the "Trip Summary" panel, by clicking on the briefcase sit at top right.
	- Try issuing an "End", by expanding the End & Retrieve green button, and then selecting "End PNR".
	- Try issuing an "End & Retrieve", but without going through "QC CHECK" Custom Workflow.


#### 11. Custom Workflows => TC starts a Web Module RedApp from the "Workflows" panel, then use widgets that integrates on the main SR360 UI
	- Expand the "Workflow Initializer" panel, by clicking on the "run/play" button on the right sidebar.
	- Locate and click on the button labeled "QC CHECK"
	- Acknowledge to the policies and click Submit to commit acceptance to the PNR (using REMARKS fields)


### It would help Developers to :

- Have a sandbox environment where he can play with the main pillars under RedApp SDK development and SR360 customization
- Get access to source code and best practices when implementing the most common SDK APIs and Services.
- know how to implement event handlers to capture, in a contextual manner, the interaction from end user with SR360 runtime
	- Assychronous Event listener based on FORMATS (EMU)
    - Command Block and Modification Services
    - Use of Workflow Extension Points on the Front and Back ends
    - Create a custom format (manual command) and it's handler.
- Comsume SR360 runtime services to access communicaton foundation methods
    - Send formats to the HOST
    - Execute a format in EMULATOR
    - Make statefull call to a Sabre SOAP API (SWS)
    - Use of GetPNR API to get typed dataset copy of the current PNR
- Know how to implement Web wrapping (Webkit)
    - Creation of Webkit View, Editor and Popups, display programatically using SDK APIs
    - Usage of Javascript API to consume SR360 Ruuntime Services (AKA Communication Framework)
    - Implement custom javascript handlers that would allow further customizaton on the Javascript->Java bridge.
- Understannd User and cofiguration settings available for the SR360 Workspace
    - Red App First run
    - Agent Profile Services to know the user behind the screen
    - Contribute to RedApp settings panel under system settings
- Understannd the integrations capabilties for the SR3600 Main User Interface (using Web Modules)
    - Tile widgets
    - SRW Forms and Response Templates
    - The Nudge
    - Custom workflow initializer panel
    - Usage of Command flow, Data models and serialization instruction to communicate from the front to the back end and vice versa
-	Contribute to the SR360 Workspace area
    - RedApp toolbar
    - RedApp settings panel
    - Notifications
    - Modal dialogs
    - Editors
    - Views
- 	Using Red App Backend services - Core
	- First Run
	- Logging (troubleshooting)
	- User Preferences
	- Agent profile
	- Internationalization
	- Config.properties

It would help a more general audience to :
-	Know more about SR360 customization capabilities
-	Understand the features exposed in a clean and consistent way, aligned with Marketing and Product Management Teams.
-   To have a fearless interaction with RedApps and help bring new customization ideas for fulfilling different use cases 


## Running RedApp on Eclipse Plugin development

this RedApp project can be imported and used on developer environment to serve as sample code and also as sandbox to know better the main capabilities of the Sabre Red Developer Toolkit (SDK)
In order to do that, any developer could download the Sabre Red Developer Toolkit and from there configure the Eclipse IDE (dev environment) and a Target platform that will "emulate" Sabre Red Workspace Desktop to run on developer machine. Thats the same environmnet that thousands of Travel consultants use worlwide to SHOP, BOOK, PRICE and FULFILL Travel arrangments.

for more information please navigate to Sabre Dev Studio developer portal, register yourself, and follow the Sabre Red 360 Developer Toolkit links to download resource and get more instruction on configurations settings. (https://developer.sabre.com/guides/travel-agency/sdks/sabre-red-360-developer-kit)

# Support

- [Stack Overflow](http://stackoverflow.com/questions/tagged/sabre "Stack Overflow")
- Need to report an issue/improvement? Use the built-in [issues] (https://github.com/SabreDevStudio/Sample-RedApp-AgentWorkflow/issues) section
- [Sabre Dev Studio](https://developer.sabre.com/)

## License

Copyright (c) 2020 Sabre Corp Licensed under the MIT license.

## Disclaimer of Warranty and Limitation of Liability

This software and any compiled programs created using this software are furnished â€œas isâ€� without warranty of any kind, including but not limited to the implied warranties of merchantability and fitness for a particular purpose. No oral or written information or advice given by Sabre, its agents or employees shall create a warranty or in any way increase the scope of this warranty, and you may not rely on any such information or advice.
Sabre does not warrant, guarantee, or make any representations regarding the use, or the results of the use, of this software, compiled programs created using this software, or written materials in terms of correctness, accuracy, reliability, currentness, or otherwise. The entire risk as to the results and performance of this software and any compiled applications created using this software is assumed by you. Neither Sabre nor anyone else who has been involved in the creation, production or delivery of this software shall be liable for any direct, indirect, consequential, or incidental damages (including damages for loss of business profits, business interruption, loss of business information, and the like) arising out of the use of or inability to use such product even if Sabre has been advised of the possibility of such damages.