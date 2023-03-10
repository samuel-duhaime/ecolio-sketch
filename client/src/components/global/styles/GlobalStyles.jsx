import { createGlobalStyle } from "styled-components";
import { FONTS } from "../../../helpers/contants/constants";

// REF: http://meyerweb.com/eric/tools/css/reset/

const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        /* font: inherit; */
        vertical-align: baseline;
    }

    input {
        &:disabled {
            cursor: not-allowed;
        }
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    /* Custom global style */
    *,
    *:before,
    *:after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        font-family: ${FONTS.secondFontFamily};
    }

    /* Custom font-family for headings */
    h1,h2,h3,h4,h5,h6 {
        font-family: ${FONTS.firstFontFamily};
    }

    /* Custom size for html and body */
    html, body {
    max-width: 100vw;
    }
`;

export default GlobalStyle;
