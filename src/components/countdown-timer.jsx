import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isEventPassed, setIsEventPassed] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const eventTime = new Date(targetDate).getTime();
      const difference = eventTime - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
        setIsEventPassed(false);
      } else {
        setIsEventPassed(true);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (isEventPassed) {
    return (
      <div className="text-center py-4">
        <div className="animate-pulse text-pink-400 font-bold text-lg">
          🔍 The Investigation Has Begun! 🕵️‍♂️
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center space-x-4 text-white">
      <div className="flex flex-col items-center bg-pink-900/40 rounded-xl px-4 py-3 border border-pink-500/30 shadow-lg">
        <span className="text-2xl md:text-3xl font-bold text-pink-400">{timeLeft.days}</span>
        <span className="text-xs text-pink-200 font-semibold">DAYS</span>
      </div>
      <div className="flex flex-col items-center bg-pink-900/40 rounded-xl px-4 py-3 border border-pink-500/30 shadow-lg">
        <span className="text-2xl md:text-3xl font-bold text-pink-400">{timeLeft.hours}</span>
        <span className="text-xs text-pink-200 font-semibold">HOURS</span>
      </div>
      <div className="flex flex-col items-center bg-pink-900/40 rounded-xl px-4 py-3 border border-pink-500/30 shadow-lg">
        <span className="text-2xl md:text-3xl font-bold text-pink-400">{timeLeft.minutes}</span>
        <span className="text-xs text-pink-200 font-semibold">MINS</span>
      </div>
      <div className="flex flex-col items-center bg-pink-900/40 rounded-xl px-4 py-3 border border-pink-500/30 shadow-lg">
        <span className="text-2xl md:text-3xl font-bold text-pink-400 animate-pulse">{timeLeft.seconds}</span>
        <span className="text-xs text-pink-200 font-semibold">SECS</span>
      </div>
    </div>
  );
};

export default CountdownTimer;