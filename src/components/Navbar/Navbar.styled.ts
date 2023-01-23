import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";
import { NavLink } from "react-router-dom";

//Mixins
const Flex = css`
  display: flex;
  flex-wrap: wrap;
`;

//Components
const NavbarContainer = styled.div`
  ${Flex};
  background-color: ${theme.navBackColor};
  height: fit-content;
  align-items: center;
  color: #ffffff;
  justify-content: space-around;
  position: fixed;
  width: 100%;
  opacity: 0.9;
  padding: 1rem;
`;

const NavbarButton = styled.button`
  text-align: center;
  color: #ffffff;
  font-weight: 600;
  background-color: ${theme.mainButtonColor};
  width: 6rem;
  height: 2.5rem;
  border: none;
  border-radius: 0.5rem;

  &:hover {
    background-color: ${theme.mainButtonHoverColor};
    transition: ease-in 300ms;
    cursor: pointer;
  }
`;

const NavbarAvatar = styled.div`
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  border: 2px solid #ffffff;
  background-color: ${theme.mainButtonHoverColor};
`;

const NavbarButtonContainer = styled.div`
  ${Flex};
  gap: 1rem;
`;

const NavbarLogoContainer = styled.div`
  ${Flex};
`;

const BrandTextLogoLink = styled(NavLink)`
  text-decoration: none;
  > h1 {
    font-family: "Bebas Neue", cursive;
    letter-spacing: 0.3rem;
    color: ${theme.mainButtonHoverColor};
  }
`;

export {
  NavbarContainer,
  NavbarButton,
  NavbarButtonContainer,
  NavbarLogoContainer,
  NavbarAvatar,
  BrandTextLogoLink,
};
