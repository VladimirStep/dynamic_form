import React from 'react';
import { FormFieldType } from '../redusers/actions';

class RenderConstructorField extends React.Component {
    render() {
        const {input, label, type, options, meta: { touched, error, warning }} = this.props;
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

        if (type === FormFieldType.CHECKBOX) {
            output = <div>
                <label htmlFor={input.name}>{label}</label>
                <input {...input} id={input.name} type={type} />
                {warning && <span>{warning}</span>}
            </div>
        }

        if (type === FormFieldType.SELECT) {
            output = <div>
                <label htmlFor={input.name}>{label}</label>
                <select {...input} id={input.name}>
                    <option></option>
                    {options.map((option, index) =>
                        <option key={index} value={option}>{option}</option>
                    )}
                </select>
                {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            </div>
        }

        return output;
    }
}

export default RenderConstructorField;