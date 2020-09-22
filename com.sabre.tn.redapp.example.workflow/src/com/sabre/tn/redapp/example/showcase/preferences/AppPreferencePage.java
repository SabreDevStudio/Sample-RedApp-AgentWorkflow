package com.sabre.tn.redapp.example.showcase.preferences;

import org.eclipse.jface.preference.*;
import org.eclipse.osgi.internal.module.GroupingChecker;
import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Group;
import org.eclipse.swt.widgets.Label;
import org.eclipse.ui.IWorkbenchPreferencePage;

import com.sabre.tn.redapp.example.showcase.Activator;

import org.eclipse.ui.IWorkbench;

/**
 * This class represents a preference page that
 * is contributed to the Preferences dialog. By 
 * subclassing <samp>FieldEditorPreferencePage</samp>, we
 * can use the field support built into JFace that allows
 * us to create a page that is small and knows how to 
 * save, restore and apply itself.
 * <p>
 * This page is used to modify preferences only. They
 * are stored in the preference store that belongs to
 * the main plug-in class. That way, preferences can
 * be accessed directly via the preference store.
 */

public class AppPreferencePage
	extends FieldEditorPreferencePage
	implements IWorkbenchPreferencePage {

	public AppPreferencePage() {
		super(GRID);
		setPreferenceStore(Activator.getDefault().getPreferenceStore());
		setDescription("The app is configured to listen for :");
	}
	
	/**
	 * Creates the field editors. Field editors are abstractions of
	 * the common GUI blocks needed to manipulate various types
	 * of preferences. Each field editor knows how to save and
	 * restore itself.
	 */
	public void createFieldEditors() {
		
		Composite composite = new Composite(getFieldEditorParent(), SWT.NONE);
		composite.setLayoutData(new GridData(SWT.FILL, SWT.FILL, true, true));
		composite.setLayout(new GridLayout(1, true));
		
		
		Group grListen = new Group(composite, SWT.WRAP);
		grListen.setText("Manual command listening");
		grListen.setLayout(new GridLayout(1, true));

		

		addField(
				new BooleanFieldEditor(
					PreferenceConstants.P_LISTEN_AVAIL,
					"Listen for availability commands (1...)",
					SWT.WRAP,
					grListen));

		
		addField(
				new BooleanFieldEditor(
					PreferenceConstants.P_LISTEN_SELL,
					"Listen for Sell commands (0...)",
					SWT.WRAP,
					grListen));
		
		addField(
				new BooleanFieldEditor(
					PreferenceConstants.P_MODIFY_RCVDFROM,
					"Command MODIFICATION pattern, on Received From format (6...)",
					0,
					grListen));
		

		addField(
				new BooleanFieldEditor(
					PreferenceConstants.P_BLOCK_ER,
					"Command BLOCK pattern, on End & Redisplay formats (E/ER).",
					SWT.WRAP,
					grListen));
		
		

		Group gr = new Group(composite, SWT.WRAP);
		gr.setText("Workflow Extension points");
		gr.setLayout(new GridLayout(1, true));

		Group gr1 = new Group(gr, NONE);
		gr1.setText("Back-end Air Shopping request filter");
		
		addField(
				new BooleanFieldEditor(
					PreferenceConstants.P_BEF_SHOP_FLOW_EXT,
					"Enable Air Shopping filter (silent)",
					SWT.WRAP,
					gr1));

		
		addField(
				new StringFieldEditor(
					PreferenceConstants.P_DESTFILTER_SHOP_FLOW_EXT,
					"Destination IATA to activate Shop handler",
					SWT.WRAP,
					gr1));

		addField(
				new StringFieldEditor(
					PreferenceConstants.P_AIRLINEFILTER_SHOP_FLOW_EXT,
					"Airline Filter to add to Shopping request",
					SWT.WRAP,
					gr1));
		

		Group gr2 = new Group(gr, NONE);
		gr2.setText("Front-end Before Air Shopping Modal");

		addField(
				new BooleanFieldEditor(
					PreferenceConstants.P_BEF_SHOP_FLOW_EXT_1,
					"Enable Manual Workflow Extension to set-up Corporate ID and Account Code",
					SWT.WRAP,
					gr2));

		

		
		Group gr3 = new Group(gr, SWT.WRAP);
		gr3.setText("Before END PNR");
		gr3.setLayout(new GridLayout(1, true));				
				
		addField(
				new BooleanFieldEditor(
					PreferenceConstants.P_BEF_END_FLOW_EXT,
					"Check for Record Locator presence",
					SWT.WRAP,
					gr3));

		addField(
				new BooleanFieldEditor(
					PreferenceConstants.P_BEF_END_FLOW_EXT_1,
					"Check for QC Pattern",
					SWT.WRAP,
					gr3));

	}

	/* (non-Javadoc)
	 * @see org.eclipse.ui.IWorkbenchPreferencePage#init(org.eclipse.ui.IWorkbench)
	 */
	public void init(IWorkbench workbench) {
	}
	
}