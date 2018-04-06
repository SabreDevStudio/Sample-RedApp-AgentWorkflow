/*
 * Copyright 2001,2017 (c) Point Of Sale Solutions (POSS) of Sabre Inc. All
 * rights reserved.
 * 
 * This software and documentation is the confidential and proprietary
 * information of Sabre Inc. ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in accordance
 * with the terms of the license agreement you entered into with Sabre Inc.
 */
package com.sabre.tn.redapp.example.workflow.xtpointservices.interfaces;

import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointCommand;

/**
 * Service displaying form for updating command
 */
public interface IBeforeShopManualHandler
{
    /**
     * Prepares data model to display update command form.
     * 
     * @param extPointCommand {@link FlowExtPointCommand} flow
     * @return {@link FlowExtPointCommand} flow
     */
    FlowExtPointCommand execute(FlowExtPointCommand extPointCommand);
}
