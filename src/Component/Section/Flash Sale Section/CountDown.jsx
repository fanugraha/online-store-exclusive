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
        hours: "00", // Menambahkan format dua digit
        minutes: "00", // Menambahkan format dua digit
        seconds: "00", // Menambahkan format dua digit
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = String(
      Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    ).padStart(2, "0"); // Format dua digit
    const minutes = String(
      Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    ).padStart(2, "0"); // Format dua digit
    const seconds = String(
      Math.floor((difference % (1000 * 60)) / 1000)
    ).padStart(2, "0"); // Format dua digit

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
      <div className="Timer">{timeLeft.hours}</div>
      <div className="Space">:</div>
      <div className="Timer">{timeLeft.minutes}</div>
      <div className="Space">:</div>
      <div className="Timer">{timeLeft.seconds}</div>
    </div>
  );
};

export default CountdownTimer;
