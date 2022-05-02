import styled from "styled-components";
import {Fragment, useEffect, useRef, useState} from "react";
import Image from "next/image";

const ImgContain = styled.div`
      max-width:600px;
      border-style: solid;
      border-color: blue;
      `
const MovableImage = styled.div`
  position:relative;

`
export default function ImageContainer(props){
    const ref = useRef();
    const [width, setWidth] = useState(()=> 400);

    useEffect(()=>{
        if(ref.current){
            setWidth(ref.current.offsetWidth)
        }
    }, [])

    let css = {}
    css.height = width*props.h2w_ratio;
    css.width = width*props.widthPercent;
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

      return <Fragment>
          <ImgContain>
              <MovableImage style={css}>
                  <Image src={props.src}
                         layout={'fill'}
                         loader = {()=>props.src}
                         alt = ''
                  />
              </MovableImage>
          </ImgContain>
      </Fragment>

}