import React from 'react';
import './Button.css';

export const Button = ({ onClick, children, className }) => {
  return (
    <button onClick={onClick} className={`button ${className}`}>
      {children}
    </button>
  );
};