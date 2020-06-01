import React, { useEffect } from "react";
import { Wrapper } from "./DateTime.styles";

interface stateTypes {
  weekDay: string;
  day: number;
  month: string;
  year: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const DateTime: React.FC = () => {
  const [time, setTime] = React.useState({
    weekDay: "Sun",
    day: 1,
    month: "January",
    year: 2020,
    hours: 1,
    minutes: 1,
    seconds: 1,
  } as stateTypes);

  useEffect(() => {
    const interval = setInterval(() => {
      const today = new Date();
      const weekDayIndex = today.getDay();
      const monthIndex = today.getMonth();

      setTime({
        weekDay: weekDays[weekDayIndex],
        day: today.getDate(),
        month: months[monthIndex],
        year: today.getFullYear(),
        hours: today.getHours(),
        minutes: today.getMinutes(),
        seconds: today.getSeconds(),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Months are zero-indexed in js
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const date = `${time.weekDay}, ${time.day} ${time.month} ${
    time.year
  } ${time.hours
    .toString()
    .padStart(2, "0")}:${time.minutes
    .toString()
    .padStart(2, "0")}:${time.seconds.toString().padStart(2, "0")}`;

  return <Wrapper>{date}</Wrapper>;
};
