import { connect } from "react-redux";
import { formValueSelector } from 'redux-form';
import FormConstructor from '../presentations/form_constructor';
import { createCustomField } from "../redusers/actions";
import { FormFieldType } from '../redusers/actions';

function mapDispatchToProps(dispatch) {
    return {
        addField: (fieldProperties) => dispatch(createCustomField(fieldProperties))
    };
}

function mapStateToProps(state) {
    const selector = formValueSelector('constructor');
    const fieldTypeValue = selector(state, 'fieldType');
    const needOptions = (fieldTypeValue === FormFieldType.RADIO || fieldTypeValue === FormFieldType.SELECT);

    return {
        needOptions
    };
}

const FormConstructorContainer = connect(mapStateToProps, mapDispatchToProps)(FormConstructor);

export default FormConstructorContainer;