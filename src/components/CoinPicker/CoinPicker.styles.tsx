import styled from "styled-components";

import { media } from "../styles/styles";

interface ButtonProps {
  selected: boolean;
}

const Button = styled.button<ButtonProps>`
  height: 2em;
  width: 10em;
  border-radius: 15px;
  border: 1px solid ${(props) => props.theme.primary.text};
  background-color: ${(props) =>
    props.selected
      ? props.theme.secondary.buttons
      : props.theme.primary.background};
  color: ${(props) =>
    props.selected ? props.theme.primary.background : props.theme.primary.text};
  font-size: 0.9em;
  margin: 0 0.5em 1em;
  cursor: pointer;

  @media ${media.md} {
    border-radius: 20px;
    font-size: 1.1em;
  }
`;

const Wrapper = styled.div`
  text-align: center;
  margin: 2.5em 0 1em;

  button:last-of-type {
    margin-bottom: 0;
  }
`;

export { Button, Wrapper };
