import React from "react";
import {
    AreaChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Area
} from "recharts";

const ws = new WebSocket("wss://ws-feed.pro.coinbase.com");

export const Chart: React.SFC = () => {
    const [data, setData] = React.useState(
        [] as { x: Date; y: number; id: string }[]
    );

    const dataRef = React.useRef(data);
    dataRef.current = data;

    React.useEffect(() => {
        const subscribeMsg = {
            type: "subscribe",
            product_ids: ["ETH-USD"],
            channels: [
                {
                    name: "ticker",
                    product_ids: ["ETH-USD"]
                }
            ]
        };

        ws.onopen = () => {
            ws.send(JSON.stringify(subscribeMsg));
        };

        ws.onmessage = object => {
            console.log(object);
            setData([
                ...dataRef.current,
                {
                    x: new Date(JSON.parse(object.data).time),
                    y: JSON.parse(object.data).price,
                    id: JSON.parse(object.data).trade_id
                }
            ]);
        };
    }, []);

    return (
        <>
            <AreaChart
                width={730}
                height={250}
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop
                            offset="5%"
                            stopColor="#8884d8"
                            stopOpacity={0.8}
                        />
                        <stop
                            offset="95%"
                            stopColor="#8884d8"
                            stopOpacity={0}
                        />
                    </linearGradient>
                </defs>
                <XAxis dataKey="x" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area
                    type="monotone"
                    dataKey="y"
                    stroke="#82ca9d"
                    fillOpacity={1}
                    fill="url(#colorUv)"
                    isAnimationActive={false}
                />
            </AreaChart>
            <button onClick={() => ws.close()}>STOP</button>
        </>
    );
};
