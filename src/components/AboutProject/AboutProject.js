import './AboutProject.css';

export default function AboutProject() {
  return(
    <section className="about-project">
      <h2 className="about-project__title">
        О проекте
      </h2>
      <div className="about-project__description">
        <div className="about-project__description-container">
         <h3 className="about-project__subtitle">
           Дипломный проект включал 5 этапов
         </h3>
          <p className="about-project__paragraph">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__description-container">
          <h3 className="about-project__subtitle">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__paragraph">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__time-bar">
        <div className="about-project__tile">
          1 неделя
          <p className="about-project__bar-subtitle">
            Back-end
          </p>
        </div>
        <div className="about-project__tile">
          4 недели
          <p className="about-project__bar-subtitle">
            Front-end
          </p>
        </div>
      </div>
    </section>
  );
}
