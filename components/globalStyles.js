import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Grifter-bold';
    src: url('/fonts/grifterbold-webfont.woff2') format('woff2'),
         url('/fonts/grifterbold-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

html,
body {
    font-family: 'Grifter-bold', sans-serif;
    padding: 0;
    margin: 0;
    background-color: #002B3D; /* Nuevo fondo azul por defecto */
    color: #FF5E1A; /* Color de texto naranja por defecto */
}

html {
    scroll-behavior: smooth;
    height: 100%;
}

body {
    min-height: 100vh;
}

a {
    color: #00C4EC; /* Color celeste para acentos */
    text-decoration: none;
}

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    letter-spacing: 0.8px;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    font-family: 'Plus Jakarta Sans', sans-serif;
}

img {
    height: 100%;
    border-radius: 10px;
    width: 100%;
}

section {
    margin: 0 auto;
}

@media (max-width: 785px) {
    img {
        width: 90%;
    }
}

`;

export default GlobalStyle;
