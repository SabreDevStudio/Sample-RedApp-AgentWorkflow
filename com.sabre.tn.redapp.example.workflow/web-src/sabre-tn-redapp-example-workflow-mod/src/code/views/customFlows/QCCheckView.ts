import {AbstractView} from "sabre-ngv-app/app/AbstractView";
import {Template} from "sabre-ngv-core/decorators/classes/view/Template";
import {AbstractViewOptions} from "sabre-ngv-app/app/AbstractViewOptions";
import {Initial} from "sabre-ngv-core/decorators/classes/Initial";
import {I18nService} from 'sabre-ngv-app/app/services/impl/I18nService';
import {getService} from "../../Context";
import {cf} from '../../Context';
import {CssClass} from "sabre-ngv-core/decorators/classes/view/CssClass";
import {AbstractActionOptions} from "sabre-ngv-app/app/common/views/AbstractActionOptions";
import {LayerService} from "sabre-ngv-core/services/LayerService";
import {MessageView} from "./MessageView";
import {AbstractModel} from "sabre-ngv-app/app/AbstractModel";

const i18nService: I18nService = getService(I18nService);

@Initial<AbstractViewOptions>({
    templateOptions: {
        helpers: {
            _t: i18nService.getScopedHelper('customworkflow-sabre-sdk-sample/translations')
        }
    }
})
@Template('sabre-tn-redapp-example-workflow-mod:QCCheckView')
@CssClass('profile-details-view')
export class QCCheckView extends AbstractView<AbstractModel> {

    initialize(options: AbstractActionOptions) {
        super.initialize(options);
    }

    selfSubmitPnrAction(resolve): void {

        let totChk = 0;
        let size = this.$('.ack-field').length;
        this.$('.ack-field').each((idx,fldFound)=>{
            let fld = $(fldFound);
            let cmd = fld.val();
            let chk = fld.prop('checked');
            let dis = fld.prop('disabled');
            console.log(idx,fld, cmd, chk, dis);
            
            if(!dis && chk){
                cf(cmd).send().done((cfResponse) => {
                    if(idx==0){
                        if(!this.checkIfUserLogged(cfResponse)) {
                            resolve();
                        }
                    }

                }).fail(() => {
                    this.handleFailure('PNR');
                });


            }
            if(chk){
                totChk++;
            }
              
        })

        if(totChk>=size){
            getService(LayerService).showInModal(new MessageView({
                model: {message: "QC Check complete"}
            }), {title: "QC"}, {display: 'areaView'});

        } else {
            this.triggerOnEventBus('close-modal');

        }

       

    }

    checkIfUserLogged(cfResponse): boolean {
        let responseText = cfResponse.getDataStructs()[0]['d.Screen']['d.Text'];
        if (responseText.includes('SIGN IN') || responseText.includes('PROCESSING ERROR DETECTED - L1004')) {
            getService(LayerService).showInModal(new MessageView({
                model: {message: `Command failed, not signed in`}
            }), {title: "PNR Status"}, {display: 'areaView'});
            return false;
        }
        return true;
    }

    handleFailure(segment): void {
        getService(LayerService).showInModal(new MessageView({
            model: {message: `${segment} check failed`}
        }), {title: "PNR Check"}, {display: 'areaView'});
    }
}
