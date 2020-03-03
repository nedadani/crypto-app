import React from "react";
import { Chart } from "./components/Chart";
import { Header } from "./components/Header";
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
