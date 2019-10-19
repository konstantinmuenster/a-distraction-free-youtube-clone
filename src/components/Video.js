import React from 'react';
import styled from 'styled-components';

const video = (props) => {
    const Video = styled.div`
        background: rgba(0,0,0,.5);
        width: 100%;
        height: auto;
        min-height: 13.125rem;
        position: absolute;
        top: 6rem;
        left: 0;
        @media screen and (min-width: 768px) {
            position: static;
            margin: 1rem auto;
            max-width: 38rem;
            min-height: 20.68rem;
        }
        @media screen and (min-width: 1200px) {
            position: static;
            margin: 1rem auto;
            max-width: 73.5rem;
            min-height: 40rem;
        }
    `;
    return(
        <Video />
    );
}

export default video;