
import { useNavigate, useParams } from "react-router-dom";
import { useEvents } from "../context/EventContext";
import { formatDateTime, formatDateRange } from "../utils/dateUtils";
import AppHeader from "../components/AppHeader";
import { Button } from "../components/ui/button";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";
import { Badge } from "../components/ui/badge";

const eventTypeLabels: Record<string, string> = {
  hackathon: "Hackathon",
  tech_talk: "Tech Talk",
  workshop: "Workshop",
  networking: "Networking Event",
  other: "Other Event",
};

const eventTypeColors: Record<string, string> = {
  hackathon: "bg-blue-100 text-blue-800",
  tech_talk: "bg-purple-100 text-purple-800",
  workshop: "bg-green-100 text-green-800",
  networking: "bg-amber-100 text-amber-800",
  other: "bg-gray-100 text-gray-800",
};

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { events, addEvent, getEventById } = useEvents();
  const navigate = useNavigate();

  const event = getEventById(id || "");

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col">
        <AppHeader onEventSubmit={addEvent} />
        <main className="flex-1 container px-4 sm:px-6 py-16 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Event Not Found</h1>
            <p className="text-gray-600 mb-8">
              Sorry, the event you're looking for does not exist or has been removed.
            </p>
            <Button variant="default" onClick={() => navigate("/")}>
              Return to Home
            </Button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader onEventSubmit={addEvent} />

      <main className="flex-1">
        <div className="container px-4 sm:px-6 py-8">
          <Button
            variant="ghost"
            className="mb-6"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                {event.imageUrl && (
                  <div className="aspect-video w-full overflow-hidden bg-muted rounded-lg mb-6">
                    <img 
                      src={event.imageUrl} 
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="mb-6">
                  <Badge className={`${eventTypeColors[event.eventType]} mb-2`}>
                    {eventTypeLabels[event.eventType]}
                  </Badge>
                  <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-1.5 text-eventScout-gray">
                      <Calendar size={16} />
                      <span>
                        {event.endDate 
                          ? formatDateRange(event.date, event.endDate) 
                          : formatDateTime(event.date)
                        }
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-eventScout-gray">
                      <MapPin size={16} />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>

                <div className="prose max-w-none">
                  <h2 className="text-xl font-semibold mb-2">About this event</h2>
                  <p className="text-gray-700 whitespace-pre-wrap">
                    {event.description}
                  </p>
                </div>

                {event.link && (
                  <div className="mt-8">
                    <Button asChild className="w-full sm:w-auto">
                      <a href={event.link} target="_blank" rel="noopener noreferrer">
                        Learn More & Register
                      </a>
                    </Button>
                  </div>
                )}
              </div>

              <div className="md:w-1/3">
                <div className="bg-gray-50 p-6 rounded-lg sticky top-20">
                  <h3 className="font-semibold mb-4">Event Details</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Organizer</h4>
                      <p>{event.collegeOrganizer}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Date & Time</h4>
                      <p>
                        {event.endDate 
                          ? formatDateRange(event.date, event.endDate) 
                          : formatDateTime(event.date)
                        }
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Location</h4>
                      <p>{event.location}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Event Type</h4>
                      <p>{eventTypeLabels[event.eventType]}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="bg-gray-100 py-6 mt-12">
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

export default EventDetail;
