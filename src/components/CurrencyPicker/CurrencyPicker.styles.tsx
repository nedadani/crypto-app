import styled from "styled-components";

interface ButtonProps {
    selected: boolean;
}

const Button = styled.button<ButtonProps>`
    border-radius: 1px;
    border: none;
    background-color: ${(props) =>
        props.selected
            ? props.theme.secondary.buttons
            : props.theme.primary.background};
    color: ${(props) =>
        props.selected
            ? props.theme.primary.background
            : props.theme.primary.text};
    margin: 0 0.5em 0 0;
`;

const Wrapper = styled.div`
    justify-self: flex-start;
`;

export { Button, Wrapper };
