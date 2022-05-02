import Image from 'next/image'
import styled from 'styled-components'
import React, { Fragment, useRef, useEffect, useState } from "react";


const Contain = styled.div`
  border-style: solid;
  border-color: blue;
  overflow:hidden;
  height: ${ props => props.height } ;
  max-width: 600px;
  display:flex;
  column-count: 3;
  `
const ImgContain = styled.div`
      border-radius: 100%;
      overflow: hidden;
      height:${props => props.height};
      width: ${props => props.height};
      margin:5px;
      vertical-align: middle;
      display:flex;
      align-items:center;
      column-span:1;
      left: 50%;
      top: 50%;
      
      `
const TextWrap = styled.div`
  width:inherit;
  margin-left:5px;
  flex:2;
  margin-top:0;
  margin-bottom:0;
  align-items:center;
  align-self:center;
  column-span:2;
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
                        <Image src={props.image.src}
                            //layout={'intrinsic'}
                               height={props.height}
                               width={props.height}
                               loader = {()=>props.image.src}
                               alt = ''
                        />
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












