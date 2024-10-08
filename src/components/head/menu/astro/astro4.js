import "./astro4.css";
import Pic20 from "../../../../media/img/pic20.png";
import Pic21 from "../../../../media/img/pic21.jpg";
import Pic22 from "../../../../media/img/pic22.png";

export default function Astro4() {
    return(
        <div className="astro4">
            <h2 id="h2-astro4"> Почему звёзды называются неподвижными? </h2>
            <p className="p1">
                Когда в старину дан был звёздам такой эпитет, желали подчеркнуть
                этим, что в отличие от планет звёзды сохраняют па небесном своде неизменное расположение. Они, конечно,
                участвуют в суточном движении
                всего неба вокруг Земли, но это кажущееся движение не нарушает их
                взаимного расположения. Планеты же непрестанно меняют свои места
                относительно звёзд, бродят между ними и оттого получили в древности
                наименование «блуждающих звёзд» (буквальный смысл слова «планета»).
            </p>
            <p className="p1">
                Мы знаем теперь, что представление о звёздном мире как о собрании
                солнц, застывших в своей неподвижности, совершенно превратно. Все
                звёзды”, в том числе и наше Солнце, движутся одна относительно другой со скоростью в среднем 30 км/сек,
                т. е. с такой же, с какой планета
                наша обегает свою орбиту. Значит, звёзды ничуть не менее подвижны,
                чем планеты. Напротив, в мире звёзд мы встречаемся в отдельных случаях с такими огромными скоростями,
                каких нет в семье планет; известны звёзды, — их называют «летящими», — которые несутся по отношению
                к нашему Солнцу с огромной скоростью 250 - 300 км/сек.
            </p>
            <img id="astroPic3" src={Pic20} alt="pic.20"/>
            <p className="p-img20">Рис.1 .Фигуры созвездий медленно
                меняются с течением времени. Средний рисунок изображает «ковш» Большой Медведицы в настоящее время,
                верхний – 100 тыс. лет назад, нижний – через 100 тыс. лет после нашего времени.</p>
            <p className="p1">
                Но если все видимые нами звёзды хаотически движутся с громадными скоростями, пробегая миллиарды
                километров ежегодно, то почему не
                замечаем мы этого бешеного движения? Почему звёздное небо представляет издавна картину величавой
                неподвижности?
            </p>
            <p className="p1">
                Причину нетрудно отгадать: она кроется в невообразимой удалённости звёзд. Случалось ли вам наблюдать с
                возвышенного пункта за поездом, движущимся вдали, близ горизонта? Разве не казалось вам тогда,
                что курьерский поезд ползёт как черепаха? Скорость, головокружительная для наблюдателя вблизи,
                превращается в черепаший шаг при
                наблюдении с большого расстояния. То же происходит и с движением звёзд; только в этом случае
                относительное удаление наблюдателя от движущегося тела гораздо значительнее. Самые яркие звёзды удалены
                от нас в
                среднем менее других — именно (по Каптейну)
                на 800 миллионов миллионов километров, перемещение же такой звезды за год составляет, скажем,
                миллиард (1000 миллионов) километров, т.е. в
                800 000 раз меньше. Такое перемещение должно
                усматриваться с Земли под углом менее 0",25 —
                величина, едва уловимая точнейшими астрономическими инструментами. Для невооружённого же
                глаза оно совершенно незаметно, даже если длится
                столетия. Только кропотливыми инструментальными измерениями удалось обнаружить движение многих звёзд
                (рис. 1, 2, 3).
            </p>
            <img id="astroPic4" src={Pic21} alt="pic.21"/>
            <p className="p-img20">Рис.2. В каких направлениях движутся яркие звёзды близ созвездия
                Ориона (а) и как эти движения изменят вид созвездия через 50 тыс. лет (б).</p>
            <img id="astroPic5" src={Pic22} alt="pic.22"/>
            <p className="p-img20">Рис.3. Движение трёх соседних звёзд – нашего Солнца, звезды α Центавра и Сириуса..</p>
            <p className="p1">
                Итак, «неподвижные звёзды», несмотря на то, что увлекаются невообразимо стремительным движением, имеют
                полное право именоваться
                неподвижными, поскольку речь идёт о наблюдениях невооружённым
                глазом. Из сказанного читатель сам может вывести заключение, как ничтожна вероятность встречи между
                звёздами, несмотря на их стремительное движение.
            </p>
            <hr/>
            <p className="p1"><i>Я. Перельман "Занимательная астрономия"</i></p>
        </div>
    )
}