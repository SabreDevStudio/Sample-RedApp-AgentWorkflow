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

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

/**
 * Java class for Airline complex type.
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "Airline",
                namespace = "http://example.redapp.tn.sabre.com/showcase/xtpointservices",
                propOrder = {"iataCode"})
@XmlRootElement(name = "Airline",
                namespace = "http://example.redapp.tn.sabre.com/showcase/xtpointservices")
public class Airline implements Serializable
{
    private static final long serialVersionUID = 1L;

    @XmlElement(namespace = "http://example.redapp.tn.sabre.com/showcase/xtpointservices",
                    required = true)
    protected String iataCode;

    /**
     * Gets the value of the iataCode property.
     * 
     * @return possible object is {@link String }
     * 
     */
    public String getIataCode()
    {
        return iataCode;
    }

    /**
     * Sets the value of the iataCode property.
     * 
     * @param value allowed object is {@link String }
     * 
     */
    public void setIataCode(String value)
    {
        this.iataCode = value;
    }
}
