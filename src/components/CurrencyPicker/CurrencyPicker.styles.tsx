import styled from "styled-components";

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
        props.selected
            ? props.theme.primary.background
            : props.theme.primary.text};
    margin: 0 0.5em 0 0;
    padding: 0.1em 0.5em;
`;

const Wrapper = styled.div`
    justify-self: flex-start;
`;

export { Button, Wrapper };
