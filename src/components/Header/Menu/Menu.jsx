import cls from './Menu.module.css'

const Menu = () => {
  return (
    <nav className={cls.menu}>
        <div className={cls.title}><a href="/main">ОтЛичныйСайт</a></div>
        <ul className={cls.main}>
          <li><a href="/main">Главная</a></li>
          <li>Мини игры &#9660; 
            <ul className={cls.drop}>
              <div>
                <li><a href="/puzzle">Загадки</a></li>
                <li><a href="/guess">Угадайка</a></li>
                <li><a href="/guessPvP">Угадайка мультиплеер</a></li>
              </div>
            </ul>
          </li>
          <li>Полезное &#9660;
            <ul className={cls.drop}>
              <div>
                <li><a href="/passwordGeneration">Генератор паролей</a></li>
                <li><a href="/timeWorkedOut">Расчет рабочего времени</a></li>
              </div>
            </ul>
          </li>
          <li>Практика &#9660; 
            <ul className={cls.drop}>
              <div>
                <li><a href="/flex">flex-шпаргалка</a></li>
                <li><a href="/size">size-практика</a></li>
              </div>
            </ul>
          </li>
          <li><a href="/bombermen">"Bombermen"</a></li>
          <div className={cls.marker}></div>
        </ul>
      </nav>
  )
}

export default Menu; 