import "./optica3.css";
import Pic10 from "../../../../media/img/pic10.jpg";
import Pic11 from "../../../../media/img/pic11.jpg";
import Pic12 from "../../../../media/img/pic12.png";
import Pic13 from "../../../../media/img/pic13.jpg";
import Pic14 from "../../../../media/img/pic14.jpg";

export default function Optica3() {
    return(
        <div className="optica3">
            <h2 id="h2-optica3"> Почему небо голубое? </h2>
            <p className="p1">
                Солнце излучает ослепительно чистый белый свет. Значит и цвет неба должен быть таким же, но оно все таки
                голубое. Что же происходит с белым светом в земной атмосфере?
            </p>
            <p className="p1">
                Белый свет - это смесь цветных лучей - красного, оранжевого, желтого, зеленого, голубого, синего и
                фиолетового. И почему небо именно голубое?
            </p>
            <img id="opticaPic10" src={Pic10} alt="pic.10"/>
            <p className="p-img10">Рис.1. Ясное дневное небо.</p>
            <p className="p1">
                В 19 веке было высказано несколько возможных объяснений, в то время казавшихся научными и близкими к
                истине. Некоторые ученые считали, что молекулы озона и воды поглощают лучи красного цвета и пропускают
                голубые. Но оказалось, что в атмосфере просто не хватит этих веществ, чтобы окрасить небо в голубой
                цвет.
            </p>
            <p className="p1">
                В 1859 году англичанин Джон Тиндалл установил, что пыль и другие частицы рассеивают свет. Синий свет
                рассеивается в наибольшей степени, тем самым он некоторым образом выделяется из общего спектра. В своей
                лаборатории Тиндалл создал модель смога и осветил ее ярким белым лучом. Смог окрасился в глубокий синий
                цвет. Тиндалл решил, что если бы воздух был абсолютно чист, то ничто бы не рассеивало свет, и мы могли
                бы любоваться ярким белым небом.
            </p>
            <p className="p1">
                Лорд Рэлей тоже поддерживал эту идею, но недолго. Позже он опубликовал свое объяснение: именно
                воздух, а не пыль или дым, окрашивает небо в голубой цвет.
                Рэлей установил в 1871 году, что интенсивность рассеяния (позже названная в честь учёного "Рэлеевским
                рассеянием"),
                обусловленного <b> изменением плотности воздуха </b>, пропорционально <b> 1 /&lambda;<sup>4</sup> </b> ,
                где &lambda; — длина волны,
                то есть фиолетовый участок видимого спектра рассеивается
                приблизительно в 16 раз интенсивнее красного.
            </p>
            <img id="opticaPic11" src={Pic11} alt="pic.11"/>
            <p className="p-img10">Рис.2. Рэлеевское рассеяние в опаловом стекле: со стороны оно кажется синим, но
                сквозь него просвечивает оранжевый свет.</p>
            <img id="opticaPic12" src={Pic12} alt="pic.12"/>
            <p className="p-img10">Рис.3. Отношение интенсивности рассеяния солнечного света атмосферой для различных
                длин волн.</p>
            <p className="p1">
                Самое интересное, если бы воздух в верхних слоях атмосферы был также плотен как и около земли, мы бы
                никогда не увидели красивой голубой картинки у нас над головами. Свет рассеивается только теми
                молекулами воздуха, расстояние между которыми порядка длины волны рассеиваемого света - а это
                возможно только когда воздух сильно разрежен.
            </p>
            <p className="p1">
                Еще более интересен другой вопрос. Хорошо, если свет с короткой длиной волны рассеивается лучше, то
                почему мы не видим, что небо фиолетовое - ведь фиолетовый цвет еще "короче" чем голубой. Объяснений
                тут
                несколько. Во первых, фиолетовый вообще сильно поглощается атмосферой, во вторых, наше зрение к нему
                менее чувствительно. Но это лишь часть объяснения, и если бы не кое-что еще, то фиолетовый "привкус"
                в
                небе все же был бы.
            </p>
            <img id="opticaPic12" src={Pic14} alt="pic.14"/>
            <p className="p-img10">Рис.4. Три типа колбочек в глазах человека - S, M и L - показаны с указанием
                диапазона длин волн, на которые они реагируют: короткие, средние и длинные волны.</p>
            <p className="p1">
                Дело в особенностях строения глаза. Как известно, у нас в глазу три вида рецепторов - синий,
                красный,
                зеленый. Каждый из них наиболее сильно восприимчив к свету определенной волны - синему, красному и
                зеленому. Стимуляция всех рецепторов в итоге дает общую цветовую картину, которую мы видим. Но дело
                в
                том, что каждый рецептор восприимчив немного и к "чужим" длинам волн - так например, красный -
                немного к
                оранжевой и желтой и совсем чуть-чуть к синей и фиолетовой. Иными словами, мы воспринимаем каждым
                рецептором весь спектр доходящего до нас света - в основном конечно голубого, но и других тоже. И
                вот
                если бы фиолетового, который немного стимулирует красные рецепторы, не было, то небо казалось бы
                голубым
                с небольшой примесью зеленого оттенка.
            </p>
            <img id="opticaPic13" src={Pic13} alt="pic.13"/>
            <p className="p-img10">Рис.5. Закат.</p>
            <p className="p1">
                На закате же при малых углах Солнца относительно линии горизонта наблюдаются иные явления. Если в точке
                неба вдалеке от Солнца наблюдатель видит всё тот же голубой цвет, то вблизи Солнца — красный. Дело в
                том, что в любой точке неба вдалеке от Солнца наблюдатель по-прежнему видит рассеянный, то есть
                коротковолновый (интегральный голубой) свет. А на малых углах рассеяния, где больше прямых лучей Солнца,
                до наблюдателя гораздо больше доходит длинноволновый, то есть красный цвет. Это объясняется тем, что по
                сравнению с положением Солнца в кульминации свет проходит в несколько раз большую толщу атмосферы, и от
                фиолетового света не остаётся практически ничего — он рассеивается многократно в другие стороны. И
                интегральная картинка смещается к красному краю спектра.
            </p>
            <hr/>
            <ul>
                <li><a href="https://festivalnauki.ru/media/articles/pravila-zhizni/pochemu-nebo-goluboe/"
                       target="_blank" rel="noopener noreferrer"><i> Статья на
                    сайте
                    "Фестиваля науки" ;</i></a></li>
                <li><a href="https://en.wikipedia.org/wiki/Diffuse_sky_radiation" target="_blank"
                       rel="noopener noreferrer"><i> Статья в Wikipedia: "Diffuse sky
                    radiation" ;</i></a></li>
                <li><a href="https://en.wikipedia.org/wiki/Rayleigh_scattering" target="_blank"
                       rel="noopener noreferrer"><i>Статья в Wikipedia: "Rayleigh
                    scattering".</i></a></li>
            </ul>
        </div>
    )
}