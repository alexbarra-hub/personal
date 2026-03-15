import { trackClick } from '../lib/analytics';

type Page = 'home' | 'about' | 'projects';

interface HeroProps {
  setCurrentPage: (page: Page) => void;
}

export default function Hero({ setCurrentPage }: HeroProps) {
  return (
    <section className="w-full h-screen relative flex flex-col p-8 md:p-16 border-b-[4px] border-[var(--c-red)] overflow-hidden" style={{ backgroundColor: 'var(--c-pink)', color: 'var(--c-red)' }}>
      <div className="absolute top-1/2 left-1/2 w-[150%] aspect-square opacity-30 z-0 -translate-x-1/2 -translate-y-1/2" style={{
        background: 'repeating-conic-gradient(var(--c-teal) 0deg 4deg, transparent 4deg 8deg)',
        animation: 'rotate 60s linear infinite'
      }}></div>

      <div className="sticky-meta text-mono absolute top-6 left-6 z-20 flex gap-6">
        <button
          onClick={() => {
            trackClick('home', 'about_nav');
            setCurrentPage('about');
          }}
          className="hover:underline transition-all"
        >
          ABOUT
        </button>
        <button
          onClick={() => {
            trackClick('home', 'projects_nav');
            setCurrentPage('projects');
          }}
          className="hover:underline transition-all"
        >
          PROJECTS
        </button>
      </div>

      <div className="sticky-meta text-mono absolute top-6 right-6 text-right z-20">
        VOL. 01<br />
        [ALEX_BARRA]
      </div>

      <h1 className="huge-type relative z-10 mt-auto mb-8">
        ALEX<br />
        BARRA
      </h1>

      <p className="text-mono max-w-xs relative z-10 mb-8">
        BUILDING EARLY-STAGE PRODUCTS THAT HELP PEOPLE THINK BETTER, LIVE BETTER, AND MAKE BETTER DECISIONS.
      </p>

      <div className="flex flex-wrap gap-4 relative z-10">
        <a
          href="https://www.linkedin.com/in/alexbarra"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackClick('home', 'linkedin_button')}
          className="text-mono px-6 py-3 border-2 border-[var(--c-red)] hover:bg-[var(--c-red)] hover:text-[var(--c-black)] transition-all"
        >
          LINKEDIN
        </a>
        <a
          href="https://github.com/alexbarra-hub"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackClick('home', 'github_button')}
          className="text-mono px-6 py-3 border-2 border-[var(--c-red)] hover:bg-[var(--c-red)] hover:text-[var(--c-black)] transition-all"
        >
          GITHUB
        </a>
        <a
          href="https://nebula-lightning-ff3.notion.site/Barra-Ventures-278d423e383080599faae0e32b84dae8"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackClick('home', 'barra_ventures_button')}
          className="text-mono px-6 py-3 border-2 border-[var(--c-red)] hover:bg-[var(--c-red)] hover:text-[var(--c-black)] transition-all"
        >
          VENTURES
        </a>
      </div>

      <div className="absolute bottom-6 right-6 text-mono font-black z-20">(X)</div>
    </section>
  );
}
