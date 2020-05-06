import React, { FunctionComponent } from 'react'
// styles
import styled from 'styled-components'
// components
import Map from './Map'
import Typography from '../Typography/Typography'

const Main = styled.div`
    min-width: 280px;
    display: grid;
    grid-template-columns: 1fr 1fr 8fr 2fr;
    grid-template-rows: 3fr 1fr 3fr; 
    margin: 20px 10px 0 10px;
    h1{
        justify-self: start;
        align-self: center;
        text-transform: uppercase;
        letter-spacing: 0.4vh;
        padding: 30px 0 0 0;
        grid-row: 1 / 4;
    }
    & > p{
        background: #594DFF;
        padding: 5px 5px 5px 10px;
        margin: 0 20px 10px 20px;
        grid-row: 2;
        grid-column: 2 / 4;
        align-self: center;
        justify-self: start;
        z-index: 1;
    }
    button{
        grid-row: 3;
        grid-column: 2 / 4;
        align-self: flex-start;
        justify-content: flex-start;
        width: 150px;
        background: ${props => props.theme.contrast};
        color: white;
        padding: 5px 5px 5px 10px;
        margin: 0 20px 10px 20px;
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

const Hero:FunctionComponent = () => {
    let fontSize = {min: 24, max: 84}
    return(
        <Main>
            <Typography  
                data-cy="keyTitle"
                size={fontSize} 
                vertical 
                rotate={180}
            >
                Bucket List
            </Typography>

            <Typography
                variant={'p'} 
                secondary
            >
                Plan your life, make it possible, make your goals real
            </Typography>
            <button>
                <Typography
                    variant={'p'} 
                    color="white"
                >
                    Learn more
                </Typography>
            </button>

            <div className="map">
                <Map />
            </div>
        </Main>
    )
}

export default Hero