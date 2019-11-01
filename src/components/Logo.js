import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
    display: block;
    margin: ${props => props.margin} auto;
    text-align: center;
    color: ${props => props.colorScheme === "light" ? "white" : "black"};
    text-decoration: none;
`;
const H1 = styled.h1`
    font-size: ${props => props.size === "s" ? ".565rem" : ".875rem"};
    font-weight: 400;
`;
const BoldFont = styled.span`
    font-size: ${props => props.size === "s" ? ".75rem" : "1.125rem"};
    font-weight: 700;
    padding: 0 .2rem .05rem .2rem;
    border-bottom: ${props => props.size === "s" ? "1px red solid" : "2px red solid"};
`;

const logo = (props) => {
    return (
        <Link margin={props.margin} colorScheme={props.colorScheme} href="/" title="A distraction-free YouTube Clone">
            <H1 size={props.size}>A Distraction-Free <BoldFont size={props.size}>YouTube</BoldFont> Clone</H1>
        </Link>
    );
}

export default logo;