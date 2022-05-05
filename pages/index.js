
import {Fragment, useEffect, useState} from "react";
import ContainerWithModal from "../components/ContainerWithModal";



export default function Home() {
    const [s, setS] = useState(()=>undefined);
    const [y, setY] = useState(()=>false);

    const array =
        {
            "type": "text",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "font_size": "20",
            "font_weight": "bold",
            "color": "black",
            'width_percent':'0.4',
            'alignment':'left',

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
            "click_action": "present_popup",
            "click_action_data": {
                "type": "text",
                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                'font_size':'14',
                'font_weight':'bold',
                'color':'black',
                'width_percent':'0.95',
                'text_alignment':'left',
                'click_action': 'present_fullscreen'
            }
        }

    const array2 = {
        "type": "image",
        "h2w_ratio": '0.5',
        "width_percent": .75,
        "view_alignment": "center",
        "src": "https://www.clerkie.io/static/coin-75fb80be577c00ca53291d2bb116ce01.png",
        "click_action": "dismiss"
    }
    const element3 = {
        "type": "space",
        "height": 15
    }
    return (
        <div>
            <ContainerWithModal element = {array1}/>
        </div>


    )
}
