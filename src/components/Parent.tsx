import React from "react";
import { BarGraph } from "./BarChart";

export const Parent: React.FC = () => {
    const [data, setData] = React.useState([] as { x: number; y: number }[]);

    const dataRef = React.useRef(data);
    dataRef.current = data;

    React.useEffect(() => {
        setInterval(
            () =>
                setData([
                    ...dataRef.current,
                    {
                        x: dataRef.current.length,
                        y: Math.round(Math.random() * 10)
                    }
                ]),
            1000
        );
    }, []);

    return <BarGraph data={data} />;
};
