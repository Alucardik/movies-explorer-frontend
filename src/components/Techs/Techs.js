import './Techs.css';

export default function Techs() {
 return(
    <section className="techs">
      <h2 className="techs__title">
        Технологии
      </h2>
      <div className="techs__description">
        <h3 className="techs__subtitle">
          7 технологий
        </h3>
        <p className="techs__paragraph">
          На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </p>
      </div>
      <div className="techs__cards">
        <div className="techs__card">
          HTML
        </div>
        <div className="techs__card">
          CSS
        </div>
        <div className="techs__card">
          JS
        </div>
        <div className="techs__card">
          React
        </div>
        <div className="techs__card">
          Git
        </div>
        <div className="techs__card">
          Express.js
        </div>
        <div className="techs__card">
          mongoDB
        </div>
      </div>
    </section>
 );
}
