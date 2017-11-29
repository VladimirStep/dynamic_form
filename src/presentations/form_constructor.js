import React from 'react';
import { Field } from 'redux-form';
import styled from 'styled-components';
import { FormFieldType } from "../redusers/actions";

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
                        <label>Field name</label>
                        <div>
                            <Field name='fieldName' component='input' type='text' />
                        </div>
                    </div>
                    <div>
                        <label>Field label</label>
                        <div>
                            <Field name='fieldLabel' component='input' type='text' />
                        </div>
                    </div>
                    <div>
                        <label>Field type</label>
                        <div>
                            <Field name='fieldType' component='select'>
                                { Object.values(FormFieldType).map((type, index) =>
                                    <option key={index} value={type}>{type}</option>
                                )}
                            </Field>
                        </div>
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