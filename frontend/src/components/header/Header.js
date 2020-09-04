import React from 'react';
import '../../sass/_header.sass';
import logo from './logo.png'
import {Link, NavLink} from "react-router-dom";

const Header = () => {
  return (
    <React.Fragment>
      <header>
        <div className="container header__container">
          <Link to='/' className="main-logo">
            <img src={logo} alt="logo"/>
          </Link>
          <div className="header__panel">
            {/*Desktop Menu*/}
            <ul className="header__panel__navigation">
              <li><NavLink to='/main' className="nav-item" activeClassName="nav-item-active">Главная</NavLink></li>
              <li><NavLink to='/about' className="nav-item" activeClassName="nav-item-active">О нас</NavLink></li>
              <li><NavLink to='/services' className="nav-item" activeClassName="nav-item-active">Услуги</NavLink></li>
              {/*<li><a className="nav-item" href="#">Галерея</a></li>*/}
              {/*<li><a className="nav-item" href="#">Блог</a></li>*/}
              {/*<li><a className="nav-item" href="#">Контакты</a></li>*/}
            </ul>
            {/*Mobile Menu*/}
            <div className="" id="underlay"></div>
            <div className="burger" id="burger">
              <span className="burger-line"></span>
              <span className="burger-line"></span>
              <span className="burger-line"></span>
              <span className="burger-line"></span>
            </div>
            <ul className="mobile-nav invisible">
              <li><a className="mobile-nav__item" href="index.html">Главная</a></li>
              <li><a className="mobile-nav__item" href="about.html">О нас</a></li>
              <li><a className="mobile-nav__item" href="#">Услуги</a></li>
              <li><a className="mobile-nav__item" href="#">Галерея</a></li>
              <li><a className="mobile-nav__item" href="#">Блог</a></li>
              <li><a className="mobile-nav__item" href="#">Контакты</a></li>
            </ul>
            <div className="header__panel__social">
              <ul>
                <li><a href="#"><img src="./img/icons/facebook%201.png" alt="facebook"/></a></li>
                <li><a href="#"><img src="./img/icons/instagram%201.png" alt="instagram"/></a></li>
                <li><a href="#"><img src="./img/icons/youtube%201.png" alt="youtube"/></a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
