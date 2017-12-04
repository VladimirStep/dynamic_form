import React from 'react';
import styled from 'styled-components';
import { Field } from 'redux-form';
import RenderFormItem from './render_form_item';
import { mapValidations } from '../validations/validations';

const FormViewSection = styled.section`
    flex-basis: 68%;
    padding: 20px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

class FormView extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(values) {
        console.log(values);
    }

    render() {
        const {handleSubmit, pristine, reset, submitting, fields} = this.props;

        return (
            <FormViewSection>
                <h3>My form</h3>
                <form onSubmit={handleSubmit(this.submitForm)}>
                    {fields.map((field, index) => {
                            const validations = mapValidations(field.validations);
                            return <Field key={index}
                                          name={field.fieldName}
                                          component={RenderFormItem}
                                          field={field}
                                          index={index}
                                          fields={fields}
                                          validate={validations}
                            />;
                        }
                    )}
                    <div>
                        <button type='submit' disabled={pristine || submitting}>Submit</button>
                        <button type='button' disabled={pristine || submitting} onClick={reset}>Clear</button>
                    </div>
                </form>
            </FormViewSection>
        );
    }
}

export default FormView;