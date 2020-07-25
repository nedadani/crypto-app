import styled from "styled-components";

import { media } from "../styles/styles";

const Container = styled.div`
  width: 120px;
  border: 1px solid ${(props) => props.theme.primary.text};
  background-color: ${(props) => props.theme.primary.background};
  padding: 1em;
  margin: 0.5em;

  @media ${media.md} {
    width: 125px;
    padding: 1.2em;
  }
`;

const Price = styled.div`
  color: ${(props) => props.theme.secondary.buttons};
  font-size: 1.2em;
  font-weight: bold;
  width: inherit;

  @media ${media.md} {
    font-size: 1.4em;
  }
`;

const Label = styled.div`
  color: ${(props) => props.theme.primary.text};
  font-size: 0.8em;

  @media ${media.md} {
    font-size: 1em;
  }
`;

export { Container, Price, Label };
