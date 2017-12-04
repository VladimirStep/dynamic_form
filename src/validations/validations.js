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

export const mapValidations = (validationNamesArray=[]) => {
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