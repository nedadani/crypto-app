import React from "react";

import { Container, Price, Label } from "./CurrentPrice.styles";

interface ComponentProps {
    price: string;
    currency: string;
    coin: string;
    symbol: string;
}

export const CurrentPrice: React.FC<ComponentProps> = (props) => {
    return (
        <Container>
            <Price>
                {props.symbol}
                {props.price}
            </Price>
            <Label>
                {props.currency} - {props.coin}
            </Label>
        </Container>
    );
};
