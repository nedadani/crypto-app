import React from "react";
import styled from "styled-components";

interface ButtonProps {
    selected: boolean;
}

const Button = styled.button<ButtonProps>`
    background-color: ${props => (props.selected ? "red" : "white")};
`;

interface ComponentProps {
    updateCurrency(newCurrency: string): void;
}

export const CurrencyPicker: React.FC<ComponentProps> = props => {
    const [active, setActive] = React.useState("USD" as string);
    return (
        <>
            <Button
                selected={active === "USD"}
                onClick={() => {
                    props.updateCurrency("USD");
                    setActive("USD");
                }}
            >
                USD
            </Button>
            <Button
                selected={active === "EUR"}
                onClick={() => {
                    props.updateCurrency("EUR");
                    setActive("EUR");
                }}
            >
                EUR
            </Button>
        </>
    );
};
