import * as React from 'react';
import {connect, Dispatch} from 'react-redux';
import {Store} from 'redux';

import {Action} from './Action';
import {State} from './State';
import {getService} from '../../Context';
import {I18nService, ScopedTranslator} from 'sabre-ngv-app/app/services/impl/I18nService';

const i18n: I18nService = getService(I18nService);
const t: ScopedTranslator = i18n.getScopedTranslator('formplugin-sabre-sdk-sample-form/translations');

export class Component extends React.Component<any, any> {

    render(): JSX.Element {
        return (

            <div className='container-fluid'>
                <div className='tab-pane active'>
                    <form onSubmit={this.props.handleSubmit.bind(this)} ref='form'>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Example select</label>
                            <select className="form-control" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div> 
                        <div className='tab-action-buttons'>
                            <div className='action-buttons'>

                            <button className='cancel-button js_form-cancel btn btn-outline btn-success'
                                    onClick={this.props.handleCancel}>Cancel
                            </button>
                            <button type='submit' className='search-button js_form-submit btn btn-success'>
                                Submit
                            </button>
                            </div>
                        </div>


                    </form>
                </div>
            </div>

        );
    }
}

/**
 * Simple scenario, no fancy mapping here, our state is 1:1 with the form props
 */
const mapStateToProps = (state: Store<State>) => state;

/**
 * Remember, no 'this' in functions defined here!
 * Context is re-bound by Redux#connect
 */
const mapDispatchToProps = (dispatch: Dispatch<any>, ownProp: any) => ({

    // Read react d.ts for all available event types, there're many of them
    handleChange: (event: React.ChangeEvent<HTMLFormElement>): Action =>
        dispatch({type: 'update', id: event.target.id, value: event.target.value}),

    // NOTE: Submit sends an Action which will trigger the saga.
    // Saga will then fire a side effect: an event on the parent event bus
    handleSubmit: (event: React.FormEvent<HTMLFormElement>): Action => {
        event.preventDefault();
        return dispatch({type: 'submit', id: ''});
    },

    handleCancel: (event: React.FormEvent<HTMLFormElement>): Action => {
        event.preventDefault();
        return dispatch({type: 'cancel', id: ''});
    }

});

/**
 * connect component's state with Redux
 */
export const Form = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);
