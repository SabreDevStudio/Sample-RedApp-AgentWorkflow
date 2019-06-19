
import {Drawer} from "sabre-ngv-app/app/widgets/drawer/views/Drawer";
import {Initial} from 'sabre-ngv-core/decorators/classes/Initial';
import {DrawerOptions} from "sabre-ngv-app/app/widgets/drawer/views/DrawerOptions";
import {AbstractViewOptions} from "sabre-ngv-app/app/AbstractViewOptions";
import { SampleResult } from "../../models/SampleResult";
import {getService} from "../../Context";

import { CustomSvcRQ } from "../../models/CustomSvcRQ";
import { CustomSvcRQData } from "../../models/CustomSvcRQData";
import { CustomXTPointService } from "../../common/CustomXTPointService";
import { CustomSvcRS } from "../../models/CustomSvcRS";

import {LayerService} from 'sabre-ngv-core/services/LayerService';
import { RSActionPopup } from "../renderRS/RSActionPopup";


@Initial<DrawerOptions>({
    drawerGroups: ['search-result']
})
export class RSResultPanel extends Drawer<SampleResult> {
    initialize(options?: AbstractViewOptions): void {
        super.initialize(options);
    }
    selfCustomAction() {
  
       console.log('you clicked some action');
       
        
        let rq: CustomSvcRQ = new CustomSvcRQ();
        let actCode = "resultButton";
        rq.actionCode = actCode;

        getService(CustomXTPointService).fetchServiceData(new CustomSvcRQData(rq)).done(this.afterSomeActionResponse.bind(this));
        
    }
    selfShowPopupAction(){
            console.log('you clicked other hot action');
            getService(LayerService).showInModal(new RSActionPopup({model:this.getModel()}), {
                title: 'Detailed View',
                actions: [{
                    caption: 'Copy to PNR',
                    actionName: 'continue',
                    type: 'success',
                    cssClass: 'btn btn-success'
                } as any, {
                    caption: 'Cancel',
                    actionName: 'cancel',
                    type: 'secondary',
                    cssClass: 'btn'
                } as any]
            }), {
                    display: 'areaView'
                };
    }

    afterSomeActionResponse(dtaResponse: CustomSvcRS) {
        // this.getModel().set('availData', JSON.stringify(dtaResponse));
        // this.render();
     }
}