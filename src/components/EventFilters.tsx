
import { useState } from "react";
import { FilterOptions } from "../utils/filterUtils";
import { collegeList, eventTypes } from "../data/mockEvents";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { CalendarIcon, Filter, Search, X } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface EventFiltersProps {
  onFilterChange: (filters: FilterOptions) => void;
}

const EventFilters = ({ onFilterChange }: EventFiltersProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [eventType, setEventType] = useState("");
  const [college, setCollege] = useState("");
  const [dateRange, setDateRange] = useState<{start?: Date, end?: Date}>({});
  const [showFilters, setShowFilters] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    applyFilters({ searchTerm: e.target.value, eventType, college, dateRange });
  };

  const handleEventTypeChange = (value: string) => {
    setEventType(value);
    applyFilters({ searchTerm, eventType: value, college, dateRange });
  };

  const handleCollegeChange = (value: string) => {
    setCollege(value);
    applyFilters({ searchTerm, eventType, college: value, dateRange });
  };

  const handleDateChange = (field: "start" | "end", date?: Date) => {
    const newDateRange = { ...dateRange, [field]: date };
    setDateRange(newDateRange);
    applyFilters({ searchTerm, eventType, college, dateRange: newDateRange });
  };

  const applyFilters = (filters: FilterOptions) => {
    onFilterChange(filters);
  };

  const resetFilters = () => {
    setSearchTerm("");
    setEventType("");
    setCollege("");
    setDateRange({});
    onFilterChange({});
  };

  const hasActiveFilters = searchTerm || eventType || college || dateRange.start || dateRange.end;

  return (
    <div className="mb-6 space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-grow">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search events..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="pl-9"
          />
        </div>
        <Button 
          variant={showFilters ? "default" : "outline"} 
          onClick={() => setShowFilters(!showFilters)}
          className="sm:w-auto w-full"
        >
          <Filter className="mr-2 h-4 w-4" />
          Filters
          {hasActiveFilters && 
            <span className="ml-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs text-primary">
              {Object.values({ 
                eventType, 
                college, 
                startDate: dateRange.start, 
                endDate: dateRange.end 
              }).filter(Boolean).length + (searchTerm ? 1 : 0)}
            </span>
          }
        </Button>
        {hasActiveFilters && (
          <Button 
            variant="ghost" 
            onClick={resetFilters}
            className="sm:w-auto w-full"
          >
            <X className="mr-2 h-4 w-4" />
            Clear
          </Button>
        )}
      </div>

      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Select value={eventType} onValueChange={handleEventTypeChange}>
            <SelectTrigger>
              <SelectValue placeholder="Event Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Event Types</SelectItem>
              {eventTypes.map(type => (
                <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={college} onValueChange={handleCollegeChange}>
            <SelectTrigger>
              <SelectValue placeholder="College" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Colleges</SelectItem>
              {collegeList.map(college => (
                <SelectItem key={college} value={college}>{college}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="flex space-x-2">
            <div className="grid gap-2 flex-1">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !dateRange.start && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateRange.start ? format(dateRange.start, "PPP") : "Start Date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={dateRange.start}
                    onSelect={(date) => handleDateChange("start", date)}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="grid gap-2 flex-1">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !dateRange.end && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateRange.end ? format(dateRange.end, "PPP") : "End Date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="end">
                  <Calendar
                    mode="single"
                    selected={dateRange.end}
                    onSelect={(date) => handleDateChange("end", date)}
                    disabled={(date) => dateRange.start ? date < dateRange.start : false}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventFilters;
