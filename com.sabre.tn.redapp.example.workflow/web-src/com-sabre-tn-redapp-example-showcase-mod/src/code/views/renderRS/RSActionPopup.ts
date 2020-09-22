import {AbstractView} from 'sabre-ngv-app/app/AbstractView';
import {AbstractViewOptions} from 'sabre-ngv-app/app/AbstractViewOptions';
import {getService} from '../../Context';
import {I18nService} from 'sabre-ngv-app/app/services/impl/I18nService';

import {CssClass} from 'sabre-ngv-core/decorators/classes/view/CssClass';
import {Initial} from 'sabre-ngv-core/decorators/classes/Initial';
import {Template} from 'sabre-ngv-core/decorators/classes/view/Template';

import {AbstractModel} from  'sabre-ngv-app/app/AbstractModel';

import {Bound} from 'sabre-ngv-core/decorators/methods/Bound';
import { SampleResult } from "../../models/SampleResult";

import { CustomXTPointService } from "../../common/CustomXTPointService";
import { CustomSvcRQ } from "../../models/CustomSvcRQ";
import { CustomSvcRQData } from "../../models/CustomSvcRQData";

const i18nService: I18nService = getService(I18nService);

@CssClass('profile-details-view')
@Template('com-sabre-tn-redapp-example-showcase-mod:RSActionPopupContent')
@Initial<AbstractViewOptions>({
    templateOptions: {
        helpers: {
            _t: i18nService.getScopedHelper('com_sabre_sdk_sample_workflow/translations')
        }
    }
})
export class RSActionPopup extends AbstractView<SampleResult> {

    constructor(options?: AbstractViewOptions) {
        super(options);

        this.on('continue-action', this._onContinueAction);
        this.on('cancel-action', this._onCancelAction);
    }

    @Bound
    _onCancelAction() {


        this.triggerOnEventBus('close-modal');
    }
    
    @Bound
    _onSkipAction() {


        this.triggerOnEventBus('close-modal');
    }

    @Bound
    _onContinueAction() {

        let rq: CustomSvcRQ = new CustomSvcRQ();
        let name = this.$el.find('.paxname').val();
        let surname = this.$el.find('.paxsurname').val();
        let triptype = this.$el.find('.traveltype').val();
        
        // this.getModel().getField1();

        rq.actionCode = "copyname";
        rq.rqPayload = name+"/"+surname+"#"+triptype;
        getService(CustomXTPointService).fetchServiceData(new CustomSvcRQData(rq)).done(this.afterSomeActionResponse.bind(this));
    }

    afterSomeActionResponse(){
        this.triggerOnEventBus('close-modal');
    }

    @Bound
    _onCloseAction() {

        this.triggerOnEventBus('close-modal');
    }

    @Bound
    _onSaveAction() {

        this.triggerOnEventBus('close-modal');
    }
}