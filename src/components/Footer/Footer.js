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
            Яндекс.Практикум
          </li>
          <li className="footer__link">
            Github
          </li>
          <li className="footer__link">
            Facebook
          </li>
        </ul>
      </div>
    </footer>
  );
}
