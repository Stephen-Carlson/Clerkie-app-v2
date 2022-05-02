import {useRef, useState, useEffect, Fragment} from 'react'
import TextContainer from "./TextContainer";
import TextImageContainer from "./TextImage";
import SpaceContainer from "./SpaceContainer";
import ImageContainer from "./ImageContainer";

export default function Container(props){
    let html = ``
    props.elements.forEach((element)=>{
        if(element.type === 'text_with_image'){
            html+= <TextImageContainer type ={element.type} title={element.title} subtitle={element.subtitle} image = {element.image} height = {element.height} />
        }else if(element.type === 'text'){
            html += <TextContainer text = {element.text} fontSize = {element.font_size} fontWeight = {element.font_weight} color={element.color} widthPercent = {element.width_percent} alignment={element.alignment}/>
        }else if(element.type === 'image'){
            html += <ImageContainer src = {element.src}  h2w_ratio = {element.h2w_ratio} widthPercent = {element.width_percent} viewAlignment = {element.view_alignment}/>
        }else if(element.type === 'space'){
            html += <SpaceContainer height={element.height}/>
        }
    })
    return html;
}