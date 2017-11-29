import React from 'react';
import RenderFormItem from './render_form_item';

class RenderFormItems extends React.Component {
    render() {
        console.log(this.props);
        const { fields } = this.props;

        return (
            <div>
                { fields.map((field, index, fields) =>
                    <RenderFormItem key={index} field={field} index={index} fields={fields} />
                )}
            </div>
        );
    }
}

export default RenderFormItems;