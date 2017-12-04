import React from 'react';

class RemoveButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        this.props.removeField();
    }

    render() {
        return (
            <button type='button' onClick={this.handleClick}>Remove</button>
        );
    }
}

export default RemoveButton;