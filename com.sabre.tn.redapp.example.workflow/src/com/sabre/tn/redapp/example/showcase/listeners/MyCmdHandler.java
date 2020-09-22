package com.sabre.tn.redapp.example.showcase.listeners;

import org.eclipse.core.commands.AbstractHandler;
import org.eclipse.core.commands.ExecutionEvent;
import org.eclipse.core.commands.ExecutionException;

import com.sabre.tn.redapp.example.showcase.uiparts.OpenThingsHelper;

public class MyCmdHandler extends AbstractHandler {

	@Override
	public Object execute(ExecutionEvent event) throws ExecutionException {
		// TODO Auto-generated method stub
		OpenThingsHelper.showBrowserEditor("https://www.sabre.com");
		return null;
	}

}
