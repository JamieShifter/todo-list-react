import { Link } from "react-router-dom";
import styled, {css} from "styled-components";

export const StyledTasks = styled.ul`
    padding-inline-start: 10px;
    padding-inline-end: 10px;
`;

export const TaskItem = styled.li`
    padding: 10px;
    list-style-type: none;
    margin-bottom: 40px;
    border-bottom: 1px solid rgb(201, 201, 201);
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${({hidden}) => hidden && css`
        display: none;
    `}
`;

export const TaskButton = styled.button`
    align-items: center;
    height: 40px;
    min-width: 40px;
    background-color: green;
    color: white;
    border: none;
    cursor: pointer;
    transition: 1s;

    &:hover {
        background-color: rgb(39, 160, 39);
    };

    &:active {
        background-color: rgb(68, 185, 68);
    }

    ${({done}) => done && css`
        background-color: green;
    `}

    ${({trash}) => trash && css`
        background-color: rgb(255, 0, 51);

        &:hover {
            background-color: rgb(255, 46, 88);
        };

        &:active {
            background-color: rgb(255, 81, 116);
        }
    `}
`;

export const TaskContent = styled.span`
    flex-grow: 1;
    padding: 0 20px;
    text-align: left;
    align-self: center;

    ${({done}) => done && css`
        text-decoration: line-through;
    `};
`;

export const TaskLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primaryColor};
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        color: rgb(15, 163, 163);
    }
`   