import { connect } from "react-redux";
import ModalWindow from '../presentations/modal_window';
import { hideModal } from "../redusers/actions";

function mapStateToProps(state) {
    return {
        show: state.modal.showModal
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