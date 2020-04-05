import React from "react";

export const DateTime: React.FC = () => {
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

    const today = new Date();

    const monthIndex = today.getMonth();
    const month = months[monthIndex];

    const weekDayIndex = today.getDay();
    const weekDay = weekDays[weekDayIndex];

    const date = `${weekDay}, ${today.getDate()} ${month} ${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}`;

    return <div>{date}</div>;
};
