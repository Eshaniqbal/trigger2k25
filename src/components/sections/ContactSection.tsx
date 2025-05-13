import { COLLEGE_NAME } from '@/lib/constants';
import { Phone, MapPin, Calendar, GraduationCap, Users } from 'lucide-react';

export function ContactSection() {
  return (
    <section className="py-16 bg-background/90 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
          <span className="animated-gradient-text">Contact Information</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Event Details */}
          <div className="group bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/40 hover:border-primary/50 transition-colors duration-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Calendar className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Event Details</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Venue</p>
                  <p className="text-sm text-muted-foreground">5th Floor, {COLLEGE_NAME}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <Calendar className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Date</p>
                  <p className="text-sm text-muted-foreground">15 May 2025</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Leadership */}
          <div className="group bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/40 hover:border-primary/50 transition-colors duration-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Leadership</h3>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm font-medium text-foreground">Principal</p>
                <p className="text-sm text-muted-foreground">Dr. A Balakrishna</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-foreground">Convener</p>
                <p className="text-sm text-muted-foreground">Dr. Kirubha, HOD, Dept. of CSE</p>
              </div>
            </div>
          </div>

          {/* Coordinators */}
          <div className="group bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/40 hover:border-primary/50 transition-colors duration-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Coordinators</h3>
            </div>
            <div className="space-y-4">
              {/* Faculty Coordinator */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-foreground">Faculty Coordinator</p>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">Faculty</span>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Sunil A</p>
                  <a href="tel:7975467092" className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors duration-200">
                    <Phone className="h-3 w-3" />
                    <span>79754 67092</span>
                  </a>
                </div>
              </div>

              {/* Student Coordinators */}
              <div className="space-y-3">
                <p className="text-sm font-medium text-foreground">Student Coordinators</p>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">Vishwas V</p>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">Student</span>
                    </div>
                    <a href="tel:6361101873" className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors duration-200">
                      <Phone className="h-3 w-3" />
                      <span>63611 01873</span>
                    </a>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">Poornashree</p>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">Student</span>
                    </div>
                    <a href="tel:9482120949" className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors duration-200">
                      <Phone className="h-3 w-3" />
                      <span>94821 20949</span>
                    </a>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">Harshitha R Rao</p>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">Student</span>
                    </div>
                    <a href="tel:8762754155" className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors duration-200">
                      <Phone className="h-3 w-3" />
                      <span>87627 54155</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 