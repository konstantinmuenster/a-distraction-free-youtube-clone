import React from 'react';
import styled from 'styled-components';

const videoDescription = (props) => {
    const Desc = styled.p`
        font-size: .75rem;
        line-height: 1.75;
        color: #282828;
        @media screen and (min-width: 768px) {
            margin-top: 3rem;
        }
    `;
    const ShowMore = styled.button`
        width: auto;
        height: auto;
        padding: 0;
        background: none;
        margin: 1rem 0 5rem 0;
        border: none;
        outline: none;
        font-size: .75rem;
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: +2px;
        color: #282828;
    `;
    return(
        <>
        <Desc>
            <p>This is the entire history of Britain in a nutshell. From Anglo Saxons, Vikings, conquests, tea, the British empire, and current events.</p>
            <p>Follow US: https://twitter.com/VC3Production</p>
            <p>How long did it take you to make this video? Short answer: Too Bleeping Long (well over 100 hours as I</p>
        </Desc>
        <ShowMore 
            id="showMore"
            type="button"
            name="showMore">Show More</ShowMore>
        </>
    );
}

export default videoDescription;