'use client'
import React, { useState, useEffect } from 'react';

export default function Countdown() {
  const [countdown, setCountdown] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const targetDate = new Date(2024, 3, 6).getTime()
    const intervalId = setInterval(() => {
      const currentDate = new Date().getTime();
      const secondsLeft = (targetDate - currentDate) / 1000;

      const newDays = pad(parseInt(secondsLeft / 86400));
      const newHours = pad(parseInt((secondsLeft % 86400) / 3600));
      const newMinutes = pad(parseInt((secondsLeft % 3600) / 60));
      const newSeconds = pad(parseInt(secondsLeft % 60));

      setCountdown({
        days: newDays,
        hours: newHours,
        minutes: newMinutes,
        seconds: newSeconds,
      });

      if (secondsLeft <= 0) {
        clearInterval(intervalId);
        // Optionally, you can perform some action when the countdown reaches 0.
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array means this effect will run once on component mount

  const pad = (n) => (n < 10 ? '0' : '') + n;

  return (
    <div className='countdownbody'>
      <div id="countdown">
     <h3> <div className='evendate'>Sat, 06 April 2024</div></h3>

        <div id='tiles'>
        {/* <span>{countdown.days}</span>
          <span>{countdown.hours}</span>
          <span>{countdown.minutes}</span>
          <span>{countdown.seconds}</span> */}
          <span>0</span>
          <span>0</span>
          <span>0</span>
          <span>0</span>
        </div>
        <div className="labels">
          <li>Days</li>
          <li>Hours</li>
          <li>Mins</li>
          <li>Secs</li>
        </div>
      </div>
    </div>
  );
}
