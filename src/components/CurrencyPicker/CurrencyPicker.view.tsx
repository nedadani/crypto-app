import React from "react";
import { Button, Wrapper } from "./CurrencyPicker.styles";

interface ComponentProps {
    updateCurrency(newCurrency: string): void;
}

export const CurrencyPicker: React.FC<ComponentProps> = (props) => {
    const [active, setActive] = React.useState("USD" as string);
    return (
        <Wrapper>
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
        </Wrapper>
    );
};
