import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import { trackPageView } from './lib/analytics';

type Page = 'home' | 'about' | 'projects';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    trackPageView(currentPage);
  }, [currentPage]);

  return (
    <div className="w-full h-screen overflow-hidden" style={{ backgroundColor: 'var(--c-black)' }}>
      <div className="fixed left-0 top-0 bottom-0 w-16 z-50 flex items-center overflow-hidden" style={{
        backgroundColor: 'var(--c-black)',
        borderRight: '4px solid var(--c-red)',
        color: 'var(--c-red)'
      }}>
        <div className="flex flex-col whitespace-nowrap text-6xl" style={{
          fontFamily: 'var(--f-display)',
          animation: 'marquee-vertical 10s linear infinite',
          writingMode: 'vertical-rl',
          transform: 'rotate(180deg)'
        }}>
          <span>ALEX BARRA — PORTFOLIO — 2026 </span>
          <span>ALEX BARRA — PORTFOLIO — 2026 </span>
          <span>ALEX BARRA — PORTFOLIO — 2026 </span>
          <span>ALEX BARRA — PORTFOLIO — 2026 </span>
          <span>ALEX BARRA — PORTFOLIO — 2026 </span>
          <span>ALEX BARRA — PORTFOLIO — 2026 </span>
          <span>ALEX BARRA — PORTFOLIO — 2026 </span>
          <span>ALEX BARRA — PORTFOLIO — 2026 </span>
          <span>ALEX BARRA — PORTFOLIO — 2026 </span>
          <span>ALEX BARRA — PORTFOLIO — 2026 </span>
          <span>ALEX BARRA — PORTFOLIO — 2026 </span>
          <span>ALEX BARRA — PORTFOLIO — 2026 </span>
          <span>ALEX BARRA — PORTFOLIO — 2026 </span>
          <span>ALEX BARRA — PORTFOLIO — 2026 </span>
          <span>ALEX BARRA — PORTFOLIO — 2026 </span>
          <span>ALEX BARRA — PORTFOLIO — 2026 </span>
        </div>
      </div>

      <main className="ml-16 h-screen overflow-y-scroll" style={{
        scrollbarWidth: 'none'
      }}>
        <style>{`
          main::-webkit-scrollbar { display: none; }
        `}</style>

        {currentPage === 'home' && <Hero setCurrentPage={setCurrentPage} />}
        {currentPage === 'about' && <About setCurrentPage={setCurrentPage} />}
        {currentPage === 'projects' && <Projects setCurrentPage={setCurrentPage} />}
      </main>
    </div>
  );
}

export default App;
