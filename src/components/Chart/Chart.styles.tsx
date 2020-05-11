import styled from "styled-components";

const Wrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    font-size: 12pt;
`;

const PriceWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 0 0.5em 0;
`;

const ChartContainer = styled.div`
    border: 1px solid ${(props) => props.theme.primary.details};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CoinName = styled.div`
    text-align: center;
    font-size: 1.5em;
    color: ${(props) => props.theme.primary.text};
    padding: 1em 0;
`;

export { Wrapper, PriceWrapper, Container, ChartContainer, CoinName };
