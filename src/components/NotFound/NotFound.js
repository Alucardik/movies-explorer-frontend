import './NotFound.css';
import { withRouter } from 'react-router-dom';

function NotFound(props) {
  function handleBackClick() {
    props.history.goBack();
  }

  return(
    <div className="not-found">
     <div className="not-found__container">
       <h1 className="not-found__title">
         404
       </h1>
       <p className="not-found__subtitle">
         Страница не найдена
       </p>
       <button type="button" className="not-found__back-link" onClick={ handleBackClick }>
         Назад
       </button>
     </div>
    </div>
  );
}

export default withRouter(NotFound);
