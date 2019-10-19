import React from 'react';
import styled from 'styled-components';

import Video from '../components/Video';
import VideoDetails from '../components/VideoDetails';
import Rating from '../components/Rating';
import VideoDescription from '../components/VideoDescription';

const watch = (props) => {
    const DataWrapper = styled.div`
        margin-top: 18rem;
        display: flex;
        flex-direction: column;
        @media screen and (min-width: 768px) {
            margin-top: 2rem;
            flex-direction: row;
            justify-content: space-between;
        }
    `;
    return(
        <>
        <Video />
        <DataWrapper>
            <VideoDetails />
            <Rating />
        </DataWrapper>
        <VideoDescription />
        </>
    );
}

export default watch;