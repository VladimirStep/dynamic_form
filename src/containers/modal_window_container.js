import { connect } from "react-redux";
import ModalWindow from '../presentations/modal_window';

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

const ModalWindowContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalWindow);

export default ModalWindowContainer;