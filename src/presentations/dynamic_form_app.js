import React from 'react';
import FormConstructor from './form_constructor';
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
            <FormConstructor />
        </AppWrapper>
    );
}

export default DynamicFormApp;