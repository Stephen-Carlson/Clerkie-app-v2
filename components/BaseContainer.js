import {useEffect, useState} from "react";
import Container from "./Container";
import {router, useRouter} from "next/router";
import {motion, AnimatePresence} from 'framer-motion'
import backdrop from "./backdrop";
import Modal from 'react-modal'

Modal.setAppElement("#__next");

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
};

export default function BaseContainer({element}){
    const Router = useRouter();
    let css = {position:'absolute',
        top:'50%',
        left:'50%',
        width:'auto',  /* adjust as per your needs */
        height:'auto',   /* adjust as per your needs */
        marginLeft:'auto',   /* negative half of width above */
        marginTop:'auto',
        boxShadow:'10px 10px gray',
        backgroundColor:"white"}
    const [show, setShow] = useState(() =>false)
    const [vIndex, setVIndex] = useState(1)
    const [popUpStack, setStack] = useState([])
    useEffect(()=> {
        if(element.click_action_data !== undefined) {
            let current = element;
            while (current.click_action_data !== undefined) {
                popUpStack.push(current)
                current = current.click_action_data;
            }
            popUpStack.push(current)
        }
    }, [])

    // make a list of children PopUps, so we can open/close them from anywhere
    return (
        <backdrop>
        <div>{/*start with base elements*/}
                <a onClick={()=>{
                            element.click_action !== undefined? setShow(toggle(show)): null
                        }}>
                            <Container element = {element}/>
                        </a>
            {/*if show state is true, load this popup*/}
                <AnimatePresence>
                    <motion.div
                        onClick={(e) => e.stopPropagation()}
                        className="modal orange-gradient"
                        variants={dropIn}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <Modal  style = {css} isOpen = {show}>
                            <div onClick = {()=> {
                                if([popUpStack[vIndex].click_action !== undefined]){
                                switch(popUpStack[vIndex].click_action){
                                    case 'present_popup':
                                        setVIndex(vIndex + 1)
                                        break;
                                    case 'present_fullscreen':
                                        Router.push('/display/'+JSON.stringify(popUpStack[vIndex]))
                                        break;
                                    case "navigate":
                                        Router.push(popUpStack[vIndex].navigate_pageName);
                                        break;
                                    case 'dismiss': /* else clause is dismiss option*/
                                        setShow(toggle(show))
                                        setVIndex(0)
                                        break;
                                }
                            }
                            }}>
                                <div style={{margin:'auto'}}>
                                    <Container element = {popUpStack[vIndex]}/>
                                </div>
                            </div>
                        </Modal>
                    </motion.div>
                </AnimatePresence>
        </div>
        </backdrop>
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
