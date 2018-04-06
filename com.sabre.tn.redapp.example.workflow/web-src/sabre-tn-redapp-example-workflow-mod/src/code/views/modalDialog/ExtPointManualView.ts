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

const i18nService: I18nService = getService(I18nService);

@CssClass('profile-details-view')
// @Template('com-sabre-redapp-example-workflow-extension:AirlineTemplate')
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

        this.on('continue-action', this._onContinueAction);
        this.on('skip-action', this._onSkipAction);
        this.on('cancel-action', this._onCancelAction);
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
        let iataCode = this.$el.find('#iataCode').val();
        let model = this.getModel();

        let commandFlow = model.getCF(); // .addRequestDataObject(new AirlineRequestData(iataCode));

        commandFlow.send();
        this.triggerOnEventBus('close-modal');
    }
}


