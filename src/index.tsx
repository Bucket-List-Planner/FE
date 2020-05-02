import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// styles
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './globalStyles'


const theme = {
    colors: {
        powderWhite: "#FFFDF9",
    },
    breakpoints: {
        minWidth: 280,
        maxWidth: 1300
    }
}

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
    </ThemeProvider>
, document.getElementById('root'))