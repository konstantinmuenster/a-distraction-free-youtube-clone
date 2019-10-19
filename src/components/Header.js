import React from 'react';
import styled from 'styled-components';

import { Content } from './Layout';

const header = (props) => {
    const Wrapper = styled.header`
        background: red;
        height: 3.75rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center
    `;
    const NavigationItem = styled.a`
        display: flex;
        flex-direction: row;
        align-items: center;
        &:hover {
            cursor: pointer
        }
    `;
    const Icon = styled.img`
        margin-right: .5rem;
    `;
    const Link = styled.span`
        color: white;
        font-size: .75rem;
        text-transform: uppercase;
        letter-spacing: +2px;
        font-weight: bold;
    `;

    const Navigation = (props.showNav)
        ? <NavigationItem>
            <Icon src={require("../assets/left-chevron.svg")} height="40" width="20" />
            <Link>Back</Link>
          </NavigationItem>
        : null;

    return(
        <Wrapper>
            <Content>
                {Navigation}
            </Content>
        </Wrapper>
    );
}

export default header;