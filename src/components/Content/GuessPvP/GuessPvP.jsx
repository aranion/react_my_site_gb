import cls from "./GuessPvP.module.css";

const GuessPvP = () => {
  return (
    <div>
      <h1>Игра «Угадайка» для двух игроков</h1>
      <div className={cls.center}>
        <div className={`box ${cls.box}`}>
          <p id="info1" className={cls.info}>Угадайте число от 0 до 100</p>
          <h5 id="info2" className={cls.info}>Игрок I начинает игру:</h5>
          <div id="box1" className={cls.box1}>
            <div className={`${cls.grupA} ${cls.player_1}`}>
              <input className={`input`} type="text" id="userAnswer" placeholder="Введите число" />
              <a className={`button`} href="#"  id="answerUser">
                {/* onClick="answerPlay();" */}
                Ответ I игрока
              </a>
            </div>
            <div className={`${cls.grupA} ${cls.player_2}`}>
              <input
                className={`input`}
                type="text"
                id="userAnswer2"
                placeholder="Введите число"
              />
              <a
                className={`button`}
                href="#"
                id="answerUser2">
                {/* onClick="answerPlay();" */}
                Ответ II игрока
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuessPvP;
