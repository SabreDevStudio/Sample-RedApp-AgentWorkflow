import { RequestData } from "sabre-ngv-app/app/common/data/dto/request/RequestData";
import { CustomSvcRQ } from "./CustomSvcRQ";
import { ICustomSvcRQ } from "./ICustomSvcRQ";

export class CustomSvcRQData extends RequestData<ICustomSvcRQ> {

    constructor(private rqData: CustomSvcRQ) {
        super();
    }


    getRequestStructure(): ICustomSvcRQ {
        const rqd = this.rqData;
        
        return {
            'workflowdata.CustomSvcRQ': [{
                'workflowdata.actionCode': rqd.actionCode,
                'workflowdata.rqPayload': rqd.rqPayload
            }]
        };
        // throw new Error("Method not implemented.");
    }

}