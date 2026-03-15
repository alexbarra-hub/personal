import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  liveUrl?: string;
  additionalLinks?: { url: string; label: string }[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Rally',
    description: 'Productivity tool designed for ADHD minds. Break down tasks, maintain focus, build momentum.',
    liveUrl: 'https://rally-rouge.vercel.app/dashboard',
  },
  {
    id: 2,
    title: 'Buffer',
    description: 'Your social battery, tracked. iOS app that predicts which events drain or energize you.',
    liveUrl: 'https://bufferme.netlify.app',
  },
  {
    id: 3,
    title: 'Pattern & Signal',
    description: 'Complete playbook for building products with AI. Setup to launch, prompting to payments.',
    liveUrl: 'https://patternandsignal.netlify.app',
  },
  {
    id: 4,
    title: 'Coach Tully',
    description: 'AI-powered coaching application. Personalized guidance and support.',
    liveUrl: 'https://coachtully.lovable.app',
  },
  {
    id: 5,
    title: 'Start Living Now',
    description: 'Interactive tool to help people take action. Practical steps for meaningful change.',
    liveUrl: 'https://startlivingnow.bolt.host/',
  },
  {
    id: 6,
    title: 'OFF ALGO',
    description: 'Newsletter exploring ideas beyond the algorithm. Breaking free from digital echo chambers.',
    additionalLinks: [
      { url: 'https://offa1go.substack.com', label: 'Substack' },
      { url: 'https://offalgo.beehiiv.com', label: 'Beehiiv' },
      { url: 'https://offalgo.com', label: 'Website' },
    ],
  },
];

export default function Projects() {
  return (
    <section className="w-full h-screen relative flex flex-col p-8 md:p-16 border-b-[4px] border-[var(--c-red)] overflow-y-auto" style={{ backgroundColor: 'var(--c-black)', color: 'var(--c-red)' }}>
      <div className="absolute top-6 right-6 text-mono text-right z-20" style={{ color: 'var(--c-teal)' }}>
        PORTFOLIO<br />
        00-02-A
      </div>

      <h2 className="huge-type distorted mb-8">
        PROJECTS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border-2 border-[var(--c-red)] p-6 hover:bg-[var(--c-red)] hover:text-[var(--c-black)] transition-all group"
          >
            <h3 className="text-mono text-2xl font-black mb-3">
              {project.title}
            </h3>
            <p className="text-mono text-sm mb-6 opacity-80">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mono text-xs flex items-center gap-2 border-b-2 border-current pb-1"
                >
                  <ExternalLink className="w-3 h-3" />
                  LIVE
                </a>
              )}
              {project.additionalLinks?.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mono text-xs flex items-center gap-2 border-b-2 border-current pb-1"
                >
                  <ExternalLink className="w-3 h-3" />
                  {link.label.toUpperCase()}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-6 right-6 text-mono font-black z-20" style={{ color: 'var(--c-red)' }}>[O]</div>
    </section>
  );
}
