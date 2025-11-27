import { PenLine, Calendar, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Coming Soon',
    excerpt: 'Thoughts on growth, strategy, and building high-performing teams. Stay tuned for insights from the journey.',
    date: 'TBD',
    readTime: '5 min read',
    category: 'Strategy',
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen py-20 px-6 bg-gradient-to-br from-slate-50 to-white flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full mb-8">
          <PenLine className="w-5 h-5 text-slate-600" />
          <span className="text-sm font-medium text-slate-600">Thoughts & Learnings</span>
        </div>
        <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
          Coming Soon
        </h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Sharing perspectives on growth, strategy, and organizational excellence
        </p>
      </div>
    </div>
  );
}
