import React from 'react';
import styled from 'styled-components';

const Edit = styled.button`
    margin: 0 10px;
    padding: 0;
    color: #2d982c;
    opacity: 0.6;
    border: none;
    background: transparent;
    cursor: pointer;
    font-weight: bold;
    font-size: 20px;
    &:hover {
        opacity: 1;
    }
`;

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
            <Edit type='button' onClick={this.handleClick}>Edit</Edit>
        );
    }
}

export default EditButton;