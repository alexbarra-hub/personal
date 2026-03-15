import { trackClick } from '../lib/analytics';
import { ArrowLeft } from 'lucide-react';

type Page = 'home' | 'about' | 'projects';

interface AboutProps {
  setCurrentPage: (page: Page) => void;
}

export default function About({ setCurrentPage }: AboutProps) {
  return (
    <section className="w-full min-h-screen relative flex flex-col p-8 md:p-16 border-b-[4px] border-[var(--c-red)] overflow-y-auto" style={{ backgroundColor: 'var(--c-teal)', color: 'var(--c-black)' }}>
      <button
        onClick={() => {
          trackClick('about', 'back_to_home');
          setCurrentPage('home');
        }}
        className="absolute top-6 left-6 text-mono z-20 flex items-center gap-2 hover:underline transition-all"
        style={{ color: 'var(--c-red)' }}
      >
        <ArrowLeft size={20} />
        BACK TO HOME
      </button>

      <div className="absolute top-6 right-6 text-mono text-right z-20" style={{ color: 'var(--c-red)' }}>
        ABOUT<br />
        00-03-A
      </div>

      <h2 className="huge-type distorted mb-8">
        ABOUT
      </h2>

      <div className="max-w-6xl mx-auto space-y-8 relative z-10 mb-16">
        <div className="border-2 border-[var(--c-black)] p-8 bg-[var(--c-pink)] grid md:grid-cols-[300px,1fr] gap-8 items-start">
          <div className="relative">
            <div className="border-4 border-[var(--c-red)] overflow-hidden">
              <img
                src="/alexbarra.jpg"
                alt="Alex Barra"
                className="w-full h-auto block"
                style={{ filter: 'contrast(1.1) saturate(1.1)' }}
              />
            </div>
          </div>
          <div>
            <h3 className="text-mono text-3xl font-black mb-4" style={{ color: 'var(--c-red)' }}>
              WHO I AM
            </h3>
            <p className="text-mono text-lg leading-relaxed mb-4" style={{ color: 'var(--c-red)' }}>
              I'm a strategic advisor and consultant specializing in organizational effectiveness, change management, and early-stage venture building. Currently pursuing my MBA at UC Berkeley (Expected 2028), I help organizations transform while building sustainable startups.
            </p>
            <p className="text-mono text-lg leading-relaxed" style={{ color: 'var(--c-red)' }}>
              With expertise spanning organizational design, change management, and product strategy, I bridge the gap between business transformation and hands-on execution.
            </p>
          </div>
        </div>

        <div className="border-2 border-[var(--c-black)] p-8 bg-[var(--c-pink)]">
          <h3 className="text-mono text-3xl font-black mb-4" style={{ color: 'var(--c-red)' }}>
            WHAT I DO
          </h3>
          <p className="text-mono text-lg leading-relaxed mb-4" style={{ color: 'var(--c-red)' }}>
            My work spans organizational transformation and venture building:
          </p>
          <ul className="text-mono text-lg space-y-2 list-none" style={{ color: 'var(--c-red)' }}>
            <li>→ Organizational effectiveness & change management</li>
            <li>→ Strategic planning & operating model design</li>
            <li>→ Early-stage venture advisory & market validation</li>
            <li>→ Workshop facilitation & stakeholder management</li>
            <li>→ Data-driven decision making & analytics</li>
          </ul>
        </div>

        <div className="border-2 border-[var(--c-black)] p-8 bg-[var(--c-pink)]">
          <h3 className="text-mono text-3xl font-black mb-6" style={{ color: 'var(--c-red)' }}>
            EXPERIENCE
          </h3>

          <div className="space-y-8">
            <div>
              <div className="flex items-start gap-4 mb-3">
                <div className="flex-1">
                  <p className="text-mono font-black text-xl mb-1" style={{ color: 'var(--c-red)' }}>DELTA DENTAL OF CALIFORNIA</p>
                  <p className="text-mono text-sm mb-1" style={{ color: 'var(--c-red)' }}>Senior Organizational Effectiveness Consultant (Tech & Quality)</p>
                  <p className="text-mono text-sm opacity-75" style={{ color: 'var(--c-red)' }}>Feb 2024 - Present</p>
                </div>
              </div>
              <ul className="text-mono text-xs space-y-1 list-none ml-2" style={{ color: 'var(--c-red)' }}>
                <li>→ Business partner to SVP & VP clients in Technology & Quality organizations</li>
                <li>→ Facilitated organizational design and operating model discussions with senior leadership</li>
                <li>→ Delivered change management for enterprise tech transformations (Oracle Redwood, Atlassian Cloud Migration)</li>
                <li>→ Created PowerBI dashboards for workforce planning insights</li>
              </ul>
            </div>

            <div>
              <div className="flex items-start gap-4 mb-3">
                <div className="flex-1">
                  <p className="text-mono font-black text-xl mb-1" style={{ color: 'var(--c-red)' }}>BARRA CONSULTING</p>
                  <p className="text-mono text-sm mb-1" style={{ color: 'var(--c-red)' }}>Founder & Principal Consultant</p>
                  <p className="text-mono text-sm opacity-75" style={{ color: 'var(--c-red)' }}>Feb 2024 - Present</p>
                </div>
              </div>
              <ul className="text-mono text-xs space-y-1 list-none ml-2" style={{ color: 'var(--c-red)' }}>
                <li>→ Strategic advisor for early-stage startups and non-profits</li>
                <li>→ Conducted customer discovery and go-to-market strategies for pre-seed startups (Beauty, EdTech, HRTech)</li>
                <li>→ Facilitated strategic planning workshops and created executable roadmaps</li>
                <li>→ Designed custom business tools including grant tracking, brand frameworks, and investor materials</li>
              </ul>
            </div>

            <div>
              <div className="flex items-start gap-4 mb-3">
                <div className="flex-1">
                  <p className="text-mono font-black text-xl mb-1" style={{ color: 'var(--c-red)' }}>PROPELLER CONSULTING</p>
                  <p className="text-mono text-sm mb-1" style={{ color: 'var(--c-red)' }}>Management Consultant</p>
                  <p className="text-mono text-sm opacity-75" style={{ color: 'var(--c-red)' }}>Oct 2021 - Feb 2024</p>
                </div>
              </div>
              <ul className="text-mono text-xs space-y-1 list-none ml-2" style={{ color: 'var(--c-red)' }}>
                <li>→ Built and launched new change management capability for Operational Excellence Office</li>
                <li>→ Supported multi-phased Change Management strategies for 5 major projects</li>
                <li>→ Facilitated workshops with 30+ Marketing, eCommerce and Tech employees</li>
                <li>→ Led team of 2 change management professionals</li>
              </ul>
            </div>

            <div>
              <div className="flex items-start gap-4 mb-3">
                <div className="flex-1">
                  <p className="text-mono font-black text-xl mb-1" style={{ color: 'var(--c-red)' }}>LOCKHEED MARTIN</p>
                  <p className="text-mono text-sm mb-1" style={{ color: 'var(--c-red)' }}>HR Transformation Program Manager & Talent Development Consultant</p>
                  <p className="text-mono text-sm opacity-75" style={{ color: 'var(--c-red)' }}>Oct 2016 - Oct 2021</p>
                </div>
              </div>
              <ul className="text-mono text-xs space-y-1 list-none ml-2" style={{ color: 'var(--c-red)' }}>
                <li>→ Led Space HR iLab transformation program supporting 200+ HR professionals</li>
                <li>→ Created learning & development strategy aligned to future state HR vision</li>
                <li>→ Co-created Agile-Change Management approach and trained 100+ professionals</li>
                <li>→ Facilitated talent reviews and organizational design workshops for 500+ Engineering & Technology employees</li>
              </ul>
            </div>

            <div>
              <div className="flex items-start gap-4 mb-3">
                <div className="flex-1">
                  <p className="text-mono font-black text-xl mb-1" style={{ color: 'var(--c-red)' }}>SIKORSKY AIRCRAFT</p>
                  <p className="text-mono text-sm mb-1" style={{ color: 'var(--c-red)' }}>HR Business Partner & Industrial Relations</p>
                  <p className="text-mono text-sm opacity-75" style={{ color: 'var(--c-red)' }}>Jul 2013 - Oct 2016</p>
                </div>
              </div>
              <ul className="text-mono text-xs space-y-1 list-none ml-2" style={{ color: 'var(--c-red)' }}>
                <li>→ Led HR strategy for 150+ Operations employees across three organizations</li>
                <li>→ Partnered with Lockheed Martin HR for Sikorsky integration efforts</li>
                <li>→ Served as sole HR representative for 250+ employees at Shelton O&R facility</li>
                <li>→ Managed relationships with 1000+ bargaining unit workforce and Union officials</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-2 border-[var(--c-black)] p-8 bg-[var(--c-pink)]">
          <h3 className="text-mono text-3xl font-black mb-4" style={{ color: 'var(--c-red)' }}>
            EDUCATION & CERTIFICATIONS
          </h3>
          <div className="space-y-3">
            <div>
              <p className="text-mono font-black text-lg" style={{ color: 'var(--c-red)' }}>UC Berkeley, Haas School of Business</p>
              <p className="text-mono text-sm" style={{ color: 'var(--c-red)' }}>MBA Candidate, Expected May 2028</p>
            </div>
            <div>
              <p className="text-mono font-black text-lg" style={{ color: 'var(--c-red)' }}>Cornell University</p>
              <p className="text-mono text-sm" style={{ color: 'var(--c-red)' }}>BS Industrial & Labor Relations, 2013</p>
            </div>
            <div className="pt-4">
              <p className="text-mono text-sm" style={{ color: 'var(--c-red)' }}>
                Prosci Change Management • Enterprise Design Thinking • Culture Design • Lean Change Agent
              </p>
            </div>
          </div>
        </div>

        <div className="border-2 border-[var(--c-black)] p-8 bg-[var(--c-pink)]">
          <h3 className="text-mono text-3xl font-black mb-6" style={{ color: 'var(--c-red)' }}>
            LET'S CONNECT
          </h3>
          <p className="text-mono text-lg leading-relaxed mb-6" style={{ color: 'var(--c-red)' }}>
            Interested in working together on organizational transformation or early-stage ventures? I'd love to connect.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/alexbarra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mono px-6 py-3 border-2 border-[var(--c-red)] bg-[var(--c-red)] text-[var(--c-pink)] hover:bg-transparent hover:text-[var(--c-red)] transition-all"
            >
              LINKEDIN
            </a>
            <a
              href="https://github.com/alexbarra-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mono px-6 py-3 border-2 border-[var(--c-red)] bg-[var(--c-red)] text-[var(--c-pink)] hover:bg-transparent hover:text-[var(--c-red)] transition-all"
            >
              GITHUB
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 text-mono font-black z-20" style={{ color: 'var(--c-black)' }}>[A]</div>
    </section>
  );
}
