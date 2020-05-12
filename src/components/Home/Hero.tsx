import React, { FunctionComponent, useState, useEffect, useRef } from 'react'
// styles
import styled from 'styled-components'
// animation
import { TimelineMax } from 'gsap'
// components
import Map from './Map'
import Typography from '../Typography/Typography'
import Button from '../Buttons/Button'

const Hero:FunctionComponent = () => {
    // custom font size for title
    let fontSize = {min: 24, max: 84}
    // coordinates for clippath in map svg
    let arr1 = [100, 0, 40, 0, 100, 80]
    let arr2 = [100, 0, 0, 0, 100, 145] 
    let arr3 = [50, 0, 100, 0, 100, 60, 50, 60]

    let duration = 0.75

    // refs for elements manipulation
    // svg refs
    const map = useRef<SVGSVGElement>(null)
    const circle = useRef<SVGSVGElement>(null)
    const triangle =  useRef<SVGSVGElement>(null)
    // components refs
    const title = useRef<HTMLHeadingElement>(null)
    const title2 = useRef<HTMLHeadingElement>(null)
    const title3 = useRef<HTMLHeadingElement>(null)
    const text1 = useRef<HTMLParagraphElement>(null)
    const text2 = useRef<HTMLParagraphElement>(null)
    const text3 = useRef<HTMLParagraphElement>(null)
    const btn = useRef<HTMLButtonElement>(null)

    const [ screen, setScreen ] = useState(0);

    // classes for button when screen changes, (for changing the grid)
    const [ btnV, setBtnV ] = useState('btn-v1');

    const toggleShape = () => {
        if(screen === 0){
            anim1()
        }
        if(screen === 1){
            anim2()
        }
    }

    useEffect(() =>{
        let tl = new TimelineMax()
        // hide circle and text2 from first screen
        tl.set(circle.current, { scale: 0 })
        tl.set(triangle.current, { autoAlpha: 0 })

        tl.set(title2.current, {yPercent: -30, autoAlpha: 0})
        tl.set(text2.current, { scale: 0 })

        tl.set(title3.current, { autoAlpha: 0 })
        tl.set(text3.current, { autoAlpha: 0 })
        // set clippath on map
        tl.set(map.current, {clipPath: 'polygon('+arr2[0]+'%'+arr2[1]+'%,'+arr2[2]+'%'+arr2[3]+'%,'+arr2[4]+'%'+arr2[5]+'%)'})
    }, [])

    const anim2 = () =>{
        setScreen(2)
        let tl = new TimelineMax()

        // set new classes for btn, (grid change)
        setBtnV('btn-v1 btn-v3')

        tl.to(map.current, duration, {clipPath:'polygon('+arr3[0]+'%'+arr3[1]+'%,'+arr3[2]+'%'+arr3[3]+'%,'+arr3[4]+'%'+arr3[5]+'%,'+arr3[6]+'%'+arr3[7]+'%)'})
        tl.to(map.current, duration, {xPercent: 0, yPercent: 0, rotation: 0, scale: 0.9, autoAlpha: 0.4,  delay: -duration})
        
        tl.to(title3.current, duration, { autoAlpha: 1, delay: -duration })
        tl.to(text3.current, duration, { autoAlpha: 1, delay: -duration })

        // clean all other elements
        tl.to(triangle.current, duration, { autoAlpha: 0, delay: -duration})
        tl.to(text1.current, duration, { autoAlpha: 0, delay: -duration})
        tl.to(text2.current, duration, { autoAlpha: 0, delay: -duration})

        tl.to(circle.current, duration, { autoAlpha: 0, delay: -duration})

        tl.to(title.current, duration, { autoAlpha: 0, delay: -duration})
        tl.to(title2.current, duration, { autoAlpha: 0, delay: -duration})
    }

    const anim1 = () => {
        // change the screen
        setScreen(1) 
        // set new classes for btn, (grid change)
        setBtnV('btn-v1 btn-v2')

        let tl = new TimelineMax()

        tl.to(map.current, duration, {clipPath:'polygon('+arr1[0]+'%'+arr1[1]+'%,'+arr1[2]+'%'+arr1[3]+'%,'+arr1[4]+'%'+arr1[5]+'%)'})
        tl.to(map.current, duration, {xPercent: -30, yPercent: 80, rotation: -45, scale: 0.8, autoAlpha: 0.6,  delay: -duration})
        tl.to(triangle.current, duration, { autoAlpha: 1, delay: -duration})

        tl.to(text1.current, duration, { autoAlpha: 0, delay: -duration })
        tl.to(text2.current, duration, { scale: 1, delay: -duration })

        tl.to(circle.current, duration, {  scale: 1.8, autoAlpha: 0.7, delay: -duration})

        tl.to(title.current, duration, { xPercent: -100, delay: -duration })
        tl.to(title2.current, duration, { yPercent: 0, autoAlpha: 1, delay: -duration })
    }

    return(
        <Main>
            {/* screen 1 */}
            <Typography  
                data-cy="keyTitle"
                size={fontSize} 
                vertical 
                rotate={180}
                innerRef={title}
                className="title"
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

            {/* screen 2 */}
            <Typography  
                data-cy="keyTitle"
                size={fontSize} 
                innerRef={title2}
                className="title2"
            >
                Bucket List
            </Typography>

            {/* no longer then 20 words */}
            <Typography
                color="white"
                variant={'p'} 
                className={'text2'}
                innerRef={text2}
            >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            </Typography>

            {/* screen 3 */}
            <Typography  
                data-cy="keyTitle"
                size={fontSize} 
                innerRef={title3}
                className="title3"
            >
                Bucket List
            </Typography>

            <Typography
                color="black"
                variant={'p'} 
                className={'text3'}
                innerRef={text3}
            >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            </Typography>

            <Button danger
                outline 
                onClick={toggleShape} 
                innerRef={btn} 
                className={btnV}
            >
                <Typography variant={'p'} danger>
                    {screen === 0 && 'Learn more'}
                    {screen === 1 && 'What next?'}
                    {screen === 2 && 'Sign in'}
                </Typography>
            </Button>

            {/* map screen 1, 2, 3 */}
            <div className="map">
                <Map innerRef={map} />
            </div>

            {/* circle screen 2 */}
            <svg height="100" width="100" viewBox="0 0 100 100" ref={circle} className="circle">
                <circle cx="50" cy="50" r="40" stroke-width="3" fill="red" />
            </svg>

            {/* lines screen 2 */}
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="triangle" ref={triangle} >
                <path d="M90 0 L0 90 Z" stroke="#f5f5f5f0" stroke-width="0.5" stroke-linecap="square" />
                <path d="M95 0 L0 95 Z" stroke="#f5f5f5f0" stroke-linecap="square" />
                <path d="M80 20 L20 80 Z" stroke="#f5f5f5f0" stroke-width="0.5" stroke-linecap="square" />
            </svg>
        </Main>
    )
}

