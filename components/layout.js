import {Fragment} from "react";
import styled from 'styled-components'
//
// const Wrap = styled.div`
//   max-width:${600};
//   align-items: center;
//   align-content:center;
//
// `

export default function Layout({children}){
    return( <Fragment>
        <main>
        {children}
    </main>
    </Fragment>)

}