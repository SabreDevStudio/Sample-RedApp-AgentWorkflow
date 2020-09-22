import {getService} from "../Context";
import {LayerService} from "sabre-ngv-core/services/LayerService";
import { HelperFlowsView } from "../views/customFlows/HelperFlowsView";
import { QCCheckView } from "../views/customFlows/QCCheckView";
import { CustomSvcRQ } from "../models/CustomSvcRQ";
import { CustomSvcRQData } from "../models/CustomSvcRQData";
import { CustomXTPointService } from "../common/CustomXTPointService";

export function hintACTCODE() {

 let rq = new CustomSvcRQ();
        rq.actionCode = "getFlows";

        let qcOptions = {
            title: 'Quality control tracker',
            actions: [{
                className: 'app.common.views.Button',
                caption: 'Cancel',
                actionName: 'cancel',
                type: 'secondary'
            }, {
                className: 'app.common.views.Button',
                caption: 'Submit',
                actionName: 'submit-pnr',
                type: 'secondary'
            }]
        };

        //let tenDaysAheadFlight = '1' + datesService.getNow().add(10, 'days').format('DDMMM').toUpperCase() + 'LGWKRK';

        getService(CustomXTPointService).fetchServiceData(new CustomSvcRQData(rq)).done((cfResponse) => {

            console.log('aqui');
            console.log(cfResponse);
            console.log(cfResponse.rsPayload);
            console.log(cfResponse.getActionCode());
            console.log(cfResponse.getRsPayload());
            console.log(JSON.stringify(cfResponse));
            let rsDta = JSON.parse(cfResponse.getRsPayload().toString());
            
            //[{"id":"1","label":"label of flow","description":"description of policy","command":"51"},{"id":"2","label":"received from","description":"description of policy","command":"6MYSELF"}];
            //rsDta = cfResponse.getDataStructs()['d.Structure']['o.ExtensionPoint_Summary'];
            console.log(rsDta);
            //console.log(cfResponse.getDataStructs());
            
            getService(LayerService).showInModal(new QCCheckView({
                model: {flows: rsDta} as any
            }), qcOptions , {display: 'areaView'});
    
        });


}