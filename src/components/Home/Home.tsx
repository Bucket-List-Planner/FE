import React, { FunctionComponent } from 'react'
// styles
import styled from 'styled-components'
import { responsiveFont } from '../../globalStyles'
// components
import Map from './Map'


const Main = styled.div`
    display: grid;
    min-width: 280px;
    grid-template-columns: 1fr 1fr 8fr 2fr;
    grid-template-rows: 3fr 1fr 3fr; 
    margin: 20px 10px 0 10px;
    h1{
        transform: rotate(180deg);
        justify-self: start;
        align-self: center;
        writing-mode: vertical-lr;
        text-transform: uppercase;
        letter-spacing: 0.4vh;
        padding: 30px 0 0 0;
        grid-row: 1 / 4;
    }
    p{
        background: #f0cb0b;
        padding: 5px 5px 5px 10px;
        margin: 0 20px 10px 20px;
        grid-row: 2;
        grid-column: 2 / 4;
        align-self: center;
        z-index: 1;
    }
    .map{
        grid-row: 1 / 4;
        grid-column: 2 / 5;
        justify-self: flex-end;
        width: 100%;
        svg{
            justify-self: flex-end;
            width: 100%;
        }
    }
`

const Title = styled.h1`${responsiveFont(24, 84)}`

const Home:FunctionComponent = () => {
    return(
        <Main>
            <Title>Bucket List</Title>
            <p>Plan your life, make it possible, make your goals real</p>
            <div className="map">
                <Map />
            </div>
        </Main>
    )
}

export default Home