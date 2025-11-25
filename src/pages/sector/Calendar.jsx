import React, { useState } from "react";
import "../../styles/sectorPages.css";

const SectorCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const handlePrevMonth = () => {
    const prevMonth = new Date(year, month - 1);
    setCurrentDate(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(year, month + 1);
    setCurrentDate(nextMonth);
  };

  return (
    <div className="sector-page-container">
      <h1 className="sector-title">Sector Calendar</h1>

      <div className="calendar-header">
        <button onClick={handlePrevMonth}>&lt;</button>
        <h3>{monthNames[month]} {year}</h3>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>

      <div className="calendar-grid">
        <div className="calendar-weekday">Sun</div>
        <div className="calendar-weekday">Mon</div>
        <div className="calendar-weekday">Tue</div>
        <div className="calendar-weekday">Wed</div>
        <div className="calendar-weekday">Thu</div>
        <div className="calendar-weekday">Fri</div>
        <div className="calendar-weekday">Sat</div>

        {Array.from({ length: daysInMonth }, (_, i) => (
          <div key={i} className="calendar-day">{i + 1}</div>
        ))}
      </div>
    </div>
  );
};

export default SectorCalendar;
