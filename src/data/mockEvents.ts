
export interface EventType {
  id: string;
  title: string;
  description: string;
  date: string; // ISO date string
  endDate?: string; // ISO date string, optional for multi-day events
  location: string;
  collegeOrganizer: string;
  eventType: 'hackathon' | 'tech_talk' | 'workshop' | 'networking' | 'other';
  link?: string;
  imageUrl?: string;
}

export const mockEvents: EventType[] = [
  {
    id: '1',
    title: 'Annual Coding Challenge',
    description: 'Join us for our annual 24-hour coding challenge where teams of students compete to build innovative solutions to real-world problems.',
    date: '2025-06-15T09:00:00Z',
    endDate: '2025-06-16T09:00:00Z',
    location: 'Engineering Building, Stanford University',
    collegeOrganizer: 'Stanford University',
    eventType: 'hackathon',
    link: 'https://stanford.edu/hackathon',
    imageUrl: '/placeholder.svg'
  },
  {
    id: '2',
    title: 'AI in Healthcare Workshop',
    description: 'Learn how artificial intelligence is revolutionizing healthcare with hands-on workshops led by industry professionals.',
    date: '2025-06-20T13:00:00Z',
    endDate: '2025-06-20T17:00:00Z',
    location: 'Medical Sciences Building, Harvard University',
    collegeOrganizer: 'Harvard University',
    eventType: 'workshop',
    link: 'https://harvard.edu/ai-workshop',
    imageUrl: '/placeholder.svg'
  },
  {
    id: '3',
    title: 'Future of Quantum Computing',
    description: 'Dr. Jane Smith presents the latest developments in quantum computing and its potential impact on various industries.',
    date: '2025-06-25T18:30:00Z',
    location: 'Physics Auditorium, MIT',
    collegeOrganizer: 'MIT',
    eventType: 'tech_talk',
    link: 'https://mit.edu/quantum-talk',
    imageUrl: '/placeholder.svg'
  },
  {
    id: '4',
    title: 'Blockchain Developers Meetup',
    description: 'Connect with fellow blockchain enthusiasts and developers to discuss the latest trends and technologies in the field.',
    date: '2025-07-02T17:00:00Z',
    location: 'Computer Science Building, UC Berkeley',
    collegeOrganizer: 'UC Berkeley',
    eventType: 'networking',
    link: 'https://berkeley.edu/blockchain-meetup',
    imageUrl: '/placeholder.svg'
  },
  {
    id: '5',
    title: 'Web Development Bootcamp',
    description: 'Intensive 3-day bootcamp covering front-end and back-end development technologies for students of all skill levels.',
    date: '2025-07-10T09:00:00Z',
    endDate: '2025-07-12T17:00:00Z',
    location: 'Innovation Center, UCLA',
    collegeOrganizer: 'UCLA',
    eventType: 'workshop',
    link: 'https://ucla.edu/webdev-bootcamp',
    imageUrl: '/placeholder.svg'
  },
  {
    id: '6',
    title: 'Cybersecurity Challenges in 2025',
    description: 'Expert panel discussion on emerging cybersecurity threats and how organizations can protect themselves.',
    date: '2025-07-18T14:00:00Z',
    location: 'Security Research Center, Carnegie Mellon University',
    collegeOrganizer: 'Carnegie Mellon University',
    eventType: 'tech_talk',
    link: 'https://cmu.edu/cybersecurity-panel',
    imageUrl: '/placeholder.svg'
  },
  {
    id: '7',
    title: 'Mobile App Innovation Contest',
    description: 'Showcase your mobile app development skills and compete for prizes in this weekend-long innovation challenge.',
    date: '2025-07-25T10:00:00Z',
    endDate: '2025-07-26T18:00:00Z',
    location: 'Student Center, University of Michigan',
    collegeOrganizer: 'University of Michigan',
    eventType: 'hackathon',
    link: 'https://umich.edu/mobile-app-contest',
    imageUrl: '/placeholder.svg'
  },
  {
    id: '8',
    title: 'Data Science for Social Good',
    description: 'Workshop on leveraging data science techniques to address social and environmental challenges.',
    date: '2025-08-05T13:30:00Z',
    location: 'Data Science Institute, Columbia University',
    collegeOrganizer: 'Columbia University',
    eventType: 'workshop',
    link: 'https://columbia.edu/datasci-social-good',
    imageUrl: '/placeholder.svg'
  }
];

export const collegeList = [
  'Stanford University',
  'Harvard University',
  'MIT',
  'UC Berkeley',
  'UCLA',
  'Carnegie Mellon University',
  'University of Michigan',
  'Columbia University',
  'Cornell University',
  'Georgia Tech',
  'Caltech',
  'Princeton University',
  'Other'
];

export const eventTypes = [
  { label: 'Hackathon', value: 'hackathon' },
  { label: 'Tech Talk', value: 'tech_talk' },
  { label: 'Workshop', value: 'workshop' },
  { label: 'Networking Event', value: 'networking' },
  { label: 'Other', value: 'other' }
];
