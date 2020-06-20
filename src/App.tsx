import React, { useState, HTMLAttributes } from "react";
import Theme from "./Theme";

import Chart from "./components/Chart/Chart.view";
import { Header } from "./components/Header/Header.view";
import Switch from "react-input-switch";
import { Wrapper } from "./App.styles";

const App: React.FC = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <Theme theme={theme}>
      <Wrapper>
        <Header />
        <Switch on="dark" off="light" value={theme} onChange={toggleTheme} />
        <Chart />
      </Wrapper>
    </Theme>
  );
};

export default App;
