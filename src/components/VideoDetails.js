import React from 'react';
import styled from 'styled-components';
import TimeAgo from 'react-timeago';

const Title = styled.h1`
    font-size: 1rem;
    margin-bottom: .5rem;
`;
const Details = styled.div`
    font-size: .75rem;
    line-height: 1.75;
`;

const videoDetails = (props) => {
    const formattedViewCount = props.viewCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    return(
        <div>
        <Title>{props.title}</Title>
        <Details>by {props.channel} – <TimeAgo date={props.publishedAt} /><br />{formattedViewCount} Views</Details>
        </div>
    );
};

export default videoDetails;