import './MainPage.css';
import Header from '../Heaader/Header';
import Intro from '../Intro/Intro';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';

export default function MainPage() {
  return(
    <div className="page">
      <Header main={true} />
      <Intro />
      <AboutProject />
      <Techs />
    </div>
  );
}
