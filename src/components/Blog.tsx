import { useState, useEffect } from 'react';
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

  if (selectedPost) {
    return <BlogPostDetail post={selectedPost} onBack={() => setSelectedPost(null)} />;
  }

  return (
    <section className="w-full h-screen relative flex flex-col p-8 md:p-16 border-b-[4px] border-[var(--c-red)] overflow-y-auto" style={{ backgroundColor: 'var(--c-white)', color: 'var(--c-black)' }}>
      <div className="absolute top-6 right-6 text-mono text-right z-20">
        THOUGHTS<br />
        ARCHIVE
      </div>

      <h2 className="huge-type mb-8" style={{ letterSpacing: '-0.05em' }}>
        BLOG
      </h2>

      {loading ? (
        <div className="text-mono text-center py-12">LOADING...</div>
      ) : posts.length === 0 ? (
        <div className="text-mono text-center py-12">NO POSTS YET. CHECK BACK SOON.</div>
      ) : (
        <div className="grid grid-cols-1 gap-4 relative z-10">
          {posts.map((post) => (
            <div
              key={post.id}
              className="border-2 border-[var(--c-black)] p-6 hover:bg-[var(--c-black)] hover:text-[var(--c-white)] transition-all cursor-pointer group"
              onClick={() => setSelectedPost(post)}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-mono text-xs mb-2 opacity-70">{post.category}</p>
                  <h3 className="text-mono text-xl font-black mb-2">
                    {post.title}
                  </h3>
                  <p className="text-mono text-sm mb-3 opacity-80">
                    {post.excerpt}
                  </p>
                  <p className="text-mono text-xs opacity-60">{post.read_time}</p>
                </div>
                <div className="text-mono text-2xl font-black">→</div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="absolute bottom-6 right-6 text-mono font-black z-20">END_SESSION</div>
    </section>
  );
}
