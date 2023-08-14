import React, { useState, useEffect } from 'react';
import Day from './Day';
import Resource from './Resource';
import { Resource as ResourceType, Event as EventType } from '../types';
import { getDaysArray } from '../utils/dateUtils';
import './Calendar.module.css';

interface CalendarProps {
  resources: ResourceType[];
  events: EventType[];
}

const Calendar: React.FC<CalendarProps> = ({ resources, events }) => {
  const [days, setDays] = useState<Date[]>([]);

  useEffect(() => {
    setDays(getDaysArray(4));
  }, []);

  return (
    <div id="calendar">
      <div className="calendar-header">
        {days.map((day, index) => (
          <Day key={index} date={day} />
        ))}
      </div>
      <div className="calendar-body">
        {resources.map((resource) => (
          <Resource key={resource.id} resource={resource} events={events} />
        ))}
      </div>
    </div>
  );
};

export default Calendar;