import {AbstractObject} from 'sabre-ngv-app/app/AbstractObject';

import {Data} from 'sabre-ngv-app/app/common/data/dto/Data';
import {CommandFlow} from 'sabre-ngv-app/app/common/data/dto/CommandFlow';
import {LayerService} from 'sabre-ngv-core/services/LayerService';
import {getService} from '../Context';
import { ManualExtensionPointEventData } from "../models/ManualExtensionPointEventData";
import { ExtPointManualView } from "../views/modalDialog/ExtPointManualView";



export class WorkFlowListener extends AbstractObject {

    registerListener() {
        this.listenToEventBus('data-received', this.dataReceivedHandler);
    }


    dataReceivedHandler(data: Data, cf: CommandFlow): void {
        if (data instanceof ManualExtensionPointEventData) {
            if(data.getEventId().toString()=="BypassManual"){
                cf.getFlowControl().setFlowControlAction('SKIP');
                cf.send();
                
            }else{
                getService(LayerService).showInModal(new ExtPointManualView({model:data}), {
                    title: data.getEventId().toString(),
                    actions: [{
                        caption: 'Skip',
                        actionName: 'skip',
                        type: 'secondary',
                        cssClass: 'btn'
                    } as any, {
                        caption: 'Continue',
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

        }
    }
}

