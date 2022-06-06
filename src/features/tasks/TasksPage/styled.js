import styled from "styled-components";

export const FilterButton = styled.button`
    background-color: inherit;
    color: ${({theme}) => theme.colors.primaryColor};
    border: none;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        color: rgb(15, 163, 163);
    }

    &:disabled {
        color: gray;
    }

    @media(max-width: ${({theme}) => theme.breakpoints.mobile}px) {
        padding: 15px;
    }
    `;