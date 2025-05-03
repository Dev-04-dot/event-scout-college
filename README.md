
# EventScout College: Campus Event Aggregation Platform

<div align="center">
  <img src="./public/placeholder.svg" alt="EventScout Logo" width="200" />
  <h3>Find and share college tech events in one place</h3>
</div>

## 📚 About The Project

EventScout College is a comprehensive web platform that aggregates tech events from college campuses across the country. The platform serves as a central hub for discovering hackathons, tech talks, workshops, and networking events happening at various universities.

### Features

- **Event Discovery**: Browse upcoming tech events from multiple colleges in one place
- **Event Submission**: Easily submit new events to the platform with comprehensive details
- **Advanced Filtering**: Find events by type, college, date range, or search terms
- **Detailed Event Pages**: View complete event details including dates, locations, descriptions, and registration links
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing

## 🚀 Tech Stack

This project is built using modern web technologies:

- **React**: Front-end library for building user interfaces
- **TypeScript**: Static type checking for improved developer experience
- **React Router**: For navigation between pages
- **React Hook Form**: For form validation and submission
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Shadcn/UI**: Component library for consistent UI elements
- **Zod**: Schema validation for form inputs
- **date-fns**: Comprehensive date utility library

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
├── context/             # React context for state management
├── data/                # Mock data and data structures
├── hooks/               # Custom React hooks
├── lib/                 # Utility libraries
├── pages/               # Application pages/routes
└── utils/               # Helper functions
```

## ⚙️ Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/event-scout-college.git
   ```

2. Navigate to the project directory:
   ```sh
   cd event-scout-college
   ```

3. Install dependencies:
   ```sh
   npm install
   # or
   yarn
   ```

4. Start the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and visit `http://localhost:8080`

## 🖥️ Usage

### Browsing Events

- The homepage displays featured and recently submitted events
- Use the "Explore" page to see all events with filtering options
- Click on any event card to view detailed information

### Submitting Events

1. Click the "Submit Event" button in the navigation bar
2. Fill out the event details in the form
3. Submit the form to add your event to the platform

### Filtering Events

Use the filter options to narrow down events by:
- Event type (hackathon, tech talk, etc.)
- College/university
- Date range
- Search terms

## 🔍 Current Limitations and Future Improvements

This version of EventScout College uses mock data for event information. In a production environment, this would be replaced with:

- **Backend Integration**: Connect to a database for persistent storage
- **User Authentication**: Allow users to create accounts and save favorite events
- **Web Scraping**: Automated collection of events from university websites
- **Email Notifications**: Alert users about upcoming events matching their interests
- **Calendar Integration**: Add events directly to personal calendars

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📧 Contact

Project Link: [https://github.com/yourusername/event-scout-college](https://github.com/yourusername/event-scout-college)

---

Made with ❤️ for college students looking to discover educational opportunities
