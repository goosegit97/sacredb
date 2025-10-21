import React from 'react';

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <iframe
          src="https://player.vimeo.com/video/1129126508?autoplay=1&loop=1&muted=1&background=1"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ 
            width: '100vw', 
            height: '56.25vw',
            minHeight: '100vh',
            minWidth: '177.78vh'
          }}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      </div>

      {/* Overlay */}
      <div className="fixed inset-0 bg-black/30 -z-10" />

      {/* Content */}
      <div className="relative flex min-h-screen flex-col items-center justify-center px-8 py-12">
        <h1 className="mb-4 text-center font-['Helvetica_Neue',Helvetica,Arial,sans-serif] text-5xl font-bold text-white drop-shadow-lg md:text-6xl">
          Welcome
        </h1>
        
        <p className="mb-12 text-center font-['Helvetica_Neue',Helvetica,Arial,sans-serif] text-xl text-white drop-shadow-md md:text-2xl">
          Connect with us on social media
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative font-['Helvetica_Neue',Helvetica,Arial,sans-serif] text-lg text-white transition-colors hover:text-white/80"
          >
            Instagram
            <span className="absolute bottom-0 left-0 h-[3px] w-full bg-white transition-all group-hover:h-[2px] group-hover:bg-white/60" />
          </a>
          
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative font-['Helvetica_Neue',Helvetica,Arial,sans-serif] text-lg text-white transition-colors hover:text-white/80"
          >
            Twitter
            <span className="absolute bottom-0 left-0 h-[3px] w-full bg-white transition-all group-hover:h-[2px] group-hover:bg-white/60" />
          </a>
          
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative font-['Helvetica_Neue',Helvetica,Arial,sans-serif] text-lg text-white transition-colors hover:text-white/80"
          >
            Facebook
            <span className="absolute bottom-0 left-0 h-[3px] w-full bg-white transition-all group-hover:h-[2px] group-hover:bg-white/60" />
          </a>
          
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative font-['Helvetica_Neue',Helvetica,Arial,sans-serif] text-lg text-white transition-colors hover:text-white/80"
          >
            LinkedIn
            <span className="absolute bottom-0 left-0 h-[3px] w-full bg-white transition-all group-hover:h-[2px] group-hover:bg-white/60" />
          </a>
        </div>
      </div>
    </div>
  );
}