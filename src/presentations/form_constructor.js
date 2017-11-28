import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';

const FormConstructorSection = styled.section`
        width: 100%;
        padding: 20px;
        background-color: #eeeeee;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    `;

class FormConstructor extends React.Component {
    render() {
        const {handleSubmit, pristine, reset, submitting} = this.props;

        return (
            <FormConstructorSection>
                <h3>Form Constructor</h3>
                <form onSubmit={handleSubmit}>
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
                                <option value="text input">text input</option>
                                <option value="textarea input">textarea input</option>
                                <option value="select">select</option>
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

export default reduxForm({
    form: 'constructor'
})(FormConstructor);