import { createGlobalStyle } from "styled-components";

const fontSize = {
    min_width: 400,
    max_width: 800,
    min_font: 12,
    max_font: 24,
}
export default createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
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
        font: inherit;
    }
    html{
        height: 100%;
    }
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        height: 100%;
    }
    
    h1,h2,h3,h4,h5,h6{
        font-family: 'Federo', sans-serif;
    }

    :root { font-size: ${fontSize.min_font}px; }

    @media (min-width: ${fontSize.min_width}px) and (max-width: ${fontSize.max_width}px){
        :root { 
            font-size: calc( ${fontSize.min_font}px + (${fontSize.max_font} - ${fontSize.min_font}) * ( (100vw - ${fontSize.min_width}px) / ( ${fontSize.max_width} - ${fontSize.min_width}) ));
        }
    }
    @media (min-width: ${fontSize.max_width}px){
        :root { 
            font-size: ${fontSize.max_font}px;
        }
    }
`

export function responsiveFont(min_font: number, max_font: number){
    let min_width = fontSize.min_width
    let max_width = fontSize.max_width
    
    return ` 
        font-size: ${min_font}px;

        @media (min-width: ${min_width}px) and (max-width: ${max_width}px){
            font-size: calc( ${min_font}px + (${max_font} - ${min_font}) * ( (100vw - ${min_width}px) / ( ${max_width} - ${min_width}) ));
        }

        @media (min-width: ${max_width}px){
            font-size: ${max_font}px;
        }
    `
}