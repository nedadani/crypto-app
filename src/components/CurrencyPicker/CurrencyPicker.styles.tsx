import styled from "styled-components";

import { media } from "../styles/styles";

interface ButtonProps {
  selected: boolean;
}

const Button = styled.button<ButtonProps>`
  border-radius: 1px;
  border: 1px solid ${(props) => props.theme.primary.text};
  background-color: ${(props) =>
    props.selected
      ? props.theme.secondary.buttons
      : props.theme.primary.background};
  color: ${(props) =>
    props.selected ? props.theme.primary.background : props.theme.primary.text};
  margin: 0 0.5em 0 0;
  padding: 0.1em 0.5em;
  cursor: pointer;

  @media ${media.md} {
    padding: 0.2em 0.6em;
    font-size: 0.9em;
  }
`;

const Wrapper = styled.div`
  justify-self: flex-start;
`;

export { Button, Wrapper };
