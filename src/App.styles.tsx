import styled from "styled-components";

import Switch from "react-input-switch";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.primary.background};
`;

const HeaderContainer = styled.header`
  width: 100%;
  max-width: 1088px;
  height: 60px;
  display: flex;
  flex-direction: row;

  label {
    height: 20px;
    width: 30px;
  }

  span {
    border-radius: 15px;
  }
`;

const ToggleContainer = styled.div`
  margin: 0 20px 0 auto;
  display: flex;
  flex-direction: row;
`;

const ToggleText = styled.p`
  align-self: center;
  color: ${(props) => props.theme.primary.text};
  padding-right: 15px;
`;

const Toggle = styled(Switch)`
  align-self: center;

  span:first-of-type {
    background-color: ${(props) => props.theme.secondary.buttons};
  }
`;

export { HeaderContainer, Toggle, ToggleContainer, ToggleText, Wrapper };
