import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const Fullcalendar = () => {
  const [events, setEvents] = useState([]);

  const handleSelectorSlot = ({ start, end }) => {
    const title = window.prompt(`New Event Name`)
    if(title){
        setEvents([...events, {start, end, title}])
    }
  }

  const handleSelectorEvent = (event) => {
    const confirmDelete = window.confirm(`Delete event " ${event.title}"? `)
    if(confirmDelete){
        setEvents(event.filter((e) => e !== event))
    }
}

  return (
    <div className="Calendar">
      <h1>Calendar</h1>
      <div className="link">
        <a href="#">Home</a> <p>/</p> <a href="#">Plugins</a>
      </div>
      <div className="full">
        <p className="text">FullCalendar</p>
        <Calendar className="date"
            localizer={localizer}
            events={events}
            selectable 
            startAccessor={"<"}
            endAccessor=">"
            style={{ height: 500}}
            onSelectSlot={handleSelectorSlot}
            onSelectEvent={handleSelectorEvent}
            defaultView="month"
            popup={true}
        />
      </div>
    </div>
  );
};
export default Fullcalendar;
