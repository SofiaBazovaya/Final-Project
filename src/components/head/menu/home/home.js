import "./home.css"
import {Link} from "react-router-dom";

export default function Home() {
    return(
        <div className="home">
            <h1 id="h1-home">Добро пожаловать!</h1>
            <p className="p1">
                Автор сайта стремится не столько сообщить читателю новые знания, сколько
                помочь ему “узнать то, что он знает”, т. е. углубить и оживить уже имеющиеся у него
                основные сведения из физики, научить сознательно ими распоряжаться и побудить к
                разностороннему их применению.
            </p>

            <dl><h2 id="h2-home">Содержание:</h2>
                <dt/>
                <h3>1. Механика:</h3>
                <dd/>
                <li>
                    <Link to='/mech1'>"Встаньте!"</Link> <i>(Тяжесть и вес)</i>
                </li>
                <li>
                    <Link to='/mech2'>“Чудо и не чудо”</Link> <i>("Вечный двигатель")</i>
                </li>
                <li>
                    <Link to='/mech3'> "Сухим из воды"</Link>
                </li>
                <li>
                    <Link to='/mech4'> Почему лёд скользкий?</Link>
                </li>
                <li>
                    <Link to='/mech5'> Как взвесили Землю?</Link>
                </li>

                <dt/>
                <h3>2. Оптика:</h3>
                <dd/>
                <li>
                    <Link to='/optica1'>Искусство рассматривать фотографии</Link>
                </li>
                <li>
                    <Link to='/optica2'>Живые портреты</Link>
                </li>
                <li>
                    <Link to='/optica3'> Почему небо голубое?</Link>
                </li>
                <li>
                    <Link to='/optica4'> Слепое пятно нашего глаза</Link>
                </li>

                <dt/>
                <h3>3. Астрофизика:</h3>
                <dd/>
                <li>
                    <Link to='/astro1'>Почему на Луне нет атмосферы?</Link>
                </li>
                <li>
                    <Link to='/astro2'>Почему звёзды мерцают, а планеты сияют спокойно?</Link>
                </li>
                <li>
                    <Link to='/astro3'>Видны ли звёзды днём?</Link>
                </li>
                <li>
                    <Link to='/astro4'>Почему звёзды называются неподвижными?</Link>
                </li>
                <li>
                    <Link to='/astro5'>Чёрная дыра</Link>
                </li>
            </dl>
        </div>
    )
}