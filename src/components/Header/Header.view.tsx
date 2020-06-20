import React, { HTMLAttributes } from "react";
import logo from "../../logo.png";

import { Nav, Logo } from "./Header.styles";

export const Header: React.FC = () => {
  return (
    <>
      <Nav>
        <Logo src={logo} alt="Crypto App logo" />
      </Nav>
    </>
  );
};
