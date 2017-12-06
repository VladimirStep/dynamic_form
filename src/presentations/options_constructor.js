import React from 'react';
import { Field } from 'redux-form';
import { FormFieldType } from "../redusers/actions";
import * as validations from '../validations/validations';
import RenderConstructorField from './render_constructor_field';
import styled from 'styled-components';

const ButtonRow = styled.div`
    width: 100%;
    padding: 5px 0;
`;

class OptionsConstructor extends React.Component {
    render() {
        const { fields } = this.props;

        return (
            <div>
                <hr/>
                <label htmlFor="options">Options:</label>
                {fields.map((option, index) =>
                    <div key={index}>
                        <Field name={`${option}.optionLabel`} label='Option label'
                               component={RenderConstructorField}
                               type={FormFieldType.TEXT}
                               validate={validations.required}
                        />
                        <Field name={`${option}.optionValue`} label='Option value'
                               component={RenderConstructorField}
                               type={FormFieldType.TEXT}
                               validate={validations.required}
                        />
                        <ButtonRow>
                            <button type='button' onClick={() => fields.remove(index)}>Remove Option</button>
                        </ButtonRow>
                    </div>
                )}
                <ButtonRow>
                    <button type='button' onClick={() => fields.push({})}>Add Option</button>
                </ButtonRow>
            </div>
        );
    }
}

export default OptionsConstructor;