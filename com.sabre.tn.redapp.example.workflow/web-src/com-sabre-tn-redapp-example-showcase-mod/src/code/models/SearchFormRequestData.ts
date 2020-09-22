import {SearchFormRequest} from './SearchFormRequest';
import {RequestData} from 'sabre-ngv-app/app/common/data/dto/request/RequestData';
import {TRIP_ID, CUSTOMER_NAME} from '../common/Consts';

export class SearchFormRequestData extends RequestData<SearchFormRequest> {
    constructor(private payload: any) {
        super();
    }

    getRequestStructure(): SearchFormRequest {
        return {
            'com_sabre_redapp_example3_web_form.SearchFormRqStruct': [{
                'com_sabre_redapp_example3_web_form.tripId': this.payload[TRIP_ID],
                'com_sabre_redapp_example3_web_form.customerName': this.payload[CUSTOMER_NAME]
            }]
        };
    }
}