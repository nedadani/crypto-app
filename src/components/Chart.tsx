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
        [] as { time: Date; price: number }[]
    );

    const dataRef = React.useRef(data);
    dataRef.current = data;

    React.useEffect(() => {
        const subscribeMessage = {
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
            ws.send(JSON.stringify(subscribeMessage));
        };

        ws.onmessage = response => {
            const parsedResponse = JSON.parse(response.data);
            console.log(parsedResponse);
            parsedResponse.price &&
                setData([
                    ...dataRef.current,
                    {
                        time: new Date(parsedResponse.time),
                        price: parsedResponse.price
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
                <XAxis dataKey="time" />
                <YAxis type="number" domain={["dataMin - 1", "dataMax + 1"]} />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area
                    type="monotone"
                    dataKey="price"
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
