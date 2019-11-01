import React, { useEffect } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import  queryString  from 'query-string';
import axios from '../axios.js';
import * as actionTypes from '../store/actions';

import Video from '../components/Video';
import VideoDetails from '../components/VideoDetails';
import Rating from '../components/Rating';
import VideoDescription from '../components/VideoDescription';

const DataWrapper = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 768px) {
        margin-top: 2rem;
        flex-direction: row;
        justify-content: space-between;
    }
`;

const Watch = (props) => {

    // Parse query from URL
    const videoId = queryString.parse(props.location.search).id;

    // Get currentVideo from state
    let [currentVideo] = props.videos.filter(video => video.id === videoId);

    // Deconstruct props to pass saveSearchResults separately as an useEffect dependency
    const saveSearchResults = props.saveSearchResults;
    
    // If currentVideo is not in state, fetch its data via API
    useEffect(() => {
        if (!currentVideo) {
            const videoApi = `/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${process.env.REACT_APP_API_KEY}`;
            axios.get(videoApi)
                 .then(res => res.data.items)
                 .then(videos => saveSearchResults(videos))
                 .catch(error => console.log(error));
        }
    }, [videoId, saveSearchResults, currentVideo])

    return(
        <>
        {currentVideo ? 
            <>
            <Video videoId={currentVideo.id} />
            <DataWrapper>
                <VideoDetails 
                    title={currentVideo.snippet.title} 
                    channel={currentVideo.snippet.channelTitle} 
                    publishedAt={currentVideo.snippet.publishedAt} 
                    viewCount={currentVideo.statistics.viewCount} />
                <Rating likes={currentVideo.statistics.likeCount} dislikes={currentVideo.statistics.dislikeCount} />
            </DataWrapper>
            <VideoDescription description={currentVideo.snippet.description} /> 
            </> : <p>Loading...</p>}
        </>
    );
}

const mapStateToProps = state => ({ videos: state.searchResults });

const mapDispatchToProps = dispatch => {
    return {
        saveSearchResults: (data) => dispatch({
            type: actionTypes.SAVE_SEARCH_RESULTS,
            results: data
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Watch));