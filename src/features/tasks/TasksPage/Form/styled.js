import styled from "styled-components";

export const FormTitle = styled.span`
    font-size: 25px;
    font-weight: 700;
`;

export const FormSubmit = styled.button`
    min-height: 40px;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: white;
    font-family: inherit;
    border: none;
    cursor: pointer;
    padding: 0 20px;
    transition: 1s;

    &:hover {
        transform: scale(1.1);
        background-color: rgb(17, 170, 170);
    };

    &:active {
        background-color: rgb(44, 202, 202);
    };

    @media(max-width: ${({theme}) => theme.breakpoints.mobile}px) {
        margin: 10px;
        padding: 0;
    };
`;