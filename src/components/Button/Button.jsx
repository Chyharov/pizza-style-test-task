import React from 'react';
import s from './Button.module.scss'



function Button(props) {
    const { onClick, text, className } = props;

  return (
    <button type="button" className={`${s.button} ${className}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;