import React, {Fragment} from 'react'
import Image from 'next/image'

// over-arching container class that handles the various types of blocks, makes code cleaner
// export default function Container(props){
//     console.log(props.image.src)
//     // switch on the type of block that we need
//     return (<Image src={props.image.src}
//                    loader={() => props.image.src}
//                    alt = ''
//                    layout = {'fill'}
//                    />)
// }

export default function Container(props){
    switch(props.type) {
        case 'text_with_image':
            return TextImage(props)
        case 'text':
            return <div>{"text"}</div>
        case 'image':
            return <div>{"image"}</div>
        case 'space':
            return <div>{"space"}</div>
    }
}
function TextImage(props){
    if(props.title !== undefined){
        const title = props.title.text;
    }
    if(props.subtitle !== undefined){
        const subtitle = props.title.text;
    }
    return (<Fragment>
        <Image src={props.image.src}
               height = {500}
               width = {500}
               loader = {()=>props.image.src}
               alt = '' />
        <h1>{props.title.text}</h1>
        <h3>{props.subtitle.text}</h3>
    </Fragment>)
}
// function jsonToCss(json){
//     const keys = json.keys
//     let ht = ``
//     return keys.map((key)=> {return '${key}:${json[key]}'}).join(', ')
// }