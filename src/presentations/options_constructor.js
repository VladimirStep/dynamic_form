import React from 'react';
import { Field } from 'redux-form';

class OptionsConstructor extends React.Component {
    render() {
        const { fields } = this.props;

        return (
            <div>
                <label htmlFor="options">Options</label>
                {fields.map((option, index) =>
                    <div key={index}>
                        <label htmlFor={`${option}.optionLabel`}>Option name</label>
                        <div>
                            <Field name={`${option}.optionLabel`} id={`${option}.optionLabel`} component='input' type='text' />
                        </div>
                        <label htmlFor={`${option}.optionValue`}>Option value</label>
                        <div>
                            <Field name={`${option}.optionValue`} id={`${option}.optionValue`} component='input' type='text' />
                        </div>
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