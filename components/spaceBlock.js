import styled from 'styled-components'
import {Fragment} from "react";

const space = styled.div`
  border-style: solid;
  border-color: blue;
  height: ${props => props.height};
`



export default function SpaceBlock(props){
    return(<Fragment>
        <space><p></p></space>
    </Fragment>)
}