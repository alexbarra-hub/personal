/*
  # Update Blog Posts RLS Policies for Public Admin Access

  1. Changes
    - Drop all existing policies
    - Add new policies allowing public access for admin operations
    - Allow anyone to view all posts (published or draft)
    
  2. Security Notes
    - This allows anyone to manage blog posts (suitable for personal site)
    - For production with multiple users, implement proper authentication
    - Admin interface should be password-protected at application level if needed
*/

DROP POLICY IF EXISTS "Anyone can view published posts" ON blog_posts;
DROP POLICY IF EXISTS "Authenticated users can view all posts" ON blog_posts;
DROP POLICY IF EXISTS "Authenticated users can insert posts" ON blog_posts;
DROP POLICY IF EXISTS "Authenticated users can update posts" ON blog_posts;
DROP POLICY IF EXISTS "Authenticated users can delete posts" ON blog_posts;

CREATE POLICY "Public can view all posts"
  ON blog_posts FOR SELECT
  USING (true);

CREATE POLICY "Public can insert posts"
  ON blog_posts FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Public can update posts"
  ON blog_posts FOR UPDATE
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Public can delete posts"
  ON blog_posts FOR DELETE
  USING (true);