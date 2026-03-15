import { ExternalLink, ArrowLeft } from 'lucide-react';
import { trackClick } from '../lib/analytics';

type Page = 'home' | 'about' | 'projects';

interface ProjectsProps {
  setCurrentPage: (page: Page) => void;
}

interface Project {
  id: number;
  title: string;
  description: string;
  techStack?: string[];
  liveUrl?: string;
  additionalLinks?: { url: string; label: string }[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Rally',
    description: 'Productivity tool designed for ADHD minds. Break down tasks, maintain focus, build momentum.',
    techStack: ['React', 'TypeScript', 'Supabase', 'Tailwind'],
    liveUrl: 'https://rally-rouge.vercel.app/dashboard',
  },
  {
    id: 2,
    title: 'Buffer',
    description: 'Your social battery, tracked. iOS app that predicts which events drain or energize you.',
    techStack: ['React', 'TypeScript', 'OpenAI', 'Tailwind'],
    liveUrl: 'https://bufferme.netlify.app',
  },
  {
    id: 3,
    title: 'Pattern & Signal',
    description: 'Complete playbook for building products with AI. Setup to launch, prompting to payments.',
    techStack: ['React', 'TypeScript', 'Supabase', 'Tailwind'],
    liveUrl: 'https://patternandsignal.netlify.app',
  },
  {
    id: 4,
    title: 'Coach Tully',
    description: 'AI-powered coaching application. Personalized guidance and support.',
    techStack: ['React', 'TypeScript', 'AI', 'Tailwind'],
    liveUrl: 'https://coachtully.lovable.app',
  },
  {
    id: 5,
    title: 'Start Living Now',
    description: 'Interactive tool to help people take action. Practical steps for meaningful change.',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind'],
    liveUrl: 'https://startlivingnow.bolt.host/',
  },
  {
    id: 6,
    title: 'OFF ALGO',
    description: 'Newsletter exploring ideas beyond the algorithm. Breaking free from digital echo chambers.',
    techStack: ['Substack', 'Beehiiv', 'Web'],
    additionalLinks: [
      { url: 'https://offa1go.substack.com', label: 'Substack' },
      { url: 'https://offalgo.beehiiv.com', label: 'Beehiiv' },
      { url: 'https://offalgo.com', label: 'Website' },
    ],
  },
];

export default function Projects({ setCurrentPage }: ProjectsProps) {
  return (
    <section className="w-full h-screen relative flex flex-col p-8 md:p-16 border-b-[4px] border-[var(--c-red)] overflow-y-auto" style={{ backgroundColor: 'var(--c-black)', color: 'var(--c-red)' }}>
      <button
        onClick={() => {
          trackClick('projects', 'back_to_home');
          setCurrentPage('home');
        }}
        className="absolute top-6 left-6 text-mono z-20 flex items-center gap-2 hover:underline transition-all"
        style={{ color: 'var(--c-teal)' }}
      >
        <ArrowLeft size={20} />
        BACK TO HOME
      </button>

      <div className="absolute top-6 right-6 text-mono text-right z-20" style={{ color: 'var(--c-teal)' }}>
        PORTFOLIO<br />
        00-02-A
      </div>

      <h2 className="huge-type distorted mb-16 mt-16 md:mt-0">
        PROJECTS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border-4 border-[var(--c-red)] p-10 hover:bg-[var(--c-red)] hover:text-[var(--c-black)] transition-all group"
          >
            <h3 className="text-mono text-4xl font-black mb-4">
              {project.title}
            </h3>
            <p className="text-mono text-lg mb-6 opacity-80 leading-relaxed">
              {project.description}
            </p>

            {project.techStack && (
              <div className="mb-6">
                <p className="text-mono text-sm font-black mb-2 opacity-60">TECH STACK</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-mono text-xs px-3 py-1 border-2 border-current"
                    >
                      {tech.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mono text-sm flex items-center gap-2 border-b-2 border-current pb-1 font-black"
                >
                  <ExternalLink className="w-4 h-4" />
                  LIVE
                </a>
              )}
              {project.additionalLinks?.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mono text-sm flex items-center gap-2 border-b-2 border-current pb-1 font-black"
                >
                  <ExternalLink className="w-4 h-4" />
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
