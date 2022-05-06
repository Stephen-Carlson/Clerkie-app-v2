import Link from "next/link";
import styled from "styled-components";

const NavList = styled.ul`
  list-style-type: none;
`

export default function NavBar(){
    const CSSNavUl = {
        float:'right',
        display:'flex',
        marginTop: 'auto',
        marginBottom: 'auto',
        marginRight:'50px',
        marginLeft:'auto',
        textAlign:'right',
        padding:'20px'
    }
    const CSSNavLi = {
        padding:'10px',
        margin: '0 auto',
        marginTop:'auto',
        marginBottom:'auto'
    }
    return (<NavList style={CSSNavUl}>
        <li style={CSSNavLi}><Link href='/' passHref={false}>
            <p>Home</p>
        </Link>
        </li>
        <li style={CSSNavLi}><Link href='/about' passHref={true}>
            <p>About Me</p>
        </Link>
        </li>
    </NavList>)
}