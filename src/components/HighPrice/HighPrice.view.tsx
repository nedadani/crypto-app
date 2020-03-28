import React from "react";

interface ComponentProps {
    symbol: string;
    highPrice: string;
}

export const HighPrice: React.FC<ComponentProps> = props => {
    return (
        <>
            <div>High Price</div>
            <div>
                {props.symbol}
                {parseFloat(props.highPrice).toFixed(2)}
            </div>
        </>
    );
};
