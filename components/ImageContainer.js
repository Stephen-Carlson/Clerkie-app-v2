import styled from "styled-components";
import React, {Fragment, useEffect, useRef, useState} from "react";
import Image from "next/image";

export default function ImageContainer(props){
    const ref = useRef();
    const [parentWidth, setParentWidth] = useState(600);
    useEffect(()=>{
        if(ref.current){
            setParentWidth(ref.current.offsetWidth)
            console.log(parentWidth)

        }
    }, [])

    const ImgContain = styled.div`
      overflow: hidden;
      height:${props => props.height};
      width: ${props => props.height};
      margin:5px;
      vertical-align: middle;
      flex:1;
      align-items:center;
      column-span:1;
      left: 50%;
      top: 50%;
      `
      return <Fragment>
          <ImgContain>
              <Image src={props.image.src}
                  //layout={'intrinsic'}
                     height={props.height}
                     width={props.height}
                     loader = {()=>props.image.src}
                     alt = ''
              />
          </ImgContain>
      </Fragment>

}