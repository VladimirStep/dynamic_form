import { connect } from "react-redux";
import ReorderButtons from '../presentations/reorder_buttons'
import { reorderCustomField } from "../redusers/actions";

function mapDispatchToProps(dispatch, ownProps) {
    return {
        moveUp: () => dispatch(reorderCustomField(ownProps.index, ownProps.index - 1)),
        moveDown: () => dispatch(reorderCustomField(ownProps.index, ownProps.index + 1))
    };
}

const ReorderButtonsContainer = connect(null, mapDispatchToProps)(ReorderButtons);

export default ReorderButtonsContainer