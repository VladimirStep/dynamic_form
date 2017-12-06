import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import styled from 'styled-components';
import { FormFieldType } from "../redusers/actions";
import OptionsConstructor from './options_constructor';
import * as validations from '../validations/validations';
import RenderConstructorField from './render_constructor_field';
import { FormValidation } from '../validations/validations';

const FormConstructorSection = styled.section`
        flex-basis: 32%;
        padding: 20px;
        background-color: ${props => props.color};
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    `;

class FormConstructor extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(values) {
        console.log(values);
        if (!this.props.editing) {
            this.props.addField(values);
        } else {
            this.props.updateField(values, this.props.index);
            this.props.closeModal();
        }
        this.props.reset('constructor');
    }

    render() {
        const {handleSubmit, pristine, reset, submitting, needOptions, editing} = this.props;

        return (
            <FormConstructorSection color={editing ? '#ffffff' : '#eeeeee'}>
                <h3>Form Constructor</h3>
                <form onSubmit={handleSubmit(this.submitForm)}>
                    <Field name='fieldName' label='Field name'
                           component={RenderConstructorField}
                           type={FormFieldType.TEXT}
                           validate={validations.required}
                    />
                    <Field name='fieldLabel' label='Field label'
                           component={RenderConstructorField}
                           type={FormFieldType.TEXT}
                    />
                    <Field name='fieldType' label='Field type'
                           component={RenderConstructorField}
                           type={FormFieldType.SELECT}
                           options={Object.values(FormFieldType)}
                           validate={validations.required}
                    />
                    {needOptions &&
                        <FieldArray name='options' component={OptionsConstructor} />
                    }
                    <hr/>
                    <p>Validations:</p>
                    {Object.values(FormValidation).map((validation, index) => {
                        return <Field key={index}
                            name={`validations.${validation.name}`}
                            label={validation.name}
                            component={RenderConstructorField}
                            type={FormFieldType.CHECKBOX}
                        />
                    })}
                    <hr/>

                    {editing &&
                        <div>
                            <button type='submit' disabled={pristine || submitting}>Update Field</button>
                            <button type='button' disabled={pristine || submitting} onClick={reset}>Reset</button>
                        </div>
                    }
                    {!editing &&
                        <div>
                            <button type='submit' disabled={pristine || submitting}>Add Field</button>
                            <button type='button' disabled={pristine || submitting} onClick={reset}>Clear</button>
                        </div>
                    }
                </form>
            </FormConstructorSection>
        );
    }
}

export default reduxForm({
    form: 'constructor'
})(FormConstructor);