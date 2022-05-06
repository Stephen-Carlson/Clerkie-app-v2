import Link from "next/link";
import styled from 'styled-components'
import Image from "next/image";
import NavBar from "./NavBar";


const Background = styled.div`
  background-image:linear-gradient(to upper right,#2e3348,#5a5e6f);
`
export default function Header(){
    const CSSHeader = {
        overflow:'hidden',
        display:'flex',
        backgroundColor:'#1D3B59',
        color:'white',
        maxHeight:'15%',
    }


    return(
                <Background style={CSSHeader}>
                    <title>Clerkie 2: Electric Boogaloo</title>
                            <ul style={{listStyleType:'none',marginTop:'auto', marginBottom:'auto'}}>
                                <li><Link href={'/'} passHref={true}><Image style={{margin:"auto"}} src={'../static/SteveLogo.png'} alt='Steve Carlson Logo' height={'50px'} width={'225px'} loader={()=> '../static/SteveLogo.png'}/></Link></li>
                            </ul>
                    <NavBar/>
                </Background>
    )
}