import { AbstractModel } from "sabre-ngv-app/app/AbstractModel";

export class CustomSvcRQ extends AbstractModel {
    actionCode: string;
    rqPayload: string;

}
/*

export interface CustomSvcRQ {
    'workflowdata.CustomSvcRQ': [{'workflowdata.actionCode': string,
        'workflowdata.rqPayload': string}];
}

*/