import React from 'react';
import styled from 'styled-components';

import VideoDetails from './VideoDetails';

const Wrapper = styled.div`
    margin: auto;
    padding: 1rem;
    background: #f8f8f8;
    width: 100%;
    height: auto;
    min-height: 7.5rem;
    border-radius: .375rem;
    box-shadow: rgba(0,0,0,.16) 0 10px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (min-width: 768px) {
        min-height: 10rem;
    }
    &:hover {
        cursor: pointer;
        box-shadow: rgba(0,0,0,.16) 0 10px 16px;
    }
`;

const card = (props) => (
    <Wrapper onClick={props.clicked}>
        <VideoDetails {...props} />
    </Wrapper>
);

export default card;