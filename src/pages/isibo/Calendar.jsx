import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/isiboPages.css";

const IsiboCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [modalEvent, setModalEvent] = useState(null); // null or event being added/edited
  const [error, setError] = useState(null);

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const prevMonth = () => setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  const nextMonth = () => setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const totalDays = daysInMonth(year, month);
  const startDay = firstDayOfMonth(year, month);

  const calendarDays = Array.from({ length: startDay }, () => null)
    .concat(Array.from({ length: totalDays }, (_, i) => i + 1));

  const token = localStorage.getItem("token"); // your auth token

  const fetchEvents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/isibo/calendar-events", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setEvents(res.data.events || []);
    } catch (err) {
      console.error("Failed to fetch events:", err);
      setError("Failed to load events");
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [currentDate]);

  const eventsForDay = (day) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return events.filter(event => event.date === dateStr);
  };

  const handleSaveEvent = async (e) => {
    e.preventDefault();
    try {
      if (modalEvent.id) {
        // Update existing event
        await axios.put(
          `http://localhost:5000/api/isibo/calendar-events/${modalEvent.id}`,
          { title: modalEvent.title, date: modalEvent.date },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } else {
        // Add new event
        await axios.post(
          "http://localhost:5000/api/isibo/calendar-events",
          { title: modalEvent.title, date: modalEvent.date },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      }
      setModalEvent(null);
      fetchEvents();
    } catch (err) {
      console.error(err);
      setError("Failed to save event");
    }
  };

  const handleDeleteEvent = async (id) => {
    if (!window.confirm("Are you sure you want to delete this event?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/isibo/calendar-events/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchEvents();
    } catch (err) {
      console.error(err);
      setError("Failed to delete event");
    }
  };

  return (
    <div className="isibo-page-container">
      <h1 className="isibo-title">Isibo Calendar</h1>

      {error && <div className="error-message">{error}</div>}

      <div className="calendar-container">
        <div className="calendar-nav">
          <button onClick={prevMonth}>&lt;</button>
          <span>{monthNames[month]} {year}</span>
          <button onClick={nextMonth}>&gt;</button>
        </div>

        <div className="calendar-header">
          {weekdays.map(day => <span key={day} className="calendar-weekday">{day}</span>)}
        </div>

        <div className="calendar-grid">
          {calendarDays.map((day, idx) => (
            <div key={idx} className={`calendar-day ${day ? "" : "empty-day"}`}>
              {day && (
                <>
                  <div className="day-number">{day}</div>
                  <div className="events-list">
                    {eventsForDay(day).map(ev => (
                      <div key={ev.id} className="event-item">
                        {ev.title}
                        <button onClick={() => setModalEvent(ev)}>Edit</button>
                        <button onClick={() => handleDeleteEvent(ev.id)}>X</button>
                      </div>
                    ))}
                  </div>
                  <button className="add-event-btn" onClick={() => setModalEvent({ title: "", date: `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}` })}>+</button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {modalEvent && (
        <div className="event-form-modal">
          <form onSubmit={handleSaveEvent}>
            <h3>{modalEvent.id ? "Edit Event" : "Add Event"}</h3>
            <input
              type="text"
              placeholder="Event Title"
              value={modalEvent.title}
              onChange={e => setModalEvent({ ...modalEvent, title: e.target.value })}
              required
            />
            <input
              type="date"
              value={modalEvent.date}
              onChange={e => setModalEvent({ ...modalEvent, date: e.target.value })}
              required
            />
            <button type="submit">{modalEvent.id ? "Update" : "Add"} Event</button>
            <button type="button" onClick={() => setModalEvent(null)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default IsiboCalendar;
