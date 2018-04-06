import {Action as ReduxAction} from 'redux';

/**
 * Our actions need a value sometimes.
 */
export interface Action extends ReduxAction {
    id: string;
    value?: string;
}