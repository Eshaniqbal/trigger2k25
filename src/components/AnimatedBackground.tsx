'use client';

export function AnimatedBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-4rem)] overflow-hidden">
      <div className="absolute inset-0 z-0 animated-gradient-bg opacity-70" />
      <div className="absolute inset-0 z-0 " style={{
        backgroundImage: `
          radial-gradient(circle at 10% 20%, hsl(var(--primary) / 0.1) 0%, transparent 20%),
          radial-gradient(circle at 80% 30%, hsl(var(--accent) / 0.1) 0%, transparent 25%),
          radial-gradient(circle at 30% 80%, hsl(var(--primary) / 0.05) 0%, transparent 15%),
          radial-gradient(circle at 90% 70%, hsl(var(--accent) / 0.08) 0%, transparent 20%)
        `,
        backgroundSize: '100% 100%',
        animation: 'pulse-lights 10s infinite alternate ease-in-out',
      }}/>
      <style jsx>{`
        @keyframes pulse-lights {
          0% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.02); }
          100% { opacity: 0.7; transform: scale(1); }
        }
      `}</style>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}