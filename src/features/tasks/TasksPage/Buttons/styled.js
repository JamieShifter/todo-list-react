import styled from "styled-components";

export const ButtonsArea = styled.div`
    @media(max-width: ${({theme}) => theme.breakpoints.mobile}px) {
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        padding-top: 20px;
    }
`;