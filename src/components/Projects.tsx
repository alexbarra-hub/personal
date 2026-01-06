import { useState } from 'react';
import { Code2, ExternalLink, Github, ChevronDown } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  additionalLinks?: { url: string; label: string }[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'OFF ALGO',
    description: 'A newsletter and content platform exploring ideas beyond the algorithm. Breaking free from digital echo chambers with thoughtful perspectives and authentic conversations.',
    tags: ['Newsletter', 'Content', 'Writing'],
    additionalLinks: [
      { url: 'https://offa1go.substack.com', label: 'Substack' },
      { url: 'https://offalgo.beehiiv.com', label: 'Beehiiv' },
      { url: 'https://offalgo.com', label: 'Website' },
    ],
  },
];

export default function Projects() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="min-h-screen pt-0 pb-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center md:text-left mb-16">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group inline-flex items-center gap-3 px-6 py-3 bg-slate-100 hover:bg-slate-200 rounded-full mb-6 transition-all"
          >
            <Code2 className="w-5 h-5 text-slate-600" />
            <span className="text-sm font-medium text-slate-600">Vibe Coding Projects</span>
            <ChevronDown
              className={`w-5 h-5 text-slate-600 transition-transform duration-300 ${
                isExpanded ? 'rotate-180' : ''
              }`}
            />
          </button>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Building Cool Things
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl md:mx-0">
            A collection of projects that combine creativity, problem-solving, and good vibes
          </p>
        </div>

        <div
          className={`grid md:grid-cols-2 gap-8 transition-all duration-500 overflow-hidden ${
            isExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:border-slate-300 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-lg font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-900 hover:text-slate-600 font-medium transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-900 hover:text-slate-600 font-medium transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                )}
                {project.additionalLinks?.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-900 hover:text-slate-600 font-medium transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
