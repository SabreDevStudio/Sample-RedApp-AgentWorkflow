# Agent WorkFlow

## Why / What
Why  

- Present RedApp sample code to enrich DevStudio content.
- Show Awarenes and Best Practices about the most common design patterns using RedApp SDK.
- Offer Public SandBox App where the End User can play with UI Components and Runtime COMM Services.


What

- Plugin Project Agent Workflow exposed on GitHub
- README.md File
- Published App on RAC 


## OverView

The Agent WorkFlow RedApp has been created to give developers, building systems using RedApp SDK, an overview of the SDK capabilities and integration points between the End User (Travel Agent), Sabre Red Workspace and DevStudio APIs.

The Defined Workflow for such app, follows the basic procedures done by Agents on daily basis, and it would represent the most common pattern used on RedApp development: Service Listening.

So, given an specific Emulator Command typed on the screen, the app can be configured to show an Editor or a View which, when opened, will consume DevStudio API to read and present the current itinerary the user is working with.


## RedApp as Plugin development

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

`show excerpt on dependencies and a brief text on each package`
`possible expose main namespaces, as tip, for the developer be situated on the package names`

```

Require-Bundle: org.eclipse.ui,
 org.eclipse.core.runtime,
 org.eclipse.albireo.core,
 com.sabre.edge.platform.core.common,
 com.sabre.edge.platform.core.editor,
 com.sabre.edge.platform.core.ui,
 com.sabre.edge.redapp.contactdetails,
 com.sabre.edge.cf.common,
 com.sabre.edge.cf.emu,
 com.sabre.edge.cf.core,
 com.sabre.edge.cf.sws,
 com.sabre.edge.platform.optional.notifications,
 org.eclipse.jface,
 com.sabre.edge.redapp.pluginresources,
 com.sabre.edge.platform.optional.firstrun,
 com.sabre.edge.platform.optional.browser


```



## Activator Class
That's the class which controls the life cycle of your main plugin (RedApp), so it's (Singleton) instance is available from the startup to shutdown, has the special feature of providing access to the SRW Runtime Communications, amongst other useful Services.

```

	public class Activator extends AbstractEdgeBasePlugin {
	
		// The shared instance
		private static Activator plugin;
	
		public void start(BundleContext context) throws Exception {
			super.start(context);
			plugin = this;
		}
	
		public void stop(BundleContext context) throws Exception {
		}
	
		/**
		 * Returns the shared instance
		 */
		public static Activator getDefault() {
			return plugin;
		}
	
	}

```


## Extensions

The Extensions could be seen as the plugin configuration settings, they are registered on the plugin.xml file, and perform from simple actions like display a menu item on the Workspace, or even have a file copied to runtime directory during App install. 

 
### First Run

The first run extension is used to let the user know that the App is installed and it needs further configuration for adequate usage, the API will control and ensure that the call to defined method will only occur once, when the App is run for the first time on the workspace.

`
   <extension point="com.sabre.edge.platform.optional.firstrun">
	  <client
	  	class="com.sabre.tn.redapp.example.workflow.listeners.RedAppFirstRunHandler"
	    versionId="1">
	  </client>
   </extension>
   
` 

### Plugin Resources (Files)

The plugin resource extension is used to copy certain files, from the App bundle, to the working (at runtime) directory on the Agent workspace, on that case, we're storing an local HTML file to be rendered by the browser component, and the path for the file could be gathered by the RedApp at runtime by calling the `Activator.getDefault().getDataFile() or .getDataDirectory()` methods.

### Preference Pages

All RedApps share a common configuration settings "page" under the SRW Configuration settings, so the agent knows where to reach when setting up App details, the SDK provides the required extensions and base classes in order to present the UI to the user, and the developer has additional Preference services to store and recover such settings, as well react when the user clicks Ok, cancel or apply on the widget.

```
   <extension point="org.eclipse.ui.preferencePages">
      <page category="com.sabre.edge.cf.core.preferences.RedAppsSettings" class="com.sabre.tn.redapp.example.workflow.preferences.AppPreferencePage" id="com.sabre.tn.redapp.example.workflow.preferences.AppPreferencePage" name="Agent Workflow Preferences">
      </page>
   </extension>
   <extension point="org.eclipse.core.runtime.preferences">
      <initializer class="com.sabre.tn.redapp.example.workflow.preferences.PreferenceInitializer">
      </initializer>
 	</extension>



 ```
 

