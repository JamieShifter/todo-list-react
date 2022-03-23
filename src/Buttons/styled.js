import styled, { css } from "styled-components";

export const FilterButton = styled.button`
    background-color: inherit;
    color: ${({theme}) => theme.colors.primaryColor};
    border: none;
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

export const ButtonsArea = styled.div`
    @media(max-width: ${({theme}) => theme.breakpoints.mobile}px) {
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        padding-top: 20px;
    }
`;