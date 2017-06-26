import {Module} from 'sabre-ngv-core/modules/Module';
import getService = app.getService;
import DrawerService = app.services.impl.DrawerService;
import {LargeWidgetDrawerConfig} from 'sabre-ngv-core/configs/drawer/LargeWidgetDrawerConfig';
import {DecisionSupportTile} from './views/DecisionSupportTile';
import {DecisionSupportView} from './views/DecisionSupportView';

import {ResultPanelTile} from './views/ResultPanelTile';
import {ResultPanelView} from './views/ResultPanelView';

import DtoService = app.services.impl.DtoService;
import {ServiceData} from './models/ServiceData';
import {ExtPointService} from './services/ExtPointService';
import registerService = app.registerService;

export class Main extends Module {
    init(): void {
        super.init();
        // initialize your module here
        registerService(ExtPointService);

        // Tile Widgets
        let drawerOptions = {
            title: 'WIZARD STYLE VIEW',
            maximized: true,
            cssClass: 'dn-panel',
            actions: [
                {
                    caption: ('CANCEL'),
                    actionName: 'close',
                    type: 'secondary'
                },
                {
                    caption: ('PREVIOUS'),
                    actionName: 'previous',
                    type: 'default',
                    cssClass: 'btn btn-success next disabled'
                },
                {
                    caption: ('NEXT'),
                    actionName: 'next',
                    type: 'default',
                    cssClass: 'btn btn-success cp-sell'
                }
            ]
        };
        getService(DrawerService).addConfig(['shopping-response'], new LargeWidgetDrawerConfig(DecisionSupportTile, DecisionSupportView, { title: 'Decision Support Details View', maximized: true, cssClass: 'dn-panel' }));
        // getService(DrawerService).addConfig(['shopping'], new LargeWidgetDrawerConfig(ResultPanelTile, ResultPanelView, { title: 'Results Panel Details View', maximized: true, cssClass: 'dn-panel' }));
        getService(DrawerService).addConfig(['shopping'], new LargeWidgetDrawerConfig(ResultPanelTile, ResultPanelView, drawerOptions));
        getService(DtoService).registerDataModel('[d.Structure][o.ExtensionPoint_Summary][workflowdata.ServiceData]', ServiceData);
    }
}
