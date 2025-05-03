
import { EventType } from "../data/mockEvents";
import { isWithinDateRange } from "./dateUtils";

export interface FilterOptions {
  searchTerm?: string;
  eventType?: string;
  college?: string;
  dateRange?: {
    start?: Date;
    end?: Date;
  };
}

export const filterEvents = (events: EventType[], filters: FilterOptions): EventType[] => {
  return events.filter(event => {
    // Search term filter (title, description, location)
    if (
      filters.searchTerm && 
      !event.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) &&
      !event.description.toLowerCase().includes(filters.searchTerm.toLowerCase()) &&
      !event.location.toLowerCase().includes(filters.searchTerm.toLowerCase())
    ) {
      return false;
    }
    
    // Event type filter
    if (filters.eventType && event.eventType !== filters.eventType) {
      return false;
    }
    
    // College filter
    if (filters.college && event.collegeOrganizer !== filters.college) {
      return false;
    }
    
    // Date range filter
    if (
      filters.dateRange &&
      !isWithinDateRange(
        event.date, 
        filters.dateRange.start, 
        filters.dateRange.end
      )
    ) {
      return false;
    }
    
    return true;
  });
};
