import { AbstractService } from "sabre-ngv-app/app/services/impl/AbstractService";
import { ICustomXTPointService } from "./ICustomXTPointService";
import { NgvPromise } from "sabre-ngv-app/_types";
import { cf } from "sabre-ngv-app/cf";
import { CustomSvcRQData } from "../models/CustomSvcRQData";
import { CustomSvcRS } from "../models/CustomSvcRS";
import { SrwAsyncApi} from "sabre-ngv-app/app/services/impl/SrwAsyncApi";
import { getService } from "../Context";

export class CustomXTPointService extends AbstractService implements ICustomXTPointService {


    static SERVICE_NAME = 'CustomXTPointService';
    static FETCH_SERVICE_NAME: string = 'NGV://REDAPP/SERVICE/COM.SABRE.TN.REDAPP.EXAMPLE.SHOWCASE.XTPOINTSERVICES.INTERFACES.ICUSTOMSVC:EXECUTE';

    fetchServiceData(svcRQ: CustomSvcRQData): NgvPromise<CustomSvcRS> {
        return cf(CustomXTPointService.FETCH_SERVICE_NAME)
        .addRequestDataObject(svcRQ)
        .setLocalPreference('silent', true)
        .setLocalPreference('capture', true)
        .setLocalPreference('uiBlocking', true)        
        .retrieveData(CustomSvcRS);
        // throw new Error("Method not implemented.");
    }

    callSOAP(svcRQ: string, svcActionCode: string): Promise<string> {
        let soapSvc = getService(SrwAsyncApi);
        return new Promise<string>((resolve,reject)=>{
            try{
                soapSvc.sws(
                    svcRQ,svcActionCode,resolve);
            }catch(ex){
                reject(ex);
            }
        });

    }

}