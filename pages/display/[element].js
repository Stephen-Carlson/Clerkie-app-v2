import {Router, useRouter} from "next/router";
import BaseContainer from "../../components/BaseContainer";


export default function Element(){
    const Router = useRouter()
    const {element} = Router.query

    const object = JSON.parse(element)
    return <BaseContainer element = {object}/>
    // return <p>lasdfkjgbd</p>
}