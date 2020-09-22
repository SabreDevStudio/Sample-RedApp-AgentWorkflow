package com.sabre.tn.redapp.example.showcase.preferences;

import org.eclipse.core.runtime.preferences.AbstractPreferenceInitializer;
import org.eclipse.jface.preference.IPreferenceStore;

import com.sabre.tn.redapp.example.showcase.Activator;

/**
 * Class used to initialize default preference values.
 */
public class PreferenceInitializer extends AbstractPreferenceInitializer {

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.eclipse.core.runtime.preferences.AbstractPreferenceInitializer#initializeDefaultPreferences()
	 */
	public void initializeDefaultPreferences() {
		IPreferenceStore store = Activator.getDefault().getPreferenceStore();
		
		store.setDefault(PreferenceConstants.P_LISTEN_AVAIL, true);
		store.setDefault(PreferenceConstants.P_LISTEN_SELL, true);
		store.setDefault(PreferenceConstants.P_MODIFY_RCVDFROM, true);
		store.setDefault(PreferenceConstants.P_BLOCK_ER, false);
		store.setDefault(PreferenceConstants.P_BEF_SHOP_FLOW_EXT, true);
		store.setDefault(PreferenceConstants.P_BEF_SHOP_FLOW_EXT_1, true);
		store.setDefault(PreferenceConstants.P_DESTFILTER_SHOP_FLOW_EXT, "NYC");
		store.setDefault(PreferenceConstants.P_AIRLINEFILTER_SHOP_FLOW_EXT, "DL");
		store.setDefault(PreferenceConstants.P_BEF_END_FLOW_EXT, true);
		store.setDefault(PreferenceConstants.P_BEF_END_FLOW_EXT_1, true);
		

	}

}
