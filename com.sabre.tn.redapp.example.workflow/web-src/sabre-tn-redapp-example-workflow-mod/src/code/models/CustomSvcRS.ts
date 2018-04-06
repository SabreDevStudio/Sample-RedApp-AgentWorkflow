import { AbstractModel } from "sabre-ngv-app/app/AbstractModel";
import { EnhancedResponseData } from "sabre-ngv-app/app/common/data/dto/EnhancedResponseData";
import { Initial } from "sabre-ngv-core/decorators/classes/Initial";
import { AbstractModelOptions } from "sabre-ngv-app/app/AbstractModelOptions";
import { DataOptions } from "sabre-ngv-app/app/common/data/dto/DataOptions";
import { CommandFlow } from "sabre-ngv-app/app/common/data/dto/CommandFlow";

@Initial<AbstractModelOptions>({
    autoPropagateData: true,
    nonLazyMembers: ['actionCode','rsPayload']

})

@Initial<DataOptions>({
    dataRoot: '[d.Structure][o.ExtensionPoint_Summary][workflowdata.CustomSvcRS]'
})
export class CustomSvcRS extends EnhancedResponseData {
    actionCode: string;
    rsPayload: string;

    getActionCode() {
        return this.fromRoot().get('[workflowdata.actionCode]').value();
    }

    getRsPayload() {
        return this.fromRoot().get('[workflowdata.rsPayload]').value();
    }

    getCF():CommandFlow {
        return this.getCommandFlow();
    }


}