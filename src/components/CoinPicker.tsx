import React from "react";

interface ButtonProps {
    updateCoin(newCoin: string): void;
}

export const CoinPicker: React.FC<ButtonProps> = props => {
    return (
        <>
            <button onClick={() => props.updateCoin("ETH")}>Ether</button>
            <button onClick={() => props.updateCoin("BTC")}>Bitcoin</button>
            <button onClick={() => props.updateCoin("LTC")}>Litecoin</button>
        </>
    );
};
