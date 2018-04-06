/*
 * Copyright 2001,2017 (c) Point Of Sale Solutions (POSS) of Sabre Inc. All
 * rights reserved.
 * 
 * This software and documentation is the confidential and proprietary
 * information of Sabre Inc. ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in accordance
 * with the terms of the license agreement you entered into with Sabre Inc.
 */
package com.sabre.tn.redapp.example.workflow.xtpointservices;

import java.util.List;
import java.util.Optional;

import com.sabre.stl.pos.srw.nextgen.flow.ext.utils.FlowExtPointCommandUtils;
import com.sabre.stl.pos.srw.nextgen.flow.ext.utils.FlowExtPointErrorFactory;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointCommand;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointDataOperation;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointError;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointResponse;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointResponseWrapper;
import com.sabre.stl.pos.srw.nextgen.redapp.airshopping.rq.v1.RedAppAirShoppingRq;
import com.sabre.stl.pos.srw.nextgen.redapp.airshopping.rq.v1.RedAppOriginDestinationInfo;
import com.sabre.tn.redapp.example.workflow.xtpointservices.interfaces.IBeforeShopManualHandler;

/**
 * Service displaying form for updating command.
 */
public class BeforeShopManualHandler implements IBeforeShopManualHandler
{
    @Override
    public FlowExtPointCommand execute(FlowExtPointCommand extPointCommand)
    {
    	
		ManualExtensionPointEventData dtaToSend = new ManualExtensionPointEventData();
		dtaToSend.setEventId("BeforeShoppingManual");
		FlowExtPointResponse rsFlow = new FlowExtPointResponse();
		rsFlow.setStructure(dtaToSend);
		
		FlowExtPointResponseWrapper rsWrapper = new FlowExtPointResponseWrapper();
		rsWrapper.setOperation(FlowExtPointDataOperation.ADD);
		rsWrapper.setResponse(rsFlow);
		
		extPointCommand.getResponses().add(rsWrapper);
		

/*        Airline airline = new Airline();
        airline.setIataCode("");
        
        boolean bypassManual = false;
        
        Optional <RedAppAirShoppingRq> airShoppingRqOptional =
            fetchRequest(extPointCommand, RedAppAirShoppingRq.class);

        if (airShoppingRqOptional.isPresent())
        {
            List <String> airlinesList =
                airShoppingRqOptional.get().getAdvancedOptions().getPreferredCarriers();
        	for (RedAppOriginDestinationInfo odInfo : airShoppingRqOptional.get().getOriginDestinationInfo()) {
        		if(odInfo.getDestination().equalsIgnoreCase("LAS") || odInfo.getDestination().equalsIgnoreCase("NYC")){
        			bypassManual = true;
        		}
			};
            if (!airlinesList.isEmpty())
            {
                airline.setIataCode(airlinesList.get(0));
            }
        }

        if(!bypassManual){
	        FlowExtPointResponse response = new FlowExtPointResponse();
	        response.setStructure(airline);
	
	        FlowExtPointResponseWrapper responseWrapper = new FlowExtPointResponseWrapper();
	        responseWrapper.setOperation(FlowExtPointDataOperation.ADD);
	        responseWrapper.setResponse(response);
	        extPointCommand.getResponses().add(responseWrapper);
        }else{
        	FlowExtPointError err = new FlowExtPointError();
        	err.setCode("FLOW_EXT_POINT_ERROR");
        	FlowExtPointCommandUtils.addError(extPointCommand, err); 
    	}*/
        return extPointCommand;
    }

    private <T> Optional <T> fetchRequest(FlowExtPointCommand extPointCommand, Class <T> type)
    {
        return extPointCommand.getRequests().stream().map(wrapper -> wrapper.getRequest())
            .filter(type::isInstance).map(type::cast).findFirst();
    }
}
