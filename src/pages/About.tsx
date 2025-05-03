
import AppHeader from "../components/AppHeader";
import { useEvents } from "../context/EventContext";

const About = () => {
  const { addEvent } = useEvents();

  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader onEventSubmit={addEvent} />
      
      <main className="flex-1">
        <section className="bg-eventScout-purple text-white py-12">
          <div className="container px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-bold mb-4">About EventScout</h1>
              <p className="text-lg opacity-90">
                Connecting students to valuable campus events across the country.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="mb-6 text-gray-700">
                EventScout was created with a simple mission: to help students discover and attend valuable educational events on college campuses. We believe that some of the most important learning happens outside the classroom—at hackathons, workshops, tech talks, and networking events.
              </p>
              <p className="mb-6 text-gray-700">
                Too often, amazing events happen on campuses without enough students knowing about them. EventScout bridges this gap by aggregating events from multiple colleges and universities onto a single, easy-to-use platform.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-10">How It Works</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Find Events</h3>
                  <p className="text-gray-700">
                    Browse our comprehensive collection of tech talks, hackathons, workshops, and networking events from colleges across the country.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Filter & Search</h3>
                  <p className="text-gray-700">
                    Use our powerful filtering tools to find events by date, type, college, or search terms to discover exactly what you're looking for.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Submit Events</h3>
                  <p className="text-gray-700">
                    Know about an event that's not listed? Submit it to our platform to help other students discover valuable learning opportunities.
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mb-4 mt-10">Get Involved</h2>
              <p className="text-gray-700">
                EventScout is a community-driven platform. We encourage students, faculty, and event organizers to submit events, provide feedback, and help us grow our database of educational opportunities. Together, we can create a more connected and informed student community.
              </p>
            </div>
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

export default About;
