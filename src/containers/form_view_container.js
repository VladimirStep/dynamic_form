import { connect } from "react-redux";
import { reduxForm } from 'redux-form';
import FormView from '../presentations/form_view';

function mapStateToProps(state) {
    return {
        fields: state.formConstructor.fields
    };
}

let FormViewContainer = connect(mapStateToProps)(FormView);

FormViewContainer = reduxForm({
    form: 'customForm'
})(FormViewContainer);

export default FormViewContainer;