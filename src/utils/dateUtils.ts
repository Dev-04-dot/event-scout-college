
import { format, parseISO, isAfter, isBefore, isEqual, addDays } from "date-fns";

export const formatDate = (dateString: string): string => {
  const date = parseISO(dateString);
  return format(date, 'MMMM d, yyyy');
};

export const formatTime = (dateString: string): string => {
  const date = parseISO(dateString);
  return format(date, 'h:mm a');
};

export const formatDateTime = (dateString: string): string => {
  const date = parseISO(dateString);
  return format(date, 'MMMM d, yyyy h:mm a');
};

export const formatDateRange = (startDate: string, endDate?: string): string => {
  const start = parseISO(startDate);
  
  if (!endDate) {
    return format(start, 'MMMM d, yyyy');
  }
  
  const end = parseISO(endDate);
  
  if (format(start, 'yyyy-MM-dd') === format(end, 'yyyy-MM-dd')) {
    // Same day event
    return `${format(start, 'MMMM d, yyyy')} ${format(start, 'h:mm a')} - ${format(end, 'h:mm a')}`;
  } else {
    // Multi-day event
    return `${format(start, 'MMMM d')} - ${format(end, 'MMMM d, yyyy')}`;
  }
};

export const isEventUpcoming = (dateString: string): boolean => {
  const eventDate = parseISO(dateString);
  const now = new Date();
  return isAfter(eventDate, now) || isEqual(eventDate, now);
};

export const getUpcomingEvents = (events: any[], limit?: number) => {
  const upcoming = events
    .filter(event => isEventUpcoming(event.date))
    .sort((a, b) => {
      const dateA = parseISO(a.date);
      const dateB = parseISO(b.date);
      return dateA.getTime() - dateB.getTime();
    });
    
  if (limit) {
    return upcoming.slice(0, limit);
  }
  
  return upcoming;
};

export const isWithinDateRange = (eventDate: string, startDate?: Date, endDate?: Date): boolean => {
  const date = parseISO(eventDate);
  
  if (startDate && !endDate) {
    return isAfter(date, startDate) || isEqual(date, startDate);
  }
  
  if (!startDate && endDate) {
    return isBefore(date, addDays(endDate, 1)) || isEqual(date, endDate);
  }
  
  if (startDate && endDate) {
    return (isAfter(date, startDate) || isEqual(date, startDate)) && 
           (isBefore(date, addDays(endDate, 1)) || isEqual(date, endDate));
  }
  
  return true;
};
