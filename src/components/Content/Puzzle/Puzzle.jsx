import cls from "./Puzzle.module.css";

const Puzzle = () => {
  return (
    <div>
      <h1 className={cls.title}>Игра в загадки</h1>
      <div className={cls.center}>
        <div className={`box ${cls.box}`}>
          {/* <?php 
            	    if( isset($_GET["userAnswer1"]) && 
            	    	isset($_GET["userAnswer2"]) && 
            	    	isset($_GET["userAnswer3"])) {
            	    	
            	    	$userAnswer = $_GET["userAnswer1"]; 
            	    	$score = 0;
            	    	if(	$userAnswer == "подушка" || $userAnswer == "подушки"){
            	    		$score++;
            	    	}
            	    	$userAnswer = $_GET["userAnswer2"]; 
            	    	if(	$userAnswer == "огонь" || $userAnswer == "пламя"){
            	    		$score++;
            	    	}
            	    	$userAnswer = $_GET["userAnswer3"]; 
            	    	if(	$userAnswer == "барабан" || $userAnswer == "барабаны"){
            	    		$score++;
            	    	}
            	    	}
            	    ?> */}
          <span id="answer-puzzle" className={cls.answer}>
            {/* <?php echo "Угаданных загадок: " . $score; ?> */}
            Угаданных загадок:
          </span>
          <hr className={cls.line} />
          <form method="GET">
            <p>Вспушит она свои бока, <br/>
              Свои четыре уголка<br/>
              И тебя, как ночь настанет,<br/>
              Все равно к себе притянет?<br/>
            </p>
            <input className={`input`} type="text" name="userAnswer1" />
            <p>
              Всё ест – не наедается,<br/>
              А попьёт – умирает?
            </p>
            <input className={`input`} type="text" name="userAnswer2" />
            <p>
              Сам пустой, голос густой,<br/>
              Дробь отбивает,<br/>
              Шагать помогает?<br/>
            </p>
            <input className={`input`} type="text" name="userAnswer3" /> <br />
            <button className={`button ${cls.button}`}> Ответить </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Puzzle;
