import React from 'react';

class EditButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        event.preventDefault();
        this.props.openModal();
    }

    render() {
        return (
            <button type='button' onClick={this.handleClick}>Edit</button>
        );
    }
}

export default EditButton;