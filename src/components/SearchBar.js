import React, { useState }  from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import  queryString  from 'query-string';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';

const Wrapper = styled.div`
    margin: 2rem auto;
    @media screen and (min-width: 768px) {
        max-width: 31.25rem;
        margin: 4rem ${props => props.position === "center" ? "auto" : "0"};
    }
`;

const Bar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Input = styled.input`
    width: 100%;
    background: ${props => props.results ? "none" : "#f5f5f5"};
    height: 2.8rem;
    outline: none;
    border: none;
    border-bottom: ${props => props.results ? "2px solid #464646" : "0"};
    border-radius: ${props => props.results ? "0" : "1.625rem"};
    padding: ${props => props.results ? "0 3.5rem 0 0" : "0 3.5rem 0 1.5rem"};
`;

const Button = styled.button`
    width: 3.5rem;
    height: 2.8rem;
    margin-left: -3.5rem;
    background: none;
    background-image: url(${
        props => props.url === "/" ? require("../assets/magnifying-glass.svg") : require("../assets/close.svg")});
    background-repeat: no-repeat;
    background-position: center center;
    border: none;
    outline: none;
    &:hover {
        cursor: pointer;
    }
`;

const Title = styled.h2`
    font-size: .625rem;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: +1.3px;
    margin-bottom: 1rem;
`;

const SearchBar = (props) => {

    // Parse query from URL (if given)
    const params = queryString.parse(props.location.search);
    const initialQuery = (params.q) ? params.q : "";

    // store query in local state
    const [query, setQuery ] = useState(initialQuery);

    // submitting a search query redirects to query-specific search results page
    const submitSearch = (q) => {
        props.history.push({
            pathname: '/search',
            search: '?q=' + q
        });
    }

    // button click should perform different actions respectively - based on whether the user is on the home page or not
    const handleButtonClick = (urlPath) => {
        if (urlPath === "/") {
            props.resetSearchResultsCount();
            props.resetSearchResults();
            submitSearch(query);
        } else {
            setQuery("");
        }
    }

    const handleKeyPress = (key) => {
        if (key === "Enter") {
            props.resetSearchResultsCount();
            props.resetSearchResults();
            submitSearch(query);
        }
    }

    return(
        <Wrapper position={props.position}>
            {(props.location.pathname === "/search") ? <Title>Search Results for</Title> : null}
            <Bar>
                <Input
                    id="search"
                    type="text"
                    name="search"
                    placeholder="Search"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    onKeyPress={(e) => handleKeyPress(e.key)} 
                    results={props.results} />
                {(props.location.pathname === "/" || (props.location.pathname === "/search" && query !== "")) 
                    ? <Button
                        id="submit"
                        type="submit"
                        name="submit" 
                        url={props.location.pathname}
                        onClick={() => handleButtonClick(props.location.pathname)} />
                    : null}
            </Bar>
        </Wrapper>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        resetSearchResultsCount: () => dispatch({ type: actionTypes.RESET_SEARCH_RESULTS_COUNT }),
        resetSearchResults: () => dispatch({ type: actionTypes.RESET_SEARCH_RESULTS })
    }
} 

export default connect(null, mapDispatchToProps)(withRouter(SearchBar));