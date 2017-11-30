import React from 'react';
import { Field } from 'redux-form';

class OptionsConstructor extends React.Component {
    render() {
        console.log(this.props);
        const { fields } = this.props;

        return (
            <div>
                {fields.map((option, index) =>
                    <div key={index}>
                        <label htmlFor={`${option}.optionName`}>Option name</label>
                        <div>
                            <Field name={`${option}.optionName`} id={`${option}.optionName`} component='input' type='text' />
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