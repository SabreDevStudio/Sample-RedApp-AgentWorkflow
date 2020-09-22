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


@CssClass('decisionsupport-widgetview')
@Template('com-sabre-tn-redapp-example-showcase-mod:Example')
export class DsTilePopOver extends AbstractView<ShoppingData> {

    selfDrawerContextModelPropagated(availData: ShoppingData) {
        this.getModel().set('availData', JSON.stringify(availData, null, '\t'));
        this.getModel().set('ctDEC', true);
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
