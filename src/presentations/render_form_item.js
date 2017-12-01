import React from 'react';
import { FormFieldType } from '../redusers/actions';

class RenderFormItem extends React.Component {
    render() {
        const { field: { fieldLabel, fieldType, options },
            input, meta: { touched, error, warning } } = this.props;

        let output = null;

        if (fieldType === FormFieldType.SELECT) {
            output = <div>
                <label htmlFor={input.name}>{fieldLabel}</label>
                <select {...input} id={input.name}>
                    <option></option>
                    {options.map((option, index) =>
                        <option key={index} value={option.optionValue}>{option.optionLabel}</option>
                    )}
                </select>
                {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            </div>
        } else if (fieldType === FormFieldType.RADIO) {
            output = <div>
                <label htmlFor={input.name}>{fieldLabel}</label>
                {options.map((option, index) =>
                    <label key={index}>
                        <input name={input.name} value={option.optionValue} type={fieldType} />
                        {option.optionLabel}
                    </label>
                )}
                {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            </div>
        } else {
            output = <div>
                <label htmlFor={input.name}>{fieldLabel}</label>
                <input {...input} id={input.name} type={fieldType} />
                {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            </div>
        }

        return output;
    }
}

export default RenderFormItem;