import React from 'react';
import styled from 'styled-components';

const rating = (props) => {
    const Wrapper = styled.div`
        margin: 1rem 0;
        display: flex;
    `;
    const ThumbsUp = styled.div`
        font-size: .75rem;
        display: flex;
        align-items: center;
        margin-right: 2rem;
    `;
    const ThumbsDown = styled.div`
        font-size: .75rem;
        display: flex;
        align-items: center;
    `;
    const Icon = styled.img`
        margin-right: .75rem;    
    `;
    return(
        <Wrapper>
            <ThumbsUp>
                <Icon src={require("../assets/thumbs-up.svg")} alt="Thumbs Up" width="16" height="16" />
                13.232
            </ThumbsUp>
            <ThumbsDown>
                <Icon src={require("../assets/thumbs-down.svg")} alt="Thumbs Down" width="16" height="16" />
                13.232
            </ThumbsDown>
        </Wrapper>
    );
}

export default rating;