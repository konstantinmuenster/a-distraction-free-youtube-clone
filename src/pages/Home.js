import React from 'react';
import styled from 'styled-components';

import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';

const HomeContentWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Headline = styled.h2`
    margin: 3rem auto 1.75rem;
    text-align: center;
    font-size: 1.125rem;
    @media screen and (min-width: 768px) {
        margin: 7rem auto 1.75rem;
    }
`;

const SubHeadline = styled.h3`
    margin-top: 3rem;
    font-size: .875rem;
    text-align: center;
`;

const Description = styled.p`
    font-size: .875rem;
    text-align: center;
    line-height: 1.75;
`;

const PoweredByNotice = styled.p`
    margin-top: 3.5rem;
    margin-bottom: 3rem;
    font-size: .75rem;
    text-align: center;
`;

const home = () => (
    <HomeContentWrapper>
        <div>
            <Logo margin="4rem" />
            <Headline>What's on your mind?</Headline>
            <SearchBar position="center" />
        </div>
        <div>
            <SubHeadline>About This App</SubHeadline>
            <Description>
            No thumbnails. No recommendations.<br/>
            The first YouTube Clone that will never again knock you off course. A plain app to focus on the essentials.
            </Description>
            <PoweredByNotice>Powered by the <strong>YouTube</strong> API</PoweredByNotice>
        </div>
    </HomeContentWrapper>
);

export default home;