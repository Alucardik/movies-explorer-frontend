import './Footer.css';

export default function Footer() {
  return(
    <footer className="footer">
      <p className="footer__subtitle">
        Учебный проект Яндекс.Практикум x BeatFilm.
      </p>
      <div className="footer__info">
        <span>&copy;  2021</span>
        <ul className="footer__links">
          <li className="footer__link">
            <a href="https://praktikum.yandex.ru/" rel="noopener" target="blank" className="footer__link-content">
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__link">
            <a href="https://www.instagram.com/yndx.praktikum/" rel="noopener" target="blank" className="footer__link-content">
              Instagram
            </a>
          </li>
          <li className="footer__link">
            <a href="https://www.facebook.com/yandex.praktikum/" rel="noopener" target="blank" className="footer__link-content">
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
