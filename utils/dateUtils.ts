import { addDays, format, startOfWeek, endOfWeek, eachDayOfInterval } from 'date-fns';

export const getWeeksInMonth = (date: Date = new Date()): Date[][] => {
  const start = startOfWeek(date);
  const end = endOfWeek(addDays(date, 28));
  const days = eachDayOfInterval({ start, end });

  return Array.from({ length: 4 }, (_, i) => days.slice(i * 7, i * 7 + 7));
};

export const formatDate = (date: Date, dateFormat: string = 'yyyy-MM-dd'): string => {
  return format(date, dateFormat);
};