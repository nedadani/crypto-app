import React from "react";
import { CoinPicker } from "./CoinPicker";
import {
    AreaChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Area
} from "recharts";

const ws = new WebSocket("wss://ws-feed.pro.coinbase.com");

export const Chart: React.FC = () => {
    const [coin, setCoin] = React.useState("ETH" as string);
    const [data, setData] = React.useState(
        [] as { time: Date; price: number }[]
    );

    /** Saves the previous data from the state on state update */
    const dataRef = React.useRef(data);
    dataRef.current = data;

    /** Creates subscibe message */
    const subscribeMessage = (coinName: string) => {
        return {
            type: "subscribe",
            channels: [
                {
                    name: "ticker",
                    product_ids: [`${coinName}-USD`]
                }
            ]
        };
    };

    /** Creates unsubscibe message */
    const unsubscribeMessage = (coinName: string) => {
        return {
            type: "unsubscribe",
            product_ids: [`${coinName}-USD`],
            channels: ["ticker"]
        };
    };

    /** Parses the response and sets it to state */
    const parseResponse = (response: { data: string }) => {
        const parsedResponse = JSON.parse(response.data);

        parsedResponse.price &&
            setData([
                ...dataRef.current,
                {
                    time: new Date(parsedResponse.time),
                    price: parsedResponse.price
                }
            ]);
    };

    React.useEffect(() => {
        ws.onopen = () => {
            ws.send(JSON.stringify(subscribeMessage(coin)));
        };

        ws.onmessage = response => {
            parseResponse(response);
        };
    }, []);

    /** Updates the cryptocurrency that is displayed */
    const changeCoin = (newCoin: string) => {
        setData([]);

        ws.send(JSON.stringify(unsubscribeMessage(coin)));

        ws.send(JSON.stringify(subscribeMessage(newCoin)));

        ws.onmessage = response => {
            parseResponse(response);
        };

        setCoin(newCoin);
    };

    return (
        <>
            <CoinPicker changeCoin={changeCoin} />
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
                <YAxis />
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
