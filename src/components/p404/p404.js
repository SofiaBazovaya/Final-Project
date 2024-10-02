import "./p404.css";
import BH from "../../../src/media/img/BH.gif";


export default function P404(){
   return (
       <div className="p404">
           <h1>Ошибка 404</h1>
           <h2>Веб - cтраница была поглощена чёрной дырой! </h2>
           <img id="p404V" src={BH} alt="BlackHole"/>
           <h2>и Вы тоже... </h2>
       </div>
   )
}