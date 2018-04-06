
import {Drawer} from "sabre-ngv-app/app/widgets/drawer/views/Drawer";
import {Initial} from 'sabre-ngv-core/decorators/classes/Initial';
import {DrawerOptions} from "sabre-ngv-app/app/widgets/drawer/views/DrawerOptions";
import {AbstractViewOptions} from "sabre-ngv-app/app/AbstractViewOptions";
import { SampleResult } from "../../models/SampleResult";

@Initial<DrawerOptions>({
    drawerGroups: ['search-result']
})
export class RSResultPanel extends Drawer<SampleResult> {
    initialize(options?: AbstractViewOptions): void {
        super.initialize(options);
    }
}