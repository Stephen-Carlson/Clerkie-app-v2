import {useRef, useState, useEffect, Fragment} from 'react'
import TextContainer from "./TextContainer";
import TextImageContainer from "./TextImage";
import SpaceContainer from "./SpaceContainer";
import ImageContainer from "./ImageContainer";



export default function Container({element}) {
    const [showPopup, setShow] = useState(false)
    useEffect (()=>{
        setShow(false)
    }, [])
    let elements = [element]
    if(element.type !== undefined){
        return (
            <Fragment>
                {
                    elements.map((element) => {
                    switch (element.type) {
                        case 'text_with_image':

                            return (<Fragment>
                                    <TextImageContainer type={element.type} title={element.title}
                                                        subtitle={element.subtitle}
                                                        image={element.image} height={element.height}/>
                                </Fragment>
                            )
                        case 'text':

                            return <TextContainer text={element.text} fontSize={element.font_size}
                                                  fontWeight={element.font_weight}
                                                  color={element.color} widthPercent={element.width_percent}
                                                  alignment={element.alignment} viewAlignment = {element.view_alignment}
                            />
                        case 'image':
                            return <ImageContainer src={element.src} h2w_ratio={element.h2w_ratio}
                                                   widthPercent={element.width_percent}
                                                   viewAlignment={element.view_alignment}/>
                        case 'space':
                            return <SpaceContainer height={element.height}/>
                        default:
                            return <h1>Error, no block returned </h1>
                        }
                    })
                }
            </Fragment>
        )
    }
}
