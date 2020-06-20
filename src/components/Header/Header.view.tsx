import React, { HTMLAttributes } from "react";
import logo from "../../logo.png";

import { Logo } from "./Header.styles";

export const Header: React.FC = () => {
  return (
    <>
      <Logo src={logo} alt="Crypto App logo" />
    </>
  );
};
