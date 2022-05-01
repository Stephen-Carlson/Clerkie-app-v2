import Link from 'next/link'
import {Fragment} from 'react'
import TextImageContainer from "../components/TextImage";
import TextContainer from "../components/TextContainer";
import SpaceBlock from "../components/spaceBlock";

export default function Home(){
    const array =
    {
        "type": "text",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "font_size": "12",
        "font_weight": "normal",
        "color": "black",

    }
    const array1 =
    {
        "type": "text_with_image",
        "title": {
            "text": "Title",
            "font_size": "20",
            "font_weight": "normal",
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

    return(<Fragment>
            <TextContainer text = {array.text} fontSize = {array.font_size} fontWeight = {array.font_weight} color={array.color}/>
            <TextImageContainer type = {array1.type} title={array1.title} subtitle = {array1.subtitle} image={array1.image} height = {array1.height}/>
        </Fragment>
    )
}
//<TextImage type = {array1.type} title={array1.title} subtitle = {array1.subtitle} image={array1.image} height = {array1.height}/>
