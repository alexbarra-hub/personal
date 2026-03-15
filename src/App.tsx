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
      <main className="h-screen overflow-y-scroll" style={{
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
