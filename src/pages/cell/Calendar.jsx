import React from "react";
import "../../styles/cellPages.css"; // common CSS for cell pages

const CellCalendar = () => {
  // Example: generate days for a simple calendar
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="cell-page-container">
      <h1 className="cell-title">Cell Calendar</h1>

      <div className="calendar-container">
        <div className="calendar-header">
          <span>Sun</span>
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
        </div>

        <div className="calendar-grid">
          {days.map((day) => (
            <div key={day} className="calendar-day">
              {day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CellCalendar;
