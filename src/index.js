import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import './index.css';
import formConstructorReduser from './redusers/form_constructor_redusers';
import modalReduser from './redusers/modal_reduser';
import DynamicFormApp from './presentations/dynamic_form_app';

const allRedusers = {
    form: formReducer,
    formConstructor: formConstructorReduser,
    modal: modalReduser
};
const rootReduser = combineReducers(allRedusers);
const store = createStore(
    rootReduser,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={ store }>
        <DynamicFormApp />
    </Provider>,
    document.getElementById('root')
);
