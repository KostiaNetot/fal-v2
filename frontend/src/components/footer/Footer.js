import React from 'react';
import logo from './logo.png';
import Button from "../button/Button";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col footer__logo">
            <a href="index.html" className="main-logo">
              <img src={logo} alt="logo"/>
            </a>
            <Button className='btn'/>
          </div>
          <div className="col footer__contacts">
            <h4>Наши контакты</h4>
            <p>+38 063 286 52 77</p>
            <p>+34 691 71 33 98</p>
            <p>freshartline@gmail.com</p>
          </div>
          <div className="col footer__schedule">
            <h4>График работы</h4>
            <p>Пн - Пт: с 10 до 20</p>
            <p>Сб: с 10 до 19</p>
          </div>
          <div className="col footer__social">
            <ul>
              <li><a href="#"><img src={require('./icons/facebook-1.png')} alt="facebook"/></a></li>
              <li><a href="#"><img src={require('./icons/instagram-1.png')} alt="instagram"/></a></li>
              <li><a href="#"><img src={require('./icons/youtube-1.png')} alt="youtube"/></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="sub-footer">
        <p>All Rights Reserved | Fresh Arts Line 2020</p>
      </div>
    </footer>
  );
};

export default Footer;
