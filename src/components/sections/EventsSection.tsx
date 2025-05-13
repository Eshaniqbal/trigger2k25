'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { EventCard } from '@/components/core/EventCard';
import { EVENTS_DATA } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function EventsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Estimate card width + gap for scroll amount.
  // Card: w-[300px] sm:w-[320px]. Gap: space-x-6 (1.5rem = 24px).
  // So, roughly 320 + 24 = 344.
  const scrollAmount = 344; 

  const checkForScrollability = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      // Check if there's enough content to scroll right, accounting for potential subpixel rendering issues
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkForScrollability(); // Initial check
      
      // Debounce or throttle if performance becomes an issue on frequent scrolls/resizes
      container.addEventListener('scroll', checkForScrollability);
      window.addEventListener('resize', checkForScrollability);

      // Re-check after images within cards might have loaded (if they affect scrollWidth)
      // This is a simple approach; MutationObserver or tracking image loads could be more robust
      const timeoutId = setTimeout(checkForScrollability, 1000); // Adjust delay as needed

      return () => {
        container.removeEventListener('scroll', checkForScrollability);
        window.removeEventListener('resize', checkForScrollability);
        clearTimeout(timeoutId);
      };
    }
  }, [checkForScrollability]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const currentScrollAmount = direction === 'left' ? -scrollAmount : scrollAmount;
      scrollContainerRef.current.scrollBy({ left: currentScrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="events" className="py-16 md:py-24 bg-background/90 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
          <span className="animated-gradient-text">Event Highlights</span>
        </h2>
        
        {EVENTS_DATA.length > 0 ? (
          <div className="relative">
            {canScrollLeft && (
              <Button
                variant="outline"
                size="icon"
                className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-20 bg-background/70 hover:bg-card text-foreground rounded-full shadow-lg transition-opacity"
                onClick={() => handleScroll('left')}
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            )}
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto space-x-4 sm:space-x-6 pb-6 -mx-4 px-4 scrollbar-hide"
            >
              {EVENTS_DATA.map((event, index) => (
                <div
                  key={event.id}
                  className="flex-shrink-0 w-[280px] sm:w-[320px] h-full animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <EventCard event={event} />
                </div>
              ))}
            </div>
            {canScrollRight && (
              <Button
                variant="outline"
                size="icon"
                className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-20 bg-background/70 hover:bg-card text-foreground rounded-full shadow-lg transition-opacity"
                onClick={() => handleScroll('right')}
                aria-label="Scroll right"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            )}
          </div>
        ) : (
          <p className="text-center text-muted-foreground mt-8">
            No events scheduled at the moment. Check back soon!
          </p>
        )}
      </div>
    </section>
  );
}
