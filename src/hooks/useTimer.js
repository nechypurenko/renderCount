import { useState, useEffect, useRef, useMemo, useCallback } from 'react';

export const useTimer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const renderCountRef = useRef(0);
    const intervalRef = useRef(null);
  
    console.log("App rerender");
    useEffect(() => {
        renderCountRef.current += 1;
    });
    
    const toggle = useCallback(() => {
        setIsActive(!isActive);
    }, [isActive]);
  
    const reset = () => {
        setSeconds(0);
        setIsActive(false);
    };
  
    const getTime = useMemo(() => {
      const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
      const secs = String(seconds % 60).padStart(2, '0');
      return `${minutes}:${secs}`;
    }, [seconds]);
  
    useEffect(() => {
      if (isActive) {
        intervalRef.current = setInterval(() => {
          setSeconds(seconds => seconds + 1);
        }, 1000);
      } else if (!isActive && intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      return () => clearInterval(intervalRef.current);
    }, [isActive]);
    return { time: getTime, isActive, renderCount: renderCountRef.current, toggle, reset };
};