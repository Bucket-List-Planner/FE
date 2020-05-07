import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// styles
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './globalStyles'


const theme = {
    primary: '#8941FF', // purple
    primaryDark: '#594DFF',
    secondary: '#54DEFD', // blue
    secondaryDark: '#1FACE9',
    contrast: "#FAFF00", // yellow
    contrastDark: '#FFC700',

    colors: {
        danger: '#FC5050',
        dangerDark: '#EA1515',
        warning: '#FDCA17',
        warningDark: '#FE9800',
        success: '#5CD219',
        successDark: '#4B9B1A',
        info: '#1ECEE5',
        infoDark: '#24ABBD',
    },

    breakpoints: {
        minWidth: 280,
        maxWidth: 1000
    }
}

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
    </ThemeProvider>
, document.getElementById('root'))