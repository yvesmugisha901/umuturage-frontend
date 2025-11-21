import React, { useState, useEffect } from "react";
import "../styles/calendar.css";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState({});
  const [newEvent, setNewEvent] = useState("");

  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem("calendarEvents")) || {};
    setEvents(savedEvents);
  }, []);

  const saveEventsToStorage = (updated) => {
    localStorage.setItem("calendarEvents", JSON.stringify(updated));
  };

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const handleDayClick = (day) => {
    const clickedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(clickedDate);
  };

  const handleAddEvent = () => {
    if (!newEvent.trim()) return;

    const dateKey = selectedDate.toDateString();
    const updatedEvents = {
      ...events,
      [dateKey]: [...(events[dateKey] || []), newEvent]
    };

    setEvents(updatedEvents);
    saveEventsToStorage(updatedEvents);

    setNewEvent("");
  };

  const handleDeleteEvent = (index) => {
    const dateKey = selectedDate.toDateString();
    const updatedEvents = events[dateKey].filter((_, i) => i !== index);

    const newData = { ...events, [dateKey]: updatedEvents };
    setEvents(newData);
    saveEventsToStorage(newData);
  };

  // Generate Calendar Days
  const getCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    const days = [];

    // Empty slots at start
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }

    // Actual days
    for (let i = 1; i <= totalDays; i++) {
      days.push(i);
    }

    return days;
  };

  return (
    <div className="calendar-page">
      <div className="calendar-container">

        {/* ---- HEADER ---- */}
        <div className="calendar-header">
          <button onClick={handlePrevMonth}>&lt;</button>

          <h2>
            {currentDate.toLocaleString("default", { month: "long" })}{" "}
            {currentDate.getFullYear()}
          </h2>

          <button onClick={handleNextMonth}>&gt;</button>
        </div>

        {/* ---- DAYS OF WEEK ---- */}
        <div className="calendar-row calendar-days">
          {daysOfWeek.map((day) => (
            <div key={day} className="calendar-day-name">{day}</div>
          ))}
        </div>

        {/* ---- DATES ---- */}
        <div className="calendar-grid">
          {getCalendarDays().map((day, index) => {
            const today = new Date();
            const isToday =
              day &&
              today.getDate() === day &&
              today.getMonth() === currentDate.getMonth() &&
              today.getFullYear() === currentDate.getFullYear();

            return (
              <div
                key={index}
                className={`calendar-date ${isToday ? "today" : ""}`}
                onClick={() => day && handleDayClick(day)}
              >
                {day}

                {/* Event indicator */}
                {day && events[new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toDateString()] && (
                  <span className="event-dot"></span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ---- MODAL FOR ADDING EVENTS ---- */}
      {selectedDate && (
        <div className="event-modal">
          <div className="event-box">

            <h3>Events on {selectedDate.toDateString()}</h3>

            <ul className="event-list">
              {(events[selectedDate.toDateString()] || []).map((event, index) => (
                <li key={index}>
                  {event}
                  <button className="delete-btn" onClick={() => handleDeleteEvent(index)}>✖</button>
                </li>
              ))}
            </ul>

            <input
              type="text"
              placeholder="Add new event..."
              value={newEvent}
              onChange={(e) => setNewEvent(e.target.value)}
            />

            <button className="add-event-btn" onClick={handleAddEvent}>Add Event</button>

            <button className="close-btn" onClick={() => setSelectedDate(null)}>Close</button>

          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
