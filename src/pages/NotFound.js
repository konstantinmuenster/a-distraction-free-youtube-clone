import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FormattedH2 = styled.h2`
    margin: 5rem auto 3rem auto;
`;

const Wrapper = styled.div`
    a {
        text-decoration: none;
        color: black;
        text-transform: uppercase;
        border-bottom: 2px solid black;
    }
`;

export default () => <Wrapper><FormattedH2>Oops, we found no page for the requested page.</FormattedH2><Link to="/">Back To Home</Link></Wrapper>