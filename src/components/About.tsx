export default function About() {
  return (
    <section className="w-full h-screen relative flex flex-col p-8 md:p-16 border-b-[4px] border-[var(--c-red)] overflow-y-auto" style={{ backgroundColor: 'var(--c-teal)', color: 'var(--c-black)' }}>
      <div className="absolute top-6 right-6 text-mono text-right z-20" style={{ color: 'var(--c-red)' }}>
        ABOUT<br />
        00-03-A
      </div>

      <h2 className="huge-type distorted mb-8">
        ABOUT
      </h2>

      <div className="max-w-3xl space-y-8 relative z-10">
        <div className="border-2 border-[var(--c-black)] p-8 bg-[var(--c-pink)]">
          <h3 className="text-mono text-3xl font-black mb-4" style={{ color: 'var(--c-red)' }}>
            WHO I AM
          </h3>
          <p className="text-mono text-lg leading-relaxed" style={{ color: 'var(--c-red)' }}>
            I'm a product builder focused on early-stage ventures that help people think better, live better, and make better decisions. I combine product strategy, hands-on development, and entrepreneurial thinking to bring ideas to life.
          </p>
        </div>

        <div className="border-2 border-[var(--c-black)] p-8 bg-[var(--c-pink)]">
          <h3 className="text-mono text-3xl font-black mb-4" style={{ color: 'var(--c-red)' }}>
            WHAT I DO
          </h3>
          <p className="text-mono text-lg leading-relaxed mb-4" style={{ color: 'var(--c-red)' }}>
            I build products from zero to one. My work spans across:
          </p>
          <ul className="text-mono text-lg space-y-2 list-none" style={{ color: 'var(--c-red)' }}>
            <li>→ Product strategy and design</li>
            <li>→ Full-stack development</li>
            <li>→ Early-stage venture building</li>
            <li>→ AI-powered applications</li>
          </ul>
        </div>

        <div className="border-2 border-[var(--c-black)] p-8 bg-[var(--c-pink)]">
          <h3 className="text-mono text-3xl font-black mb-4" style={{ color: 'var(--c-red)' }}>
            MY APPROACH
          </h3>
          <p className="text-mono text-lg leading-relaxed" style={{ color: 'var(--c-red)' }}>
            I believe the best products emerge from deep understanding of human needs combined with thoughtful execution. I focus on solving real problems, shipping quickly, and iterating based on feedback. Every project is an opportunity to learn and build something meaningful.
          </p>
        </div>

        <div className="border-2 border-[var(--c-black)] p-8 bg-[var(--c-pink)]">
          <h3 className="text-mono text-3xl font-black mb-4" style={{ color: 'var(--c-red)' }}>
            LET'S CONNECT
          </h3>
          <p className="text-mono text-lg leading-relaxed mb-6" style={{ color: 'var(--c-red)' }}>
            Interested in working together? Have a project idea? Want to chat about product development or early-stage ventures? I'd love to hear from you.
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
