import { connect } from "react-redux";
import { registerField, arrayPush, reduxForm, reset } from 'redux-form';
import FormConstructor from '../presentations/form_constructor';

function mapDispatchToProps(dispatch) {
    return {
        registerField: (formName, field, type) => dispatch(registerField(formName, field, type)),
        arrayPush: (formName, field, value) => dispatch(arrayPush(formName, field, value)),
        reset: (formName) => dispatch(reset(formName))
    };
}

let FormConstructorContainer = connect(null, mapDispatchToProps)(FormConstructor);

FormConstructorContainer = reduxForm({
    form: 'constructor'
})(FormConstructorContainer);

export default FormConstructorContainer;