import Link from 'next/link'
import {Fragment} from 'react'
import Container from '../components/containers'

export default function Home(){
    const array = {
        type: "text_with_image",
        title: {
            text: "Alex",
            font_size: "14",
            font_weight: "normal",
            color: "black"
        },
        subtitle: {
            text: "Good Lord please employ me",
            font_size: "12",
            font_weight: "normal",
            color: "gray"
        },
        image: {
            src: "https://www.clerkie.io/static/alex-e0b46011967fc058ff8fdbac2599b55f.jpg"
        },
        click_action: "dismiss"
    }
    return(
        <Container type = {array.type} title={array.title} subtitle = {array.subtitle} image={array.image}/>

    );
}
