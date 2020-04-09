import { createGlobalStyle } from "styled-components"

export const dark = {
    elements: "#2b3945",
    background: "#202c37",
    inputBackground: "#858585",
    text: "#ffffff"
}

export const light = {
    elements: "#ffffff",
    background: "#ECECEF",
    inputBackground: "#FCFCFD",
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

    * {
        box-sizing: border-box;
    }

    body{
        background: ${props => `${props.theme.background}`};
        color: ${props => `${props.theme.color}`};
        max-width: var(--mobile);
        width: 100%;
        margin: 0px auto;
        font-size: var(--body-copy-size);
        display: flex;
        flex-direction: column;
        
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
