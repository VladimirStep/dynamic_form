import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import './index.css';
import DynamicFormApp from './presentations/dynamic_form_app';

const allRedusers = {
    form: formReducer
};
const rootReduser = combineReducers(allRedusers);
const store = createStore(rootReduser);

ReactDOM.render(
    <Provider store={ store }>
        <DynamicFormApp />
    </Provider>,
    document.getElementById('root')
);
