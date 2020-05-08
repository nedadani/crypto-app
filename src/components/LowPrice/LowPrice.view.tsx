import React from "react";

import { Container, Label, Price } from "./LowPrice.styles";

interface ComponentProps {
    symbol: string;
    lowPrice: string;
}

export const LowPrice: React.FC<ComponentProps> = (props) => {
    return (
        <Container>
            <Label>Low</Label>
            <Price>
                {props.symbol}
                {parseFloat(props.lowPrice).toFixed(2)}
            </Price>
        </Container>
    );
};
