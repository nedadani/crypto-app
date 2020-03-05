import React from "react";
import logo from "../logo.png";
import styled from "styled-components";

const Nav = styled.header`
    width: 100%;
    height: 60px;
`;

const Logo = styled.img`
    height: 40px;
    padding: 10px 15px;
`;

export const Header: React.FC = () => {
    return (
        <>
            <Nav>
                <Logo src={logo} alt="Crypto App logo" />
            </Nav>
        </>
    );
};
