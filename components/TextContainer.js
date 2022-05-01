import {Fragment, useEffect, useRef, useState} from "react";
import styled from "styled-components";
import style from 'styled-jsx';

const TextWrap = styled.div`
  border-style: solid;
  border-color: blue;
  padding:10px;
  max-width: 600px;
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
            console.log(parentWidth)

        }
    }, [])
    let css = {...props}
    css.width = parentWidth * props.widthPercent
    css.textAlign = props.alignment
    delete css.text

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