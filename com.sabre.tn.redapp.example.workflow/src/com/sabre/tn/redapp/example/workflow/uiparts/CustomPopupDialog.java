package com.sabre.tn.redapp.example.workflow.uiparts;

import org.eclipse.jface.dialogs.IDialogConstants;
import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.FillLayout;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Shell;

import com.sabre.edge.platform.core.ui.dialogs.MySabreTrayDialog;

public class CustomPopupDialog extends MySabreTrayDialog {
	

	
	public CustomPopupDialog(Shell parentShell) {
		super(parentShell);

	}
	
	@Override
	protected void configureShell(Shell newShell) {
		
		super.configureShell(newShell);
		newShell.setText("Agent Workflow Sample Red App");
	}

	@Override
	protected void createButtonsForButtonBar(Composite parent) {

		createButton(parent, IDialogConstants.OK_ID, IDialogConstants.OK_LABEL, true);
	}
	
	@Override
	protected Control createDialogArea(Composite parent) {
		
		Composite area = (Composite)super.createDialogArea(parent);
		area.setLayout(new GridLayout(1,true));
		((FillLayout)area.getLayout()).marginWidth = 10;
		((FillLayout)area.getLayout()).marginHeight = 10;

		Label txtContent = new Label(area,SWT.WRAP );
		txtContent.setText("About the App");
		txtContent.setAlignment(SWT.CENTER);

		
		return area;
	}

}
