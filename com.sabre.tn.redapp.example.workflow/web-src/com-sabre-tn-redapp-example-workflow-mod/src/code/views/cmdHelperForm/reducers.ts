import {Reducer} from 'redux';
import {State} from './State';
import {Action} from './Action';
import {UPDATE, CANCEL} from './types';

const INITIAL_STATE: State = {
    customerName: 'provide customer name',
    tripId: 'provide trip id'
};

/**
 * Return a configured root reducer.
 * See Redux docs for a detailed description of the reducers' composition.
 *
 * We do no composition here, just the simplest scenario.
 *
 * @param {State} state: current state
 * @param {Action} action: actio dispatched in React class
 * @returns {State} new state. Mind the immutability!!!!
 */
export const rootReducer: Reducer<State> =
    (state: State = INITIAL_STATE, action: Action): State => {
        const updateName = stateUpdater(state)(action.id);

        switch (action.type) {
            case UPDATE:
                return updateName(action.value);
            case CANCEL:
                return INITIAL_STATE;
            default:
                // note that we do not handle 'submit' action at all here,
                // it'll be passed further by Redux and handled by Saga middleware
                return state;
        }
    };

/**
 * Curried function for partial application,
 * which is a very handy way of reconfiguring the context on the fly
 */
const stateUpdater =
    (state: State) =>
        (key: string) =>
            (value: string | undefined): State => {
                // keep data immutable with Object.assign, _.extend or just ES6 {...state}
                let newState = {...state};
                newState[key] = value;
                return newState;
            };