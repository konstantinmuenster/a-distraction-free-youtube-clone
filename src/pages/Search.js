import React, { useEffect } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import  queryString  from 'query-string';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';

import SearchBar from '../components/SearchBar';
import Card from '../components/Card';
import { CardSkeleton } from '../components/Skeletons';
import axios from '../axios';

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

const LoadMore = styled.button` 
    display: block;
    margin: 5rem auto;
    width: 100%;
    max-width: 10rem;
    height: 3.6rem;
    outline: none;
    border: none;
    background: #f5f5f5;
    background: linear-gradient(to right, red 50%, #f5f5f5 50%);
    background-size: 200% 100%;
    background-position:right bottom;
    transition:all 0.2s ease;
    font-size: .9rem;
    text-transform: uppercase;
    font-weight: 700;
    border-radius: 2rem;
    &:hover {
        cursor: pointer;
        background-position:left bottom;
        color: white;
    }
`;

const Search = (props) => {

    // Parse query or channel id from URL
    const params = queryString.parse(props.location.search);
    const searchQuery = params.q;
    const channelId = params.channelId;

    // Deconstruct props to pass them separately as an useEffect dependency
    const saveSearchResults = props.saveSearchResults;
    const searchResultsCount = props.searchResultsCount;

    // On every component mount and update: Check if search query or channel id has changed and if so, update search results
    useEffect(() => {

        // Build search api for parsed search queries or channel ids respectively
        let SEARCH_API;
        if (channelId) {
            SEARCH_API = `/search?part=snippet&videoEmbeddable=true&order=relevance&type=video&maxResults=${searchResultsCount}&channelId=${channelId}&key=${process.env.REACT_APP_API_KEY}`;
        } else if (searchQuery) {
            SEARCH_API = `/search?part=snippet&videoEmbeddable=true&order=relevance&type=video&maxResults=${searchResultsCount}&q=${searchQuery}&key=${process.env.REACT_APP_API_KEY}`;
        }

        // Plain video api without list of video ids
        let VIDEO_API = `/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${process.env.REACT_APP_API_KEY}`;

        axios.get(SEARCH_API)
             .then(res => res.data.items)
             .then(items => {
                 // Fetch further video details for each video of the search results
                 const videoIds = items.map(item => item.id.videoId);
                 VIDEO_API += '&id=' + videoIds.join('%2C');
                 axios.get(VIDEO_API)
                      .then(res => res.data.items)
                      // save videos to store (setTimeout to showcase skeleton loading)
                      .then(videos => setTimeout(() => saveSearchResults(videos), 1000))
                      .catch(error => console.log(error));
             })
             .catch(error => console.log(error));

    }, [searchQuery, channelId, saveSearchResults, searchResultsCount]);

    // If user clicks on card, redirect to the associated video
    const handleClickOnVideo = videoId => props.history.push({ pathname: '/watch', search: '?id=' + videoId });

    // Build array of cards based on search results
    const cards = props.searchResults.map(item => <Card
        key={item.id}
        videoId={item.id}
        title={item.snippet.title} 
        channel={item.snippet.channelTitle}
        publishedAt={item.snippet.publishedAt}
        viewCount={item.statistics.viewCount} 
        clicked={() => handleClickOnVideo(item.id)} />);

    // Build array of skeleton loading rectangles, based on searchResultsCount and actual searchResults in the store
    const cardsSkeleton = Array(props.searchResultsCount - cards.length).fill().map((item, index) => <CardSkeleton key={index} />);

    return(
        <>
        <SearchBar position="left" />
        <SearchResults>
            {cards.length === props.searchResultsCount ? cards : cards.concat(cardsSkeleton)}
        </SearchResults>
        <LoadMore onClick={() => props.increaseSearchResultsCount()}>Load More</LoadMore>
        </>
    );
}


const mapStateToProps = state => {
    return {
        searchResults: state.searchResults,
        searchResultsCount: state.searchResultsCount
    };
}

const mapDispatchToProps = dispatch => {
    return {
        saveSearchResults: (data) => dispatch({
            type: actionTypes.SAVE_SEARCH_RESULTS,
            results: data
        }),
        increaseSearchResultsCount: () => dispatch({ type: actionTypes.INCREASE_SEARCH_RESULTS_COUNT }),
        resetSearchResultsCount: () => dispatch({ type: actionTypes.RESET_SEARCH_RESULTS_COUNT })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Search));