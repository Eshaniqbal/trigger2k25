import Image from 'next/image';
import Link from 'next/link';
import type { Event } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, ExternalLink } from 'lucide-react';

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <Link href={event.formLink} target="_blank" rel="noopener noreferrer" className="group block h-full" aria-label={`Register for ${event.title}`}>
      <Card 
        className="flex h-full flex-col overflow-hidden bg-card/80 backdrop-blur-sm border-border hover:border-primary shadow-lg transition-all duration-300 ease-in-out group-hover:scale-[1.02] group-hover:shadow-primary/20 group-hover:shadow-xl"
      >
        <CardHeader className="p-0">
          <div className="relative h-48 sm:h-60 w-full overflow-hidden">
            <Image
              src={event.imageUrl}
              alt={event.title}
              fill
              sizes="(max-width: 640px) 280px, 320px"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              data-ai-hint={event.imageHint || "event image"}
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-4 sm:p-6 space-y-2 sm:space-y-3">
          <CardTitle className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {event.title}
          </CardTitle>
          <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
            <CalendarDays className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-primary" />
            <span>{event.date}</span>
          </div>
          <CardDescription className="text-xs sm:text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300 line-clamp-3">
            {event.description}
          </CardDescription>
        </CardContent>
        <CardFooter className="p-4 sm:p-6 pt-0">
          <Button 
            variant="outline" 
            className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group-hover:shadow-md group-hover:shadow-primary/30 group-hover:scale-[1.02] text-sm sm:text-base"
          >
            Register Now
            <ExternalLink className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
