package com.sabre.tn.redapp.example.workflow.views;

import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.FillLayout;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Link;
import org.eclipse.ui.part.ViewPart;

import com.sabre.tn.redapp.example.workflow.uiparts.CoreServicesHelper;



public class MainView extends ViewPart {

	@Override
	public void createPartControl(Composite parent) {
		parent.setLayout(new FillLayout());
		createContents(parent);

	}

	@Override
	public void setFocus() {
		

	}
	
	private void createContents(Composite parent){
		Composite compMain = new Composite(parent, SWT.NONE);
		compMain.setLayout(new GridLayout(1, true));
		
		Label txtContent = new Label(compMain,SWT.WRAP );
		txtContent.setText("About this App" + CoreServicesHelper.getWorkAreaService().getWorkAreaInUse().getPcc()+" "+CoreServicesHelper.getWorkAreaService().getWorkAreaInUse().getAaaPcc());
		txtContent.setAlignment(SWT.CENTER);
		
		
		
		Label txtContent1 = new Label(compMain, SWT.WRAP );
		txtContent1.setText("The ShowCase Red App is intended to demonstrate the iteraction that usually occur when Travel Consultants are using Red Apps inside the Sabre Red Workspace.");

		txtContent1.setLayoutData(new GridData(SWT.LEFT, SWT.TOP, true, false));

		Label txtContent2 = new Label(compMain, SWT.WRAP );
		txtContent2.setText("It utilizes many methods of Emulator command listening, and present different UI elements for each phase during the PNR Creation");
		txtContent2.setLayoutData(new GridData(SWT.LEFT, SWT.TOP, true, false));
		
		Label txtContent3 = new Label(compMain, SWT.WRAP );
		txtContent3.setText("Assynchronous Event Listening\r\n\t- During availability commands (1*).\r\n\t- During sell (0*).");
		txtContent3.setLayoutData(new GridData(SWT.LEFT, SWT.TOP, true, false));

		Label txtContent4 = new Label(compMain, SWT.WRAP );
		txtContent4.setText("Synchronous Services\r\n\t- Command MODIFICATION pattern on RECEIVED FROM (6*).\r\n\t- Command BLOCK pattern on END / END & REDISPLAY (E/ER).\r\n\t - CUSTOM COMMAND pattern (CUSTOMCMD).");
		txtContent4.setLayoutData(new GridData(SWT.LEFT, SWT.TOP, true, false));
		
		Link txtContent5 = new Link(compMain, SWT.WRAP );
		txtContent5.setText("Core Services\r\n\t- First Run event handler\r\n\t- Red App Settings\r\n\t- Plugin Resources\r\n\t- Logging");
		txtContent5.setLayoutData(new GridData(SWT.LEFT, SWT.TOP, true, false));


	}

}
