import React from "react";
import { ThemeProvider } from "styled-components";

import { colors } from "./global";

const lightTheme = {
    primary: {
        background: colors.light["200"],
        details: colors.light["400"],
        text: colors.light["400"],
    },
    secondary: {
        buttons: colors.blue["400"],
        graph: colors.blue["300"],
    },
};

const darkTheme = {
    primary: {
        background: colors.dark["1000"],
        details: colors.dark["400"],
        text: colors.dark["100"],
    },
    secondary: {
        buttons: colors.green["300"],
        graph: colors.green["100"],
    },
};

interface ThemeProps {
    theme: string;
}

const Theme: React.FC<ThemeProps> = ({ theme, children }) => (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        {children}
    </ThemeProvider>
);

export default Theme;
