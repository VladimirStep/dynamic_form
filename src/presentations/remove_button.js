import React from 'react';
import styled from 'styled-components';

const Close = styled.button`
    margin: 0 10px;
    padding: 0;
    color: #e83029;
    opacity: 0.6;
    border: none;
    background: transparent;
    cursor: pointer;
    font-weight: bold;
    font-size: 26px;
    &:hover {
        opacity: 1;
    }
`;

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
            <Close type='button' onClick={this.handleClick}>&times;</Close>
        );
    }
}

export default RemoveButton;