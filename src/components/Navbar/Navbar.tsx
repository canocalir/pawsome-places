import { NavLink } from "react-router-dom";
import {
  BrandTextLogoLink,
  NavbarAvatar,
  NavbarButton,
  NavbarButtonContainer,
  NavbarContainer,
  NavbarLogoContainer,
} from "./Navbar.styled";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLogoContainer>
        <BrandTextLogoLink to="/">
          <h1>Pawsome Places</h1>
        </BrandTextLogoLink>
      </NavbarLogoContainer>
      <NavbarButtonContainer>
        <NavLink to="/login">
          <NavbarButton>Login</NavbarButton>
        </NavLink>
        <NavLink to="/register">
          <NavbarButton>Register</NavbarButton>
        </NavLink>

        <NavbarAvatar />
      </NavbarButtonContainer>
    </NavbarContainer>
  );
};

export default Navbar;
