import styled from "styled-components";

const Wrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    font-size: 12pt;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

const CoinName = styled.div`
    text-align: center;
    padding: 1em 0;
`;

export { Wrapper, Container, CoinName };
