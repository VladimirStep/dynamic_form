import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';

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
        const {handleSubmit, pristine, reset, submitting} = this.props;

        return (
            <FormViewSection>
                <h3>My form</h3>
                <form onSubmit={handleSubmit(this.submitForm)}>

                    <div>
                        <button type='submit' disabled={pristine || submitting}>Submit</button>
                        <button type='button' disabled={pristine || submitting} onClick={reset}>Clear</button>
                    </div>
                </form>
            </FormViewSection>
        );
    }
}

export default reduxForm({
    form: 'customForm'
})(FormView);