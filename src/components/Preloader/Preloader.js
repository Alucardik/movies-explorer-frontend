import React from 'react'
import './Preloader.css'

const Preloader = (props) => {
  return (
    <div className={`preloader ${props.isShown && 'preloader_shown'}`} >
      <div className="preloader__container">
        <span className="preloader__round" />
      </div>
    </div>
  );
};

export default Preloader;
