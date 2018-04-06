import { Module } from 'sabre-ngv-core/modules/Module';
import { getService } from './Context';
import { registerService } from "./Context";
import { DtoService } from "sabre-ngv-app/app/services/impl/DtoService";
import { DrawerService } from "sabre-ngv-app/app/services/impl/DrawerService";

import { LargeWidgetDrawerConfig } from 'sabre-ngv-core/configs/drawer/LargeWidgetDrawerConfig';
import { TileWidgetDrawerConfig } from 'sabre-ngv-core/configs/drawer/TileWidgetDrawerConfig';
// import { SmallWidgetDrawerConfig } from 'sabre-ngv-core/configs/drawer/SmallWidgetDrawerConfig';

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

        // const decSupportWidget = new SmallWidgetDrawerConfig( DrawerTile, TilePopOver);
        const decSupportWidget = new LargeWidgetDrawerConfig( DsDrawerTile, DsTilePopOver, cfgAbstractViewOtionsNoAction);
        const lfsResultWidget = new LargeWidgetDrawerConfig( LfsDrawerTile, LfsTilePopOver, cfgAbstractViewOtions);

       // const lfsResultWidget = new TileWidgetDrawerConfig( LfsDrawerTile );

        drwSvc.addConfig( ['shopping-response'], decSupportWidget);
        drwSvc.addConfig( ['flight-segment-common'], lfsResultWidget);


        // command helper button contribution
        getService(ExtensionPointService).addConfig('novice-buttons', new WidgetXPConfig(CmdHelperButton, -1000));
        dtoSvc.registerDataModel('[d.Structure][o.ExtensionPoint_Summary][workflowdata.RSResultSet][0]', SampleResults);
        dtoSvc.registerDataView(SampleResults, RSResultArea);

        const drawer = getService(DrawerService);
        drawer.addConfig('search-result', {
            details: [
                {
                    caption: ('Trip Information'),
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
            ]
        });

        new WorkFlowListener().registerListener();
        dtoSvc.registerDataModel('[d.Structure][o.ExtensionPoint_Summary][workflowdata.ManualExtensionPointEventData]', ManualExtensionPointEventData);
        dtoSvc.registerDataView(ManualExtensionPointEventData, ExtPointManualView);

        //custome extension point service
        registerService(CustomXTPointService);
        dtoSvc.registerDataModel('[d.Structure][o.ExtensionPoint_Summary][workflowdata.CustomSvcRS]', CustomSvcRS);        
    }
}
