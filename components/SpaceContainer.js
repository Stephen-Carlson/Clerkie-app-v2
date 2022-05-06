import styled from 'styled-components'
import {Fragment} from "react";

const Space = styled.div`
  min-height: ${props => props.height}px;
  height: ${props => props.height}px;

`

export default function SpaceContainer(props){
    return(<Fragment>
        <Space style={{height:props.height}}><span>{''}&nbsp;</span></Space>
    </Fragment>)
}