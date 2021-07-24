import './Intro.css';
import intro__logo from '../../images/intro__logo.svg';

export default function Intro() {
  return(
    <section className="intro">
      <h1 className="intro__text">
        Учебный проект студента факультета Веб-разбработки.
      </h1>
      <img src={intro__logo} alt="Декоративное изображение" className="intro__image" />
    </section>
  );
}
