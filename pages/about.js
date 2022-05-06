import BaseContainer from "../components/BaseContainer";
import {motion} from "framer-motion";
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

export default function AboutPage(){
    const fullElements={
        1:{
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
        2:{
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
        3:{
            type:'text',
            text:'I am a recent graduate of the University of Vermont with a degree in Computer Science and Information Systems, a program that combines a computer science program with the core of the Business Administration program. This combination encourages me think technically about problem, and gives me the skills to effectively solve problems at scale and communicate the results effectively.',
            font_size:20,
            font_weight:'normal',
            view_alignment:'center',
            width_percent:0.95,
            alignment:'left',
            click_action:'present_fullscreen',
        },
        4:{
            type:'space',
            height:'50px'
        },
        5:{
            type:'text',
            text:'Here is a short list of some projects I have worked on:',
            font_size:18,
            font_weight:'normal',
            view_alignment:'center',
            width_percent:0.75,
            alignment:'center'
        },
        6:{
            type:"text_with_image",
            height:150,
            title:{
                text:"Irgo.Travel",
                font_size:26,
                font_weight:'bold',
                color: '#0f434e'
            },
            subtitle:{
                text:"Lead Development Intern" ,
                font_size:12,
                font_weight:'normal',
                color:"black"
            },
            image:{
                src:'../static/irgoLogo.jpg'
            },
            click_action:'present_popup',
            click_action_data:{
                type:'image',
                src:'../static/irgoDash.png',
                h2w_ratio: 0.5,
                width_percent: 1,
                view_alignment: "center",
                click_action:'present_popup',
                click_action_data:{
                    type:'image',
                    src:'../static/irgoDash2.png',
                    h2w_ratio: 0.5,
                    width_percent: 1,
                    view_alignment:'center',
                    click_action:'dismiss'
                }
            }
        },
        7:{
            type:'text',
            text:"A Web application platform made to make planning groups trips a smoother and more enjoyable process. During my experience with this young company, I worked hand in hand with the two founders (two UPenn MBA Cannidates) of the company to make their vision possible and to produce their MVP. Throughout the process, I was exposed to many aspects of running a startup, and got to participate in meetings in every discipline of a business. Click the Image to see some photos of pages I developed during my internship. ",
            font_size:18,
            font_weight:'normal',
            view_alignment:'center',
            width_percent:0.75,
            alignment:'left'
        },
        8:{
            type:'space',
            height:'50px',
            click_action:'present_fullscreen'
        },
        9: {
            type: "text_with_image",
            height: 150,
            title: {
                text: "Blokus",
                font_size: 15,
                font_weight: 'bold',
                color: '#0f434e'
            },
            image: {
                src: '../static/Blokus.png'
            },
            click_action: 'present_popup',
            click_action_data: {
                type: 'image',
                src: '../static/blokusgame.png',
                click_action: 'dismiss',
                h2w_ratio: 0.5,
                width_percent: 0.5,
                view_alignment: "center",
            }
        },
            10:{
                type:'text',
                text:"An implementation of a classic colorful board game built while learning the core concepts behind iterative software development, including SCRUM/agile process, and waterfall processes. I worked with a team of 3 other computer science students, with roles varying week to week. I personally worked on the rotation logic of the pieces, as well as the front end board interface. ",
                font_size:14,
                font_weight:'normal',
                view_alignment:'left',
                width_percent:0.75,
                alignment:'right'
            },



    }
    const elementKeys = Object.keys(fullElements)
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
        </motion.div>)
}