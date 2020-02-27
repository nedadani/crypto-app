import React from "react";

interface ComponentProps {
    price: string;
    currency: string;
    coin: string;
    symbol: string;
}

export const CurrentPrice: React.FC<ComponentProps> = props => {
    return (
        <>
            <div>Price</div>
            <div>
                {props.symbol}
                {props.price}
            </div>
            <div>
                {props.currency} - {props.coin}
            </div>
        </>
    );
};
