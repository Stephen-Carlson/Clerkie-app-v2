import {useRef, useState, useEffect, Fragment} from 'react'
import TextContainer from "./TextContainer";
export default function Container(props){
    const ref = useRef();
    const [width, setWidth] = useState(600);
    const [height, setHeight] = useState(null);
    useEffect(()=>{
        if(ref.current){
            setWidth(ref.current.offsetWidth)
            console.log(width)
            setHeight(ref.current.offsetHeight)

        }
    }, [])
    if(props.type === 'text'){
        return <Fragment>
            <TextContainer text = {props.text} fontSize = {props.font_size} fontWeight = {props.font_weight} color={props.color} widthPercent = {props.width_percent} parentWidth = {width}/>
        </Fragment>
    }
}