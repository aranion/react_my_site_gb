import cls from './Guess.module.css';

const Guess = () => {
  return (
    <div>
      <h1>Игра «Угадайка» для одного</h1>
        <div className={cls.center}>
          <div className={`box ${cls.box}`}>
            <p id="info">Угадайте число от 0 до 100</p>
            <div className="grupA">
              <input type="text" id="userAnswer" className={`input`} />
              <br/>
             <a href="#"  id="button" className={`button ${cls.button}`}>Начать</a>	 {/* onClick="guess();" */} 
            </div>
          </div>
        </div>
    </div>
  )
}

export default Guess;