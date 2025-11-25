// src/pages/village/Calendar.jsx
import React, { useState } from "react";
import "../../styles/villagePages.css";

const VillageCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const nextMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  const prevMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const days = Array.from({ length: getDaysInMonth(currentMonth.getFullYear(), currentMonth.getMonth()) }, (_, i) => i + 1);

  const monthName = currentMonth.toLocaleString('default', { month: 'long' });

  return (
    <div className="village-page-container">
      <h1 className="village-title">Village Calendar</h1>

      <div className="village-calendar-container">
        <div className="calendar-header">
          <button onClick={prevMonth}>◀</button>
          <span>{monthName} {currentMonth.getFullYear()}</span>
          <button onClick={nextMonth}>▶</button>
        </div>

        <div className="calendar-grid">
          {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(day => (
            <div key={day} className="calendar-day-header">{day}</div>
          ))}
          {days.map(day => (
            <div key={day} className="calendar-day">{day}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VillageCalendar;
