import './AboutMe.css';
import profilePhoto from '../../images/profile-photo.jpg';

export default function AboutMe() {
  return(
    <section className="about-me">
      <h2 className="about-me__title">
        Студент
      </h2>
      <div className="about-me__info-container">
        <div className="about-me__description">
          <h3 className="about-me__name">
            Игорь
          </h3>
          <p className="about-me__status">
            Фронтенд-разработчик, 19 лет
          </p>
          <p className="about-me__bio">
            Я живу в Москве и в настоящее время учусь в НИУ ВШЭ на образовательной программе "Прикладная математика и
            информатика". Несмотря на то, что моя основная специальность напрямую связана с программированием, она
            охватывает области, отличные от веб-разработки. Мне всю жизнь была интересна творческая деятельность:
            я учился рисованию, пробовал писать стихи и со старшей школы учусь играть на гитаре. Мне показалось, что в
            сфере IT именно во фронтенде я смогу максимально выражать свои идеи, поэтому и решил пройти курсы.
          </p>
        </div>
        <img src={profilePhoto} alt="Мое фото" className="about-me__image" />
      </div>
      <ul className="about-me__social-links">
        <li className="about-me__social-link">
          <a href="https://twitter.com/AlucardikAnno" rel="noopener" target="blank" className="about-me__social-link-content">
            Twitter
          </a>
        </li>
        <li className="about-me__social-link">
          <a href="https://github.com/Alucardik" rel="noopener" target="blank" className="about-me__social-link-content">
            Github
          </a>
        </li>
      </ul>
    </section>
  );
}
