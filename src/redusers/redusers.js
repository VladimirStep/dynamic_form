import {
    CREATE_CUSTOM_FIELD,
    UPDATE_CUSTOM_FIELD,
    DELETE_CUSTOM_FIELD,
    REORDER_CUSTOM_FIELDS
} from './actions';

const initialState = {
    fields: []
};

function getValidationNames(validations) {
    let validationNames = [];

    Object.entries(validations || {}).map((entry) => {
        if (entry[1]) {
            validationNames.push(entry[0])
        }
    });

    if (validationNames.length > 0) {
        return validationNames
    }

    return undefined;
}

function formConstructorReduser(state = initialState, action) {
    switch (action.type) {
        case CREATE_CUSTOM_FIELD:
            const { fieldName, fieldLabel, fieldType, options, validations } = action.fieldProperties;

            const newField = {
                fieldName,
                fieldLabel: fieldLabel || fieldName,
                fieldType,
                options,
                validations: getValidationNames(validations)
            };

            return Object.assign({}, state, {
                fields: state.fields.concat(newField)
            });
        default:
            return state;
    }
}

export default formConstructorReduser;