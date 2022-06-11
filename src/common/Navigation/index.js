import { StyledNavbar, StyledNavLink, NavbarContainer, NavElement } from "./styled"

export const Navigation = () => {

    return (
        <NavbarContainer>
            <StyledNavbar>
                <NavElement>
                    <StyledNavLink to="/zadania">Zadania</StyledNavLink>
                </NavElement>
                <NavElement>
                    <StyledNavLink to="/author">O Autorze</StyledNavLink>
                </NavElement>
            </StyledNavbar>
        </NavbarContainer>
    )
};