## UI Widgets / Containers

The RedApp SDK provides many Workspace "containers" on where a RedApp could present it's User Interface, usually the choice of usage is dependent on the Agent workflow involved, as when the app needs full attention, blocking any other activity, or as an simple "un-obtrusive" notification, which then dismiss automatically just to warn the user about a message arrival... 
For this particular example RedApp, we left the user configure which command bring which kind of "container", so he can play and "feel" the interaction by himself, as well to illustrate for the developer the implementation of each one :  

*most of the UI containers should require additional "binding" with runtime extensions, so, usually, your "containers" will have one or more class files and related extensions nodes on plugin.xml 
```
   <extension point="org.eclipse.ui.editors">
   <editor 
   		class="com.sabre.tn.redapp.example.workflow.editor.SampleEditorEditor" 
   		icon="images/editor_icon.png" 
   		id="com.sabre.tn.redapp.example.workflow.SampleEditorEditor" 
   		name="SampleEditor" 
   		default="false"/>
   </extension>
   
   <extension point="com.sabre.edge.platform.core.editor.editorApp">
   <editorApp 
   		class="com.sabre.tn.redapp.example.workflow.editor.SampleEditorEditor" 
   		editorId="com.sabre.tn.redapp.example.workflow.SampleEditorEditor" 
   		inputClass="com.sabre.tn.redapp.example.workflow.editor.SampleEditorEditorInput" 
   		name="SampleEditor" 
   		toolTipText="Sample Editor Container"/>
   </extension>
   
   <extension point="org.eclipse.ui.views">
      <view allowMultiple="true" 
      category="com.sabre.edge.app.ui.category" 
      class="com.sabre.tn.redapp.example.workflow.views.SampleView" 
      icon="images/redapp_view_icon.png" 
      id="com.sabre.tn.redapp.example.workflow.redapp.view"
      name="SampleView"/>
   </extension>



```


### Editor
This container run on it's own "Tab" and should occupy all available workable area, it's mostly used when there's lot of content to show to the agent, but can "block" the shared view of the Emulator/Graphical View Screen.

```

//Typical Editor Class
public class SampleEditorEditor extends AbstractAppEditor {
	
	private String content="";
	private IWidgetAction defaultAction=null;
	
	private Group compMain;

	public SampleEditorEditor() {
		super();
	}

	public void createPartControl(Composite parent) {
	}
}


```


### View
This container can be positioned on the "borders" of the available workarea, it can be constrained to top, bottom, left or right sides, and can share the workarea with the emulator screen on even another Apps. It's commonly used for utility apps, that compliment the agent workflow and resides side by side the main work focus (the emulator screen).

```
public class SampleView extends ViewPart {

	private String content="";
	private IWidgetAction defaultAction=null;
	Group grMain;
	public SampleView() {		
	}

	@Override
	public void createPartControl(Composite parent) {
	}
}

```

### Web RedApp Containers (View And Editor)
The RedApp SDK provides Browser Components to "Wrap" existing Web Applications and bring they inside the Sabre Red Workspace As An RedApp, also, for the Default implementations, the SDK has control over the displayed web page, allowing a cross communication with the "java side" allowing  Web Page to access and consume to SRW Runtime features using Javascript.

 

### Menus
The RedApp SDK share two common areas where u can have links to your application, the sidebar menu and the categorized toolbar at the top, usually the implementation of menu items only uses extensions, and there's no "programatically" way of interaction with the menus.

```
   <extension point="org.eclipse.ui.commands">
	   <command 
	   		id="com.sabre.tn.redapp.example.workflow.redapp.view.command" 
	   		name="Open RedApp View">
       <commandParameter 
       		id="viewId" 
       		name="viewId"/>
      </command>
   </extension>

   <extension point="org.eclipse.ui.menus">

   <menuContribution locationURI="toolbar:com.sabre.edge.toolbar.sidebar">
         <command 
         	commandId="com.sabre.tn.redapp.example.workflow.redapp.view.command" 
         	icon="images/redapp_view_icon.png" 
         	label="Open Sample View" 
         	style="push" 
         	tooltip="Sample ViewPort Container">
            <parameter 
            	name="viewId" 
            	value="com.sabre.tn.redapp.example.workflow.redapp.view"/>
         </command>
      </menuContribution>

   </extension>

```

