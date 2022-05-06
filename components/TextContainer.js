import {Fragment, useEffect, useRef, useState} from "react";
import styled from "styled-components";


const TextWrap = styled.div`
  padding:5px;
  align-items: center;
  align-content: center;
  display:flex;
  flex-direction: column;
  
  `

export default function TextContainer(props){
    const text = props.text;
    const fontSize = props.font_size;
    const fontWeight = props.font_weight;
    const color = props.color;
    const ref = useRef();
    const [parentWidth, setParentWidth] = useState(600);
    useEffect(()=>{
        if(ref.current){
            setParentWidth(ref.current.offsetWidth)
        }
    }, [])
    let css = {...props}
    css.width = parentWidth * props.widthPercent
    css.textAlign = props.alignment
    delete css.text
    switch(props.viewAlignment){
        case 'center':
            css.marginRight = 'auto';
            css.marginLeft = 'auto';
            break;
        case 'right':
            css.marginRight = 0;
            css.marginLeft = 'auto';
            break;
        case 'left':
            css.marginRight = 'auto';
            css.marginLeft = '0';
            break;
    }

    // let widthPercent = props.width_percent;
    // let alignment = props.alignment;
    //
    return(<Fragment>
        <TextWrap><p style={css}>{props.text}</p></TextWrap>
    </Fragment>)
}
function jsonToCss(obj) {
    return {fontSize: (obj['font_size'] + "px"), fontWeight: obj['font_weight'], color: obj['color']}
}