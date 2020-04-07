import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 62.5%;
        font-family: 'Nunito Sans', sans-serif;
        --dark-mode-elements: #2b3945;
        --dark-mode-bgd: #202c37;
        --light-mode-text: #111517;
        --light-mode-input: #858585;
        --light-mode-bgd: #fafafa;
        --dark-mode-text-light-mode-elements: #ffffff;
        --body-copy-size: 1.4rem;
        --mobile: 576px;
        --tablet: 992px;
        --desktop: 1100px;
    }

    body{
        max-width: var(--mobile);
        width: 100%;
        margin: 20px auto;
        font-size: var(--body-copy-size);
        display: flex;
        flex-direction: column;
    }

@media only screen and (min-width: 992px) {
    body {
        max-width: var(--desktop);
        background: lightblue;
    }
}

@media only screen and (min-width: 1100px) {
    body {
        max-width: 1440px;
        background: lightyellow;
    }
}
`;

export { GlobalStyle };
