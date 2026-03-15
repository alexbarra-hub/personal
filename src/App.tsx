import { useEffect } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import { trackPageView } from './lib/analytics';

function App() {
  useEffect(() => {
    trackPageView('home');
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden" style={{ backgroundColor: 'var(--c-black)' }}>
      <div className="fixed left-0 top-0 bottom-0 w-16 z-50 flex items-center overflow-hidden" style={{
        backgroundColor: 'var(--c-black)',
        borderRight: '4px solid var(--c-red)',
        color: 'var(--c-red)'
      }}>
        <div className="flex flex-col whitespace-nowrap text-6xl" style={{
          fontFamily: 'var(--f-display)',
          animation: 'marquee-vertical 15s linear infinite',
          writingMode: 'vertical-rl',
          transform: 'rotate(180deg)'
        }}>
          <span>ALEX BARRA — PORTFOLIO — 2026 — </span>
          <span>ALEX BARRA — PORTFOLIO — 2026 — </span>
        </div>
      </div>

      <main className="ml-16 h-screen overflow-y-scroll" style={{
        scrollSnapType: 'y mandatory',
        scrollbarWidth: 'none'
      }}>
        <style>{`
          main::-webkit-scrollbar { display: none; }
        `}</style>

        <div style={{ scrollSnapAlign: 'start' }}>
          <Hero />
        </div>
        <div style={{ scrollSnapAlign: 'start' }}>
          <About />
        </div>
        <div style={{ scrollSnapAlign: 'start' }}>
          <Projects />
        </div>
      </main>
    </div>
  );
}

export default App;
