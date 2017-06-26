import AbstractModel = app.AbstractModel;
import Data = app.common.data.dto.Data;
import EnhancedResponseData = app.common.data.dto.EnhancedResponseData;
import DataOptions = app.common.data.dto.DataOptions;
import {Initial} from 'sabre-ngv-core/decorators/classes/Initial';
import AbstractModelOptions = app.AbstractModelOptions;
import {Lazy} from 'sabre-ngv-core/decorators/methods/Lazy';


/**
 * Agent Workflow sample Model
 * Holds "generic" service data received form Redapp Extension Point
 */
@Initial<AbstractModelOptions>({
    autoPropagateData: true
})

@Initial<DataOptions>({
    dataRoot: '[d.Structure][o.ExtensionPoint_Summary][workflowdata.ServiceData][0]'
})
export class ServiceData extends EnhancedResponseData {

    serviceID: string;
    requestedData: string;
    jsonPayload: string;

    // constructor(model: any) {
    //     super();
    //     this.serviceID = model['serviceID'];
    //     this.requestedData = model['requestedData'];
    //     this.jsonPayload = model['jsonPayload'];
    // }

    getServiceID(): string {
        return this.serviceID;
    }

    getRequestedData(): string {
        return this.requestedData;
    }

    getJsonPayload(): string {
        return this.jsonPayload;
    }

    getStringifiedPayload(): string {
        return JSON.stringify(this.fromRoot());
    }

}