export default Hero

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
    overflow: hidden;

    .title{
        justify-self: flex-start;
        align-self: center;
        text-transform: uppercase;
        letter-spacing: 0.4vh;
        white-space: nowrap;
        grid-area: 1 / 1 / 5 / 2;
    }
    
    .title2{
        z-index: 2;
        grid-area: 1 / 1 / 1 / 5; 
        text-transform: uppercase;
        white-space: nowrap;
        letter-spacing: 0.5vh;
        padding-left: 1rem;
    }

    .text1{
        background: #594DFF;
        padding: 5px 5px 5px 10px;
        margin: 0 1rem 0.5rem 1rem;
        align-self: end;
        justify-self: start;
        z-index: 5;
        grid-area: 1 / 2 / 4 / 5;
    }

    .text2{
        background: ${props => props.theme.colors.warning};
        padding: 0.5rem;
        z-index: 5;
        align-self: center;
        grid-area: 1 / 2 / 5 / 4;
    }

    .title3{
        align-self: flex-end;
        z-index: 10;
        grid-area: 1 / 2 / 1 / 5;
    }

    .text3{
        align-self: flex-end;
        z-index: 10;
        grid-area: 2 / 2 / 2 / 4;
    }
    @media (max-width: 500px){
        .text3{
            grid-area: 2 / 2 / 2 / 5;
        }
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

    .btn-v3{
        grid-area: 4 / 2 / 5 / 5;
        margin: 0;
    }

    .circle{
        grid-area: 2 / 2 / 5 / 5;
        width: 100%;
        height: 100%;
    }

    .triangle{
        z-index: 0;
        grid-area: 1 / 1 / 3 / 3;
    }

    .map{
        grid-area: 1 / 1 / 5 / 5;
        justify-self: flex-end;
        width: 100%;
        z-index: 1;
        svg{
            justify-self: flex-end;
            width: 100%;
            height: 100%;
        }
    }
`
