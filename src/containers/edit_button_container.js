import { connect } from "react-redux";
import EditButton from '../presentations/edit_button';
import { showModal } from "../redusers/actions";

function mapDispatchToProps(dispatch, ownProps) {
    return {
        openModal: () => dispatch(showModal(ownProps.index))
    };
}

const EditButtonContainer = connect(null, mapDispatchToProps)(EditButton);

export default EditButtonContainer;