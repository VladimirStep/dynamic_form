import React from 'react';
import styled from 'styled-components';
import FormConstructorContainer from '../containers/form_constructor_container';

const ModalWrapper = styled.section`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.6);
    padding: 50px;
`;

const ModalContainer = styled.div`
    position: relative;
    background-color: #ffffff;
    border-radius: 10px;
    max-width: 700px;
    min-height: 500px;
    max-height: 90%;
    overflow-y: scroll;
    margin: 0 auto;
    padding: 20px;
`;

const Close = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    margin: 2px 3px;
    color: #e83029;
    opacity: 0.6;
    border: none;
    background: transparent;
    cursor: pointer;
    font-weight: bold;
    font-size: 30px;
    &:hover {
        opacity: 1;
    }
`;

class ModalWindow extends React.Component {
    constructor(props) {
        super(props);
        this.handleCloseClick = this.handleCloseClick.bind(this)
    }

    handleCloseClick(event) {
        event.preventDefault();
        this.props.closeModal();
    }

    render() {
        if(!this.props.show) {
            return null;
        }

        return (
            <ModalWrapper>
                <ModalContainer>
                    <Close type='button' onClick={this.handleCloseClick}>&times;</Close>
                    <FormConstructorContainer initialValues={this.props.field} />
                </ModalContainer>
            </ModalWrapper>
        );
    }
}

export default ModalWindow;