import React, { Component }  from 'react';
import styled from 'styled-components';

class SearchBar extends Component {

    render() {
        const Wrapper = styled.div`
            margin: 2rem auto;
            @media screen and (min-width: 768px) {
                max-width: 31.25rem;
                margin: 4rem ${this.props.position === "center" ? "auto" : "0"};
            }
        `;

        const SearchBar = styled.div`
            display: flex;
            flex-direction: row;
            align-items: center;
        `;

        const Input = styled.input`
            width: 100%;
            background: ${this.props.results ? "none" : "#f5f5f5"};
            height: 2.8rem;
            outline: none;
            border: none;
            border-bottom: ${this.props.results ? "2px solid #464646" : "0"};
            border-radius: ${this.props.results ? "0" : "1.625rem"};
            padding: ${this.props.results ? "0 3.5rem 0 0" : "0 3.5rem 0 1.5rem"};
        `;

        const Button = styled.button`
            width: 3.5rem;
            height: 2.8rem;
            margin-left: -3.5rem;
            background: none;
            background-image: url(${
                this.props.setting === "home" ? require("../assets/magnifying-glass.svg") : require("../assets/close.svg")});
            background-repeat: no-repeat;
            background-position: ${this.props.setting === "home" ? "center center" : "right center"}
            border: none;
            outline: none;
            &:hover {
                cursor: pointer;
            }
        `;
        
        const Title = styled.h2`
            font-size: .625rem;
            font-weight: 400;
            text-transform: uppercase;
            letter-spacing: +1.3px;
        `;

        return(
            <Wrapper>
                {(this.props.results) ? <Title>Search Results for</Title> : null}
                <SearchBar>
                    <Input
                        id="search"
                        type="text"
                        name="search"
                        placeholder={this.props.placeholder} 
                        value="" />
                    {!(this.props.results) 
                        ? <Button
                            id="submit"
                            type="submit"
                            name="submit" />
                        : null}
                </SearchBar>
            </Wrapper>
        );
    }
}

export default SearchBar;