import { Event } from '../types/index';

export const createEvent = (resourceId: string, start: Date, end: Date): Event => {
  const duration = (end.getTime() - start.getTime()) / (1000 * 60 * 60);
  return {
    id: Math.random().toString(36).substr(2, 9),
    resourceId,
    start,
    end,
    duration,
  };
};

export const updateEvent = (event: Event, start: Date, end: Date): Event => {
  const duration = (end.getTime() - start.getTime()) / (1000 * 60 * 60);
  return {
    ...event,
    start,
    end,
    duration,
  };
};

export const deleteEvent = (eventId: string, events: Event[]): Event[] => {
  return events.filter(event => event.id !== eventId);
};

export const getEventHeight = (event: Event): number => {
  return event.duration / 8 * 100;
};