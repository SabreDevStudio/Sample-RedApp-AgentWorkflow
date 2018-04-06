import {AbstractModel} from 'sabre-ngv-app/app/AbstractModel'
import {Initial} from 'sabre-ngv-core/decorators/classes/Initial';
import {AbstractModelOptions} from 'sabre-ngv-app/app/AbstractModelOptions';
import {DataOptions} from 'sabre-ngv-app/app/common/data/dto/DataOptions';

@Initial<AbstractModelOptions>({
    autoPropagateData: true,
    nonLazyMembers: [
        'field1',
        'field2'
    ]
})

export class SampleResult extends AbstractModel {

    constructor(public result: any) {
        super(result);
    };

    getField1(): string {
        return <string>this.get('field1');
    }

    getField2(): string {
        return <string>this.get('field2');
    }
}
