import "./optica2.css";
import Pic9 from "../../../../media/img/pic9.png";


export default function Optica2() {
    return(
        <div className="optica2">
            <h2 id="h2-optica2"> Живые портреты </h2>
            <p className="p1">
                Всем, вероятно, приходилось видеть портреты, которые не только смотрят прямо на нас, но даже следят за
                нами глазами, обращая их в ту сторону, куда мы переходим. Эта любопытная особенность таких портретов
                издавна подмечена и всегда казалась многим загадочной; нервных людей она положительно пугает. У Гоголя в
                “Портрете” прекрасно описан подобный случай:
            </p>
            <p className="p1">
                “Глаза вперились в него и, казалось, не хотели ни на что другое глядеть, как только на него... Портрет
                глядит мимо всего, что ни есть вокруг, прямо в него, — глядит просто к нему вовнутрь...”
            </p>
            <p className="p1">
                Немало суеверных легенд связано с этой таинственной особенностью глаз на портретах (вспомните тот же
                “Портрет”), а между тем разгадка ее сводится к простому обману зрения.
            </p>
            <p className="p1">
                Все объясняется тем, что зрачок на этих портретах помещен в середине глаза. Именно такими мы видим глаза
                человека, который смотрит прямо на нас; когда же он смотрит в сторону, мимо нас, то зрачок и вся
                радужная оболочка кажутся нам находящимися не посредине глаза, но несколько перемещенными к краю. Когда
                мы отходим в сторону от портрета, зрачки, разумеется, своего положения не меняют — остаются посредине
                глаза. А так как, кроме того, и все лицо мы продолжаем видеть в прежнем положении по отношению к нам, то
                нам, естественно, кажется, будто портрет повернул голову в нашу сторону и следит за нами.
            </p>
            <p className="p1">
                Таким же образом объясняются и другие озадачивающие особенности некоторых картин: лошадь едет прямо на
                нас, куда бы мы ни отходили от картины; человек указывает на нас: его протянутая вперед рука направлена
                прямо к нам, и т. п. Образчик подобной картины вы видите на рисунке ниже. Такого рода плакатами нередко
                пользуются для агитационных или рекламных целей.
            </p>
            <img id="opticaPic9" src={Pic9} alt="pic.9"/>
            <p className="p-img9">Рис.1. Загадочный портрет.</p>
            <p className="p1">
                Если вдуматься хорошенько в причину подобных иллюзий, то становится ясным, что в них не только нет
                ничего удивительного, но даже наоборот: удивительно было бы, если бы такой особенностью картины не
                обладали.
            </p>
            <hr/>
            <p className="p1"><i>Я. Перельман "Занимательная физика". Книга 1.</i></p>
        </div>
    )
}