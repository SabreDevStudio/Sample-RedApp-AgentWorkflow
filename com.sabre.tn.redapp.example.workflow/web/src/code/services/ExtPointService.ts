import AbstractService = app.services.impl.AbstractService;
import {IExtPointService} from './IExtPointService';
import {ServiceData} from '../models/ServiceData';
import CommandFlow = app.common.data.dto.CommandFlow;

export class ExtPointService extends AbstractService implements IExtPointService {

    static SERVICE_NAME = 'ExtPointService';
    static FETCH_SERVICE_NAME: string = 'NGV://REDAPP/SERVICE/COM.SABRE.TN.REDAPP.EXAMPLE.WORKFLOW.XTPOINTSERVICES.IWORKFLOWXTSERVICE:EXECUTE';

    fetchServiceData(): NgvPromise<ServiceData> {

        return cf(ExtPointService.FETCH_SERVICE_NAME)
            .setLocalPreference('silent', true)
            .setLocalPreference('capture', true)
            .setLocalPreference('uiBlocking', true)
            .retrieveData(ServiceData);
    }
}