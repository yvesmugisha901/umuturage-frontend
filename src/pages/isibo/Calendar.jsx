import React, { useState } from "react";
import "../../styles/isiboPages.css";

const IsiboCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

  const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const prevMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const totalDays = daysInMonth(year, month);
  const startDay = firstDayOfMonth(year, month);

  // Create array with empty slots for the first week
  const calendarDays = Array.from({ length: startDay }, () => null)
    .concat(Array.from({ length: totalDays }, (_, i) => i + 1));

  return (
    <div className="isibo-page-container">
      <h1 className="isibo-title">Isibo Calendar</h1>

      <div className="calendar-container">
        <div className="calendar-nav">
          <button onClick={prevMonth}>&lt;</button>
          <span>{monthNames[month]} {year}</span>
          <button onClick={nextMonth}>&gt;</button>
        </div>

        <div className="calendar-header">
          {weekdays.map(day => (
            <span key={day} className="calendar-weekday">{day}</span>
          ))}
        </div>

        <div className="calendar-grid">
          {calendarDays.map((day, idx) => (
            <div key={idx} className={`calendar-day ${day ? "" : "empty-day"}`}>
              {day || ""}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IsiboCalendar;
