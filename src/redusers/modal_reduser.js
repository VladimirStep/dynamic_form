import { SHOW_MODAL, HIDE_MODAL } from './actions';

const initialState = {
    showModal: false
};

function modalReduser(state = initialState, action) {
    switch (action.type) {
        case SHOW_MODAL:
            return Object.assign({}, state, {
                showModal: true,
                fieldIndex: action.index
            });
        case HIDE_MODAL:
            return Object.assign({}, state, {
                showModal: false,
                fieldIndex: undefined
            });
        default:
            return state;
    }
}

export default modalReduser