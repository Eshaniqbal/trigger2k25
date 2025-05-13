import type { Metadata } from 'next';
import { Header } from '@/components/core/Header';
import { Footer } from '@/components/core/Footer';
import { EventCard } from '@/components/core/EventCard';
import { EVENTS_DATA, APP_NAME, COLLEGE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `All Events - ${APP_NAME} - ${COLLEGE_NAME}`,
  description: `Explore all events for ${APP_NAME}, the National Level Technical Symposium by the Department of Computer Science and Engineering, ${COLLEGE_NAME}. Register for Mini Cricket, Paper Presentation, CODEX, and more!`,
};

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <section id="all-events" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              <span className="animated-gradient-text">All Event Registrations</span>
            </h2>
            {EVENTS_DATA.length > 0 ? (
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {EVENTS_DATA.map((event, index) => (
                  <EventCard
                    key={event.id}
                    event={event}
                  />
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground">
                No events scheduled at the moment. Check back soon!
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
