import {Fragment} from "react";
import styled from "styled-components";

const TextWrap = styled.div`
  border-style: solid;
  border-color: blue;
  width:inherit;
  padding:10px;
  max-width: 600px;
  align-content: center;
  
  `

export default function TextContainer(props){
    const text = props.text;
    const fontSize = props.font_size;
    const fontWeight = props.font_weight;
    const color = props.color;
    let temp = {...props}
    delete temp[text]
    // let widthPercent = props.width_percent;
    // let alignment = props.alignment;
    //
    return(<Fragment>
        <TextWrap><p>{props.text}</p></TextWrap>
    </Fragment>)
}
function jsonToCss(obj) {
    const t = {fontSize: (obj['font_size'] + "pt"), fontWeight: obj['font_weight'], color: obj['color']}
    return t;
}