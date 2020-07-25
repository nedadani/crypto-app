import styled from "styled-components";

const Wrapper = styled.main`
  width: 90%;
  display: flex;
  flex-direction: column;
  font-size: 12pt;
  padding-bottom: 5em;
`;

const PriceContainer = styled.div`
  max-width: 100%;
`;

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  padding-bottom: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 0.5em 0;
`;

const ChartAreaContainer = styled.div`
  border: 1px solid ${(props) => props.theme.primary.details};
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 300px;
`;

const CoinName = styled.div`
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
  color: ${(props) => props.theme.primary.text};
  margin: 1em 0 1.5em;
`;

export {
  Wrapper,
  PriceContainer,
  PriceWrapper,
  Container,
  ChartAreaContainer,
  ChartContainer,
  CoinName,
};
