import React from 'react';
import styled from 'styled-components';

const Video = styled.div`
    position: relative;
    height: 0;
    overflow: hidden;
    padding-bottom: 56.25%;
    margin-top: 2rem;
    & iframe, & object, & embed {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`;

const EMBED_URL = 'https://www.youtube.com/embed/';

const video = (props) => (
    <Video>
        <iframe title={props.videoId} src={EMBED_URL + props.videoId} allowFullScreen autoPlay />
    </Video>
);

export default video;