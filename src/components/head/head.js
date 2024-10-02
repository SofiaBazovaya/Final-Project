import "./head.css";
import Logo from "./logo/logo";
import Menu from "./menu/menu";
export default function Head(){
    return(
        <div className="head">
            <div className="logo"> <Logo /> </div>
           <div className="menu"> <Menu /> </div>
        </div>
    )
}