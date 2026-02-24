import { Linkedin, Briefcase, Github } from 'lucide-react';
import { trackClick } from '../lib/analytics';

export default function Hero() {

  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20 pb-0 relative bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-shrink-0 animate-fade-in">
            <img
              src="/unnamed.jpg"
              alt="Alex"
              className="w-48 h-48 md:w-64 md:h-64 rounded-xl object-cover shadow-lg ring-1 ring-neutral-200"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-8 leading-tight">
                I'm <span className="text-neutral-900">Alex</span>.
              </h1>
              <p className="text-xl md:text-2xl text-neutral-700 font-medium mb-6">
                I build early-stage products that help people think better, live better, and make better decisions. Each project is a live experiment in human-centered AI.
              </p>
            </div>

            <div className="space-y-4 text-lg text-neutral-600 leading-relaxed">
              <p>
                My background spans sales, marketing, customer success, operations, HR, and consulting—from startups to Fortune 50 companies. Currently an MBA candidate at Berkeley Haas School of Business.
              </p>
              <p>
                Creator of <strong className="text-neutral-900">OFF ALGO</strong>, where I explore attention, behavior, and curiosity beyond algorithms.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/alexbarra"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackClick('home', 'linkedin_button')}
                  className="flex items-center gap-2 px-5 py-2.5 text-neutral-700 hover:text-blue-600 bg-white border border-neutral-300 rounded-lg hover:border-blue-600 transition-all shadow-sm"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/alexbarra-hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackClick('home', 'github_button')}
                  className="flex items-center gap-2 px-5 py-2.5 text-neutral-700 hover:text-neutral-900 bg-white border border-neutral-300 rounded-lg hover:border-neutral-900 transition-all shadow-sm"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
                <a
                  href="https://nebula-lightning-ff3.notion.site/Barra-Ventures-278d423e383080599faae0e32b84dae8"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackClick('home', 'barra_ventures_button')}
                  className="flex items-center gap-2 px-5 py-2.5 text-neutral-700 hover:text-neutral-900 bg-white border border-neutral-300 rounded-lg hover:border-neutral-900 transition-all shadow-sm"
                >
                  <Briefcase className="w-5 h-5" />
                  Barra Ventures
                </a>
              </div>

              <div className="pt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white border border-neutral-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-sm font-semibold text-neutral-900 mb-3 uppercase tracking-wider flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Frontend
                    </h3>
                    <div className="space-y-2">
                      <div>
                        <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Web:</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {['React 18', 'Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'].map(tech => (
                            <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-md border border-blue-100">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">iOS:</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {['SwiftUI (iOS 17+)', 'Swift Charts'].map(tech => (
                            <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-md border border-blue-100">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-neutral-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-sm font-semibold text-neutral-900 mb-3 uppercase tracking-wider flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Backend
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {['Supabase (Postgres + Auth)', 'Prisma ORM', 'OpenAI API', 'Anthropic Claude API'].map(tech => (
                        <span key={tech} className="px-3 py-1 bg-green-50 text-green-700 text-sm rounded-md border border-green-100">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white border border-neutral-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-sm font-semibold text-neutral-900 mb-3 uppercase tracking-wider flex items-center gap-2">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                      iOS System Integrations
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {['SwiftData', 'EventKit'].map(tech => (
                        <span key={tech} className="px-3 py-1 bg-cyan-50 text-cyan-700 text-sm rounded-md border border-cyan-100">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white border border-neutral-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-sm font-semibold text-neutral-900 mb-3 uppercase tracking-wider flex items-center gap-2">
                      <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                      Authentication
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-amber-50 text-amber-700 text-sm rounded-md border border-amber-100">
                        Google OAuth (PKCE) via Supabase Auth
                      </span>
                    </div>
                  </div>

                  <div className="bg-white border border-neutral-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow md:col-span-2">
                    <h3 className="text-sm font-semibold text-neutral-900 mb-3 uppercase tracking-wider flex items-center gap-2">
                      <span className="w-2 h-2 bg-rose-500 rounded-full"></span>
                      Deployment
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {['Vercel (Web)', 'Supabase (Backend)', 'iOS App Store / TestFlight'].map(tech => (
                        <span key={tech} className="px-3 py-1 bg-rose-50 text-rose-700 text-sm rounded-md border border-rose-100">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