`toolbar:com.sabre.edge.toolbar.sidebar`
`menu:com.sabre.edge.toolbar.launcher.air`


### Status Line
### Popup
This container is the most "obtrusive" one, that is, is prevents the user to interact with anything else on the workspace until the popup is dismissed. Note that it only blocks user interaction, but not processes running on the background or even the current session.

```

public class SamplePopupDialog extends MySabreTrayDialog {
	
	public SamplePopupDialog(Shell parentShell) {
		super(parentShell);
	}

	@Override
	protected Control createDialogArea(Composite parent) {
		Composite area = (Composite)super.createDialogArea(parent);
		return area;
	}
}

```


### Notification
This could not be called as an container because there's little customization that can be added to the notification widget, but the RedApp SDK provides an simple and effective way to display an un-obtrusive / floating message on the bottom right corner of the workspace, that allows the developer to present a message to the user, with priority levels, timing and follow link, without "disturbing" the user workflow.

```

public void showNotification(String title, String content, int time, Priority priority, SideBarColor sbColor, IWidgetAction defaultAction){
	
	final INotificationService svc = Activator.getDefault().getServiceReference(INotificationService.class);
	final Notification not = new Notification();
	final IWidgetAction defAction = defaultAction;
	not.setWindowTitle(title);
	not.setPriority(priority);
	not.setContent(content);
	not.setLeftSideBarColor(sbColor);
	not.setNotificationTime(time);	
	
	if(defAction!=null){
		not.setMoreLabel("more...");
		not.setMoreListener(new Listener() {
			
			@Override
			public void handleEvent(Event arg0) {
				defAction.defaultActionSelected();
				
			}
		});
	}
	
	UiThreadInvoker<Object> invoker = new UiThreadInvoker<Object>() {
		
		@Override
		protected Object invoke() {
			svc.createNotification(not);
			return null;
		}
	};
	
	invoker.asyncExec();
	
}

```

### App Preferences page
In order to fully implement the Preference Pages contribution, the App must implement the interface to handle the content rendering, as well methods which react on user actions (like button pressing).
 
```

public class AppPreferencePage
	extends FieldEditorPreferencePage
	implements IWorkbenchPreferencePage {

	public AppPreferencePage() {
		super(GRID);
		setPreferenceStore(Activator.getDefault().getPreferenceStore());
		setDescription("");
	}
}


```


## SRW Runtime Communication
During runtime, the RedApp SDK exposes methods to access the "GDS Commands and Session", as well an extensive framework to consume Services which allows processing communications within the Emulator screen, direct host, DevStudio SOAP Apis and more.

### Event Listening
Event listening is the most common "pattern" used to interact with the User, that is, as the RedApp usually "compliment" the daily tasks that an Travel Agent does, it particularly listens for an action and based on the event generated trigger his own "complimentary" actions from within the RedApp. Most of the Events are generated asynchronously, that is, it doesn't "block" the agent workflow, the RedApp is just "passive" listening and cannot interfere on the execution flow.

```

public class EventListener implements IEventListener {

	/* (non-Javadoc)
	 * @see com.sabre.edge.cf.model.IEventListener#handleEvent(com.sabre.edge.cf.model.IEvent)
	 */
	@Override
	public void handleEvent(IEvent evt) {
		// Asynchronous Event Listening Handler ( all commands, since there's no action code defined)
		ServiceContext sc = (ServiceContext)evt.getContext();
		EmulatorCommandRequest cmdRQ = (EmulatorCommandRequest) sc.getRequest();
		EmulatorCommandResponse cmdRS = (EmulatorCommandResponse) sc.getResponse();
		EmulatorCommand cmd = cmdRQ.getEmulatorCommand();
		String cmdTyped = cmd.getCommand();
		String cmdResp = cmdRS.getEmulatorResponse()!=null?cmdRS.getEmulatorResponse().getResponse():"";
	}
	
}


``` 

