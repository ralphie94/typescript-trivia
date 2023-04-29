import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
        background: rgb(114 161 172);
    }

    * {
        box-sizing: border-box;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: #fff;
    }

    .score {
        color: #fff;
        font-size: 2rem;
        margin: 0;
    }

    h1 {
        font-family: Roboto;
        font-size: 70px;
        font-weight: 400;
        text-align: center;
        margin: 20px;
    }

    .start, .next {
        cursor: pointer;
        border-radius: 10px;
        border: 2px solid #000;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
        background: transparent;
    }

    .start {
        max-width: 200px;
    }

    img {
        width: 550px;
    }
`