interface CurrencyMap {
    [key: string]: string;
}

export const currencySymbols: CurrencyMap = {
    USD: "$",
    EUR: "€",
};

interface CoinMap {
    [key: string]: string;
}

export const coinNames: CoinMap = {
    BTC: "Bitcoin",
    ETH: "Ether",
    LTC: "Litecoin",
};
