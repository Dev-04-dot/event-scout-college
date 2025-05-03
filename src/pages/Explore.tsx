
import { useState } from "react";
import { useEvents } from "../context/EventContext";
import EventCard from "../components/EventCard";
import EventFilters from "../components/EventFilters";
import AppHeader from "../components/AppHeader";
import { FilterOptions, filterEvents } from "../utils/filterUtils";

const Explore = () => {
  const { events, addEvent } = useEvents();
  const [filters, setFilters] = useState<FilterOptions>({});

  const filteredEvents = filterEvents(events, filters);

  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader onEventSubmit={addEvent} />
      
      <main className="flex-1 container px-4 sm:px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Explore Events</h1>
          <p className="text-gray-600 mb-8">
            Browse all upcoming hackathons, tech talks, and workshops from colleges across the country.
          </p>

          <EventFilters onFilterChange={setFilters} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No events found</h3>
              <p className="text-gray-500 max-w-md mx-auto">
                Try adjusting your search filters or submit an event to add it to our platform!
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="bg-gray-100 py-6">
        <div className="container px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="font-bold text-eventScout-purple">EventScout</span>
              <span className="text-sm ml-1 text-gray-600">College</span>
            </div>
            <div className="text-sm text-gray-500">
              © 2025 EventScout. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Explore;
