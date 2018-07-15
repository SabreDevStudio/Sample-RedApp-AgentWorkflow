import {Template} from 'sabre-ngv-core/decorators/classes/view/Template';
import {AbstractView} from "sabre-ngv-app/app/AbstractView";
import {ShoppingData} from "sabre-ngv-app/app/responses/shopping/models/ShoppingData";
import {AbstractModel} from "sabre-ngv-app/app/AbstractModel";
import {getService} from "../../Context";
import {FlightSegment} from "sabre-ngv-app/app/common/data/flight/FlightSegment";
import {SrwSyncApi} from "sabre-ngv-app/app/services/impl/SrwSyncApi";
// import {SampleDrawerService} from '../services/SampleDrawerService';
import {SrwAsyncApi} from "sabre-ngv-app/app/services/impl/SrwAsyncApi";
import {ExternalServiceConnector} from "sabre-ngv-app/app/services/impl/ExternalServiceConnector";
import {Bound} from 'sabre-ngv-core/decorators/methods/Bound';
import {CssClass} from 'sabre-ngv-core/decorators/classes/view/CssClass';
import { CustomXTPointService } from "../../common/CustomXTPointService";
import { CustomSvcRQ } from "../../models/CustomSvcRQ";
import { CustomSvcRQData } from "../../models/CustomSvcRQData";
import { CustomSvcRS } from "../../models/CustomSvcRS";
import { Initial } from "sabre-ngv-core/decorators/classes/Initial";
import { AbstractViewOptions } from "sabre-ngv-app/app/AbstractViewOptions";


/*
@Initial<AbstractViewOptions>({
    title: 'Brand Package',
    events: {
        'click .bf-select': 'selectColumn',
        'click .bf-column-title ::stop-event': 'selectColumn',
        'click .cp-passenger-row': 'updateActionButtons',
        'input input[name="cp-travel-date"]' : 'enableSell'
     }
})*/
@CssClass('decisionsupport-widgetview')
@Template('sabre-tn-redapp-example-workflow-mod:Example')
export class LfsTilePopOver extends AbstractView<FlightSegment> {

    selfDrawerContextModelPropagated(availData: FlightSegment) {
        this.getModel().set('availData', JSON.stringify(availData));
        this.getModel().set('ctSEG', true);
        this.getModel().set('ucList', {uc:[{id:'addOTH',desc:'adds OTH segment to current PNR',ft:'HOST, Refresh Trip Summmary'},{id:'openWeb',desc:'Open WebKit View',ft:'JXBrowser, OpenView'},{id:'test',desc:'Custom tests',ft:'Anything'}]})
        this.render();
    }

    selfSomeAction() {
        // this.getModel().set('availData', JSON.stringify(this));
        let rq: CustomSvcRQ = new CustomSvcRQ();
        let actCode = this.$el.find('input[name=optionsUC]:checked').val();
        rq.actionCode = actCode;

        getService(CustomXTPointService).fetchServiceData(new CustomSvcRQData(rq)).done(this.afterSomeActionResponse.bind(this));

        // this.render();
        
    }

    afterSomeActionResponse(dtaResponse: CustomSvcRS) {
        this.getModel().set('availData', JSON.stringify(dtaResponse));
        this.render();
     }

    /*

    @Bound
    private updateModel(data: Object) {
        let response = JSON.parse(data.toString()).responseBody;
        this.getModel().set('externalServiceResponse', {'response': !_.isUndefined(response.payload.data) ? response.payload.data.substring(0, 500) : ''});
        console.log(response.success);
        console.log(response.errors);
        this.render();
    }

    @Bound
    private updateModel2(data: Object) {
        this.getModel().set('swsResponse2', {'response': data.toString().substring(0, 1200)});
        this.render();
    }

    */
}
