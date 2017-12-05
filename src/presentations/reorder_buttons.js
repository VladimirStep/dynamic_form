import React from 'react';

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
                <button type='button' onClick={this.handleMoveUp}>Up</button>
                <button type='button' onClick={this.handleMoveDown}>Down</button>
            </div>
        );
    }
}

export default ReorderButtons;