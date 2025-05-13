import { AnimatedHeroText } from '@/components/AnimatedHeroText';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { APP_NAME, COLLEGE_NAME, SYMPOSIUM_START_DATETIME } from '@/lib/constants';
import { ArrowDown, Download, ArrowRight } from 'lucide-react';
import { CountdownTimer } from '@/components/CountdownTimer';

export function HeroSection() {
  return (
    <AnimatedBackground>
      <section className="container mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-12 text-center">
        <div className="max-w-4xl animate-fade-in-up">
          <div className="relative w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
            <Image
              src="/images/logo.png"
              alt="College Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="mb-2 text-4xl font-black text-foreground md:text-6xl bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent font-[var(--font-montserrat)] tracking-wide drop-shadow-lg [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] [text-stroke:_1px_rgba(255,255,255,0.1)]">
            {COLLEGE_NAME}
          </p>
          <p className="mb-1 text-sm font-medium text-muted-foreground md:text-base">
            An Autonomous Institution under VTU Belagavi, approved by AICTE, UGC, and GOK.
          </p>
          
          <p className="mb-2 mt-6 text-lg font-semibold text-primary md:text-xl">
            Department of Computer Science and Engineering Presents
          </p>
          <p className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            National Level Technical Symposium
          </p>

          <AnimatedHeroText text={APP_NAME} className="mb-6 md:mb-8" />
          
          <CountdownTimer targetDate={SYMPOSIUM_START_DATETIME} />
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <Link href="#events">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 group-hover:shadow-md group-hover:shadow-primary/30 group-hover:scale-[1.02] animate-bounce-subtle hover:animate-none"
              >
                Explore Events
                <ArrowRight className="ml-2 h-4 w-4 animate-pulse" />
              </Button>
            </Link>
            <Link href="/brochure.pdf" target="_blank">
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group-hover:shadow-md group-hover:shadow-primary/30 group-hover:scale-[1.02] animate-bounce-subtle hover:animate-none"
              >
                Download Brochure
                <Download className="ml-2 h-4 w-4 animate-pulse" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </AnimatedBackground>
  );
}
