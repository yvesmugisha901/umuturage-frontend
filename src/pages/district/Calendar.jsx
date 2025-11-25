import React, { useState } from "react";
import "../../styles/districtPages.css";

const DistrictCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

  const daysInMonth = [];
  for (let i = 1; i <= endOfMonth.getDate(); i++) {
    daysInMonth.push(i);
  }

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div className="district-page-container">
      <h1 className="district-title">District Calendar</h1>

      {/* Month Navigation */}
      <div className="district-actions">
        <button className="download-btn" onClick={handlePrevMonth}>Previous</button>
        <span style={{fontWeight: "600", fontSize: "18px", alignSelf: "center"}}>
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </span>
        <button className="download-btn" onClick={handleNextMonth}>Next</button>
      </div>

      {/* Calendar Grid */}
      <div className="calendar-grid">
        {/* Week Days */}
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
          <div key={day} className="calendar-day-header">{day}</div>
        ))}

        {/* Empty spaces for first day */}
        {Array(startOfMonth.getDay()).fill(null).map((_, idx) => (
          <div key={"empty-" + idx} className="calendar-day empty"></div>
        ))}

        {/* Days of Month */}
        {daysInMonth.map(day => (
          <div key={day} className="calendar-day">{day}</div>
        ))}
      </div>
    </div>
  );
};

export default DistrictCalendar;

