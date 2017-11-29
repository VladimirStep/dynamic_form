import { connect } from "react-redux";
import { reduxForm } from 'redux-form';
import FormConstructor from '../presentations/form_constructor';
import { createCustomField } from "../redusers/actions";

function mapDispatchToProps(dispatch) {
    return {
        addField: (fieldProperties) => dispatch(createCustomField(fieldProperties))
    };
}

let FormConstructorContainer = connect(null, mapDispatchToProps)(FormConstructor);

FormConstructorContainer = reduxForm({
    form: 'constructor'
})(FormConstructorContainer);

export default FormConstructorContainer;