import styled from "styled-components";

import { media } from "../styles/styles";

const Wrapper = styled.div`
  max-width: 100%;
  margin: 0 0 0 auto;
  font-size: 0.8em;
  color: ${(props) => props.theme.primary.text};
  align-self: center;

  @media ${media.md} {
    font-size: 1em;
  }
`;

export { Wrapper };
