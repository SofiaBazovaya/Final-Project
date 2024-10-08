import "./astro1.css";
import Moon from "../../../../media/img/pic17.jpg";

export default function Astro1() {
    return(
        <div className="astro1">
            <h2 id="h2-astro1"> Почему на Луне нет атмосферы? </h2>
            <p className="p1">
                Вопрос этот принадлежит к тем, которые уясняются, если сначала
                их, так сказать, перевернуть. Прежде чем говорить о том, почему Луна
                не удерживает вокруг себя атмосферы, поставим вопрос: почему удерживается атмосфера вокруг нашей
                собственной планеты? Вспомним, что
                воздух, как и всякий газ, представляет хаос не связанных между собой
                молекул, стремительно движущихся в различных направлениях. Средняя
                их скорость при 0° – около ½ км в секунду (скорость ружейной пули).
                Почему же не разлетаются они в мировое пространство? По той же причине, по какой не улетает в мировое
                пространство и ружейная пуля. Истощив энергию своего движения на преодоление силы тяжести, молекулы
                падают обратно на Землю. Вообразите близ земной поверхности молекулу, летящую отвесно вверх со скоростью
                ½ км в секунду. Как высоко вверх может она взлететь? Нетрудно вычислить: скорость v, высота
                подъёма h и ускорение силы тяжести g связаны следующей формулой: v<sup>2</sup> = 2gh.
            </p>
            <p className="p1">
                Подставим вместо v его значение – 500 м/с, вместо g – 10 м/с<sup>2</sup> ;
                имеем 250000 = 20h , откуда
                <br/>
                h = 12 500 м = 12,5 км .
            </p>
            <p className="p1">
                Но если молекулы воздуха не могут взлетать выше 12,5 км, то откуда берутся воздушные молекулы выше этой
                границы? Ведь кислород,
                входящий в состав нашей атмосферы, образовался близ земной поверхности (из углекислого газа
                деятельностью растений).
                Какая же сила подняла и удерживает их на высоте 500 и более километров, где безусловно установлено
                присутствие следов воздуха?
                Физика дает здесь тот же ответ, какой услышали бы мы отстатистика, если б спросили его :"Средняя
                продолжительность человеческой жизни 70 лет; откуда же берутся 80-летние старики?"
                Всё дело в том , что выполненный нами расчет относится к <i>средней</i>, а не реальной молекуле.
                Средняя молекула обладает скоростью в 0,5 км, но реальные молекулы движутся одни медленее, другие
                быстрее средней. Правда, процент молекул, скорость которых заметно отклоняется от средней, невелик и
                быстро убывает с возрастанием величины этого откланения.
                Из всего числа молекул, заключающихся в данном объёме кислорода при 0°, только 20% обладают
                скоростью от 400 до 500 м в секунду; приблизительно столько же молекул движется со скоростью 300–400
                м/сек, 17% – со скоростью 200–300
                м/сек, 9% – со скоростью 600–700 м/сек, 8% – со скоростью 700–800
                м/сек, 1% – со скоростью 1300–1400 м/сек. Небольшая часть (меньше
                миллионной доли) молекул имеет скорость 3500 м/сек, а эта скорость
                достаточна, чтобы молекулы могли взлететь даже на высоту 600 км.
                Действительно, 3500<sup>2</sup> = 20h , откуда h = 612,5 км.
            </p>
            <p className="p1">
                Становится понятным присутствие частиц кислорода на высоте сотен километров над земной поверхностью: это
                вытекает из физических свойств газов. <i>[Не следует думать, что одна и та же молекула может свободно
                пролететь такой большой путь. Менее чем через миллиардную долю секунды молекула сталкивается с другой.
                Но равенство масс молекул приводит к тому, что соударяющиеся частицы обмениваются скоростьми.]</i>
                <br/>
                Молекулы кислорода, азота, водяного пара,углекислого газа необладают, однако, скоростями, которые
                позволили бы им совсем покинуть земной шар. Для этого нужна скорость не меньше 11 км в секунду, а
                подобными скоростями при невысоких температурах обладают
                только единичные молекулы названных газов. Вот почему Земля так
                прочно удерживает свою атмосферную оболочку. Вычислено, что для
                потери половины запаса даже самого лёгкого из газов земной атмосферы
                — водорода — должно пройти число лет, выражающееся 25 цифрами.
                Миллионы лет не внесут никакого изменения в состав и массу земной
                атмосферы.
            </p>
            <video id="moon" autoPlay="autoplay" loop="loop">
                <source src="https://www.gstatic.com/culturalinstitute/searchar/assets/earths_moon/desktop_dark.mp4"
                        type="video/mp4"/>
            </video>
            <p className="p-img17"> Трехмерная модель Луны.</p>
            <p className="p1">
                Чтобы разъяснить теперь, почему Луна не может удерживать вокруг
                себя подобной же атмосферы, остаётся досказать немного. Напряжение
                силы тяжести на Луне в шесть раз слабее, чем на Земле; соответственно
                этому скорость, необходимая для преодоления там силы тяжести, тоже
                меньше и равна всего 2360 м/сек. А так как скорость молекул кислорода
                и азота при умеренной температуре может превышать эту величину, то
                понятно, что Луна должна была бы непрерывно терять свою атмосферу,
                если бы она у неё образовывалась. Когда улетучатся наиболее быстрые
                из молекул, критическую скорость приобретут другие молекулы (таково
                следствие закона распределения скоростей между частицами газа), и в
                мировое пространство должны безвозвратно ускользать всё новые и новые частицы атмосферной оболочки. По
                истечении достаточного промежутка времени, ничтожного в масштабе
                мироздания, вся атмосфера покинет поверхность столь слабо притягивающего небесного тела.
            </p>
            <p className="p1">
                Можно доказать математически, что если средняя скорость молекул
                в атмосфере планеты даже втрое меньше предельной (т.е. составляет
                для Луны 2360:3 = 790 м/сек), то такая атмосфера должна наполовину
                рассеяться в течение нескольких недель. (Устойчиво сохраняться атмосфера небесного тела может лишь при
                условии, что средняя скорость её
                молекул меньше одной пятой доли от предельной скорости.)
            </p>
            <p className="p1">
                Высказывалась мысль — вернее, мечта, — что со временем, когда земное человечество посетит и покорит
                Луну, оно окружит её искусствен-
                ной атмосферой и сделает таким образом пригодной для обитания. После сказанного читателю должна быть
                ясна несбыточность подобного
                предприятия. Отсутствие атмосферы у нашего спутника – не случайность, не каприз природы, а закономерное
                следствие физических законов.
            </p>
            <p className="p1">
                Понятно также, что причины, по которым невозможно существование атмосферы на Луне, должны обусловливать
                её отсутствие вообще на
                всех мировых телах со слабым напряжением силы тяжести: на астероидах и на большинстве спутников планет.
            </p>
            <img id="imgAstro1" src={Moon} alt="Moon"/>
            <p className="p-img17"> Рис. 1. Поверхность Луны.</p>
            <p className="p1">
                Согласно современным данным, атмосфера Луны - это очень разреженный слой газов, окружающих Луну. Для
                большинства практических целей
                Луна считается окруженной вакуумом. (Концентрация частиц у поверхности Луны значительно меняется в
                зависимости от времени лунных суток: ночью на 1 см<sup>3</sup> приходится 10<sup>5</sup> частиц, а днём
                10<sup>4</sup>. Для Земли этот показатель составляет 2,7⋅10<sup>19</sup>). Повышенное присутствие
                атомных и молекулярных частиц в ее
                окрестностях по сравнению с межпланетной средой, называемое в научных целях "лунной атмосферой",
                ничтожно мало по сравнению с газообразными оболочками, окружающими Землю и большинство планет Солнечной
                системы. Считается, что у Луны нет атмосферы, поскольку она не может поглощать
                измеримые количества радиации, не выглядит слоистой или самоциркулирующей и требует постоянного
                пополнения из-за высокой скорости потери газов в космос.
                Одним из источников лунной атмосферы является газовыделение: выделение газов, таких как радон и гелий, в
                результате радиоактивного распада в коре и мантии. Другой важный источник - бомбардировка лунной
                поверхности микрометеоритами, солнечным ветром и солнечным светом в процессе, известном как напыление.
            </p>
            <hr/>
            <ul>
                <li><i>Я. Перельман "Занимательная астрономия"</i></li>
                <li><a href="https://en.wikipedia.org/wiki/Atmosphere_of_the_Moon" target="_blank"
                       rel="noopener noreferrer"><i> Статья в Wikipedia: "Atmosphere of the Moon"</i></a></li>
            </ul>
        </div>
)
}