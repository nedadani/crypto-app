import React, { useState } from "react";
import Theme from "./Theme";

import Chart from "./components/Chart/Chart.view";
import { Header } from "./components/Header/Header.view";
import { Wrapper } from "./App.styles";

const App: React.FC = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <Theme theme={theme}>
      <Wrapper>
        <Header />
        <button onClick={toggleTheme}>Toggle theme</button>
        <Chart />
      </Wrapper>
    </Theme>
  );
};

export default App;
