import React from "react";

interface ButtonProps {
    updateCurrency(newCurrency: string): void;
}

export const CurrencyPicker: React.FC<ButtonProps> = props => {
    return (
        <>
            <button onClick={() => props.updateCurrency("USD")}>USD</button>
            <button onClick={() => props.updateCurrency("EUR")}>EUR</button>
        </>
    );
};
