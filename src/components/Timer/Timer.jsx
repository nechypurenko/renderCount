import React from 'react';
import './Timer.css';
import { Display } from '../Display/Display';
import { Button } from '../Button/Button';
import { useTimer } from '../../hooks/useTimer'

export const Timer = () => {
  const { time, isActive, renderCount, toggle, reset } = useTimer();

  return (
    <div className="timer-container">
      <Display time={time} />
      <div className="render-count">Number of component renders: {renderCount}</div>
      <div className="button-group">
      {!isActive ? (
          <Button onClick={toggle} className="play">
            <span className="material-icons">Play</span>
          </Button>
        ) : (
          <>
            <Button onClick={toggle} className='pause'>
            <span className="material-icons">Pause</span>
            </Button>
            <Button onClick={reset} className="reset">
              Reset
            </Button>
          </>
        )}
      </div>
    </div>
  );
};