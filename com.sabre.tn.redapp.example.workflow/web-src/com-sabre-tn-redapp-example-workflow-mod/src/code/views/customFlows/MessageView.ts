import {AbstractView} from "sabre-ngv-app/app/AbstractView";
import {Template} from "sabre-ngv-core/decorators/classes/view/Template";
import {AbstractViewOptions} from "sabre-ngv-app/app/AbstractViewOptions";
import {Initial} from "sabre-ngv-core/decorators/classes/Initial";
import {I18nService} from 'sabre-ngv-app/app/services/impl/I18nService';
import {getService} from "../../Context";
import {CssClass} from "sabre-ngv-core/decorators/classes/view/CssClass";
import {AbstractActionOptions} from "sabre-ngv-app/app/common/views/AbstractActionOptions";
import {AbstractModel} from "sabre-ngv-app/app/AbstractModel";

const i18nService: I18nService = getService(I18nService);

@Initial<AbstractViewOptions>({
    templateOptions: {
        helpers: {
            _t: i18nService.getScopedHelper('sabre-ngv-wizard/translations')
        }
    }
})
@Template('com-sabre-tn-redapp-example-workflow-mod:MessageView')
@CssClass('profile-details-view')
export class MessageView extends AbstractView<AbstractModel> {

    initialize(options: AbstractActionOptions) {
        super.initialize(options);
    }

}

