import React from "react";

interface ComponentProps {
    symbol: string;
    lowPrice: string;
}

export const LowPrice: React.FC<ComponentProps> = props => {
    return (
        <>
            <div>Low Price</div>
            <div>
                {props.symbol}
                {parseFloat(props.lowPrice).toFixed(2)}
            </div>
        </>
    );
};
