import styled from "styled-components";

interface ButtonProps {
    selected: boolean;
}

const Button = styled.button<ButtonProps>`
    height: 2em;
    width: 10em;
    border-radius: 15px;
    background-color: ${(props) =>
        props.selected
            ? props.theme.secondary.buttons
            : props.theme.primary.background};
    color: ${(props) =>
        props.selected
            ? props.theme.primary.background
            : props.theme.primary.text};
    font-size: 0.8em;
    margin: 0 0.5em;
`;

const Wrapper = styled.div`
    text-align: center;
    padding: 1em 0;
`;

export { Button, Wrapper };
