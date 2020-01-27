import {AbstractView} from 'sabre-ngv-app/app/AbstractView';
import {AbstractViewOptions} from 'sabre-ngv-app/app/AbstractViewOptions';
import {getService} from '../../Context';
import {I18nService} from 'sabre-ngv-app/app/services/impl/I18nService';

import {CssClass} from 'sabre-ngv-core/decorators/classes/view/CssClass';
import {Initial} from 'sabre-ngv-core/decorators/classes/Initial';
import {Template} from 'sabre-ngv-core/decorators/classes/view/Template';

import {AbstractModel} from  'sabre-ngv-app/app/AbstractModel';

import {Bound} from 'sabre-ngv-core/decorators/methods/Bound';
import { ManualExtensionPointEventData } from "../../models/ManualExtensionPointEventData";
import { CustomSvcRQData } from '../../models/CustomSvcRQData';
import { CustomSvcRQ } from '../../models/CustomSvcRQ';

const i18nService: I18nService = getService(I18nService);

@CssClass('profile-details-view')
@Template('com-sabre-tn-redapp-example-workflow-mod:ModalContent')
@Initial<AbstractViewOptions>({
    templateOptions: {
        helpers: {
            _t: i18nService.getScopedHelper('com_sabre_sdk_sample_workflow/translations')
        }
    }
})
export class ExtPointManualView extends AbstractView<ManualExtensionPointEventData> {

    constructor(options?: AbstractViewOptions) {
        super(options);
        console.log("aqui");
        console.log(this,this.getModel());
        let evtId = this.getModel().getEventId().toString();
        if(evtId=="BeforeShoppingGetClientID"){
            this.getModel().set('getClientID', true);
            this.on('continue-action', this._onSaveAction);
            this.on('skip-action', this._onSkipAction);
            this.on('cancel-action', this._onCancelAction);
        }else{
            this.on('continue-action', this._onContinueAction);
            this.on('skip-action', this._onSkipAction);
            this.on('cancel-action', this._onCancelAction);
    
        }

    }

    @Bound
    _onCancelAction() {
        let model = this.getModel();
        let commandFlow = model.getCF();
        commandFlow.getFlowControl().setFlowControlAction('CANCEL');
        commandFlow.send();

        this.triggerOnEventBus('close-modal');
    }
    
    @Bound
    _onSkipAction() {
        let model = this.getModel();
        let commandFlow = model.getCF();
        commandFlow.getFlowControl().setFlowControlAction('SKIP');
        commandFlow.send();

        this.triggerOnEventBus('close-modal');
    }

    @Bound
    _onContinueAction() {
        let model = this.getModel();
        let commandFlow = model.getCF();
        commandFlow.getFlowControl().setFlowControlAction('CONTINUE');
        commandFlow.send();

        this.triggerOnEventBus('close-modal');
    }

    @Bound
    _onCloseAction() {

        this.triggerOnEventBus('close-modal');
    }

    @Bound
    _onSaveAction() {
        let corpId = this.$el.find('.txt-corp-id').val();
        let actCode = this.$el.find('.txt-account-code').val();
        let model = this.getModel();
        let rq = new CustomSvcRQ();
        rq.actionCode = "addClientID";
        rq.rqPayload = corpId+"#"+actCode;

        let commandFlow = model.getCF(); // .addRequestDataObject(new AirlineRequestData(iataCode));
        commandFlow.addRequestDataObject(new CustomSvcRQData(rq));
        commandFlow.send();
        this.triggerOnEventBus('close-modal');
    }
}


