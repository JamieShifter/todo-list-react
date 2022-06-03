import styled from "styled-components";

export default styled.input`
    flex-grow: 1;
    margin-right: 20px;
    min-height: 40px;
    padding: 10px;
    border: 1px solid rgb(201, 201, 201);
    border-radius: 5px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        margin: 10px;
    }
`;