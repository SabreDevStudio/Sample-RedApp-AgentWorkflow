import { Module } from 'sabre-ngv-core/modules/Module';
import { cf,getService } from './Context';
import { registerService } from "./Context";
import { DtoService } from "sabre-ngv-app/app/services/impl/DtoService";
import { DrawerService } from "sabre-ngv-app/app/services/impl/DrawerService";

import { LargeWidgetDrawerConfig } from 'sabre-ngv-core/configs/drawer/LargeWidgetDrawerConfig';
import { TileWidgetDrawerConfig } from 'sabre-ngv-core/configs/drawer/TileWidgetDrawerConfig';

import { DsDrawerTile } from "./views/decisionSupport/DsDrawerTile";
import { DsTilePopOver } from "./views/decisionSupport/DsTilePopOver";

import { LfsDrawerTile } from "./views/lfsResults/LfsDrawerTile";
import { LfsTilePopOver } from "./views/lfsResults/LfsTilePopOver";
import { ExtensionPointService } from "sabre-ngv-xp/services/ExtensionPointService";
import { WidgetXPConfig } from "sabre-ngv-xp/configs/WidgetXPConfig";
import CmdHelperButton from "./views/cmdHelperForm/CmdHelperButton";
import { ManualExtensionPointEventData } from "./models/ManualExtensionPointEventData";
import { ExtPointManualView } from "./views/modalDialog/ExtPointManualView";
import { WorkFlowListener } from "./common/WorkFlowListener";
import { CustomXTPointService } from "./common/CustomXTPointService";
import { CustomSvcRS } from "./models/CustomSvcRS";

import { RSResultArea } from "./views/renderRS/REResultArea";
import { SampleResults } from "./models/SampleResults";

import {RedAppSidePanelButton} from "sabre-ngv-redAppSidePanel/models/RedAppSidePanelButton";
import {RedAppSidePanelConfig} from 'sabre-ngv-xp/configs/RedAppSidePanelConfig';

import {HelperFlowsView} from './views/customFlows/HelperFlowsView';

import {LayerService} from "sabre-ngv-core/services/LayerService";
import { CustomSvcRQ } from "./models/CustomSvcRQ";
import { CustomSvcRQData } from "./models/CustomSvcRQData";
import { NgvPromise } from "sabre-ngv-app/_types";
import { CommandFlow } from "sabre-ngv-app/app/common/data/dto/CommandFlow";

import {HintXPConfig} from 'sabre-ngv-hints/HintXPConfig';
import {hintACTCODE} from './common/CQHint';

import {ShellPnrView} from "./views/customFlows/ShellPnrView";
import {DatesService} from "sabre-ngv-app/app/services/impl/DatesService";
import {QCCheckView} from "./views/customFlows/QCCheckView";

const datesService: DatesService = getService(DatesService);


export class Main extends Module {
    // protected autoExposeClasses = false;

