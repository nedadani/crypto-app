import styled from "styled-components";

interface ButtonProps {
    selected: boolean;
}

const Button = styled.button<ButtonProps>`
    border-radius: 1px;
    background-color: ${(props) => (props.selected ? "#0a3d62" : "#fff")};
    color: ${(props) => (props.selected ? "#fff" : "#2f3542")};
    margin: 0 0.5em 0 0;
`;

const Wrapper = styled.div`
    justify-self: flex-start;
`;

export { Button, Wrapper };
