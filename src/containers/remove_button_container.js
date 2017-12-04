import { connect } from "react-redux";
import RemoveButton from '../presentations/remove_button'
import { deleteCustomField } from "../redusers/actions";

function mapDispatchToProps(dispatch, ownProps) {
    return {
        removeField: () => dispatch(deleteCustomField(ownProps.index))
    };
}

const RemoveButtonContainer = connect(null, mapDispatchToProps)(RemoveButton);

export default RemoveButtonContainer;