import { connect } from "react-redux";
import ModalWindow from '../presentations/modal_window';
import { hideModal } from "../redusers/actions";

function mapStateToProps(state) {
    return {
        show: state.modal.showModal,
        field: state.formConstructor.fields[state.modal.fieldIndex]
    };
}

function mapDispatchToProps(dispatch) {
    return {
        closeModal: () => dispatch(hideModal())
    };
}

const ModalWindowContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalWindow);

export default ModalWindowContainer;