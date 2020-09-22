import {AbstractView} from "sabre-ngv-app/app/AbstractView";
import {AbstractModel} from "sabre-ngv-app/app/AbstractModel";
import {Template} from 'sabre-ngv-core/decorators/classes/view/Template';
import {CssClass} from 'sabre-ngv-core/decorators/classes/view/CssClass';
import {WithDrawer} from "sabre-ngv-app/app/widgets/drawer/mixins/WithDrawer";
import {WithDrawerOptions} from "sabre-ngv-app/app/widgets/drawer/mixins/WithDrawerOptions"
import {Initial} from 'sabre-ngv-core/decorators/classes/Initial';
import {Mixin} from 'sabre-ngv-core/decorators/classes/Mixin';

import {AbstractViewOptions} from "sabre-ngv-app/app/AbstractViewOptions";
import {ViewDescriptor} from "sabre-ngv-app/_types";
import { RSResultPanel } from "./RSResultPanel";
import { SampleResult } from "../../models/SampleResult";
import { DrawerDescriptorOptions } from "./DrawerDescriptorOptions";

@Mixin(WithDrawer)
@Initial<DrawerDescriptorOptions>({
    drawerDescriptor: RSResultPanel
})

@Template('com-sabre-tn-redapp-example-showcase-mod:RSResultRow')
@CssClass('flight-row flight-novice-row')
export class RSResultRow extends AbstractView<SampleResult> implements WithDrawer<RSResultPanel> {
    drawerDescriptor: ViewDescriptor<RSResultPanel>;
    openDrawer: () => void;
    closeDrawer: () => void;
    clopenDrawer: () => void;
    getDrawer: () => RSResultPanel;
    toggleDrawer: () => void;
}

