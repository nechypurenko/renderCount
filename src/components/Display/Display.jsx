import React from 'react';
import './Display.css';

export const Display = ({ time }) => {
  return <div className="timer-display">{time}</div>;
};