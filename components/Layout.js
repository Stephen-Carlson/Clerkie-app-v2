import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import {Fragment} from "react";
import {AnimatePresence, motion} from "framer-motion";

const Content = styled.div`
  max-width:600px;
  margin: auto;
`
const backdrop = {
    top:0,
    left:0,
    width:"100%",
    height:'100%',
    backgroundColor: '#000000e1',
    position:'absolute'
}
export default function Layout({children}){
    return(
        <Fragment>
            <Header/>
                <AnimatePresence initial={false} exitBeforeEnter={true}>
                    <Content>
                        {children}
                    </Content>
                </AnimatePresence>
        </Fragment>
    )
}