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
    title: 'Rally',
    description: 'A productivity tool designed specifically for ADHD minds. Helps break down tasks, maintain focus, and build momentum with smart features tailored to neurodivergent thinking patterns.',
    tags: ['Web App', 'ADHD', 'Productivity'],
    liveUrl: 'https://rally-rouge.vercel.app/dashboard',
  },
  {
    id: 2,
    title: 'Tully',
    description: 'An AI-powered coaching application that provides personalized guidance and support. Built with modern web technologies to deliver an engaging user experience.',
    tags: ['Web App', 'AI', 'Coaching'],
    liveUrl: 'https://coachtully.lovable.app',
  },
  {
    id: 3,
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
    id: 4,
    title: 'Start Living',
    description: 'An interactive tool designed to help people take action and start living their best lives. Practical steps and inspiration for meaningful change.',
    tags: ['Web App', 'React', 'Personal Development'],
    liveUrl: 'https://startlivingnow.bolt.host/',
  },
  {
    id: 5,
    title: 'Buffer',
    description: 'Your social battery, tracked and understood. An iOS app that learns from your calendar history to predict which events will drain or energize you, surfaces insights about your patterns, and tells you when to protect your time.',
    tags: ['iOS', 'AI', 'Wellness'],
    liveUrl: 'https://bufferme.netlify.app',
  },
];

export default function Projects() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="min-h-screen pt-0 pb-20 px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center md:text-left mb-16">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group inline-flex items-center gap-3 px-6 py-3 bg-white hover:bg-neutral-100 border border-neutral-200 rounded-full mb-6 transition-all shadow-sm"
          >
            <Code2 className="w-5 h-5 text-neutral-700" />
            <span className="text-sm font-medium text-neutral-700">Vibe Coding Projects</span>
            <ChevronDown
              className={`w-5 h-5 text-neutral-700 transition-transform duration-300 ${
                isExpanded ? 'rotate-180' : ''
              }`}
            />
          </button>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Building Cool Things
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl md:mx-0">
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
              className="group bg-white border border-neutral-200 rounded-xl p-8 hover:shadow-lg hover:border-neutral-300 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-neutral-700 transition-colors">
                {project.title}
              </h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-neutral-100 text-neutral-700 text-sm rounded-lg font-medium"
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
                    Live Demo
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