    init(): void {
        super.init();
        // initialize your module here
        const dtoSvc = getService( DtoService );
        const drwSvc = getService ( DrawerService );

        let cfgAbstractViewOtions = {
            
            title: 'AIR SEGMENT WIDGET',
            maximized: true,
            cssClass: 'dn-panel results-panel-widget-container',
            actions: [
                {
                    caption: ('CANCEL'),
                    actionName: 'close',
                    type: 'secondary',
                    cssClass: 'btn',
                    className: 'app.common.views.Button'
                },
                {
                    caption: ('ACTION'),
                    actionName: 'some',
                    type: 'default',
                    cssClass: 'btn',
                    className: 'app.common.views.Button'
                }]
        };

        let cfgAbstractViewOtionsNoAction = {
            title: 'DECISION SUPPORT WIDGET',
            maximized: true,
            cssClass: 'dn-panel results-panel-widget-container'
        };

 
        // const decSupportWidget = new LargeWidgetDrawerConfig( DsDrawerTile, DsTilePopOver, cfgAbstractViewOtionsNoAction);
        const lfsResultWidget = new LargeWidgetDrawerConfig( LfsDrawerTile, LfsTilePopOver, cfgAbstractViewOtions);

         const decSupportWidget = new LargeWidgetDrawerConfig( DsDrawerTile, DsTilePopOver, cfgAbstractViewOtionsNoAction );

        drwSvc.addConfig( ['shopping-response'], decSupportWidget);
        //include DOCUMENTATION about available "tags" for configuring where the tile widget will appear
        //drwSvc.addConfig( ['flight-segment-common'], lfsResultWidget);
        drwSvc.addConfig( ['shopping-flight-segment'], lfsResultWidget);

        

        // command helper button contribution
        // FIXME!!!!!
        /*


            This example needs to be more consistent on the code used, it mixes React+Saga with AbstractView, etc
            Change the impleentation to use only Abstractview and handlebars templates

        */
        getService(ExtensionPointService).addConfig('novice-buttons', new WidgetXPConfig(CmdHelperButton, -1000));
        dtoSvc.registerDataModel('[d.Structure][o.ExtensionPoint_Summary][workflowdata.RSResultSet][0]', SampleResults);
        dtoSvc.registerDataView(SampleResults, RSResultArea);

        const drawer = getService(DrawerService);
        drawer.addConfig('search-result', {
            details: [
                {
                    caption: ('Traveler Information'),
                    print: '{{#with drawer-context-model}}' +
                    '<span class="drawer-detail-caption">' + ('FIELD1') + ': </span>' +
                    '<span class="drawer-detail-value">' + '{{field1}}' + '</span>' +
                    '{{/with}}'
                },
                {
                    print: '{{#with drawer-context-model}}' +
                    '<span class="drawer-detail-caption">' + ('FIELD2') + ': </span>' +
                    '<span class="drawer-detail-value">' + '{{field2}}' + '</span>' +
                    '{{/with}}'
                }
            ],
            actions: [{
                caption: 'Backend Action',
                actionName: 'custom',
                type: 'secondary',
                cssClass: 'btn',
                className: 'app.common.views.Button'
            },
            {
                caption: 'Details and Copy',
                actionName: 'show-popup',
                type: 'success',
                cssClass: 'btn',
                className: 'app.common.views.Button'
            }]
        });

        new WorkFlowListener().registerListener();
        dtoSvc.registerDataModel('[d.Structure][o.ExtensionPoint_Summary][workflowdata.ManualExtensionPointEventData]', ManualExtensionPointEventData);
        //dtoSvc.registerDataView(ManualExtensionPointEventData, ExtPointManualView);

        //custome extension point service
        registerService(CustomXTPointService);
        dtoSvc.registerDataModel('[d.Structure][o.ExtensionPoint_Summary][workflowdata.CustomSvcRS]', CustomSvcRS);   
        
        const xp = getService(ExtensionPointService);

        const mySidePanelConfig = new RedAppSidePanelConfig([
            //new RedAppSidePanelButton("HELPER FLOWS",'btn btn-secondary',() => this.afterGetFlows([{"id":"1","label":"customer info completed","command":"*A"},{"id":"2","label":"received from completed","command":"6MYSELF"}])),
            
            new RedAppSidePanelButton("PNR SHELL",'btn',() => this.createPNR()),
            new RedAppSidePanelButton("QC CHECK",'btn',() => this.doQCCheck()),
            new RedAppSidePanelButton("RAISE EVT",'btn btn-secondary',() => this.doRaiseEvent())
        ]);
        
        xp.addConfig('redAppSidePanel',mySidePanelConfig);
        xp.addConfig('hintACTCODE', new HintXPConfig(hintACTCODE));        
    }

