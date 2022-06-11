import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.nav`
    max-width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.primaryColor};
`

export const StyledNavLink = styled(NavLink)`
    display: block;
    padding: 3px 20px;
    text-decoration: none;
    color: white;

    &.active {
        font-weight: bold;
        color: white;
    }
`

export const StyledNavbar = styled.ul`
    list-style-type: none;
`

export const NavElement = styled.li`
    float: left;
`