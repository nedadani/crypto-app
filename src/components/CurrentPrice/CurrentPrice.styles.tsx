import styled from "styled-components";

const Container = styled.div`
    width: 6em;
    border: 1px solid ${(props) => props.theme.primary.text};
    background-color: ${(props) => props.theme.primary.background};
    padding: 1em;
    margin: 0.5em;
`;

const Price = styled.div`
    color: ${(props) => props.theme.secondary.buttons};
    font-size: 1.2em;
    font-weight: bold;
`;

const Label = styled.div`
    color: ${(props) => props.theme.primary.text};
    font-size: 0.8em;
`;

export { Container, Price, Label };
