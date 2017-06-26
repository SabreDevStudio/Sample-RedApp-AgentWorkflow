declare module "sabre-tn-redapp-example-workflow-mod/views/DecisionSupportTile" {
    import Tile = app.widgets.drawer.views.elements.Tile;
    import WithoutFocusOnClick = app.common.mixins.WithoutFocusOnClick;
    import FlightSegment = app.common.data.flight.FlightSegment;
    import TileContent = app.widgets.drawer.views.elements.TileContent;
    export class DecisionSupportTile extends Tile<FlightSegment> implements WithoutFocusOnClick {
        selfDrawerContextModelPropagated(cpa: FlightSegment): void;
        getTileContent(): string;
        getFullContent(): string | TileContent;
    }
}
declare module "sabre-tn-redapp-example-workflow-mod/views/DecisionSupportView" {
    import AbstractView = app.AbstractView;
    import AbstractViewOptions = app.AbstractViewOptions;
    import AbstractModel = app.AbstractModel;
    import FlightSegment = app.common.data.flight.FlightSegment;
    export class DecisionSupportView extends AbstractView<AbstractModel> {
        private modalOpened;
        private drawerSegmentArrivalDate;
        private flightSeg;
        constructor(options?: AbstractViewOptions);
        selfDrawerContextModelPropagated(flight: FlightSegment): void;
    }
}
declare module "sabre-tn-redapp-example-workflow-mod/models/ServiceData" {
    import AbstractModel = app.AbstractModel;
    /**
     * Agent Workflow sample Model
     * Holds "generic" service data received form Redapp Extension Point
     */
    export class ServiceData extends AbstractModel {
        serviceID: string;
        requestedData: string;
        jsonPayload: string;
        constructor(model: any);
        getServiceID(): string;
        getRequestedData(): string;
        getJsonPayload(): string;
    }
}
declare module "sabre-tn-redapp-example-workflow-mod/Main" {
    import { Module } from 'sabre-ngv-core/modules/Module';
    export class Main extends Module {
        init(): void;
    }
}
declare module "sabre-tn-redapp-example-workflow-mod" {
    import { Main } from "sabre-tn-redapp-example-workflow-mod/Main";
    export default class sabre_tn_redapp_example_workflow_mod_Module extends Main {
        getExposedClasses(): Object;
    }
}
