import styled, { css } from "styled-components";

export const MultiPurposeContainer = styled.div`
    width: 100%;
    padding: 20px;
    border-bottom: 1px solid rgb(201, 201, 201);

    ${(props) => props.withButtons && css`
        display: flex;
        justify-content: space-between;
    `};

    ${(props) => props.submit && css`
        display: flex;
        border-bottom: none;
    `};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        ${(props) => props.withButtons && css`
            display: flex;
            flex-flow: column wrap;
        `}; 
        
        ${(props) => props.submit && css`
            display: flex;
            flex-flow: column wrap;
        `};
    }
`;

export const MainContainer = styled.div`
    background-color: rgb(255, 255, 255);
    margin: 7px;
    box-shadow: 8px 8px 10px -12px rgba(136, 136, 148, 1);
    display: flex;
    flex-wrap: wrap;
    width: 1000px;
`;