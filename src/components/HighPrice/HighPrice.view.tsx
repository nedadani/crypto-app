import React from "react";

import { Container, Label, Price } from "./HighPrice.styles";

interface ComponentProps {
    symbol: string;
    highPrice: string;
}

export const HighPrice: React.FC<ComponentProps> = (props) => {
    return (
        <Container>
            <Label>High</Label>
            <Price>
                {props.symbol}
                {parseFloat(props.highPrice).toFixed(2)}
            </Price>
        </Container>
    );
};
