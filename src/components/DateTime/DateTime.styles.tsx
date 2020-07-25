import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 100%;
  margin: 0 0 0 auto;
  font-size: 0.8em;
  color: ${(props) => props.theme.primary.text};
  align-self: center;
`;

export { Wrapper };
