import Image from 'next/image'
import styled from 'styled-components'
import React, { Fragment, useState } from "react";


const Contain = styled.div`
  overflow:hidden;
  height: ${ props => props.height};

  display:grid;
  grid-template-areas: 'one two';
  grid-template-columns: 1fr 1.5fr;
  column-count: 3;
  `
const ImgContain = styled.span`
      border-radius: 50%;
      overflow: hidden;
      height:max-content;
      width: max-content;
      margin:5px;
      grid-area: one;
      align-items:center;
      vertical-align: bottom;

      
      `
const TextWrap = styled.div`
  width:inherit;
  margin-left:5px;
  margin-top:0;
  margin-bottom:0;
  align-items:center;
  align-self:center;
  column-span:2;
  grid-area: two;
  `

export default function TextImageContainer(props){
    // use a react hook to get and update the size of the container
    const [height, setHeight] = useState(props.height)
    if(props.subtitle === undefined || props.subtitle.text === undefined){
        return (
            <Fragment>
                <Contain height = {props.height}>
                    <TextWrap height = {props.height}>
                        <p className = 'title' style={jsonToCss(props.title)}>{props.title.text}</p>
                    </TextWrap>
                    <ImgContain height={props.height}>
                        <div>
                        <Image src={props.image.src}
                            //layout={'intrinsic'}
                               height={props.height}
                               width={props.height}
                               loader = {()=>props.image.src}
                               alt = ''
                        />
                        </div>
                    </ImgContain>
                </Contain>
            </Fragment>)
    }else {
        const html = (
            <Fragment>
                <Contain height={props.height}>
                    <ImgContain height={props.height}>
                        <Image src={props.image.src}
                            //layout={'intrinsic'}
                               height={props.height}
                               width={props.height}
                               loader={() => props.image.src}
                               alt=''
                        />
                    </ImgContain>
                    <TextWrap height={props.height}>
                        <p className='title' style={jsonToCss(props.title)}>{props.title.text}</p>
                        <p className='subtitle' style={jsonToCss(props.subtitle)}>{props.subtitle.text}</p>
                    </TextWrap>
                </Contain>
            </Fragment>)
        return html
    }
}
function jsonToCss(obj) {
    const t = {fontSize: (obj['font_size'] + "pt"), fontWeight: obj['font_weight'], color: obj['color']}
    return t;
}












