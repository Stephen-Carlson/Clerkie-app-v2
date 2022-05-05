import {Router, useRouter} from "next/router";
import ContainerWithModal from "../components/ContainerWithModal";

export default function Fullscreen(){
    const Router = useRouter();
    const {item} = Router.query;
    return <ContainerWithModal element = {item}/>
}