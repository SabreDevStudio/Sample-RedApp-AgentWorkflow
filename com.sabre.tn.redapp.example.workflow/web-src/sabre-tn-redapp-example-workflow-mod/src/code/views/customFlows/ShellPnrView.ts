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
@Template('sabre-tn-redapp-example-workflow-mod:ShellPNRView')
@CssClass('profile-details-view')
export class ShellPnrView extends AbstractView<AbstractModel> {

    initialize(options: AbstractActionOptions) {
        super.initialize(options);
    }

    selfSubmitPnrAction(resolve): void {
        new Promise(() => {

			this.triggerOnEventBus('close-modal');

            let flight: string = this.$('.flight-field').find('.flight-field-cl').val();
            let ticket: string = this.$('.ticket-field').find('.ticket-field-cl').val();
            let name: string = this.$('.name-field').find('.name-field-cl').val();
            let agentInfo: string = this.$('.agentinfo-field').find('.agentinfo-field-cl').val();
            let phone: string = this.$('.phone-field').find('.phone-field-cl').val();
            let taw: string = this.$('.taw-field').find('.taw-field-cl').val();

            cf(`${flight}`).send().done((cfResponse) => {
                if(!this.checkIfUserLogged(cfResponse)) {
                    resolve();
                }
                cf(`${ticket}`).send().done(() => {
                    cf(`${name}`).send().done(() => {
                        cf(`${agentInfo}`).send().done(() => {
                            cf(`${phone}`).send().done(() => {
                                cf(`${taw}`).send().done(() => {
                                    cf('WP').send().done(() => {
                                        cf('PQ').send().done(() => {
                                            getService(LayerService).showInModal(new MessageView({
                                                model: {message: "PNR created"}
                                            }), {title: "PNR Status"}, {display: 'areaView'});
                                        }).fail(() => {
                                            this.handleFailure('PQ');})
                                    }).fail(() => {
                                        this.handleFailure('WP');
                                    })
                                }).fail(() => {
                                    this.handleFailure('TAW');
                                })
                            }).fail(() => {
                                this.handleFailure('Phone');
                            })
                        }).fail(() => {
                            this.handleFailure('agentInfo');
                        })
                    }).fail(() => {
                        this.handleFailure('Name');
                    })
                }).fail(() => {
                    this.handleFailure('Ticket');
                })
            }).fail(() => {
               this.handleFailure('PNR');
            });
        });
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
            model: {message: `${segment} creation failed`}
        }), {title: "PNR Status"}, {display: 'areaView'});
    }
}
