
import { useState } from "react";
import { useEvents } from "../context/EventContext";
import EventCard from "../components/EventCard";
import EventFilters from "../components/EventFilters";
import AppHeader from "../components/AppHeader";
import { getUpcomingEvents } from "../utils/dateUtils";
import { FilterOptions, filterEvents } from "../utils/filterUtils";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const { events, addEvent } = useEvents();
  const [filters, setFilters] = useState<FilterOptions>({});
  
  const upcomingEvents = getUpcomingEvents(events);
  const filteredEvents = filterEvents(upcomingEvents, filters);

  // For featured events, take the first 3 upcoming events
  const featuredEvents = getUpcomingEvents(events, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader onEventSubmit={addEvent} />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-eventScout-purple text-white py-12 md:py-20">
          <div className="container px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Discover Campus Events All in One Place
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                Never miss a hackathon, tech talk, or workshop again. Find and submit college events from across the country.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/explore">
                  <Button size="lg" variant="default" className="bg-white text-eventScout-purple hover:bg-gray-100">
                    Explore Events
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Events Section */}
        <section className="py-12">
          <div className="container px-4 sm:px-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Featured Events</h2>
              <Link to="/explore">
                <Button variant="link" className="text-eventScout-purple">
                  View all events →
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>

        {/* Recent Submissions Section */}
        <section className="py-12 bg-gray-50">
          <div className="container px-4 sm:px-6">
            <h2 className="text-2xl font-bold mb-6">Recent Submissions</h2>
            
            <EventFilters onFilterChange={setFilters} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.slice(0, 6).map((event) => (
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
        </section>
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

export default Index;
