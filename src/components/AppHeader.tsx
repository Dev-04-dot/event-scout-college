
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import EventSubmitForm from "./EventSubmitForm";

interface AppHeaderProps {
  onEventSubmit: (eventData: any) => void;
}

const AppHeader = ({ onEventSubmit }: AppHeaderProps) => {
  const [showSubmitForm, setShowSubmitForm] = useState(false);
  const location = useLocation();

  return (
    <header className="border-b sticky top-0 z-50 w-full bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-eventScout-purple">
            EventScout
          </span>
          <span className="text-sm font-medium text-muted-foreground">
            College
          </span>
        </Link>

        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === "/" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Home
          </Link>
          <Link 
            to="/explore" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === "/explore" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Explore
          </Link>
          <Link 
            to="/about" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === "/about" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            About
          </Link>
        </nav>
        
        <div className="ml-4 sm:ml-6">
          <Button onClick={() => setShowSubmitForm(true)}>
            <Plus className="mr-1 h-4 w-4" />
            Submit Event
          </Button>
        </div>
      </div>

      <EventSubmitForm
        isOpen={showSubmitForm}
        onClose={() => setShowSubmitForm(false)}
        onEventSubmit={onEventSubmit}
      />
    </header>
  );
};

export default AppHeader;
