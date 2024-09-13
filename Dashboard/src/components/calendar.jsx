import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css"

const localizer = momentLocalizer(moment);

const Fullcalendar = () => {

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
            selectable 
            startAccessor={"<"}
            endAccessor=">"
            style={{ height: 500}}
            defaultView="month"
            popup={true}
        />
      </div>
    </div>
  );
};
export default Fullcalendar;
