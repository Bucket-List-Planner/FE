import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { responsiveFont } from '../../globalStyles'

const Variants = { 
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    p: 'p',
} as const

type Variant = (typeof Variants)[keyof typeof Variants]

type VariantFont = {min: number, max: number}

type TextProps = {
    min: number, 
    max: number, 
    primary: boolean, 
    secondary: boolean, 
    vertical: boolean, 
    rotate: number, 
    danger: boolean, 
    warning: boolean, 
    success: boolean, 
    info: boolean,
}

let font:VariantFont = {min: 12, max: 24}

const Text = styled.h1<TextProps>`
    ${props => responsiveFont(props.min, props.max)}
    color: ${props => props.primary   ? props.theme.primary       : 
                      props.secondary ? props.theme.secondary     : 
                      props.danger    ? props.theme.colors.danger : 
                      props.warning   ? props.theme.colors.warning: 
                      props.success   ? props.theme.colors.success: 
                      props.info      ? props.theme.colors.info   : 
                      props.color};
    writing-mode: ${props => props.vertical ? 'vertical-lr' : 'vertical-hr'};
    transform: ${props => `rotate(${props.rotate}deg)` };
    user-select: none;
`

type Props = {
    variant?: Variant,
    size?: VariantFont,
    sm?: boolean,
    md?: boolean,
    lg?: boolean,
    xl?: boolean,
    primary?: boolean,
    secondary?: boolean,
    color?: string,
    vertical?: boolean,
    rotate?: number,

    danger?: boolean,
    warning?: boolean,
    success?: boolean,
    info?: boolean,

    innerRef?: React.RefObject<HTMLHeadingElement | HTMLParagraphElement>
    className?: string
}

const Typography:FunctionComponent<Props> = ({
    variant = 'h1',
    size,
    children,
    sm = false, md = false, lg = false, xl = false,
    primary = false, secondary = false, 

    danger = false,
    warning = false,
    success = false,
    info = false,

    color = 'black',
  
    vertical = false,
    rotate=0,

    className,
    innerRef,
    ...rest
}) => {
    let s = {
        xl: {min: 36, max: 48},
        lg: {min: 24, max: 36},
        md: {min: 12, max: 24},
        sm: {min: 8, max: 12}
    }
    let fontSize:VariantFont = size ? size : xl ? s.xl : lg ? s.lg : md ? s.md : sm ? s.sm : font

    return (
            <Text 
                as={variant} 
                min={fontSize.min} 
                max={fontSize.max}
                primary={primary}
                secondary={secondary}
                danger={danger}
                warning={warning}
                success={success}
                info={info}
                color={color}
                vertical={vertical}
                rotate={rotate}
                className={className}
                ref={innerRef}
                {...rest}
            >
                {children}
            </Text>
    )
}

export default Typography


