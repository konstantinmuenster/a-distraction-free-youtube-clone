import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';

const footer = (props) => {
    const Footer = styled.footer`
        background: #464646;
        height: 3.75rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center
    `;
    return(
        <Footer>
            {!props.home ? <Logo size="small" colorScheme="light" /> : null}
        </Footer>
    );
}

export default footer;