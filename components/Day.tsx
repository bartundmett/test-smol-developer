import React from 'react';
import { Day as DayType } from '../types/index';
import '../styles/Day.module.css';

interface DayProps {
  day: DayType;
}

const Day: React.FC<DayProps> = ({ day }) => {
  return (
    <div id="day" className="day">
      <div className="day-date">{day.date}</div>
      <div className="day-events">
        {day.events.map((event, index) => (
          <div key={index} className="day-event" style={{ height: `${event.duration * 10}px` }}>
            {event.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Day;