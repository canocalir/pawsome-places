import styled from "styled-components";
import { theme } from "../../styles/theme";
import { NavLink } from "react-router-dom";
import { Flex, MainHeading } from "../../styles/globalStyles";

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
  padding: 1rem;
  z-index: 99;
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

type AvatarProps = {
  imageUrl?: string | null;
  user: unknown
};

const NavbarAvatar = styled.div<AvatarProps>`
  position: relative;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  border: 2px solid #ffffff;
  background-color: ${theme.mainButtonHoverColor};
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  display: ${(props) => props.user ? props.imageUrl : "none"};
`;

const NavbarButtonContainer = styled.div`
  ${Flex};
  gap: 1rem;
  align-items:center;
`;

const NavbarLogoContainer = styled.div`
  ${Flex};
`;

const BrandTextLogoLink = styled(NavLink)`
  text-decoration: none;
  > h1 {
    ${MainHeading}
  }
`;

const NavbarExpandableMenu = styled.div`
  ${Flex};
  justify-content: space-between;
  align-items: center;
  position: absolute;
  right: 0rem;
  top: 3rem;
  background-color: #ffffff;
  color: #000000;
  height: 10rem;
  border-radius: 1rem;
  padding: 1rem;
  font-weight: 600;
  >button{
    width: 100%;
    height: 2rem;
    border:none;
    color: #ffffff;
    font-weight: 600;
    border-radius: 0.4rem;
    background-color: ${theme.mainButtonColor};
    &:hover{
      background-color: ${theme.mainButtonHoverColor};
      cursor: pointer;
      transition: 300ms ease-in;
    }
  }
`;

export {
  NavbarContainer,
  NavbarButton,
  NavbarButtonContainer,
  NavbarLogoContainer,
  NavbarAvatar,
  BrandTextLogoLink,
  NavbarExpandableMenu,
};
