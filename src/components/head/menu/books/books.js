import "./books.css"

export default function Books() {
  return(
      <div className="books">
        <ol> <h2 id="h2-books">Список рекомендуемой литературы:</h2>
          <li>Большая книга занимательных наук / Перельман Я.И.;</li>
          <li>Астрофизика с космической скоростью / Нил Деграсс Тайсон;</li>
          <li>Всё из ничего: Как возникла Вселенная / Лоуренс Краусс;</li>
          <li>Все формулы мира. Как математика объясняет законы природы / Сергей Попов;</li>
          <li>Красота физики: Постигая устройство природы / Фрэнк Вильчек;</li>
          <li>Математическое понимание природы: Очерки удивительных физических явлений и их понимания математиками
              <br/>/ Арнольд В.И. ;</li>
          <li>Параллельные миры: Об устройстве мироздания, высших изме-
            рениях и будущем космоса / Митио Каку;</li>
          <li>Краткая история Времени / Стивен Хокинг.</li>
        </ol>
      </div>
  )
}