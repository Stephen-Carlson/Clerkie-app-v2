import Link from 'next/link'
import {Fragment} from 'react'
import TextImageContainer from "../components/TextImage";
import TextContainer from "../components/TextContainer";
import SpaceContainer from "../components/SpaceContainer";
import ImageContainer from "../components/ImageContainer";

export default function Home(){
    const array =
    {
        "type": "text",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "font_size": "20",
        "font_weight": "bold",
        "color": "black",
        'width_percent':'0.4',
        'alignment':'left'

    }
    const array1 =
    {
        "type": "text_with_image",
        "title": {
            "text": "Title",
            "font_size": "20",
            "font_weight": "bold",
            "color": "black"
    },
        "subtitle": {
        "text": "Subtitle",
            "font_size": "12",
            "font_weight": "normal",
            "color": "gray"
    },
        "height": 200,
        "image": {
            "src": "https://www.clerkie.io/static/alex-e0b46011967fc058ff8fdbac2599b55f.jpg"
        },
        "click_action": "dismiss"
    }
    const array2 = {
        "type": "image",
        "h2w_ratio": '0.5',
        "width_percent": .75,
        "view_alignment": "left",
        "src": "https://www.clerkie.io/static/coin-75fb80be577c00ca53291d2bb116ce01.png",
        "click_action": "dismiss"
    }

    return(<Fragment>
            <TextContainer text = {array.text} fontSize = {array.font_size} fontWeight = {array.font_weight} color={array.color} widthPercent = {array.width_percent} alignment={array.alignment}/>
            <SpaceContainer height={array1.height}/>
            <TextImageContainer type = {array1.type} title={array1.title} subtitle = {array1.subtitle} image={array1.image} height = {array1.height}/>
            <ImageContainer src = {array2.src}  h2w_ratio = {array2.h2w_ratio} widthPercent = {array2.width_percent} viewAlignment = {array2.view_alignment}/>
        </Fragment>

    )
}
//<TextImage type = {array1.type} title={array1.title} subtitle = {array1.subtitle} image={array1.image} height = {array1.height}/>
