import {useEffect, useRef, useState} from "react";

function useElementDimensions(defaultWidth, defaultHeight){
    const ref = useRef();
    const [width, setWidth] = useState(()=> defaultWidth);
    const [height, setHeight] = useState(()=> defaultHeight);
    useEffect(()=>{
        if(ref.current){
            setWidth(ref.current.offsetWidth)
            setHeight(ref.current.offsetHeight)
        }
    }, [])

}