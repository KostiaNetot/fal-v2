import React from 'react';
import classNames from 'classnames';

const Button = ({ onClick, children, className }) => {

  const showForm = (e) => {
    e.preventDefault();
    console.log('showForm');
  };

  const classes = classNames(
    className
  );

  return (
    <a
      className={classes}
      onClick={onClick ? onClick : showForm}
    >
      {children ? children : 'Записаться в академию'}
    </a>
  );
};

export default Button;