    private showHelperFlows() {
 


        //let rq: CustomSvcRQ = new CustomSvcRQ();
       
        // this.getModel().getField1();

        //rq.actionCode = "getFlows";
        //rq.rqPayload = "";
       // getService(CustomXTPointService).fetchServiceData(new CustomSvcRQData(rq)).done(this.afterGetFlows.bind(this));


        let rq = new CustomSvcRQ();
        rq.actionCode = "getFlows";

        new Promise( (resolve) => {
            let getFlows: NgvPromise<CommandFlow> = cf('NGV://REDAPP/SERVICE/COM.SABRE.TN.REDAPP.EXAMPLE.WORKFLOW.XTPOINTSERVICES.INTERFACES.ICUSTOMSVC:EXECUTE')
                .addRequestDataObject(new CustomSvcRQData(rq))
                .setLocalPreference('silentRequest', true)
                .send();

            getFlows.done((mcf: CommandFlow) => {
                console.log(mcf.getDataStructs());
                console.log(mcf.getDataStructs()[0]);
                console.log(mcf.getDataStructs()[0]['d.Structure']['o.ExtensionPoint_Summary']);
                console.log(JSON.parse(mcf.getDataStructs()[0]['d.Structure']['o.ExtensionPoint_Summary']));
                //this.afterGetFlows(JSON.parse(mcf.getDataStructs()[0]['d.Structure']['o.ExtensionPoint_Summary']));

                this.afterGetFlows([{"id":"1","label":"label of flow","command":"*A"},{"id":"2","label":"received from","command":"6MYSELF"}]);
            });
        });
        

    }

    private afterGetFlows(dta:any) {
        let mdlOptions = {
            title: "Helper Flows",
            actions: [{
                className: 'app.common.views.Button',
                caption: 'Cancel',
                actionName: 'cancel',
                type: 'secondary'
            }, {
                className: 'app.common.views.Button',
                caption: 'Submit',
                actionName: 'do-flow',
                type: 'primary'
            }]           
        }; 
        console.log(dta);
        getService(LayerService).showInModal(new HelperFlowsView({model:{flows:dta}}),mdlOptions,{display:'areaView'});
    }

    private createPNR(): void {

        let pnrOptions = {
            title: 'Add to PNR',
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

        let tenDaysAheadFlight = '1' + datesService.getNow().add(10, 'days').format('DDMMM').toUpperCase() + 'LGWKRK';

        getService(LayerService).showInModal(new ShellPnrView({
            model: {flight: tenDaysAheadFlight}
        }), pnrOptions , {display: 'areaView'});
    }

    private doQCCheck() {

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

       /*
        cf('NGV://REDAPP/SERVICE/COM.SABRE.TN.REDAPP.EXAMPLE.WORKFLOW.XTPOINTSERVICES.INTERFACES.ICUSTOMSVC:EXECUTE')
        .setLocalPreference('silentRequest', true)
        .addRequestDataObject(new CustomSvcRQData(rq))
        .send()
        .done((cfResponse) => {
            let rsDta = [{"id":"1","label":"label of flow","description":"description of policy","command":"51"},{"id":"2","label":"received from","description":"description of policy","command":"6MYSELF"}];
            //rsDta = cfResponse.getDataStructs()['d.Structure']['o.ExtensionPoint_Summary'];
            console.log('aqui');
            console.log(rsDta);
                console.log(cfResponse.getDataStructs());
                console.log(cfResponse);
            
            getService(LayerService).showInModal(new QCCheckView({
                model: {flows: rsDta} as any
            }), qcOptions , {display: 'areaView'});
    
        });
        */
    }

    private doFileFinish() {

        let rq = new CustomSvcRQ();
        rq.actionCode = "fileFinish";
        
        cf('NGV://REDAPP/SERVICE/COM.SABRE.TN.REDAPP.EXAMPLE.WORKFLOW.XTPOINTSERVICES.INTERFACES.ICUSTOMSVC:EXECUTE')
        .setLocalPreference('silentRequest', true)
        .addRequestDataObject(new CustomSvcRQData(rq))
        .send();
        
    }

    private doRaiseEvent() {

        let rq = new CustomSvcRQ();
        rq.actionCode = "raiseEvent";
        
        cf('NGV://REDAPP/SERVICE/COM.SABRE.TN.REDAPP.EXAMPLE.WORKFLOW.XTPOINTSERVICES.INTERFACES.ICUSTOMSVC:EXECUTE')
        .setLocalPreference('silentRequest', true)
        .addRequestDataObject(new CustomSvcRQData(rq))
        .send();
        
    }
    selfCloseFromHereAction() {
        console.log('Ping from action');
    }
}
