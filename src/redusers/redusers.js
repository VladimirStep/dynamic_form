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

function removeField(fields, index) {
    let leftFields = fields.slice();
    let removedField;

    if (index > -1) {
        removedField = leftFields.splice(index, 1)
    }

    if (removedField) {
        return {
            removedField,
            leftFields
        };
    }

    return { leftFields };
}

function swapItems(array, indexA, indexB) {
    let newArray = array.slice();
    if (newArray[indexA] && newArray[indexB]) {
        const temp = newArray[indexA];
        newArray[indexA] = newArray[indexB];
        newArray[indexB] = temp;
    }
    return newArray;
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
        case DELETE_CUSTOM_FIELD:
            const { removedField, leftFields } = removeField(state.fields, action.index);

            if (removedField) {
                return Object.assign({}, state, {
                    fields: leftFields
                });
            }

            return state;
        case REORDER_CUSTOM_FIELDS:
            const { indexA, indexB } = action;

            return Object.assign({}, state, {
                fields: swapItems(state.fields, indexA, indexB)
            });
        default:
            return state;
    }
}

export default formConstructorReduser;