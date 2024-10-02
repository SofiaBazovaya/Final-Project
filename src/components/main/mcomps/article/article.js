import  "./article.css";
import Books from "../../../head/menu/books/books";
import Home from "../../../head/menu/home/home";
import Mech1 from "../../../head/menu/mech/mech1";
import Mech2 from "../../../head/menu/mech/mech2";
import Mech3 from "../../../head/menu/mech/mech3";
import Mech4 from "../../../head/menu/mech/mech4";
import Mech5 from "../../../head/menu/mech/mech5";
import Optica1 from "../../../head/menu/optica/optica1";
import Optica2 from "../../../head/menu/optica/optica2";
import Optica3 from "../../../head/menu/optica/optica3";
import Optica4 from "../../../head/menu/optica/optica4";
import Astro1 from "../../../head/menu/astro/astro1";
import Astro2 from "../../../head/menu/astro/astro2";
import Astro3 from "../../../head/menu/astro/astro3";
import Astro4 from "../../../head/menu/astro/astro4";
import Astro5 from "../../../head/menu/astro/astro5";
import P404 from "../../../p404/p404";

import {Routes,Route} from "react-router-dom";
export function Article(){
    return(
        <div className='article'>
            <Routes>
                <Route path="/" element={<Home></Home>}/>
                <Route path="/mech1" element={<Mech1></Mech1>}/>
                <Route path="/mech2" element={<Mech2></Mech2>}/>
                <Route path="/mech3" element={<Mech3></Mech3>}/>
                <Route path="/mech4" element={<Mech4></Mech4>}/>
                <Route path="/mech5" element={<Mech5></Mech5>}/>
                <Route path="/optica1" element={<Optica1></Optica1>}/>
                <Route path="/optica2" element={<Optica2></Optica2>}/>
                <Route path="/optica3" element={<Optica3></Optica3>}/>
                <Route path="/optica4" element={<Optica4></Optica4>}/>
                <Route path="/astro1" element={<Astro1></Astro1>}/>
                <Route path="/astro2" element={<Astro2></Astro2>}/>
                <Route path="/astro3" element={<Astro3></Astro3>}/>
                <Route path="/astro4" element={<Astro4></Astro4>}/>
                <Route path="/astro5" element={<Astro5></Astro5>}/>
                <Route path="/books" element={<Books></Books>}/>
                <Route path="*" element={<P404></P404>}/>
            </Routes>
        </div>
    )
}