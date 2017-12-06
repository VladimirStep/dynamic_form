export const CREATE_CUSTOM_FIELD = 'CREATE_CUSTOM_FIELD';
export const UPDATE_CUSTOM_FIELD = 'UPDATE_CUSTOM_FIELD';
export const DELETE_CUSTOM_FIELD = 'DELETE_CUSTOM_FIELD';
export const REORDER_CUSTOM_FIELDS = 'REORDER_CUSTOM_FIELDS';
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export const FormFieldType = {
    TEXT: 'text',
    NUMBER: 'number',
    EMAIL: 'email',
    PASSWORD: 'password',
    SELECT: 'select',
    CHECKBOX: 'checkbox',
    RADIO: 'radio'
};

export function createCustomField(fieldProperties) {
    return {
        type: CREATE_CUSTOM_FIELD,
        fieldProperties
    };
}

export function updateCustomField(fieldProperties, index) {
    return {
        type: UPDATE_CUSTOM_FIELD,
        fieldProperties,
        index
    };
}

export function deleteCustomField(index) {
    return {
        type: DELETE_CUSTOM_FIELD,
        index
    };
}

export function reorderCustomField(indexA, indexB) {
    return {
        type: REORDER_CUSTOM_FIELDS,
        indexA,
        indexB
    };
}

export function showModal(index) {
    return {
        type: SHOW_MODAL,
        index
    };
}

export function hideModal() {
    return {
        type: HIDE_MODAL
    };
}