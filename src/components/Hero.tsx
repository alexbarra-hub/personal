import { Linkedin, FileText, ChevronDown } from 'lucide-react';
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
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4 leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600">Alex</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 font-medium">
                I help teams and businesses grow
              </p>
            </div>

            <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
              <p>
                My experience spans <strong>sales, marketing, customer success, operations, HR, and management consulting</strong>,
                supporting organizations from pre-seed startups to Fortune 50 companies.
              </p>
              <p>
                I've led org designs, operating model improvements, and large-scale transformations across tech, product,
                and go-to-market teams.
              </p>
              <p>
                I'm currently an <strong>MBA candidate at Berkeley Haas</strong>, focused on growth, strategy,
                and building high-performing organizations.
              </p>

              <div className="pt-4 flex flex-col items-center md:items-start gap-4">
                <div className="flex items-center gap-4">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
