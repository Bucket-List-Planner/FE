import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
// components
import Hero from './components/Home/Hero'

const Main = styled.div`
    max-width:  ${props => props.theme.breakpoints.maxWidth}px;
    margin: auto;
`

let App: FunctionComponent = () => {
    let pi:number = 3
    return(
        <Main>
            <Hero />
        </Main>
    )
}


export default App
