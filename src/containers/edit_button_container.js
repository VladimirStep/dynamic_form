import { connect } from "react-redux";
import EditButton from '../presentations/edit_button';
import { showModal } from "../redusers/actions";

function mapDispatchToProps(dispatch) {
    return {
        openModal: () => dispatch(showModal())
    };
}

const EditButtonContainer = connect(null, mapDispatchToProps)(EditButton);

export default EditButtonContainer;