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
    title: 'Tully',
    description: 'An AI-powered coaching application that provides personalized guidance and support. Built with modern web technologies to deliver an engaging user experience.',
    tags: ['Web App', 'AI', 'Coaching'],
    liveUrl: 'https://coachtully.lovable.app',
  },
  {
    id: 2,
    title: 'OFF ALGO',
    description: 'A newsletter and content platform exploring ideas beyond the algorithm. Breaking free from digital echo chambers with thoughtful perspectives and authentic conversations.',
    tags: ['Newsletter', 'Content', 'Writing'],
    additionalLinks: [
      { url: 'https://offa1go.substack.com', label: 'Substack' },
      { url: 'https://offalgo.beehiiv.com', label: 'Beehiiv' },
      { url: 'https://offalgo.com', label: 'Website' },
    ],
  },
  {
    id: 3,
    title: 'Start Living',
    description: 'An interactive tool designed to help people take action and start living their best lives. Practical steps and inspiration for meaningful change.',
    tags: ['Web App', 'React', 'Personal Development'],
    liveUrl: 'https://startlivingnow.bolt.host/',
  },
];

export default function Projects() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div id="projects" className="min-h-screen pt-24 pb-20 px-6 md:px-12 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-normal text-neutral-900 mb-6 leading-tight">
            Selected Projects
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl">
            A collection of projects that combine creativity, problem-solving, and good vibes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white border border-neutral-200 rounded-2xl p-8 hover:shadow-xl hover:border-neutral-300 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-neutral-900 mb-3 group-hover:text-neutral-700 transition-colors">
                {project.title}
              </h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-neutral-100 text-neutral-700 text-sm rounded-full"
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
                    className="flex items-center gap-2 text-neutral-900 hover:text-neutral-600 font-medium transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-neutral-900 hover:text-neutral-600 font-medium transition-colors"
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
                    className="flex items-center gap-2 text-neutral-900 hover:text-neutral-600 font-medium transition-colors"
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
