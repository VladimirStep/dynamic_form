import React from 'react';
import FormConstructorContainer from '../containers/form_constructor_container';
import FormViewContainer from '../containers/form_view_container';
import styled from 'styled-components';

const AppWrapper = styled.main`
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;
    display: flex;
    background-color: #ffffff;
`;

function DynamicFormApp() {
    return (
        <AppWrapper>
            <FormViewContainer />
            <FormConstructorContainer />
        </AppWrapper>
    );
}

export default DynamicFormApp;