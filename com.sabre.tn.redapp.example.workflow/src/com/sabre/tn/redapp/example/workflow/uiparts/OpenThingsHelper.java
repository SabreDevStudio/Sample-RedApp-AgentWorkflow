package com.sabre.tn.redapp.example.workflow.uiparts;

import org.eclipse.jface.window.Window;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.ui.IViewPart;
import org.eclipse.ui.IWorkbenchPage;
import org.eclipse.ui.PlatformUI;

import com.sabre.edge.platform.core.ui.handlers.OpenViewHandler;
import com.sabre.edge.platform.core.ui.threading.UiThreadInvoker;
import com.sabre.edge.platform.core.ui.utils.LauncherParams;
import com.sabre.edge.platform.core.ui.utils.WorkbenchUtils;
import com.sabre.tn.redapp.example.workflow.Activator;


public class OpenThingsHelper {
	
	
	public static void showAdvWebView(String urlToLoad, String jsToPass){
		
		new UiThreadInvoker<Object>() {
			@Override
			protected Object invoke() {
				String url = urlToLoad;
				if(url!=null && !url.isEmpty()){
					
					
					if(url.indexOf("${plugin_resources}")>=0){
						url = url.replace("${plugin_resources}", Activator.getDefault().getDataDirectory(Activator.PLUGIN_ID).toURI().toString() );
						
					}
					
				
					LauncherParams pmtsToOpenView = new LauncherParams.LauncherParamsBuilder(
							"com.sabre.tn.redapp.example.workflow.view.WebKitSampleView", 
							"Advanced WebBrowser View", 
							Activator.PLUGIN_ID)
						.url(url)
						.insertJavaScript(jsToPass)
						.build();
					
					new WorkbenchUtils().openBrowserView("com.sabre.tn.redapp.example.workflow.redapp.webkitview.command", pmtsToOpenView);

					//OpenBrowserViewHandler.showView("com.sabre.tn.redapp.example.workflow.view.WebKitSampleView",url);
				}else{
					 
				}

				return null;
			};
		}.asyncExec();
		
		
	}
	
	public static void showBrowserEditor(String urlToLoad){

		new UiThreadInvoker<Object>() {

			@Override
			protected Object invoke() {
				
				String url = urlToLoad;
				if(url.indexOf("${plugin_resources}")>=0){
					url = url.replace("${plugin_resources}", Activator.getDefault().getDataDirectory(Activator.PLUGIN_ID).toURI().toString() );
				}

				LauncherParams pmtsToOpenEditor = new LauncherParams.LauncherParamsBuilder(
						"com.sabre.tn.redapp.example.workflow.webkiteditor.command", 
						"Advanced WebBrowser Editor", 
						Activator.PLUGIN_ID)
					.url(url)
					.build();
				
				new WorkbenchUtils().openBrowserEditor("com.sabre.tn.redapp.example.workflow.webkiteditor.command", pmtsToOpenEditor);
				
				return null;
		
			}
			
		}.asyncExec();

	}
	
	public static int showDialog(String dialogMsg){
		
		
		
		Integer res = new UiThreadInvoker<Integer>() {
			@Override
			protected Integer invoke() {
				Shell shell = PlatformUI.getWorkbench().getDisplay().getActiveShell();
				Window dialog = new SamplePopupDialog(shell,dialogMsg);
				int status = dialog.open();
				return status;
			}
		}.syncExec();
		
		
		
		return res;
	}
	
	public static void closeView(String viewId){

		new UiThreadInvoker<Object>() {
			@Override
			protected Object invoke() {
				IViewPart clView = OpenViewHandler.getViewIfOpenedOrHidden(viewId);
				OpenViewHandler.closeView(clView, true);
				return null;
			}
		}.asyncExec();
	
	}

}
