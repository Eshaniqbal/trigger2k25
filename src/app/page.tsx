import { Header } from '@/components/core/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { EventsSection } from '@/components/sections/EventsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/core/Footer';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <EventsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
