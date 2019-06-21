import {AbstractView} from "sabre-ngv-app/app/AbstractView";
import {Template} from "sabre-ngv-core/decorators/classes/view/Template";
import {AbstractViewOptions} from "sabre-ngv-app/app/AbstractViewOptions";
import {Initial} from "sabre-ngv-core/decorators/classes/Initial";
import {I18nService} from 'sabre-ngv-app/app/services/impl/I18nService';
import {cf,getService} from "../../Context";
import {CssClass} from "sabre-ngv-core/decorators/classes/view/CssClass";
import {AbstractActionOptions} from "sabre-ngv-app/app/common/views/AbstractActionOptions";
import {AbstractModel} from "sabre-ngv-app/app/AbstractModel";
import { NgvPromise } from "sabre-ngv-app/_types";
import { CommandFlow } from "sabre-ngv-app/app/common/data/dto/CommandFlow";
import { CustomSvcRQData } from "../../models/CustomSvcRQData";
import { CustomSvcRQ } from "../../models/CustomSvcRQ";

const i18nService: I18nService = getService(I18nService);

@Initial<AbstractViewOptions>({
    templateOptions: {
        helpers: {
            _t: i18nService.getScopedHelper('sabre-ngv-wizard/translations')
        }
    }
})
@Template('sabre-tn-redapp-example-workflow-mod:HelperFlowsView')
@CssClass('profile-details-view')
export class HelperFlowsView extends AbstractView<AbstractModel> {

    initialize(options: AbstractActionOptions) {
        super.initialize(options);
        // this.getData();
    }

    selfDoFlowAction() {
        console.log("aka");
        console.log(this.$('#selFlow').val());

        let rq = new CustomSvcRQ();
        rq.actionCode = "doTask";
        rq.rqPayload = this.$('#selFlow').val();

                        

        new Promise( (resolve) => {
            let getFlows: NgvPromise<CommandFlow> = cf('NGV://REDAPP/SERVICE/COM.SABRE.TN.REDAPP.EXAMPLE.WORKFLOW.XTPOINTSERVICES.INTERFACES.ICUSTOMSVC:EXECUTE')
                .addRequestDataObject(new CustomSvcRQData(rq))
                .setLocalPreference('silentRequest', true)
                .send();

            getFlows.done((mcf: CommandFlow) => {
                this.triggerOnEventBus('close-modal');
            });
        });

    }

    private getData() {
        let rq = new CustomSvcRQ();
        rq.actionCode = "getFlows";

        new Promise( (resolve) => {
            let getFlows: NgvPromise<CommandFlow> = cf('NGV://REDAPP/SERVICE/COM.SABRE.TN.REDAPP.EXAMPLE.WORKFLOW.XTPOINTSERVICES.INTERFACES.ICUSTOMSVC:EXECUTE')
                .addRequestDataObject(new CustomSvcRQData(rq))
                .send();

            getFlows.done((mcf: CommandFlow) => {
                console.log(mcf.getDataStructs());
                console.log(mcf.getDataObjects());
                this.render();
            });
        });




            
    }

}

