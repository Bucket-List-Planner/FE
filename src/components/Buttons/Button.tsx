import React, {MouseEvent} from 'react'
import styled from 'styled-components'
import { TweenMax, TimelineMax, Linear } from "gsap";

const Btn = styled.button<Props>`
    background: ${props => props.primary ? props.theme.primary : props.secondary ? props.theme.secondary : props.bg};
    color: ${props => props.color};
    outline: none;
    border: none;
    cursor: pointer;
    /* overflow: hidden; */
    position: relative;
    &:hover{
        filter: hue-rotate(30);
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
`

type Props = {
    color: string,
    bg: string,
    primary: boolean,
    secondary: boolean,
}

type circle = SVGCircleElement | null

class Button extends React.Component<Partial<Props>>{
    circle1: circle
    circle2: circle
    circle3: circle
 
    constructor(props: Props){
        super(props)
        this.circle1 = null
        this.circle2 = null
        this.circle3 = null
    }

    componentDidMount(){
        // TweenMax.set([this.circle1, this.circle2, this.circle3], {
        //     visibility: 'visible'
        // })
    }

    rippleEffect = (event: MouseEvent<HTMLButtonElement>) =>{
        event.preventDefault();
        //   console.log(" x: event.pageX, y: event.pageY, ", event)
        // this.circle1 && TweenMax.fromTo(this.circle1, 2 ,{scale: 0, autoAlpha:1, transformOrigin: "center center"}, {  scale: 1.5, autoAlpha: 0, repeat: 0});
        // this.circle2 && TweenMax.fromTo(this.circle2, 2 ,{scale: 0, autoAlpha:1, transformOrigin: "center center"}, {  scale: 1, autoAlpha: 0, repeat: 0, delay: 0.5,});
        // this.circle3 && TweenMax.fromTo(this.circle3, 2 ,{scale: 0, autoAlpha:1, transformOrigin: "center center"}, { scale: 0.5, autoAlpha: 0, repeat: 0, delay: 1});
        var tl           = new TimelineMax(),
        x            = event.nativeEvent.offsetX, // value from the mouse pointer to the padding edge of the target node
        y            = event.nativeEvent.offsetY,
        w            = event.currentTarget.offsetWidth,
        h            = event.currentTarget.offsetHeight,
        offsetX      = Math.abs( (w / 2) - x ),
        offsetY      = Math.abs( (h / 2) - y),
        deltaX       = (w / 2) + offsetX,
        deltaY       = (h / 2) + offsetY,
        scale_ratio  = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
// e.clientX - labelElement.left - (label.width / 2)
        console.log("scalo ratio ", x, y, w, h, offsetX, offsetY)

        scale_ratio 
        && tl.fromTo(this.circle1, 0.50, {x: x, y: y, transformOrigin: "center center", scale: 0, autoAlpha:1,}, {scale: scale_ratio, autoAlpha: 0, repeat: 0, delay: 0})
        // && tl.fromTo(this.circle2, 0.50, {x: x,y: y,transformOrigin: "center center", scale: 0, autoAlpha:1,}, {scale: scale_ratio / 2,autoAlpha: 0,});
    }

    render(){
        let children = this.props.children,
            color = this.props.color || 'black',
            bg = this.props.bg || 'white',
            primary = this.props.primary || false,
            secondary = this.props.secondary || false

        return(
            <Btn color={color}
                primary={primary}
                secondary={secondary}
                bg={bg}
                onClick={this.rippleEffect}
            >
                <div className="svg" aria-hidden="true">
                    <svg id="circles" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"  focusable="false" >
                        <circle id="circle1" ref={c => this.circle1 = c} cx="1" cy="1" r="1" fill="MediumTurquoise"/>
                        <circle id="circle2" ref={c => this.circle2 = c} cx="1" cy="1" r="1" fill="MediumTurquoise"/>
                        <circle id="circle3" ref={c => this.circle3 = c} cx="1" cy="1" r="1" fill="MediumTurquoise"/>
                    </svg>
               </div>
                {children}
            </Btn>
        ) 
    }    
}

export default Button