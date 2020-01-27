import { AbstractService } from "sabre-ngv-app/app/services/impl/AbstractService";
import { ICustomXTPointService } from "./ICustomXTPointService";
import { NgvPromise } from "sabre-ngv-app/_types";
import { cf } from "sabre-ngv-app/cf";
import { CustomSvcRQData } from "../models/CustomSvcRQData";
import { CustomSvcRS } from "../models/CustomSvcRS";

export class CustomXTPointService extends AbstractService implements ICustomXTPointService {

    static SERVICE_NAME = 'CustomXTPointService';
    static FETCH_SERVICE_NAME: string = 'NGV://REDAPP/SERVICE/COM.SABRE.TN.REDAPP.EXAMPLE.WORKFLOW.XTPOINTSERVICES.INTERFACES.ICUSTOMSVC:EXECUTE';

    fetchServiceData(svcRQ: CustomSvcRQData): NgvPromise<CustomSvcRS> {
        return cf(CustomXTPointService.FETCH_SERVICE_NAME)
        .addRequestDataObject(svcRQ)
        .setLocalPreference('silent', true)
        .setLocalPreference('capture', true)
        .setLocalPreference('uiBlocking', true)        
        .retrieveData(CustomSvcRS);
        // throw new Error("Method not implemented.");
    }

}