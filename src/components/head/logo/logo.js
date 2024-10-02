import LogoPic from "../../../media/img/Logo.gif";
import "./logo.css";
export default function Logo(){
    return(
        <div className="logo">
            <img id="head-logo" src={LogoPic} alt="Логотип"/>
        </div>
    )
}