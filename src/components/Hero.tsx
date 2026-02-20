import { Linkedin, FileText, ChevronDown, Briefcase, Github } from 'lucide-react';
import { trackClick } from '../lib/analytics';

export default function Hero() {

  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20 pb-0 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-shrink-0 animate-fade-in">
            <img
              src="/unnamed.jpg"
              alt="Alex"
              className="w-48 h-48 md:w-64 md:h-64 rounded-2xl object-cover shadow-2xl ring-4 ring-slate-100"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600">Alex</span>.
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 font-medium">
                I help teams and businesses grow through thoughtful systems and design.
              </p>
            </div>

            <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
              <p>
                My background spans sales, marketing, customer success, operations, HR, and consulting—from startups to Fortune 50 companies. Currently an MBA candidate at Berkeley Haas School of Business.
              </p>
              <p>
                Creator of <strong>OFF ALGO</strong>, where I explore attention, behavior, and curiosity beyond algorithms.
              </p>

              <div className="pt-4 flex flex-col items-center md:items-start gap-4">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                  <a
                    href="https://www.linkedin.com/in/alexbarra"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClick('home', 'linkedin_button')}
                    className="flex items-center gap-2 px-5 py-2.5 text-slate-700 hover:text-blue-600 border border-slate-300 rounded-lg hover:border-blue-600 transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/alexbarra-hub"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClick('home', 'github_button')}
                    className="flex items-center gap-2 px-5 py-2.5 text-slate-700 hover:text-slate-900 border border-slate-300 rounded-lg hover:border-slate-900 transition-all"
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </a>
                  <a
                    href="https://nebula-lightning-ff3.notion.site/Barra-Ventures-278d423e383080599faae0e32b84dae8"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClick('home', 'barra_ventures_button')}
                    className="flex items-center gap-2 px-5 py-2.5 text-slate-700 hover:text-slate-900 border border-slate-300 rounded-lg hover:border-slate-900 transition-all"
                  >
                    <Briefcase className="w-5 h-5" />
                    Barra Ventures
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
