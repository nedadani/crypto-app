import React from "react";

interface ButtonProps {
    changeCoin(newCoin: string): void;
}

export const CoinPicker: React.FC<ButtonProps> = props => {
    return (
        <>
            <button onClick={() => props.changeCoin("ETH")}>Ether</button>
            <button onClick={() => props.changeCoin("BTC")}>Bitcoin</button>
            <button onClick={() => props.changeCoin("LTC")}>Litecoin</button>
        </>
    );
};
