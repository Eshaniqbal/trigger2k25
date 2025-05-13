'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: string; 
}

const calculateTimeLeft = (targetDate: string): TimeLeft | null => {
  const difference = +new Date(targetDate) - +new Date();
  let timeLeft: TimeLeft | null = null;

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
};

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This effect runs only on the client after hydration
    setIsClient(true);
    setTimeLeft(calculateTimeLeft(targetDate)); // Initial calculation

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!isClient) {
    // Server-side rendering or pre-hydration: Show a static placeholder
    const placeholderUnits = [
      { label: 'Days', value: '--' },
      { label: 'Hours', value: '--' },
      { label: 'Minutes', value: '--' },
      { label: 'Seconds', value: '--' },
    ];
    return (
      <div className="flex justify-center space-x-2 md:space-x-4 my-8 animate-pulse">
        {placeholderUnits.map((unit) => (
          <Card key={unit.label} className="bg-card/70 backdrop-blur-sm border-border p-3 md:p-4 w-20 md:w-28 text-center shadow-lg">
            <CardContent className="p-0">
              <div className="text-3xl md:text-5xl font-bold text-primary tabular-nums">
                {unit.value}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                {unit.label}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (!timeLeft) {
    return <div className="text-center text-2xl font-bold text-primary my-8 animate-fade-in-up">Event has started or already passed!</div>;
  }

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="flex justify-center space-x-2 md:space-x-4 my-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
      {timeUnits.map((unit, index) => (
        <Card 
          key={unit.label} 
          className="bg-card/70 backdrop-blur-sm border-border p-3 md:p-4 w-20 md:w-28 text-center shadow-lg hover:shadow-primary/30 transition-shadow duration-300"
          style={{ animationDelay: `${0.5 + index * 0.1}s` }}
        >
          <CardContent className="p-0">
            <div className="text-3xl md:text-5xl font-bold text-primary tabular-nums">
              {/* For days, don't pad if it's more than 2 digits. Otherwise, pad with 0. */}
              {unit.label === 'Days' ? String(unit.value) : String(unit.value).padStart(2, '0')}
            </div>
            <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
              {unit.label}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
