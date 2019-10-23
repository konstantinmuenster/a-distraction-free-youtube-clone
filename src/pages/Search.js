import React from 'react';
import styled from 'styled-components';

import SearchBar from '../components/SearchBar';
import Card from '../components/Card';

const search = (props) => {
    const SearchResults = styled.div`
        margin: 3rem auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(15.625rem, 1fr));
        grid-gap: 1.5rem;
        @media screen and (min-width: 768px) {
            margin: 2rem auto;
            grid-gap: 2rem;
        }
    `;
    return(
        <>
        <SearchBar results position="left" />
        <SearchResults>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </SearchResults>
        </>
    );
}

export default search;