import React, { useState, useEffect } from "react";
import "./CountDownstyle.css";

const CountdownTimer = () => {
  const targetDate = new Date("2023-09-01T23:59:59"); // Tanggal target countdown

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [timeLeft]);

  return (
    <div className="CountDown">
      <div className="Timer">{timeLeft.days} Hari</div>
      <div className="Timer">{timeLeft.hours} Jam</div>
      <div className="Timer">{timeLeft.minutes} Menit</div>
      <div className="Timer">{timeLeft.seconds} Detik</div>
    </div>
  );
};

export default CountdownTimer;
