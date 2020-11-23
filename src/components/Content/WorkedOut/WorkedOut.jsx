import cls from "./WorkedOut.module.css";

const WorkedOut = () => {
  return (
    <div>
      <h1>Расчет рабочего времени</h1>
      <div className={cls.center}>
        <div className={cls.content_time}>
          <div id="general_time">
            <div className={cls.top}>
              <div id="root"></div>
            </div>
            <div className={cls.footer_workedOut}>
              <div>Всего отработано за неделю:</div>
              <div id="fullWorkedOut">35 ч</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkedOut;
