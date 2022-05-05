import {useEffect, useState} from "react";
import Modal from 'react-modal'
import Container from "./Container";
import {router, useRouter} from "next/router";
import Link from "next/link";

Modal.setAppElement("#__next");

export default function ContainerWithModal({element}){
    const Router = useRouter();
    let css = {position:'absolute',
        top:'50%',
        left:'50%',
        width:'auto',  /* adjust as per your needs */
        height:'auto',   /* adjust as per your needs */
        marginLeft:'auto',   /* negative half of width above */
        marginTop:'auto',
        boxShadow:'10px 10px gray',
        borderStyle:'solid',
        borderColor:'blue',
        backgroundColor:"white"}

    const [show, setShow] = useState(() =>false)
    const [vIndex, setVIndex] = useState(0)
    const [popUpStack, setStack] = useState([])
    useEffect(()=> {
        if(element.click_action_data !== undefined) {
            let current = element.click_action_data;
            while (current.click_action_data !== undefined) {
                popUpStack.push(current)
                current = current.click_action_data;
            }
            popUpStack.push(current)
        }
    }, [])

    // make a list of children PopUps, so we can open/close them from anywhere
    return (
        <div> {/*start with base elements*/}
            <a onClick={()=>{
                setShow(toggle(show));
            }}>
                <Container element = {element}/>
            </a>
            {/*if show state is true, load this popup*/}
                    <Modal  style = {css} isOpen = {show}>
                        <div onClick = {()=> {
                            switch(popUpStack[vIndex].click_action){
                                case 'show_popup':
                                    setVIndex(vIndex + 1)
                                    break;
                                case 'full_screen':
                                    console.log("fullscreen")
                                    Router.push('/pages/[fullscreen]?element='+popUpStack[vIndex])
                                    break;
                                default: /* else clause is dismiss option*/
                                    console.log('dismiss')
                                    setShow(toggle(show))
                                    setVIndex(0)
                                    break;
                                }
                                console.log(popUpStack[vIndex])
                        }
                        }>
                            <div style={{margin:'auto'}}>
                                <Container element = {popUpStack[vIndex]}/>
                            </div>
                        </div>
                    </Modal>
        </div>
    )

}
function toggle(bool){
    switch(bool){
        case true:
            return false
        case false:
            return true
    }
}
