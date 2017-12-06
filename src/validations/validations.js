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

export const mapValidations = (validationsList={}) => {
    let validationFunctionsArray = [];

    Object.entries(validationsList || {}).map((entry) => {
        if (entry[1]) {
            Object.values(FormValidation).map((validationObject) => {
                if (validationObject.name === entry[0]) {
                    validationFunctionsArray.push(validationObject.execFunction);
                }
                return null;
            });
        }
        return null;
    });

    return validationFunctionsArray;
};