### Host / Emulator Commands
The SRW Runtime Engine provides ways for a RedApp listen / write and execute GDS Commands on the Emulator Screen, as well direct host communication on the "background" but sharing the same session as the emulator. That's the way used by developers to "intercept" the agent workflow and apply it's own logic / back processing, like locking the session, sending some messages, add data to the PNR on the background, and so on...   

```
public void SendEmulatorCommand(String actionData){

		ISRWCommunication comm = Activator.getDefault().getServiceReference(ISRWCommunication.class);

		String cmdToSend = actionData;
		
		EmulatorCommand cmd = new EmulatorCommand(cmdToSend);
		EmulatorCommandRequest rq = new EmulatorCommandRequest(cmd);
		
		ExecuteInEmuServiceClient execEmu = new ExecuteInEmuServiceClient(comm);
		execEmu.send(rq);
		
}


```

```
//Command Intercept and Modify
public class CommandModificationService implements IService {

	@Override
	public void process(IServiceContext context) {

		ContextStatusAdvisor contextAdvisor = new ContextStatusAdvisor(context, getClass());
		
		
		IRequest rq = context.getRequest();
		
		String strCmdToModify="1";
		String strCmdToPrepend="";

		
		if(rq instanceof EmulatorCommandRequest){
			EmulatorCommand cmd = ((EmulatorCommandRequest) rq).getEmulatorCommand();
			EmulatorCommandResponse cmdResp=null;
			

			//command to modify
			EmulatorCommand cmdModified = new EmulatorCommand(cmd.getCommand().concat(strCmdToPrepend));
			cmdResp = new EmulatorCommandResponse(cmdModified);
				
			((ServiceContext)context).setResponse(cmdResp);
			context.setStatus(ServiceStatus.SUCCESS);

		}
		
	}

}


```


```
//Command Intercept and Block
public class CommandBlockService implements IService {

	@Override
	public void process(IServiceContext context) {
		

		ContextStatusAdvisor contextAdvisor = new ContextStatusAdvisor(context, getClass());
		
		IRequest rq = context.getRequest();
		
		EmulatorCommandResponse cmdResponse = new EmulatorCommandResponse();
		((ServiceContext) context).setResponse(cmdResponse);
		

	}

}

```


### Sabre Web Services
The RedApp SDK comes with some handy classes to consume DevStudio APIS, mostly notable the SOAP ones, leaving tasks like authentication and soap enveloping to the SDK, so the developers mostly need to focus only on the payloads / action codes, and parsing the responses. 


```

				ISRWCommunication comm = Activator.getDefault().getServiceReference(ISRWCommunication.class);
				
				SWSRequest rq = new SWSRequest();
				rq.setAction(cbActionCode.getText());
				
				Document docRq = getDocFromString(txtRqPayload.getText());
				
				rq.setPayload(docRq);
				
				SWSServiceClient cli = new SWSServiceClient(comm);
				ClientResponse<SWSResponse> rsp = cli.send(rq);
				
				String strResponse = "";
				if( rsp.isSuccess()){
					SWSResponse responsePl = rsp.getPayload();
					strResponse = responsePl.getResponseText();
				}else{
					strResponse = "Error calling WebServices :\n";
					for(IError err : rsp.getErrors()){
						strResponse += err.getCode() + "-" + err.getDescription() + "\n";
					}
				}


```


## User / Agent Configuration scope
Sometimes there's need to interact with the SRW Workspace itself, that is, know who is the User sitting on front of the screen, as well the attributes that customize the workspace and the user preferences. 

### OSGi Services
Those are the services that usually behaves within the Workspace elements and the Runtime instance of the workspace, working directory and logging usually are found here.

```
//Logging Services Usage
//log the exception using log services, the log level is given by related methods.
Activator.getDefault().getLoggerService().warning(e.getMessage());
Activator.getDefault().getLoggerService().info(e.getMessage());

```

```
//App Preferences Usage
IPreferenceStore st = Activator.getDefault().getPreferenceStore();
st.setValue("VALUE_KEY","preference");
st.getString("VALUE_KEY");

```


### Plugin Services
Those are the services that usually bring information about the user / Travel Agent which is logged in the Workspace.



```
//Agent Profiles Usage
IAgentProfileService svc =  Activator.getDefault().getServiceReference(IAgentProfileService.class);
 
svc.getPCC();
svc.getAgentID();
```

