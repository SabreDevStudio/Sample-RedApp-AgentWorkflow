import {Template} from 'sabre-ngv-core/decorators/classes/view/Template';
import AbstractView = app.AbstractView;
import AbstractViewOptions = app.AbstractViewOptions;
import AbstractModel = app.AbstractModel;
import getService = app.getService;
import Data = app.common.data.dto.Data;
import FlightSegment = app.common.data.flight.FlightSegment;
import {ExtPointService} from '../services/ExtPointService';
import {Bound} from 'sabre-ngv-core/decorators/methods/Bound';
import I18nService = app.services.impl.I18nService;
import {Initial} from 'sabre-ngv-core/decorators/classes/Initial';
import {LayerService} from 'sabre-ngv-core/services/LayerService';

const i18nService: I18nService = getService(I18nService);

@Initial<AbstractViewOptions>({
    title: 'Captains Package',
    // events: {
    //     'click .bf-select': 'selectColumn',
    //     'click .bf-column-title ::stop-event': 'selectColumn',
    //     'click .cp-passenger-row': 'updateActionButtons',
    //     'input input[name="cp-travel-date"]' : 'enableSell'
    //  },
    // templateOptions: {
    //     helpers: {
    //         _t: i18nService.getScopedHelper('sabre-tn-redapp-example-shopmodule/translations')
    //     }
    // }
})
@Template('sabre-tn-redapp-example-workflow-mod:DecisionSupportView')
export class ResultPanelView extends AbstractView<AbstractModel> {

    constructor(options?: AbstractViewOptions) {
        super(options);
    }

    selfShownInModal(): void {

       // getService(ExtPointService).fetchServiceData().done(this.handleExtPointData);
    }

    selfDrawerContextModelPropagated(flight: FlightSegment): void {
        // this.drawerSegmentArrivalDate = flight.getFormattedArrivalDate ? getService('dates').toSabrishDate(moment(flight.getFormattedArrivalDate()).add(3, 'days')) : '';
    }


}
