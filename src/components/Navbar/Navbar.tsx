import { NavLink } from "react-router-dom";
import {
  BrandTextLogoLink,
  NavbarAvatar,
  NavbarButton,
  NavbarButtonContainer,
  NavbarContainer,
  NavbarExpandableMenu,
  NavbarLogoContainer,
} from "./Navbar.styled";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConfig";
import { useState } from "react";
import { signedOutSuccess } from "../../helpers/toasSuccess";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const [user, loading, error] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  const signOutHandler = () => {
    signOut();
    setIsMenuOpen(false);
    signedOutSuccess()
  };

  return (
    <NavbarContainer>
      <NavbarLogoContainer>
        <BrandTextLogoLink to="/">
          <h1>Pawsome Places</h1>
        </BrandTextLogoLink>
      </NavbarLogoContainer>
      <NavbarButtonContainer>
        <NavLink to="/login">
          {!user && <NavbarButton>Login</NavbarButton>}
        </NavLink>
        <NavLink to="/register">
          {!user && <NavbarButton>Register</NavbarButton>}
        </NavLink>
        <p>{user?.displayName}</p>
        <NavbarAvatar
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          imageUrl={user?.photoURL}
          user={user}
        >
          {isMenuOpen && (
            <NavbarExpandableMenu>
              <p>{user?.email}</p>
              <button onClick={signOutHandler}>Sign out</button>
            </NavbarExpandableMenu>
          )}
        </NavbarAvatar>
      </NavbarButtonContainer>
    </NavbarContainer>
  );
};

export default Navbar;
