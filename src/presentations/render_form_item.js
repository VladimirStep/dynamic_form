import React from 'react';
import { FormFieldType } from '../redusers/actions';

class RenderFormItem extends React.Component {
    render() {
        console.log(this.props);
        const { field, input } = this.props;
        const { fieldLabel, fieldType } = field;
        let output;

        if (fieldType === FormFieldType.TEXT) {
            output = <input {...input} type={fieldType} />
        }

        return output;
    }
}

export default RenderFormItem;