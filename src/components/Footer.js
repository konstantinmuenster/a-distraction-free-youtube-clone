import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import Logo from './Logo';

const Footer = styled.footer`
    background: #464646;
    height: 3.75rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
`;

const footer = (props) => (
    <Footer>
        { props.location.pathname !== "/" ? <Logo size="small" colorScheme="light" /> : null }
    </Footer>
);

export default withRouter(footer)