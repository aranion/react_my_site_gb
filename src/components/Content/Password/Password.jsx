import cls from "./Password.module.css";

const Password = () => {
  return (
    <div>
      <h1>Генератор паролей</h1>
      <div ClassName={cls.center}>
        <div className={`box ${cls.box}`}>
          <p> Задайте длину пароля</p>
          <span id="info2"></span>
          <div className={`${cls.info}`} id="info">...</div>
          <input className={`input`} type="text" id="userAnswer" values="6" />
          <div className={cls.box_pass_flex}>
            <div className={cls.box_pass} >
              <h5>Первый способ:</h5>
              <a className={`button ${cls.button}`} href="#" onClick="gen_password()">
                Сгенерировать пароль
              </a>
            </div>
            <div className={cls.box_pass}>
              <h5>Второй способ:</h5>
              <a className={`button ${cls.button}`} href="#" onClick="gen_password2()">
                Сгенерировать пароль
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Password;
