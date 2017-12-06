import React from 'react';
import styled from 'styled-components';

const Move = styled.button`
    margin: 0;
    padding: 0;
    color: #244bcd;
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

class ReorderButtons extends React.Component {
    constructor(props) {
        super(props);
        this.handleMoveUp = this.handleMoveUp.bind(this);
        this.handleMoveDown = this.handleMoveDown.bind(this);
    }

    handleMoveUp(event) {
        event.preventDefault();
        this.props.moveUp();
    }

    handleMoveDown(event) {
        event.preventDefault();
        this.props.moveDown();
    }

    render() {
        return (
            <div>
                <Move type='button' onClick={this.handleMoveUp}>&uarr;</Move>
                <Move type='button' onClick={this.handleMoveDown}>&darr;</Move>
            </div>
        );
    }
}

export default ReorderButtons;