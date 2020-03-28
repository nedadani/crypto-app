import React from "react";

import { Button, Wrapper } from "./CoinPicker.styles";

interface ComponentProps {
    updateCoin(newCoin: string): void;
}

export const CoinPicker: React.FC<ComponentProps> = props => {
    const [active, setActive] = React.useState("BTC" as string);

    return (
        <Wrapper>
            <Button
                selected={active === "BTC"}
                onClick={() => {
                    props.updateCoin("BTC");
                    setActive("BTC");
                }}
            >
                Bitcoin
            </Button>
            <Button
                selected={active === "ETH"}
                onClick={() => {
                    props.updateCoin("ETH");
                    setActive("ETH");
                }}
            >
                Ether
            </Button>
            <Button
                selected={active === "LTC"}
                onClick={() => {
                    props.updateCoin("LTC");
                    setActive("LTC");
                }}
            >
                Litecoin
            </Button>
        </Wrapper>
    );
};
