import './Portfolio.css';
import arrowIcon from '../../images/portfolio__arrow-icon.svg';

export default function Portfolio() {
  return(
    <section className="portfolio">
      <h3 className="portfolio__title">
        Портфолио
      </h3>
      <menu className="portfolio__items">
        <li className="portfolio__item">
          Статичный сайт <img src={arrowIcon} alt="Перейти на сайт" />
        </li>
        <li className="portfolio__item">
          Адаптивный сайт <img src={arrowIcon} alt="Перейти на сайт" />
        </li>
        <li className="portfolio__item">
          Одностраничное приложение <img src={arrowIcon} alt="Перейти на сайт" />
        </li>
      </menu>
    </section>
  );
}
