import {Action} from 'redux';
import {effects} from "redux-saga";

import {EventBus} from 'sabre-ngv-app/app/events/EventBus';
import {cf} from '../../Context';
import {SearchFormRequestData} from '../../models/SearchFormRequestData';
import {CustomSvcRQData} from '../../models/CustomSvcRQData';
import {CustomSvcRQ} from '../../models/CustomSvcRQ';

const {takeEvery, put, call, select} = effects;

/**
 * @link https://redux-saga.js.org/
 *
 * @param eventBus
 * @returns {any}
 */
export default function* rootSaga(eventBus: EventBus): any {
    yield [
        submitFormSideEffectSaga(eventBus),
        cancelFormSideEffectSaga(eventBus)
    ];
}

/**
 * When a 'submit' action happens, do a side effect: trigger an event on the passed EventBus
 */
function* submitFormSideEffectSaga(eventBus: EventBus): any {
    yield takeEvery(isSubmitAction, submitActionHandler, eventBus);
}

/**
 * When a 'cancel' action happens, do a side effect: trigger an event on the passed EventBus
 */
function* cancelFormSideEffectSaga(eventBus: EventBus): any {
    yield takeEvery(isCancelAction, cancelActionHandler, eventBus);
}

/**
 * Predicate used to filter the actions
 */
function isSubmitAction(action: Action): boolean {
    return action.type === 'submit';
}

/**
 * Predicate used to filter the actions
 */
function isCancelAction(action: Action): boolean {
    return action.type === 'cancel';
}

/**
 * Submit action handler
 */
export function* submitActionHandler(eventBus: EventBus, action: Action): any {
    const state = yield select();

    let rq = new CustomSvcRQ();
    rq.actionCode = "dbQuery";
    rq.rqPayload = "";
    let commandFlow = cf('NGV://REDAPP/SERVICE/COM.SABRE.TN.REDAPP.EXAMPLE.SHOWCASE.XTPOINTSERVICES.INTERFACES.ICUSTOMSVC:EXECUTE')
        .addRequestDataObject(new CustomSvcRQData(rq))
        .send();
        //.addRequestDataObject(new SearchFormRequestData(state))

        // clean and close form after submit
    yield put({type: 'cancel'});
}

/**
 * Trigger 'cancel' event
 */
export function* cancelActionHandler(eventBus: EventBus, action: Action): any {
    yield eventBus.trigger('close-form');
}