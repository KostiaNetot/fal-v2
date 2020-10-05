import React from 'react';

const BurgerButton = ({clicked, toggleMobileMenu}) => {

  return (
    <>
      <div onClick={toggleMobileMenu} className={clicked ? 'underlay' : ''} id="underlay"></div>
      <div onClick={toggleMobileMenu} className="burger" id="burger">
        <span className={clicked ? 'burger-line  invisible' : 'burger-line'}></span>
        <span className={clicked ? 'burger-line  rotate45' : 'burger-line'}></span>
        <span className={clicked ? 'burger-line  rotate-45' : 'burger-line'}></span>
        <span className={clicked ? 'burger-line  invisible' : 'burger-line'}></span>
      </div>
    </>
  );
};

export default BurgerButton;
