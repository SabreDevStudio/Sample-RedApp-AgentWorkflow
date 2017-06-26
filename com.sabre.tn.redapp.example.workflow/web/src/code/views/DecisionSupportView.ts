import {Template} from 'sabre-ngv-core/decorators/classes/view/Template';
import AbstractView = app.AbstractView;
import AbstractViewOptions = app.AbstractViewOptions;
import AbstractModel = app.AbstractModel;
import getService = app.getService;
import Data = app.common.data.dto.Data;
import FlightSegment = app.common.data.flight.FlightSegment;
import {ExtPointService} from '../services/ExtPointService';
import {Bound} from 'sabre-ngv-core/decorators/methods/Bound';
import {ServiceData} from '../models/ServiceData';
import I18nService = app.services.impl.I18nService;
import {Initial} from 'sabre-ngv-core/decorators/classes/Initial';
// import {CaptainsPackageData} from '../models/CaptainsPackageData';
// import {CaptainsPackageSellData} from '../models/CaptainsPackageSellData';
import {LayerService} from 'sabre-ngv-core/services/LayerService';
// import {SuccessfulSellModal} from './SuccessfulSellModal';

const i18nService: I18nService = getService(I18nService);

@Initial<AbstractViewOptions>({
    title: 'Decision Support Widget',
    /* events: {
        'click .bf-select': 'selectColumn',
        'click .bf-column-title ::stop-event': 'selectColumn',
        'click .cp-passenger-row': 'updateActionButtons',
        'input input[name="cp-travel-date"]' : 'enableSell'
     }, */
    templateOptions: {
        helpers: {
            _t: i18nService.getScopedHelper('sabre-tn-redapp-example-wokflow-mod/translations')
        }
    }
})
@Template('sabre-tn-redapp-example-workflow-mod:DecisionSupportView')
export class DecisionSupportView extends AbstractView<AbstractModel> {

    private modalOpened: boolean;
    private drawerSegmentArrivalDate: string;
    private flightSeg: FlightSegment;
    private tplData: string;

    constructor(options?: AbstractViewOptions) {
        super(options);
    }

    // selfCloseAction() {
    //     this.clearFormData();
    // }

    /*
    selfDismissAction(): void {
        this.clearFormData();
    }

    selfShownInModal(): void {
        if (this.modalOpened) {
            this.clearFormData();
        }
        getService(CPOffersService).fetchCaptainPackageData().done(this.handleExtPointData);
    }
    */
    selfDrawerContextModelPropagated(flight: FlightSegment): void {
        this.flightSeg = flight;
        this.drawerSegmentArrivalDate = flight.getFormattedArrivalDate ? getService('dates').toSabrishDate(moment(flight.getFormattedArrivalDate()).add(3, 'days')) : '';
        if (flight.getOriginIata().endsWith('DFW')) {
            this.tplData = 'testing template data under DFW';
            this.getModel().set('ctCO2', true);
        } else {
            this.tplData = JSON.stringify(flight);
            this.getModel().set('ctDEV', true);
        }

        this.getModel().set('tplData', this.tplData);
        this.render();
    }

    selfShownInModal(): void {
        getService(ExtPointService).fetchServiceData().done(this.handleExtPointData);
    }

    @Bound
    private handleExtPointData(dtModel: ServiceData) {

        this.getModel().set('svcData', dtModel.getStringifiedPayload());
        // this.getModel().set('svcData', 'bbb');
        this.bindLifetime('svcData', {kill: false});
        this.render();
    }

}
