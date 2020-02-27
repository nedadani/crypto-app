import React from "react";

interface ComponentProps {
    price: number;
    currency: string;
    coin: string;
}

interface CurrencyMap {
    [key: string]: string;
}

export const CurrentPrice: React.FC<ComponentProps> = props => {
    const currencySymbols: CurrencyMap = {
        USD: "$",
        EUR: "€"
    };

    return (
        <>
            <div>Price</div>
            <div>
                {currencySymbols[props.currency]}
                {props.price}
            </div>
            <div>
                {props.currency} - {props.coin}
            </div>
        </>
    );
};
