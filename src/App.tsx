import React from "react";
import { BarGraph } from "./components/BarChart";
import { AreaChart } from "./components/AreaChart";
import "./App.css";

const App: React.FC = () => {
    return (
        <>
            <BarGraph />
            <AreaChart />
        </>
    );
};

export default App;
