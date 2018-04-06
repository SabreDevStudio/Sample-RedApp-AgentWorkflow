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

import java.util.Optional;

import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtControlAction;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointCommand;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointDataOperation;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointRequestWrapper;
import com.sabre.stl.pos.srw.nextgen.redapp.airshopping.rq.v1.RedAppAirShoppingRq;
import com.sabre.stl.pos.srw.nextgen.redapp.airshopping.rq.v1.RedAppOriginDestinationInfo;
import com.sabre.tn.redapp.example.workflow.xtpointservices.interfaces.IBeforeShopHandler;

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

        Optional <Airline> airlineOptional =
            fetchRequest(extPointCommand, Airline.class);

        if (airlineOptional.isPresent())
        {
            String iataCode = airlineOptional.get().getIataCode().trim();
            Optional <FlowExtPointRequestWrapper> rqWrapper =
                fetchRequestWrapper(extPointCommand, RedAppAirShoppingRq.class);

            if (rqWrapper.isPresent() && !iataCode.isEmpty())
            {
                RedAppAirShoppingRq airShoppingRq =
                    (RedAppAirShoppingRq) rqWrapper.get().getRequest();
                airShoppingRq.getAdvancedOptions().getPreferredCarriers().clear();
                airShoppingRq.getAdvancedOptions().getPreferredCarriers().add(iataCode);
                rqWrapper.get().setOperation(FlowExtPointDataOperation.MODIFY);
            }
        }else{
            Optional <FlowExtPointRequestWrapper> rqWrapper =
                    fetchRequestWrapper(extPointCommand, RedAppAirShoppingRq.class);

                if (rqWrapper.isPresent())
                {
                    RedAppAirShoppingRq airShoppingRq =
                        (RedAppAirShoppingRq) rqWrapper.get().getRequest();
                    
                    for(RedAppOriginDestinationInfo odInfo : airShoppingRq.getOriginDestinationInfo()) {
						if(odInfo.getDestination().equalsIgnoreCase("NYC")){
							airShoppingRq.getAdvancedOptions().getPreferredCarriers().clear();
							airShoppingRq.getAdvancedOptions().getPreferredCarriers().add("DL");
							rqWrapper.get().setOperation(FlowExtPointDataOperation.MODIFY);
							break;
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
