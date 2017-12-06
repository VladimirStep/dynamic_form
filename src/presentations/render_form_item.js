import React from 'react';
import { FormFieldType } from '../redusers/actions';
import RemoveButtonContainer from '../containers/remove_button_container';
import ReorderButtonsContainer from '../containers/reorder_buttons_container';
import EditButtonContainer from '../containers/edit_button_container';
import styled from 'styled-components';

const Error = styled.div`
    display: block;
    color: #9e1419;
    font-size: 0.8em;
    font-weight: bold;
`;

const Row = styled.div`
    width: 100%;
    > div {
        display: inline-block;
        vertical-align: top;
    }
`;

const InputWrap = styled.div`
    padding: 5px 0;
    min-height: 75px;
`;

const ButtonGroup = styled.div`
    margin-top: 1.5em;
    > div {
        display: inline-block;
    }
`;

const CheckBoxWrap = styled.div`
    padding: 5px 0;
`;

class RenderFormItem extends React.Component {
    render() {
        const { field: { fieldLabel, fieldType, options }, index,
            input, meta: { touched, error, warning } } = this.props;

        let output = null;

        if (fieldType === FormFieldType.SELECT) {
            output = <InputWrap>
                <label htmlFor={input.name}>{fieldLabel}</label>
                <div>
                    <select {...input} id={input.name}>
                        <option></option>
                        {options.map((option, index) =>
                            <option key={index} value={option.optionValue}>{option.optionLabel}</option>
                        )}
                    </select>
                    {touched && ((error && <Error>{error}</Error>) || (warning && <Error>{warning}</Error>))}
                </div>
            </InputWrap>
        } else if (fieldType === FormFieldType.RADIO) {
            output = <div>
                <label htmlFor={input.name}>{fieldLabel}</label>
                {options.map((option, index) =>
                    <label key={index}>
                        <input name={input.name}
                               value={option.optionValue}
                               type={fieldType}
                               checked={input.value === option.optionValue}
                               onChange={input.onChange}
                        />
                        {option.optionLabel}
                    </label>
                )}
                {touched && ((error && <Error>{error}</Error>) || (warning && <Error>{warning}</Error>))}
            </div>
        } else {
            output = <InputWrap>
                <label htmlFor={input.name}>{fieldLabel}</label>
                <div>
                    <input {...input} id={input.name} type={fieldType} />
                    {touched && ((error && <Error>{error}</Error>) || (warning && <Error>{warning}</Error>))}
                </div>
            </InputWrap>
        }

        return (
            <Row>
                {output}
                <ButtonGroup>
                    <EditButtonContainer index={index} />
                    <ReorderButtonsContainer index={index} />
                    <RemoveButtonContainer index={index} />
                </ButtonGroup>
            </Row>
        );
    }
}

export default RenderFormItem;