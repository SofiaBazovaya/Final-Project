import {Link} from "react-router-dom";
import "./menu.css";

export default function Menu() {
    return (
        <div className="menu">
            <Link to='/'> Главная </Link>
            <div className="dropdown">
                <button className="dropbtn">Механика &dArr; </button>
                <div className="dropdown-content">
                    <Link to='/mech1' >"Встаньте!"</Link>
                    <Link to='/mech2'>“Чудо и не чудо”</Link>
                    <Link to='/mech3'>"Сухим из воды"</Link>
                    <Link to='/mech4'>Почему лёд скользкий?</Link>
                    <Link to='/mech5'>Как взвесили Землю?</Link>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">Оптика &dArr; </button>
                <div className="dropdown-content">
                    <Link to='/optica1'>Искусство рассматривать фотографии</Link>
                    <Link to='/optica2'>Живые портреты</Link>
                    <Link to='/optica3'>Почему небо голубое?</Link>
                    <Link to='/optica4'>Слепое пятно нашего глаза</Link>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">Астрофизика &dArr; </button>
                <div className="dropdown-content">
                    <Link to='/astro1'>Почему на Луне нет атмосферы?</Link>
                    <Link to='/astro2'>Почему звёзды мерцают, а планеты сияют спокойно?</Link>
                    <Link to='/astro3'>Видны ли звёзды днём?</Link>
                    <Link to='/astro4'>Почему звёзды называются неподвижными?</Link>
                    <Link to='/astro5'>Чёрная дыра</Link>
                </div>
            </div>
            <Link to='/books'> Книги </Link>
        </div>
    )
}
