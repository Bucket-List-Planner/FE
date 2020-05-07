import React, {MouseEvent} from 'react'
import styled from 'styled-components'
import { TimelineMax, Power2 } from "gsap"
import { lighten } from 'polished'

type Props = {
    bg: string,
    primary: boolean,
    secondary: boolean,
    outline: boolean,
}

class Button extends React.Component<Partial<Props>>{
    circle1: SVGCircleElement | null
 
    constructor(props: Props){
        super(props)
        this.circle1 = null
    }

    componentDidMount(){
        let tl = new TimelineMax
        tl.set([this.circle1], {
            visibility: 'hidden'
        })
    }

    rippleEffect = (event: MouseEvent<HTMLButtonElement>) =>{
        event.preventDefault();
        var tl           = new TimelineMax(),
        x            = event.nativeEvent.offsetX, // value from the mouse pointer to the padding edge of the target node
        y            = event.nativeEvent.offsetY, 
        w            = event.currentTarget.offsetWidth,
        h            = event.currentTarget.offsetHeight,
        offsetX      = Math.abs( (w / 2) - x),
        offsetY      = Math.abs( (h / 2) - y),
        deltaX       = (w / 2) + offsetX,
        deltaY       = (h / 2) + offsetY,
        scale_ratio  = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

        scale_ratio && tl.fromTo(this.circle1, 0.55, 
            {
                x: x, y: y, 
                transformOrigin: "center center", 
                scale: 0, autoAlpha:1, 
                ease: Power2.easeInOut
            }, 
            {
                scale: scale_ratio, 
                autoAlpha: 0, 
                repeat: 0, 
                delay: 0
            })
    }

    render(){
        let children = this.props.children,
            bg = this.props.bg || 'white',
            primary = this.props.primary || false,
            secondary = this.props.secondary || false,
            outline = this.props.outline || false

        return(
            <Btn 
                primary={primary}
                secondary={secondary}
                bg={bg}
                onClick={this.rippleEffect}
                outline={outline}
            >
                <div className="svg">
                    <svg id="circles" xmlns="http://www.w3.org/2000/svg">
                        <circle id="circle1" ref={c => this.circle1 = c} cx="1" cy="1" r="1" fill="MediumTurquoise"/>
                    </svg>
               </div>
                {children}
            </Btn>
        ) 
    }    
}

export default Button


// pass an icon/text
// choose icon button (circle) vs button (rec)
// mood for btn with default colors: red, yellow,
// 

const Btn = styled.button<Props>`
    outline: none;
    border: ${props => props.outline ? `1.5px solid var(--color)` : 'none'};
    border-radius: 4px;
    cursor: pointer;
    overflow: hidden;
    position: relative;

    &:hover{
        background: ${props => props.primary   ? lighten(0.35, props.theme.primary)  : 
                               props.secondary ? lighten(0.29, props.theme.secondary): 
                               props.bg};
    }

    #circle1{
        fill: ${props => props.primary   ?  lighten(0.2, props.theme.primary)   : 
                         props.secondary ? lighten(0.15, props.theme.secondary) : 
                         props.bg};
    }

    .svg{
        height: 100%;
        pointer-events: none;
        width: 100%; 
        position: absolute; 
        top: 0;
        left: 0;
        z-index: 0;
    }

    & * {
        pointer-events: none;
    }

    --color: ${props => props.primary ? props.theme.primary       : 
                         props.secondary ? props.theme.secondary  : 
                         props.bg};
`