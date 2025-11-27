import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { BlogPost } from '../lib/supabase';

interface BlogPostDetailProps {
  post: BlogPost;
  onBack: () => void;
}

export default function BlogPostDetail({ post, onBack }: BlogPostDetailProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Thoughts</span>
        </button>

        <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium mb-4">
            {post.category}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-slate-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{formatDate(post.created_at)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{post.read_time}</span>
            </div>
          </div>
        </div>

        <div className="prose prose-lg prose-slate max-w-none">
          {post.content.split('\n').map((paragraph, index) => (
            paragraph.trim() ? (
              <p key={index} className="mb-4 text-slate-700 leading-relaxed">
                {paragraph}
              </p>
            ) : null
          ))}
        </div>
      </div>
    </div>
  );
}
