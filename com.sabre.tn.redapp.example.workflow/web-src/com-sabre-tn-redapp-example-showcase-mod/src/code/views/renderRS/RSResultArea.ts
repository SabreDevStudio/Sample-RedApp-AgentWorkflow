import {ListView} from "sabre-ngv-app/app/widgets/container/ListView";
import {Initial} from 'sabre-ngv-core/decorators/classes/Initial';
import {ListViewOptions} from "sabre-ngv-app/app/widgets/container/ListViewOptions";
import {Mixin} from 'sabre-ngv-core/decorators/classes/Mixin';
import {WithHighlightableChildren} from "sabre-ngv-app/app/common/mixins/WithHighlightableChildren";
import {Template} from 'sabre-ngv-core/decorators/classes/view/Template';
import {CssClass} from 'sabre-ngv-core/decorators/classes/view/CssClass';
import { RSResultRow } from "./RSResultRow";
import { SampleResults } from "../../models/SampleResults";

@Mixin(WithHighlightableChildren)
@CssClass('novice-output-mode-widget')
@Template('com-sabre-tn-redapp-example-showcase-mod:RSResultArea')
@Initial<ListViewOptions>({
    itemsProperty: 'model.sampleResults',
    itemDescriptor: RSResultRow
})

export class RSResultArea extends ListView<SampleResults, RSResultRow> {

    constructor(options?: any) {
        super(options);
    }
}