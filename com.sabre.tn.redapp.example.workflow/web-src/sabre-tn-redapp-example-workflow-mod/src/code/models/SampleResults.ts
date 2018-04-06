import {AbstractModel} from 'sabre-ngv-app/app/AbstractModel'
import {EnhancedResponseData} from 'sabre-ngv-app/app/common/data/dto/EnhancedResponseData';
import {DataOptions} from 'sabre-ngv-app/app/common/data/dto/DataOptions';
import {Initial} from 'sabre-ngv-core/decorators/classes/Initial';
import {AbstractModelOptions} from 'sabre-ngv-app/app/AbstractModelOptions';
import {SampleResult} from './SampleResult';

@Initial<DataOptions>({
    dataRoot: '[d.Structure][o.ExtensionPoint_Summary][workflowdata.RSResultSet][0]'
})

@Initial<AbstractModelOptions>({
    autoPropagateData: true,
    nonLazyMembers: [
        'sampleResults'
    ]
})

export class SampleResults extends EnhancedResponseData {

    getSampleResults() {
        return this.fromRoot().get<Array<JSON>>('[sampleResult]').value().map(function (item: Object) {
            return new SampleResult(item);
        });
    }
}
