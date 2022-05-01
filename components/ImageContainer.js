import styled from "styled-components";
import {Fragment, useEffect, useRef, useState} from "react";
import Image from "next/image";



export default function ImageContainer(props){
    const ref = useRef();
    const [width, setWidth] = useState(()=> 200);
    const [height, setHeight] = useState(()=> 200);

    useEffect(()=>{
        if(ref.current){
            setWidth(ref.current.offsetWidth)
            setHeight(ref.current.offsetHeight)
        }
    }, [])

    const ImgContain = styled.div`
      max-width:600px;
      border-style: solid;
      border-color: blue;
      overflow: hidden;
      display:flex;
      flex-direction: column;
      object-fit: contain;
      height: ${props=> (props.h2w_ratio*width)}
      
      `

    let css = {...props}
    delete css.src;

      return <Fragment>
          <ImgContain>
              <div style={{textAlign:props.viewAlignment, position:'relative', objectFit:'contain'}}>
                  <Image src={props.src}
                         height={height*props.h2w_ratio}
                         width={width}
                         loader = {()=>props.src}
                         alt = ''
                         style={css}
                  />
              </div>
          </ImgContain>
      </Fragment>

}