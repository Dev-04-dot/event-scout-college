
import { Link } from "react-router-dom";
import { EventType } from "../data/mockEvents";
import { formatDate, formatDateRange } from "../utils/dateUtils";
import { CalendarDays, MapPin } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

interface EventCardProps {
  event: EventType;
}

const eventTypeColors: Record<string, string> = {
  hackathon: "bg-blue-100 text-blue-800",
  tech_talk: "bg-purple-100 text-purple-800",
  workshop: "bg-green-100 text-green-800",
  networking: "bg-amber-100 text-amber-800",
  other: "bg-gray-100 text-gray-800",
};

const EventTypeLabel: Record<string, string> = {
  hackathon: "Hackathon",
  tech_talk: "Tech Talk",
  workshop: "Workshop",
  networking: "Networking",
  other: "Other",
};

const EventCard = ({ event }: EventCardProps) => {
  return (
    <Link to={`/event/${event.id}`}>
      <Card className="overflow-hidden h-full event-card">
        {event.imageUrl && (
          <div className="aspect-video w-full overflow-hidden bg-muted">
            <img 
              src={event.imageUrl} 
              alt={event.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <Badge variant="outline" className={`${eventTypeColors[event.eventType]} border-none`}>
              {EventTypeLabel[event.eventType]}
            </Badge>
          </div>
          <CardTitle className="text-lg leading-tight mt-1">{event.title}</CardTitle>
          <CardDescription className="line-clamp-2">
            {event.description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="pb-2">
          <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-1.5">
            <CalendarDays size={14} />
            <span>{event.endDate ? formatDateRange(event.date, event.endDate) : formatDate(event.date)}</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
            <MapPin size={14} />
            <span className="truncate">{event.location}</span>
          </div>
        </CardContent>
        
        <CardFooter className="pt-2 text-sm">
          <p className="text-eventScout-purple font-medium">{event.collegeOrganizer}</p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default EventCard;
