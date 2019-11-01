import React, { useState } from 'react';
import styled from 'styled-components';

const Desc = styled.p`
    font-size: .75rem;
    line-height: 1.75;
    color: #282828;
    white-space: pre-line;
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
    &:hover {
        cursor: pointer
    }
`;

const VideoDescription = (props) => {

    const [isExpanded, setIsExpanded] = useState(false)

    return(
        <>
        <Desc>
            {(!isExpanded && props.description.length > 200) ? props.description.substring(0, 200) + "..." : props.description}
        </Desc>
        {props.description.length > 200 ? <ShowMore 
            id="showMore"
            type="button"
            name="showMore"
            onClick={() => setIsExpanded(!isExpanded)}>{(!isExpanded) ? "Show More" : "Show Less"}</ShowMore>
        : <div style={{margin: "1rem 0 5rem 0"}}></div>}
        </>
    );
};

export default VideoDescription;