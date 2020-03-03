import React from "react";
import logo from "../logo.png";

export const Header: React.FC = () => {
    return (
        <>
            <header>
                <img src={logo} alt="Crypto App logo" />
            </header>
        </>
    );
};
