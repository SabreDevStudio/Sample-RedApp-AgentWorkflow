/*
 * Copyright 2001,2017 (c) Point Of Sale Solutions (POSS) of Sabre Inc. All
 * rights reserved.
 * 
 * This software and documentation is the confidential and proprietary
 * information of Sabre Inc. ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in accordance
 * with the terms of the license agreement you entered into with Sabre Inc.
 */
package com.sabre.tn.redapp.example.showcase.xtpointservices;

import java.util.Optional;

import org.eclipse.jface.preference.IPreferenceStore;

import com.sabre.edge.cf.model.IServiceContext;
import com.sabre.edge.platform.core.ui.threading.UiThreadInvoker;
import com.sabre.edge.platform.optional.notifications.INotificationService;
import com.sabre.edge.platform.optional.notifications.types.Notification;
import com.sabre.edge.platform.optional.notifications.types.Priority;
import com.sabre.edge.platform.optional.notifications.types.SideBarColor;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointCommand;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointDataOperation;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointRequestWrapper;
import com.sabre.stl.pos.srw.nextgen.redapp.airshopping.rq.v1.RedAppAirShoppingRq;
import com.sabre.stl.pos.srw.nextgen.redapp.airshopping.rq.v1.RedAppOriginDestinationInfo;
import com.sabre.tn.redapp.example.showcase.Activator;
import com.sabre.tn.redapp.example.showcase.preferences.PreferenceConstants;
import com.sabre.tn.redapp.example.showcase.uiparts.OpenThingsHelper;
import com.sabre.tn.redapp.example.showcase.xtpointservices.interfaces.IBeforeShopHandler;

/**
 * Service modifying airline in request.
 */
public class BeforeShopHandler implements IBeforeShopHandler
{

    /**
     * {@inheritDoc}
     */
    @Override
    public FlowExtPointCommand execute(FlowExtPointCommand extPointCommand)
    {
    	IPreferenceStore st = Activator.getDefault().getPreferenceStore();

		boolean shouldListenBeforeShop=st.getBoolean(PreferenceConstants.P_BEF_SHOP_FLOW_EXT);
		boolean shouldCheckClientID = st.getBoolean(PreferenceConstants.P_BEF_SHOP_FLOW_EXT_1);
		
		if(shouldListenBeforeShop){    	
    	
    	
			Optional <FlowExtPointRequestWrapper> rqWrapper =
			            fetchRequestWrapper(extPointCommand, RedAppAirShoppingRq.class);
			
			
		        if (rqWrapper.isPresent())
		        {
		            RedAppAirShoppingRq airShoppingRq = (RedAppAirShoppingRq) rqWrapper.get().getRequest();
		            
		            String destFilter = st.getString(PreferenceConstants.P_DESTFILTER_SHOP_FLOW_EXT);
		            String airlineFilter = st.getString(PreferenceConstants.P_AIRLINEFILTER_SHOP_FLOW_EXT);
		            
		            for(RedAppOriginDestinationInfo odInfo : airShoppingRq.getOriginDestinationInfo()) {
		            	if(odInfo.getDestination().equalsIgnoreCase(destFilter)){
		            		airShoppingRq.getAdvancedOptions().getPreferredCarriers().clear();
		            		airShoppingRq.getAdvancedOptions().getPreferredCarriers().add(airlineFilter.isEmpty()?"":airlineFilter);
		            		rqWrapper.get().setOperation(FlowExtPointDataOperation.MODIFY);
		            		break;
	            		}
		            }
			    }
        	
		}
		
		if(shouldCheckClientID) {
			Optional <FlowExtPointRequestWrapper> rqWrapper =
		            fetchRequestWrapper(extPointCommand, RedAppAirShoppingRq.class);
			Optional <FlowExtPointRequestWrapper> rqDataFromUI =
		            fetchRequestWrapper(extPointCommand, CustomSvcRQ.class);
				
		
	        if (rqWrapper.isPresent())
	        {
	        	RedAppAirShoppingRq airShoppingRq = (RedAppAirShoppingRq) rqWrapper.get().getRequest();
	        	
	        	if(rqDataFromUI.isPresent()) {
	        		CustomSvcRQ rq = (CustomSvcRQ)rqDataFromUI.get().getRequest();
	        		String rqCustomID = rq.getRqPayload()!=null?rq.getRqPayload():"";
	        		Activator.getDefault().getLoggerService().info(rqCustomID);
	        		String corpId = !rqCustomID.isEmpty() && rqCustomID.split("#").length>0 ?rqCustomID.split("#")[0]:"";
	        		String actCode = !rqCustomID.isEmpty() && rqCustomID.split("#").length>1 ?rqCustomID.split("#")[1]:"";
	        		boolean modifiedPayload = false;
	        		if(!corpId.isEmpty()) {
	        			airShoppingRq.getAdvancedOptions().getFareType().getCorporateID().add(corpId);
	        			modifiedPayload = true;
	        		}
	        		if(!actCode.isEmpty()) {
	        			airShoppingRq.getAdvancedOptions().getFareType().getAccountCode().add(actCode);
	        			modifiedPayload = true;
	        		}
	        		
	        		if(modifiedPayload) {
	        			rqWrapper.get().setOperation(FlowExtPointDataOperation.MODIFY);
	        			
	        		}

	        	}

	        	
	        }
		}
        //extPointCommand.setFlowControlAction(FlowExtControlAction.CANCEL);
        return extPointCommand;
    }

    private <T> Optional <FlowExtPointRequestWrapper> fetchRequestWrapper(
        FlowExtPointCommand extPointCommand, Class <T> type)
    {
        return extPointCommand.getRequests().stream()
            .filter(wrapper -> type.isInstance(wrapper.getRequest()))
            .findFirst();
    }

    private <T> Optional <T> fetchRequest(FlowExtPointCommand extPointCommand, Class <T> type)
    {
        return extPointCommand.getRequests().stream().map(wrapper -> wrapper.getRequest())
            .filter(type::isInstance).map(type::cast).findFirst();
    }
}
