import { COLLEGE_NAME } from '@/lib/constants';
import { Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-8 text-muted-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-6">
            <a 
              href="https://www.instagram.com/rrcecse_/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="h-5 w-5" />
              <span className="text-sm">Follow Us On Instagram</span>
            </a>
          </div>
          <p className="text-xs">
            Designed By{' '}
            <a 
              href="https://www.linkedin.com/in/eshaniqbal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Connect with Eshan Iqbal on LinkedIn"
            >
              <span>Eshan Iqbal</span>
              <Linkedin className="h-3 w-3" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
