import React, { FunctionComponent, useState, useEffect, useRef } from 'react'
// styles
import styled from 'styled-components'
// components
import Map from './Map'
import Typography from '../Typography/Typography'
import Button from '../Buttons/Button'
import {TweenLite, TweenMax, TimelineMax} from 'gsap'

const Main = styled.div`
    min-width: 280px;
    display: grid;
    grid-template-columns: repeat(3, 1fr) 2fr;
    grid-template-rows: 2fr 1fr 5% 2fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    margin: 20px 10px 0 10px;
    align-self: flex-start;
    justify-self: center;
    h1{
        justify-self: flex-start;
        align-self: center;
        text-transform: uppercase;
        letter-spacing: 0.4vh;
        white-space: nowrap;

        /* padding: 30px 0 0 0; */
        grid-area: 1 / 1 / 6 / 2;
    }
    .text1{
        background: #594DFF;
        padding: 5px 5px 5px 10px;
        margin: 0 1rem 0.5rem 1rem;
        grid-area: 1 / 2 / 4 / 5;
        align-self: end;
        justify-self: start;
        z-index: 5;
    }
    .text2{
        z-index: 5;
        align-self: center;
        grid-area: 1 / 2 / 5 / 4;
    }
    .btn-v1{
        grid-area: 4 / 2 / 4 / 4;
        align-self: flex-start;
        justify-content: flex-start;
        width: 7rem;
        padding: 5px 5px 5px 10px;
        margin: 0 1rem 0.5rem 1rem;
        z-index: 5;
    }
    .btn-v2{
        grid-area: 4 / 4 / 5 / 5;
    }
    .triangle-container{
        align-self: center;
        justify-self: center;
        fill: ${props => props.theme.secondary};
        grid-area: 1 / 1 / 5 / 5;
        z-index: 0;
    }
    .map{
        grid-area: 1 / 1 / 5 / 5;
        justify-self: flex-end;
        width: 100%;
        z-index: 1;
        /* overflow: hidden; */
        svg{
            justify-self: flex-end;
            width: 100%;
            height: 100%;
        }
    }
`

const Hero:FunctionComponent = () => {
    let fontSize = {min: 24, max: 84}
    let arr1 = [100, 0, 40, 0, 100, 80]; 
    let arr2 = [100, 0, 0, 0, 100, 145]; 

    const map = useRef<SVGSVGElement>(null)
    const title = useRef<HTMLHeadingElement>(null)
    const btn = useRef<HTMLButtonElement>(null)
    const triangle = useRef<HTMLDivElement>(null)

    const text1 = useRef<HTMLParagraphElement>(null)
    const text2 = useRef<HTMLParagraphElement>(null)


    const [ screen, setScreen ] = useState(0);
    const [ btnV, setBtnV ] = useState('btn-v1');

    const toggleShape = () => {
        if(screen === 0){
            animMap()
        }
    }

    useEffect(() =>{
        let tl = new TimelineMax()
        console.log(' map ', btn.current)
        tl.set(triangle.current, { rotation: 180, autoAlpha: 0, scale: 0})
        tl.set(map.current, {clipPath: 'polygon('+arr2[0]+'%'+arr2[1]+'%,'+arr2[2]+'%'+arr2[3]+'%,'+arr2[4]+'%'+arr2[5]+'%)'})
    }, [])

    const animMap = () => {
        setScreen(1) 
        setBtnV('btn-v1 btn-v2')
        let tl = new TimelineMax()
        tl.to(map.current, 0.5, {clipPath:'polygon('+arr1[0]+'%'+arr1[1]+'%,'+arr1[2]+'%'+arr1[3]+'%,'+arr1[4]+'%'+arr1[5]+'%)'})
        tl.to(map.current, 0.5, {xPercent: -10, yPercent: 45, rotation: -45, scale: 1.1, autoAlpha: 0.6,  delay: -0.5})
        // tl.to(btn.current, 0.75, {xPercent: 270, delay: -1})
        tl.to(title.current, 0.5, { scale: 0.23, background: 'yellow', borderRight: '4px solid purple', delay: -0.5 })
        tl.to(text1.current, 0.5, { autoAlpha: 0, delay: -1 })
        tl.to(triangle.current, 0.5, { scale: 1.5, autoAlpha: 0.6, delay: -0.5 })
    }

    return(
        <Main>
            <Typography  
                data-cy="keyTitle"
                size={fontSize} 
                vertical 
                rotate={180}
                innerRef={title}
            >
                Bucket List
            </Typography>

            <Typography
                variant={'p'} 
                secondary
                innerRef={text1}
                className={'text1'}
            >
                Plan your life, make it possible, make your goals real
            </Typography>
            
            <Typography
                variant={'p'} 
                className={'text2'}
                innerRef={text2}
            >
                {screen === 1 && 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s'}
            </Typography>

            <Button danger outline onClick={toggleShape} innerRef={btn} className={btnV}>
                <Typography variant={'p'} danger>
                    Learn more
                </Typography>
            </Button>
          
            <div className="map">
                <Map innerRef={map} />
            </div>
            <div className="triangle-container" ref={triangle}>
                <svg height="500" width="500">
                <polygon points="250,60 0,400 500,400" className="triangle" />
                Sorry, your browser does not support inline SVG.
                </svg>
            </div>

        </Main>
    )
}

export default Hero


// make a triangle from map with clip path and rotate and translate it to the middle of the page
//  scale it to sqare