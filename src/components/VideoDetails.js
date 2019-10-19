import React from 'react';
import styled from 'styled-components';

const videoDetails = (props) => {
    const Title = styled.h1`
        font-size: 1rem;
        margin-bottom: .5rem;
    `;
    const Details = styled.div`
        font-size: .75rem;
        line-height: 1.75;
    `;
    return(
        <div>
            <Title>History of Britain in 20 Minutes, the extended version</Title>
            <Details>by VC3 Productions – 1 year ago<br />1.082.212 Views</Details>
        </div>
    );
}

export default videoDetails;