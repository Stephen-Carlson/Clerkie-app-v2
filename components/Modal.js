import {useState} from "react";
import styled from 'styled-components'


const pop = styled.div`
  position:fixed;
  background-color:red;
  top:50%;
  left:50%;
`
export default function Modal(){
    const [show, setShow] = useState(false)
    return (
        <pop>
            <a onClick={()=> setShow(true)}>click me</a>
            {show?(
                <div onClick={()=>setShow(false)}><h1>see me now?</h1></div>
            ):null}
        </pop>
    )

}
