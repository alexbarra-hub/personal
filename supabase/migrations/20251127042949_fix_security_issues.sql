/*
  # Fix Security Issues
  
  1. Remove unused index
    - Drop `idx_blog_posts_slug` since there's already a unique constraint on slug (blog_posts_slug_key)
    
  2. Fix function search path security
    - Alter `update_updated_at_column` function to set search_path, preventing search path hijacking
  
  ## Security Notes
  - The idx_blog_posts_slug index is redundant because blog_posts_slug_key already provides indexing on the slug column
  - Setting search_path on the function prevents malicious users from manipulating the search path to execute unexpected code
*/

-- Drop unused index (redundant with unique constraint)
DROP INDEX IF EXISTS idx_blog_posts_slug;

-- Fix function search_path security issue
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;