import './Menu.css'

const Menu = () => {
  return (
    <nav id="menu">
        <div className="menu_title"><a href="index.php">ОтЛичныйСайт</a></div>
        <ul className="menu_main">
          <li><a href="index.php">Главная</a></li>
          <li>Мини игры &#9660; 
            <ul className="menu_drop">
              <div>
                <li><a href="puzzle.php">Загадки</a></li>
                <li><a href="guess.php">Угадайка</a></li>
                <li><a href="guess-2.php">Угадайка мультиплеер</a></li>
              </div>
            </ul>
          </li>
          <li>Полезное &#9660;
            <ul className="menu_drop">
              <div>
                <li><a href="passwordGeneration.php">Генератор паролей</a></li>
                <li><a href="time_worked_out.php">Расчет рабочего времени</a></li>
              </div>
            </ul>
          </li>
          <li>Практика &#9660; 
            <ul className="menu_drop">
              <div>
                <li><a href="flex.php">flex-шпаргалка</a></li>
                <li><a href="size.php">size-практика</a></li>
              </div>
            </ul>
          </li>
          <li><a href="bombermen.php">"Bombermen"</a></li>
          <div className="menu_marker"></div>
        </ul>
      </nav>
  )
}

export default Menu; 