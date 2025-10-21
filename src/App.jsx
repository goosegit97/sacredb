import React from 'react';

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden touch-none overscroll-none">
      {/* Video Backgrounds */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Landscape (desktop/tablet) */}
        <iframe
          src="https://player.vimeo.com/video/1129122883?autoplay=1&loop=1&muted=1&background=1"
          className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: '100vw',
            height: '56.25vw',
            minHeight: '100vh',
            minWidth: '177.78vh',
          }}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        />

        {/* Portrait (mobile) */}
        <iframe
          src="https://player.vimeo.com/video/1129126508?autoplay=1&loop=1&muted=1&background=1"
          className="block sm:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: '100vw',
            height: '177.78vw', // taller to fit portrait
            minHeight: '100vh',
            minWidth: '56.25vh',
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
        {/* Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-8 absolute bottom-[25vh] left-1/2 -translate-x-1/2">
          <a
            href="https://www.instagram.com/sacredboredom.mp4?igsh=bG1zMzdmaG1uNmNo"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative text-lg font-bold uppercase tracking-wide chrome-text"
          >
            Instagram
            <span className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-gray-200 via-gray-500 to-gray-200 transition-all group-hover:h-[2px] group-hover:opacity-70" />
          </a>
          <a
            href="https://www.youtube.com/@Sacredboredom"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative text-lg font-bold uppercase tracking-wide chrome-text"
          >
            YouTube
            <span className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-gray-200 via-gray-500 to-gray-200 transition-all group-hover:h-[2px] group-hover:opacity-70" />
          </a>
        </div>
      </div>
    </div>
  );
}