import React from "react";
import { Chart } from "./components/Chart/Chart.view";
import { Header } from "./components/Header/Header.view";
import { Wrapper } from "./App.styles";

const App: React.FC = () => {
    return (
        <Wrapper>
            <Header />
            <Chart />
        </Wrapper>
    );
};

export default App;
