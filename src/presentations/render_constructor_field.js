import React from 'react';
import { FormFieldType } from '../redusers/actions';
import styled from 'styled-components';

const Error = styled.div`
    display: block;
    color: #9e1419;
    font-size: 0.8em;
    font-weight: bold;
`;

const FieldRow = styled.div`
    width: 100%;
    padding: 5px 0;
    min-height: 75px;
`;

const CheckBoxWrap = styled.div`
    padding: 5px 0;
`;

class RenderConstructorField extends React.Component {
    render() {
        const {input, label, type, options, meta: { touched, error, warning }} = this.props;
        let output = null;

        if (type === FormFieldType.TEXT) {
            output = <FieldRow>
                <label htmlFor={input.name}>{label}</label>
                <div>
                    <input {...input} id={input.name} type={type} />
                    {touched && ((error && <Error>{error}</Error>) || (warning && <Error>{warning}</Error>))}
                </div>
            </FieldRow>
        }

        if (type === FormFieldType.CHECKBOX) {
            output = <CheckBoxWrap>
                <input {...input} id={input.name} type={type} />
                <label htmlFor={input.name}>{label}</label>
                {warning && <Error>{warning}</Error>}
            </CheckBoxWrap>
        }

        if (type === FormFieldType.SELECT) {
            output = <FieldRow>
                <label htmlFor={input.name}>{label}</label>
                <div>
                    <select {...input} id={input.name}>
                        <option></option>
                        {options.map((option, index) =>
                            <option key={index} value={option}>{option}</option>
                        )}
                    </select>
                </div>
                {touched && ((error && <Error>{error}</Error>) || (warning && <Error>{warning}</Error>))}
            </FieldRow>
        }

        return output;
    }
}

export default RenderConstructorField;