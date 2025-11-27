import { useState, useEffect } from 'react';
import { PenLine, Calendar, Clock, ArrowRight } from 'lucide-react';
import { supabase, BlogPost } from '../lib/supabase';
import BlogPostDetail from './BlogPostDetail';

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (selectedPost) {
    return <BlogPostDetail post={selectedPost} onBack={() => setSelectedPost(null)} />;
  }

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full mb-6">
            <PenLine className="w-5 h-5 text-slate-600" />
            <span className="text-sm font-medium text-slate-600">Thoughts & Learnings</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Insights & Perspectives
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Sharing thoughts on growth, strategy, and organizational excellence
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-slate-900"></div>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-600 text-lg">No posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl p-8 border border-slate-200 hover:border-slate-300 transition-all hover:shadow-lg cursor-pointer group"
                onClick={() => setSelectedPost(post)}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="inline-block px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium mb-3">
                      {post.category}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
                      {post.title}
                    </h3>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                </div>

                <p className="text-slate-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-6 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(post.created_at)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.read_time}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
