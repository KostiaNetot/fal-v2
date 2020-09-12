import React, {useEffect, useState} from 'react';
import Header from "../../components/header/Header";

const MainPage = () => {

  useEffect(() => {
    slider();
  }, []);

  const slider = () => {
    const picturesBg = document.querySelectorAll('.main-page-picture-bg');
    let current = 0;

    setInterval(() => {
      picturesBg.forEach((picture) => {
        picture.classList.add('opacity0');
      });
      picturesBg[current].classList.remove('opacity0');

      if (current+1 === picturesBg.length) {
        current = 0;
      } else {
        current++;
      }
    }, 6000);
  };

  return (
    <div>
      <Header/>
      <main className="main-page-wrapper">

        <img className='main-page-picture-bg' src={require('./slider-img/main-1.jpg')} alt="main-pic"/>
        <img className='main-page-picture-bg' src={require('./slider-img/main-2.jpg')} alt="main-pic"/>
        <img className='main-page-picture-bg' src={require('./slider-img/main-3.jpg')} alt="main-pic"/>

        <div className="main-page-content">
          <h1>Follow our line - the<br/> Fresh Arts Line</h1>
          <a href="#" className="btn">Записаться в академию</a>
        </div>
      </main>
    </div>
  );
};

export default MainPage;
