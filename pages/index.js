
import {Fragment, useEffect, useState} from "react";
import BaseContainer from "../components/BaseContainer";
import Backdrop from "../components/backdrop";
import {motion} from 'framer-motion'


export default function Home() {
    const fullElements = {
        0:{
            type:'text',
            text:'Hi Im Steve!',
            font_size:30,
            font_weight:'bold',
            view_alignment:'center',
            width_percent:0.75,
            alignment:'center',
            click_action:'present_fullscreen',
            click_action_data:{
                type:'text',
                text:'Hi Im Steve!',
                font_size:30,
                font_weight:'bold',
                view_alignment:'center',
                width_percent:0.75,
                alignment:'center',
                click_action:'present_fullscreen'
            }

        },
        1:{
            type:'text',
            text:"Welcome to the Steve Carlson rendition of the Clerkie Web Challenge. You're in for a treat! Popups, pages, styling, and more! All built with a limited understanding of Next JS that I built in an attempt to get hired! Dont believe me? Click Here!",
            font_size:16,
            font_weight:'normal',
            color:'black',
            width_percent:'0.75',
            alignment:'left',
            view_alignment:'left',
            click_action:'show_popup',
            click_action_data:{
                type:"text_with_image",
                height:300,
                title:{
                    text:"Steve Carlson",
                    font_size:26,
                    font_weight:'bold',
                    color: '#0f434e'
                },
                subtitle:{
                   text: "Clerkie's next Web Developer(click me)",
                   font_size:12,
                   font_weight:'normal',
                   color:"black"
                },
                image:{
                    src:'../static/ProfHeadshot.jpg'
                },
                click_action:'navigate',
                navigate_pageName:'/about'
            }

        },
        2:{
            type:"text",
            text:"Throughout this website I'll be demonstrating everything I have been up to in the last week, with the hope of inspiring awe and big hopes of working together professionally",
            font_size:16,
            color:'blue',
            font_weight:'bold',
            view_alignment:"right",
            alignment:'right',
            width_percent: '0.65'
        },
        3:{
            type:'space',
            height:'175px',
            click_action:'present_popup',
            click_action_data:{
                type:"text",
                text:'did you find it??',
                font_size:16,
                color:'blue',
                font_weight:'bold',
                view_alignment:"center",
                alignment:'right',
                width_percent: '0.65',
                click_action:'dismiss'
            }
        },
        4: {
            type: 'image',
            src: '../static/hardAtWork.jpg',
            h2w_ratio: 0.5,
            width_percent: 0.5,
            view_alignment: "center",
            click_action: "present_fullscreen",
            click_action_data: {
                type: 'image',
                h2w_ratio: 1,
                width_percent: 1,
                src: '../../static/hardAtWork.jpg',
                click_action: 'dismiss'
            }
        },
            5:{
                type:'text',
                text:'Above is a picture of me (Steve) hard at work on this very app that I have been working on! Click the image for another view',
                font_size:16,
                font_weight:'normal',
                view_alignment:"center",
                alignment:'left',
                width_percent: '0.55',
                click_action:'present_fullscreen'
            },
        6:{
            type:"text_with_image",
            height:200,
            title:{
                text:"Steve Carlson",
                font_size:26,
                font_weight:'bold',
                color: '#0f434e'
            },
            subtitle:{
                text: "Web Developer",
                font_size:18,
                font_weight:'normal',
                color:"black"
            },
            image:{
                src:'../static/lake.jpg'
            },
        },

        }
    const elementKeys = Object.keys(fullElements)
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
                damping: 75,
                stiffness: 1000,
            },
        },
        exit: {
            y: "100vh",
            opacity: 0,
        },
    };
    return (
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="modal orange-gradient"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                {elementKeys.map((key)=>{
                    return (<BaseContainer key={key} element = {fullElements[key]}/>)
                })}
            </motion.div>


    )
}
