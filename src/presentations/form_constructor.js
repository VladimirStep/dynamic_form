import React from 'react';
import { Field, FieldArray } from 'redux-form';
import styled from 'styled-components';
import { FormFieldType } from "../redusers/actions";
import OptionsConstructor from './options_constructor';

const FormConstructorSection = styled.section`
        flex-basis: 32%;
        padding: 20px;
        background-color: #eeeeee;
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
        this.props.addField(values);
        this.props.reset('constructor');
    }

    render() {
        const {handleSubmit, pristine, reset, submitting} = this.props;

        return (
            <FormConstructorSection>
                <h3>Form Constructor</h3>
                <form onSubmit={handleSubmit(this.submitForm)}>
                    <div>
                        <label htmlFor="fieldName">Field name</label>
                        <div>
                            <Field name='fieldName' id='fieldName' component='input' type='text' />
                        </div>
                    </div>
                    <div>
                        <label htmlFor='fieldLabel'>Field label</label>
                        <div>
                            <Field name='fieldLabel' id='fieldLabel' component='input' type='text' />
                        </div>
                    </div>
                    <div>
                        <label htmlFor='fieldType'>Field type</label>
                        <div>
                            <Field name='fieldType' id='fieldType' component='select'>
                                <option></option>
                                { Object.values(FormFieldType).map((type, index) =>
                                    <option key={index} value={type}>{type}</option>
                                )}
                            </Field>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="options">Options</label>
                        <FieldArray name='options' component={OptionsConstructor} />
                    </div>
                    <div>
                        <label htmlFor="isRequired">Required</label>
                        <Field name='isRequired' id='isRequired' component='input' type='checkbox' />
                    </div>
                    <div>
                        <button type='submit' disabled={pristine || submitting}>Add Field</button>
                        <button type='button' disabled={pristine || submitting} onClick={reset}>Clear</button>
                    </div>
                </form>
            </FormConstructorSection>
        );
    }
}

export default FormConstructor;