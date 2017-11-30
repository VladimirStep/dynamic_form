import React from 'react';
import { FormFieldType } from '../redusers/actions';

class RenderConstructorField extends React.Component {
    render() {
        console.log(this.props);

        const {input, label, type, meta: { touched, error, warning }} = this.props;
        let output = null;

        if (type === FormFieldType.TEXT) {
            output = <div>
                <label htmlFor={input.name}>{label}</label>
                <div>
                    <input {...input} id={input.name} type={type} />
                    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
                </div>
            </div>
        }

        return output;
    }
}

export default RenderConstructorField;