import React from "react";
import { Chart } from "./components/Chart/Chart.view";
import { Header } from "./components/Header/Header.view";
import "./App.css";

const App: React.FC = () => {
    return (
        <>
            <Header />
            <Chart />
        </>
    );
};

export default App;
