import styled from 'styled-components';

export const Content = styled.main`
    width: 100%;
    max-width: 18.75rem;
    margin: 0 auto;
    @media screen and (min-width: 768px) {
        max-width: 38rem;
    }
    @media screen and (min-width: 1200px) {
        max-width: 73.5rem;
    }
`;