export const required = value => value ? undefined : 'Required';
export const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;
export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined;

export const FormValidation = {
    REQUIRED: { name: 'required', execFunction: required },
    NUMBER: { name: 'number', execFunction: number },
    EMAIL: { name: 'email', execFunction: email }
};

// TODO: Refactor this two functions

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

    return [];
}

export const mapValidations = (validationsObject={}) => {
    const validationNamesArray = getValidationNames(validationsObject);
    let validationFunctionsArray = [];
    validationNamesArray.map((validationName) => {
        Object.values(FormValidation).map((validationObject) => {
            if (validationObject.name === validationName) {
                validationFunctionsArray.push(validationObject.execFunction);
            }
        });
    });
    return validationFunctionsArray;
};