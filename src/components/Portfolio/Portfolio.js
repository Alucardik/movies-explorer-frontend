import './Portfolio.css';
import arrowIcon from '../../images/icons/portfolio__arrow-icon.svg';

export default function Portfolio() {
  return(
    <section className="portfolio">
      <h3 className="portfolio__title">
        Портфолио
      </h3>
      <menu className="portfolio__items">
        <li className="portfolio__item">
          <a href="https://alucardik.github.io/how-to-learn/" rel="noopener" target="blank" className="portfolio__item-content">
            Статичный сайт <img src={arrowIcon} alt="Перейти на сайт" className="portfolio__item-icon" />
          </a>
        </li>
        <li className="portfolio__item">
          <a href="https://alucardik.github.io/russian-travel/" rel="noopener" target="blank" className="portfolio__item-content">
            Адаптивный сайт <img src={arrowIcon} alt="Перейти на сайт" className="portfolio__item-icon" />
          </a>
        </li>
        <li className="portfolio__item">
          <a href="https://alucardik.io.nomoredomains.club/" rel="noopener" target="blank" className="portfolio__item-content">
            Одностраничное приложение <img src={arrowIcon} alt="Перейти на сайт" className="portfolio__item-icon" />
          </a>
        </li>
      </menu>
    </section>
  );
}
