import { trackClick } from '../lib/analytics';
import { ArrowLeft, Briefcase, GraduationCap, Lightbulb, Target } from 'lucide-react';

type Page = 'home' | 'about' | 'projects';

interface AboutProps {
  setCurrentPage: (page: Page) => void;
}

export default function About({ setCurrentPage }: AboutProps) {
  return (
    <section className="w-full min-h-screen relative flex flex-col p-8 md:p-16 pb-24 border-b-[4px] border-[var(--c-red)]" style={{ backgroundColor: 'var(--c-pink)', color: 'var(--c-red)' }}>
      <button
        onClick={() => {
          trackClick('about', 'back_to_home');
          setCurrentPage('home');
        }}
        className="absolute top-6 left-6 text-mono z-20 flex items-center gap-2 hover:underline transition-all"
        style={{ color: 'var(--c-red)' }}
      >
        <ArrowLeft size={20} />
        BACK
      </button>

      <div className="absolute top-6 right-6 text-mono text-right z-20" style={{ color: 'var(--c-red)' }}>
        ABOUT<br />
        00-03-A
      </div>

      <div className="relative z-10 mt-16 mb-8">
        <h2 className="huge-type mb-4" style={{ color: 'var(--c-red)' }}>
          ABOUT
        </h2>
        <div className="h-1 w-32 mb-2" style={{ backgroundColor: 'var(--c-teal)' }}></div>
        <div className="h-1 w-24" style={{ backgroundColor: 'var(--c-red)' }}></div>
      </div>

      <div className="max-w-6xl mx-auto space-y-6 relative z-10 mb-16">
        <div className="border-4 border-[var(--c-red)] p-0 bg-[var(--c-black)] grid md:grid-cols-[350px,1fr] gap-0 overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--c-teal)] to-transparent opacity-20 z-10"></div>
            <img
              src="/alexbarra.jpg"
              alt="Alex Barra"
              className="w-full h-full object-cover block"
              style={{ filter: 'contrast(1.15) saturate(1.2)' }}
            />
          </div>
          <div className="p-8 md:p-10 flex flex-col justify-center" style={{ backgroundColor: 'var(--c-black)' }}>
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb size={32} style={{ color: 'var(--c-teal)' }} />
              <h3 className="text-mono text-3xl font-black" style={{ color: 'var(--c-red)' }}>
                WHO I AM
              </h3>
            </div>
            <p className="text-mono text-lg leading-relaxed mb-4" style={{ color: 'var(--c-white)', fontWeight: '500' }}>
              I'm a strategic advisor and consultant specializing in organizational effectiveness, change management, and early-stage venture building. Currently pursuing my MBA at UC Berkeley (Expected 2028), I help organizations transform while building sustainable startups.
            </p>
            <p className="text-mono text-lg leading-relaxed" style={{ color: 'var(--c-white)', fontWeight: '500' }}>
              With expertise spanning organizational design, change management, and product strategy, I bridge the gap between business transformation and hands-on execution.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-4 border-[var(--c-red)] p-8 bg-[var(--c-black)] transform hover:translate-y-[-4px] transition-transform duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10" style={{ color: 'var(--c-teal)' }}>
              <Target size={128} />
            </div>
            <div className="flex items-center gap-3 mb-6">
              <Target size={28} style={{ color: 'var(--c-teal)' }} />
              <h3 className="text-mono text-2xl font-black" style={{ color: 'var(--c-red)' }}>
                WHAT I DO
              </h3>
            </div>
            <ul className="text-mono text-base space-y-3 list-none relative z-10" style={{ color: 'var(--c-white)', fontWeight: '500' }}>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--c-teal)' }}>→</span>
                <span>Organizational effectiveness & change management</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--c-teal)' }}>→</span>
                <span>Strategic planning & operating model design</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--c-teal)' }}>→</span>
                <span>Early-stage venture advisory & market validation</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--c-teal)' }}>→</span>
                <span>Workshop facilitation & stakeholder management</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--c-teal)' }}>→</span>
                <span>Data-driven decision making & analytics</span>
              </li>
            </ul>
          </div>

          <div className="border-4 border-[var(--c-red)] p-8 bg-[var(--c-black)] transform hover:translate-y-[-4px] transition-transform duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10" style={{ color: 'var(--c-teal)' }}>
              <GraduationCap size={128} />
            </div>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap size={28} style={{ color: 'var(--c-teal)' }} />
              <h3 className="text-mono text-2xl font-black" style={{ color: 'var(--c-red)' }}>
                EDUCATION
              </h3>
            </div>
            <div className="space-y-4 relative z-10">
              <div>
                <p className="text-mono font-black text-lg mb-1" style={{ color: 'var(--c-white)' }}>UC Berkeley, Haas</p>
                <p className="text-mono text-base" style={{ color: 'var(--c-teal)', fontWeight: '500' }}>MBA Candidate, Expected 2028</p>
              </div>
              <div>
                <p className="text-mono font-black text-lg mb-1" style={{ color: 'var(--c-white)' }}>Cornell University</p>
                <p className="text-mono text-base" style={{ color: 'var(--c-teal)', fontWeight: '500' }}>BS Industrial & Labor Relations, 2013</p>
              </div>
              <div className="pt-2 border-t-2" style={{ borderColor: 'var(--c-red)' }}>
                <p className="text-mono text-sm" style={{ color: 'var(--c-white)', fontWeight: '500' }}>
                  Prosci Change Management • Enterprise Design Thinking • Culture Design • Lean Change Agent
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-4 border-[var(--c-red)] p-8 md:p-10 bg-[var(--c-black)]">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase size={32} style={{ color: 'var(--c-teal)' }} />
            <h3 className="text-mono text-3xl font-black" style={{ color: 'var(--c-red)' }}>
              EXPERIENCE
            </h3>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 pl-6 pb-6 relative" style={{ borderColor: 'var(--c-teal)' }}>
              <div className="absolute left-[-8px] top-0 w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--c-teal)' }}></div>
              <div className="flex items-start gap-4 mb-3">
                <div className="flex-1">
                  <p className="text-mono font-black text-lg mb-1" style={{ color: 'var(--c-red)' }}>DELTA DENTAL OF CALIFORNIA</p>
                  <p className="text-mono text-sm mb-1" style={{ color: 'var(--c-white)' }}>Senior Organizational Effectiveness Consultant (Tech & Quality)</p>
                  <p className="text-mono text-xs" style={{ color: 'var(--c-teal)' }}>Feb 2024 - Present</p>
                </div>
              </div>
              <ul className="text-mono text-sm space-y-2 list-none mt-3" style={{ color: 'var(--c-white)', fontWeight: '500' }}>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--c-teal)' }}>•</span>
                  <span>Business partner to SVP & VP clients in Technology & Quality organizations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--c-teal)' }}>•</span>
                  <span>Facilitated organizational design and operating model discussions with senior leadership</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--c-teal)' }}>•</span>
                  <span>Delivered change management for enterprise tech transformations (Oracle Redwood, Atlassian Cloud Migration)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--c-teal)' }}>•</span>
                  <span>Created PowerBI dashboards for workforce planning insights</span>
                </li>
              </ul>
            </div>

            <div className="border-l-4 pl-6 pb-6 relative" style={{ borderColor: 'var(--c-teal)' }}>
              <div className="absolute left-[-8px] top-0 w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--c-teal)' }}></div>
              <div className="flex items-start gap-4 mb-3">
                <div className="flex-1">
                  <p className="text-mono font-black text-lg mb-1" style={{ color: 'var(--c-red)' }}>BARRA CONSULTING</p>
                  <p className="text-mono text-sm mb-1" style={{ color: 'var(--c-white)' }}>Founder & Principal Consultant</p>
                  <p className="text-mono text-xs" style={{ color: 'var(--c-teal)' }}>Feb 2024 - Present</p>
                </div>
              </div>
              <ul className="text-mono text-sm space-y-2 list-none mt-3" style={{ color: 'var(--c-white)', fontWeight: '500' }}>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--c-teal)' }}>•</span>
                  <span>Strategic advisor for early-stage startups and non-profits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--c-teal)' }}>•</span>
                  <span>Conducted customer discovery and go-to-market strategies for pre-seed startups (Beauty, EdTech, HRTech)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--c-teal)' }}>•</span>
                  <span>Facilitated strategic planning workshops and created executable roadmaps</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--c-teal)' }}>•</span>
                  <span>Designed custom business tools including grant tracking, brand frameworks, and investor materials</span>
                </li>
              </ul>
            </div>

            <div className="border-l-4 pl-6 pb-6 relative" style={{ borderColor: 'var(--c-teal)' }}>
              <div className="absolute left-[-8px] top-0 w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--c-teal)' }}></div>
              <div className="flex items-start gap-4 mb-3">
                <div className="flex-1">
                  <p className="text-mono font-black text-lg mb-1" style={{ color: 'var(--c-red)' }}>PROPELLER CONSULTING</p>
                  <p className="text-mono text-sm mb-1" style={{ color: 'var(--c-white)' }}>Management Consultant</p>
                  <p className="text-mono text-xs" style={{ color: 'var(--c-teal)' }}>Oct 2021 - Feb 2024</p>
                </div>
              </div>
              <ul className="text-mono text-sm space-y-2 list-none mt-3" style={{ color: 'var(--c-white)', fontWeight: '500' }}>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--c-teal)' }}>•</span>
                  <span>Built and launched new change management capability for Operational Excellence Office</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--c-teal)' }}>•</span>
                  <span>Supported multi-phased Change Management strategies for 5 major projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--c-teal)' }}>•</span>
                  <span>Facilitated workshops with 30+ Marketing, eCommerce and Tech employees</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--c-teal)' }}>•</span>
                  <span>Led team of 2 change management professionals</span>
                </li>
              </ul>
            </div>

            <div className="border-l-4 pl-6 pb-6 relative" style={{ borderColor: 'var(--c-teal)' }}>
              <div className="absolute left-[-8px] top-0 w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--c-teal)' }}></div>
              <div className="flex items-start gap-4 mb-3">
                <div className="flex-1">
                  <p className="text-mono font-black text-lg mb-1" style={{ color: 'var(--c-red)' }}>LOCKHEED MARTIN</p>
                  <p className="text-mono text-sm mb-1" style={{ color: 'var(--c-white)' }}>HR Transformation Program Manager & Talent Development Consultant</p>
                  <p className="text-mono text-xs" style={{ color: 'var(--c-teal)' }}>Oct 2016 - Oct 2021</p>
                </div>
              </div>
              <ul className="text-mono text-sm space-y-2 list-none mt-3" style={{ color: 'var(--c-white)', fontWeight: '500' }}>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--c-teal)' }}>•</span>
                  <span>Led Space HR iLab transformation program supporting 200+ HR professionals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--c-teal)' }}>•</span>
                  <span>Created learning & development strategy aligned to future state HR vision</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--c-teal)' }}>•</span>
                  <span>Co-created Agile-Change Management approach and trained 100+ professionals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--c-teal)' }}>•</span>
                  <span>Facilitated talent reviews and organizational design workshops for 500+ Engineering & Technology employees</span>
                </li>
              </ul>
            </div>

            <div className="border-l-4 pl-6 relative" style={{ borderColor: 'var(--c-teal)' }}>
              <div className="absolute left-[-8px] top-0 w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--c-teal)' }}></div>
              <div className="flex items-start gap-4 mb-3">
                <div className="flex-1">
                  <p className="text-mono font-black text-lg mb-1" style={{ color: 'var(--c-red)' }}>SIKORSKY AIRCRAFT</p>
                  <p className="text-mono text-sm mb-1" style={{ color: 'var(--c-white)' }}>HR Business Partner & Industrial Relations</p>
                  <p className="text-mono text-xs" style={{ color: 'var(--c-teal)' }}>Jul 2013 - Oct 2016</p>
                </div>
              </div>
              <ul className="text-mono text-sm space-y-2 list-none mt-3" style={{ color: 'var(--c-white)', fontWeight: '500' }}>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--c-teal)' }}>•</span>
                  <span>Led HR strategy for 150+ Operations employees across three organizations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--c-teal)' }}>•</span>
                  <span>Partnered with Lockheed Martin HR for Sikorsky integration efforts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--c-teal)' }}>•</span>
                  <span>Served as sole HR representative for 250+ employees at Shelton O&R facility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--c-teal)' }}>•</span>
                  <span>Managed relationships with 1000+ bargaining unit workforce and Union officials</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-4 border-[var(--c-red)] p-8 md:p-10 bg-gradient-to-br from-[var(--c-black)] to-[var(--c-teal)] bg-opacity-10 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, var(--c-teal) 0, var(--c-teal) 1px, transparent 1px, transparent 10px)',
          }}></div>
          <div className="relative z-10">
            <h3 className="text-mono text-3xl font-black mb-6 text-center" style={{ color: 'var(--c-red)' }}>
              LET'S CONNECT
            </h3>
            <p className="text-mono text-lg leading-relaxed mb-8 text-center max-w-2xl mx-auto" style={{ color: 'var(--c-white)', fontWeight: '500' }}>
              Interested in working together on organizational transformation or early-stage ventures? I'd love to connect.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://www.linkedin.com/in/alexbarra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mono px-8 py-4 border-3 border-[var(--c-red)] bg-[var(--c-red)] text-[var(--c-black)] hover:bg-transparent hover:text-[var(--c-red)] transition-all font-black transform hover:scale-105"
              >
                LINKEDIN
              </a>
              <a
                href="https://github.com/alexbarra-hub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mono px-8 py-4 border-3 border-[var(--c-teal)] bg-[var(--c-teal)] text-[var(--c-black)] hover:bg-transparent hover:text-[var(--c-teal)] transition-all font-black transform hover:scale-105"
              >
                GITHUB
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 text-mono font-black z-20" style={{ color: 'var(--c-red)' }}>[A]</div>
    </section>
  );
}
