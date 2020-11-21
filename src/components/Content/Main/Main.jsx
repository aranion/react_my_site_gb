import cls from './Main.module.css';
const Main = () => {
  return (
    <div>
      <h1>Личный сайт студента GeekBrains</h1>
      <div className={cls.center}> 
        <img src="./img/photo.jpg" className={cls.top_img} alt="фото"/>
        <div className={`box ${cls.box}`}>
    			<p><b>Добрый день</b>. <br/> Меня зовут <i>Гаврилей Евгений</i>. 
    			Я уже давно увлекаюсь программированием, но только сейчас решил заняться им понастоящему.
    			Это учебный сайт на котором я размещаю свой код.</p>
    			<p>В этом мне помог IT-портал <a href="https://geekbrains.ru">GeekBrains</a></p>
    			<p>На этом сайте вы сможете сыграть в несколько игр, которые я написал:</p>
          <p>
    			<a href="puzzle.php">-Загадки-</a><br/>
    			<a href="guess.php">-Угадайка-</a><br/>
    			<a href="guess-2.php">-Угадайка мультиплеер-</a><br/>
    			<a href="passwordGeneration.php">-Генератор паролей-</a><br/>
          </p>
    			<p>Также на сайте будут появляться множество других полезных (и не очень :)  программ!</p>
          <p>Профиль на <a href="https://github.com/aranion">GitHub</a></p>
        </div>
      </div>
    </div>

  )
}

export default Main;