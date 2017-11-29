import React from 'react';
import styled from 'styled-components';
import RenderFormItem from './render_form_item';

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
                            return <RenderFormItem key={index} field={field} index={index} fields={fields} />;
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