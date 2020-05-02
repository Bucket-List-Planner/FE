import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
// components
import Home from './components/Home/Home'

const Main = styled.div`
    max-width:  ${props => props.theme.breakpoints.maxWidth}px;
    margin: auto;
`

let App: FunctionComponent = () => {
    let pi:number = 3
    return(
        <Main>
            <Home />
        </Main>
    )
}


export default App
