import React, { useState, useEffect } from 'react';
import { weddingDate } from '../data/weddingData';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (): TimeLeft => {
  const difference = weddingDate.getTime() - new Date().getTime();
  
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const CountdownItem: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="bg-wedding-navy text-white text-2xl md:text-3xl font-serif w-16 md:w-20 h-16 md:h-20 flex items-center justify-center mb-2 rounded-lg">
        {value < 10 ? `0${value}` : value}
      </div>
      <span className="text-wedding-navy text-xs md:text-sm uppercase tracking-wider font-sans">
        {label}
      </span>
    </div>
  );
  
  return (
    <div className="py-12 bg-wedding-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-wedding-navy font-serif text-3xl mb-10">
          Counting Down to Our Special Day
        </h2>
        
        <div className="flex justify-center space-x-4 md:space-x-8">
          <CountdownItem value={timeLeft.days} label="Days" />
          <CountdownItem value={timeLeft.hours} label="Hours" />
          <CountdownItem value={timeLeft.minutes} label="Minutes" />
          <CountdownItem value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </div>
  );
};

export default Countdown;