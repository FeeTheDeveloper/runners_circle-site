import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4" style={{ backgroundColor: '#0E0E0E' }}>
      {/* Radial glow effect behind headline */}
      <div 
        className="absolute inset-0 flex items-center justify-center opacity-30"
        style={{
          background: 'radial-gradient(circle at center, #E6451E 0%, transparent 70%)',
          filter: 'blur(100px)'
        }}
      />
      
      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto py-12">
        {/* Headline */}
        <h1 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-2 sm:mb-4"
          style={{ color: '#F2F2F2' }}
        >
          Runners Circle
        </h1>
        
        {/* Subheadline */}
        <h2 
          className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 sm:mb-12"
          style={{ color: '#B5B5B5' }}
        >
          Branding & Marketing
        </h2>
        
        {/* Tagline */}
        <p 
          className="text-base sm:text-lg md:text-xl leading-relaxed mb-12 sm:mb-16 max-w-2xl px-4"
          style={{ color: '#B5B5B5' }}
        >
          Elite branding and marketing for businesses ready to dominate their market.
          No fluff. No games. Just results.
        </p>
        
        {/* CTA Button */}
        <Link
          href="/chat"
          className="inline-block px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 min-w-[280px] sm:min-w-[320px]"
          style={{ 
            backgroundColor: '#E6451E',
            color: '#F2F2F2'
          }}
        >
          Build My Brand Engine
        </Link>
      </main>
    </div>
  );
}
