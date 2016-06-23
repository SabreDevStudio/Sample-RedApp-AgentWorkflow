package com.sabre.tn.redapp.example.workflow.uiparts;

import javax.swing.GroupLayout.Alignment;

import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.FillLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.swt.widgets.Text;

import com.sabre.edge.platform.core.ui.dialogs.MySabreTrayDialog;

public class SamplePopupDialog extends MySabreTrayDialog {
	
	private String dialogContent;
	
	public SamplePopupDialog(Shell parentShell, String content) {
		super(parentShell);
		dialogContent = content;
	}

	@Override
	protected Control createDialogArea(Composite parent) {
		
		Composite area = (Composite)super.createDialogArea(parent);
		area.setLayout(new FillLayout());
		((FillLayout)area.getLayout()).marginWidth = 10;
		((FillLayout)area.getLayout()).marginHeight = 10;
		//Text txtContent = new Text(area,SWT.MULTI | SWT.WRAP | SWT.BORDER);
		Label txtContent = new Label(area,SWT.WRAP );
		
		txtContent.setText(dialogContent);
		txtContent.setAlignment(SWT.CENTER);
		
		
		return area;
	}
}
