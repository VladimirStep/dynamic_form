import { connect } from "react-redux";
import { formValueSelector } from 'redux-form';
import FormConstructor from '../presentations/form_constructor';
import { createCustomField, updateCustomField, hideModal } from "../redusers/actions";
import { FormFieldType } from '../redusers/actions';

function mapDispatchToProps(dispatch) {
    return {
        addField: (fieldProperties) => dispatch(createCustomField(fieldProperties)),
        updateField: (fieldProperties, index) => dispatch(updateCustomField(fieldProperties, index)),
        closeModal: () => dispatch(hideModal())
    };
}

function mapStateToProps(state) {
    const selector = formValueSelector('constructor');
    const fieldTypeValue = selector(state, 'fieldType');
    const needOptions = (fieldTypeValue === FormFieldType.RADIO || fieldTypeValue === FormFieldType.SELECT);
    const editing = (state.modal.fieldIndex >= 0);
    const index = state.modal.fieldIndex;

    return {
        needOptions,
        editing,
        index
    };
}

const FormConstructorContainer = connect(mapStateToProps, mapDispatchToProps)(FormConstructor);

export default FormConstructorContainer;