import React from 'react';
import styled from 'styled-components';

import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';

const home = (props) => {
    const Headline = styled.h2`
        margin: 7rem auto 1.75rem;
        text-align: center;
        font-size: 1.125rem;
    `;

    const SubHeadline = styled.h3`
        margin-top: 10rem;
        font-size: .875rem;
        text-align: center;
        @media screen and (min-width: 768px) {
            margin-top: 16rem;
        }
    `;

    const Description = styled.p`
        font-size: .875rem;
        text-align: center;
        line-height: 1.75;
    `;

    const PoweredByNotice = styled.p`
        margin-top: 3.5rem;
        font-size: .75rem;
        text-align: center;
    `;

    return(
        <>
        <Logo margin="4rem" />
        <Headline>What's on your mind?</Headline>
        <SearchBar placeholder="Search" position="center" setting="home" />
        <SubHeadline>About This App</SubHeadline>
        <Description>
          No thumbnails. No recommendations.<br/>
          The first YouTube Clone that will never again knock you off course. A plain app to focus on the essentials.
        </Description>
        <PoweredByNotice>Powered by the <strong>YouTube</strong> API</PoweredByNotice>
        </>
    );
}

export default home;