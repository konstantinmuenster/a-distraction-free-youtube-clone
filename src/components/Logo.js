import React from 'react';
import styled from 'styled-components';

const logo = (props) => {
    const Link = styled.a`
        display: block;
        margin: ${props.margin} auto;
        text-align: center;
        color: ${props.colorScheme === "light" ? "white" : "black"};
    `;
    const H1 = styled.h1`
        font-size: ${props.size === "s" ? ".565rem" : ".875rem"};
        font-weight: 400;
    `;
    const BoldFont = styled.span`
        font-size: ${props.size === "s" ? ".75rem" : "1.125rem"};
        font-weight: 700;
        padding: 0 .2rem .05rem .2rem;
        border-bottom: ${props.size === "s" ? "1px red solid" : "2px red solid"};
    `;
    return (
        <Link>
            <H1>A Distraction-Free <BoldFont>YouTube</BoldFont> Clone</H1>
        </Link>
    );
}

export default logo;