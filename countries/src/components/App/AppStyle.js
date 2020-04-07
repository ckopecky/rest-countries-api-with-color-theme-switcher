import styled, { createGlobalStyle, ThemeContext } from "styled-components"
import { useContext } from "react";



export const dark = {
    elements: "#2b3945",
    background: "#202c37",
    inputBackground: "#858585",
    text: "#ffffff"
}

export const light = {
    elements: "#ffffff",
    background: "#fafafa",
    inputBackground: "#858585",
    text: "#111517"
}

const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 62.5%;
        font-family: 'Nunito Sans', sans-serif;
        --body-copy-size: 1.4rem;
        --mobile: 576px;
        --tablet: 992px;
        --desktop: 1100px;
    }

    body{
        background: ${props => `${props.theme.background}`};
        color: ${props => `${props.theme.color}`};
        max-width: var(--mobile);
        width: 100%;
        margin: 20px auto;
        font-size: var(--body-copy-size);
        display: flex;
        flex-direction: column;
        input {
            background: ${props => `${props.theme.inputBackground}`};
        };
        nav {
            width: 90%;
            margin: 0 auto;
            h1 {
                font-size: 3rem;
            }
        }
        
        .page-item {
            background: ${props => props.theme.elements};
            color: ${props => props.theme.color};
            padding: 10px 20px;
            font-size: 1.4rem;
        }
        .active {
            background: ${props => props.theme.color};
            color: ${props => props.theme.background};
        }
    }

 

@media only screen and (min-width: 992px) {
    body {
        max-width: var(--desktop);
    }
}

@media only screen and (min-width: 1100px) {
    body {
        max-width: 1440px;
    }
}
`;

export { GlobalStyle };
