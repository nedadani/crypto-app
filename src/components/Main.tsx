import React from "react";

export const Main = () => {
    const ws = new WebSocket("wss://ws-feed.pro.coinbase.com");

    const subscribeMsg = {
        type: "subscribe",
        product_ids: ["ETH-USD", "ETH-EUR"],
        channels: [
            "level2",
            "heartbeat",
            {
                name: "ticker",
                product_ids: ["ETH-BTC", "ETH-USD"]
            }
        ]
    };

    const openConnection = () => {
        ws.onopen = () => {
            ws.send(JSON.stringify(subscribeMsg));
        };

        ws.onmessage = data => {
            console.log(data);
        };

        console.log("connected");
    };

    const closeConnection = () => {
        ws.close();
        console.log("disconnected");
    };

    return (
        <>
            <button onClick={openConnection}>Start</button>
            <button onClick={closeConnection}>Close</button>
        </>
    );
};
