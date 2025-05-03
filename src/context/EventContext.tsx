
import { createContext, useState, useContext, ReactNode } from "react";
import { EventType, mockEvents } from "../data/mockEvents";
import { useToast } from "../hooks/use-toast";

interface EventContextType {
  events: EventType[];
  addEvent: (event: EventType) => void;
  getEventById: (id: string) => EventType | undefined;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

export const EventProvider = ({ children }: { children: ReactNode }) => {
  const [events, setEvents] = useState<EventType[]>(mockEvents);
  const { toast } = useToast();

  const addEvent = (event: EventType) => {
    setEvents((prevEvents) => [...prevEvents, event]);
    toast({
      title: "Event Added",
      description: "The event has been added successfully.",
    });
  };

  const getEventById = (id: string) => {
    return events.find((event) => event.id === id);
  };

  return (
    <EventContext.Provider value={{ events, addEvent, getEventById }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvents = () => {
  const context = useContext(EventContext);
  if (context === undefined) {
    throw new Error("useEvents must be used within an EventProvider");
  }
  return context;
};
