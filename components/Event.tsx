import React, { useState } from 'react';
import { Event as EventType } from '../types/index';
import '../styles/Event.module.css';

interface EventProps {
  event: EventType;
  onDrag: (event: EventType, days: number) => void;
}

const Event: React.FC<EventProps> = ({ event, onDrag }) => {
  const [dragStart, setDragStart] = useState<number | null>(null);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    setDragStart(e.clientX);
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    if (dragStart) {
      const days = Math.round((e.clientX - dragStart) / 100);
      onDrag(event, days);
    }
    setDragStart(null);
  };

  const eventHeight = (event.duration / 8) * 100;

  return (
    <div
      id="event"
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      style={{ height: `${eventHeight}%` }}
    >
      {event.title}
    </div>
  );
};

export default Event;