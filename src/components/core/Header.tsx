import Link from 'next/link';
import Image from 'next/image';
import { Home, ListChecks } from 'lucide-react'; 
import { APP_NAME_HEADER } from '@/lib/constants';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Homepage">
          <div className="relative h-10 w-10">
            <Image
              src="/images/logo.png"
              alt="College Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-lg font-semibold tracking-tight text-foreground">
            {APP_NAME_HEADER}
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/" className="flex items-center gap-1 font-medium text-muted-foreground transition-colors hover:text-foreground hover:text-primary" aria-label="Home page">
            <Home className="h-4 w-4" />
            Home
          </Link>
          <Link href="/events" className="flex items-center gap-1 font-medium text-muted-foreground transition-colors hover:text-foreground hover:text-primary" aria-label="Events page">
            <ListChecks className="h-4 w-4" />
            Events
          </Link>
        </nav>
      </div>
    </header>
  );
}
