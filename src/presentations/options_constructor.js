import React from 'react';
import { Field } from 'redux-form';
import { FormFieldType } from "../redusers/actions";
import * as validations from '../validations/constructor_validations';
import RenderConstructorField from './render_constructor_field';

class OptionsConstructor extends React.Component {
    render() {
        const { fields } = this.props;

        return (
            <div>
                <label htmlFor="options">Options</label>
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
                        <button type='button' onClick={() => fields.remove(index)}>Remove Option</button>
                        <hr/>
                    </div>
                )}
                <button type='button' onClick={() => fields.push({})}>Add Option</button>
            </div>
        );
    }
}

export default OptionsConstructor;