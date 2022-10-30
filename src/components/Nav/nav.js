import React from "react";
import { NavTag, Logo, NavItems } from "./nav.styles";

function Nav() {
  return (
    <NavTag>
      <Logo
        // to={{
        //   pathname: "/",
        //   state: { prevHash: location.hash },
        // }}
        // aria-label="home"
      >
        Harsimran <span>Kaur</span>
      </Logo>
      <NavItems to="">Home</NavItems>
      <NavItems to="/about">About</NavItems>
    </NavTag>
  );
}

export default Nav;