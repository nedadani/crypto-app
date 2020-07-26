import styled from "styled-components";

import { media } from "../styles/styles";

const Wrapper = styled.main`
  width: 90%;
  max-width: 1088px;
  display: flex;
  flex-direction: column;
  font-size: 12pt;
`;

const PriceContainer = styled.div`
  max-width: 100%;
  width: 100%;
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
  margin-bottom: 5em;

  @media ${media.lg} {
    margin-bottom: 8em;
  }
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 300px;

  /* @media ${media.lg} {
    height: 400px;
  } */
`;

const CoinName = styled.div`
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
  color: ${(props) => props.theme.primary.text};
  margin: 1em 0 1.5em;

  @media ${media.md} {
    font-size: 2em;
  }
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
