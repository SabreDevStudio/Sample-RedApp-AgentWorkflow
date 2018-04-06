import { EnhancedResponseData } from "sabre-ngv-app/app/common/data/dto/EnhancedResponseData";
import { AbstractModelOptions } from "sabre-ngv-app/app/AbstractModelOptions";
import { Initial } from "sabre-ngv-core/decorators/classes/Initial";
import {CommandFlow} from 'sabre-ngv-app/app/common/data/dto/CommandFlow';
import { DataOptions } from "sabre-ngv-app/app/common/data/dto/DataOptions";

@Initial<DataOptions>({
    dataRoot: '[d.Structure][o.ExtensionPoint_Summary][workflowdata.ManualExtensionPointEventData]'
})


@Initial <AbstractModelOptions>({
    autoPropagateData: true,
    nonLazyMembers: [
        'eventId',
        'message',
        'dialogType',
        'dialogResult'
    ]
})

export class ManualExtensionPointEventData extends EnhancedResponseData {


    getCF() {
        return this.getCommandFlow();
    }

    getEventId() {
        return this.fromRoot().get('[eventId]').value();
    }

}