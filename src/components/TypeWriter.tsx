"use client";
import React, { useState, useEffect } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    // Clean up the interval when component unmounts
    return () => clearInterval(timer);
  }, []);
  
  // Format the time as HH:MM (without seconds)
  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  
  // Format the date in the simplified format: Day Month Date
  const date = time.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <div className="px-2 py-6 rounded-xl w-[280px] sm:w-[320px] md:w-[350px] flex flex-col items-center justify-center">
        <div className="flex justify-center items-center w-full text-4xl sm:text-5xl md:text-8xl font-mono text-green-300">
          <span className="tracking-[0.25em] text-center w-full relative left-[0.125em]">{hours}<span>:</span>{minutes}</span>
        </div>
        <div className="text-center mt-2 text-sm text-green-300">
          {date}
        </div>
      </div>
    </div>
  );
};

export default DigitalClock; 