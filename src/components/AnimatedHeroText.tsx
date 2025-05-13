'use client';

import { useEffect, useState } from 'react';

interface AnimatedHeroTextProps {
  text: string;
  className?: string;
}

export function AnimatedHeroText({ text, className }: AnimatedHeroTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const toRotate = ["TRIGGER-2K25", "Register Now!"]; // Only these two phrases
  const period = 2000; // Time to pause at end of word

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, typingSpeed);
    return () => clearInterval(ticker);
  }, [displayedText, typingSpeed]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, displayedText.length - 1) : fullText.substring(0, displayedText.length + 1);

    setDisplayedText(updatedText);

    if (isDeleting) {
      setTypingSpeed(prevSpeed => prevSpeed / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150);
    } else if (!isDeleting) {
       setTypingSpeed(150);
    }
  };

  return (
    <h1 className={`font-mono text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter ${className}`}>
      <span className="animated-gradient-text">
        {displayedText}
      </span>
      <span className="inline-block h-10 w-1 animate-pulse bg-primary ml-1" aria-hidden="true"></span>
    </h1>
  );
}
