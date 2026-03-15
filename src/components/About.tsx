export default function About() {
  return (
    <section className="w-full min-h-screen relative flex flex-col p-8 md:p-16 border-b-[4px] border-[var(--c-red)] overflow-y-auto" style={{ backgroundColor: 'var(--c-teal)', color: 'var(--c-black)' }}>
      <div className="absolute top-6 right-6 text-mono text-right z-20" style={{ color: 'var(--c-red)' }}>
        ABOUT<br />
        00-03-A
      </div>

      <h2 className="huge-type distorted mb-8">
        ABOUT
      </h2>

      <div className="max-w-4xl space-y-8 relative z-10 mb-16">
        <div className="border-2 border-[var(--c-black)] p-8 bg-[var(--c-pink)]">
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

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <p className="text-mono font-black text-xl mb-1" style={{ color: 'var(--c-red)' }}>DELTA DENTAL OF CALIFORNIA</p>
                <p className="text-mono text-sm mb-2" style={{ color: 'var(--c-red)' }}>Senior Organizational Effectiveness Consultant</p>
                <p className="text-mono text-sm opacity-75" style={{ color: 'var(--c-red)' }}>Feb 2024 - Present</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-1">
                <p className="text-mono font-black text-xl mb-1" style={{ color: 'var(--c-red)' }}>BARRA CONSULTING</p>
                <p className="text-mono text-sm mb-2" style={{ color: 'var(--c-red)' }}>Founder & Principal Consultant</p>
                <p className="text-mono text-sm opacity-75" style={{ color: 'var(--c-red)' }}>Feb 2024 - Present</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-1">
                <p className="text-mono font-black text-xl mb-1" style={{ color: 'var(--c-red)' }}>PROPELLER CONSULTING</p>
                <p className="text-mono text-sm mb-2" style={{ color: 'var(--c-red)' }}>Management Consultant</p>
                <p className="text-mono text-sm opacity-75" style={{ color: 'var(--c-red)' }}>Oct 2021 - Feb 2024</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-1">
                <p className="text-mono font-black text-xl mb-1" style={{ color: 'var(--c-red)' }}>LOCKHEED MARTIN</p>
                <p className="text-mono text-sm mb-2" style={{ color: 'var(--c-red)' }}>HR Transformation Program Manager</p>
                <p className="text-mono text-sm opacity-75" style={{ color: 'var(--c-red)' }}>Oct 2016 - Oct 2021</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-1">
                <p className="text-mono font-black text-xl mb-1" style={{ color: 'var(--c-red)' }}>SIKORSKY AIRCRAFT</p>
                <p className="text-mono text-sm mb-2" style={{ color: 'var(--c-red)' }}>HR Business Partner</p>
                <p className="text-mono text-sm opacity-75" style={{ color: 'var(--c-red)' }}>Jul 2013 - Oct 2016</p>
              </div>
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
              href="mailto:alex.h.barra@gmail.com"
              className="text-mono px-6 py-3 border-2 border-[var(--c-red)] bg-[var(--c-red)] text-[var(--c-pink)] hover:bg-transparent hover:text-[var(--c-red)] transition-all"
            >
              EMAIL
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
