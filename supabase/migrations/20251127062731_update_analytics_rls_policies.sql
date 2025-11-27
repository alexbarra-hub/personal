/*
  # Update Analytics RLS Policies

  1. Changes
    - Drop existing public read policy for analytics_events
    - Keep the public insert policy (for tracking to work)
    - Analytics data can only be inserted by anyone (for tracking)
    - Analytics data cannot be read by the public (admin access only via direct URL access)

  2. Security
    - Maintains public insert access for tracking functionality
    - Removes public read access to analytics data
    - Admin access is controlled via application-level authentication
*/

-- Drop the existing public read policy
DROP POLICY IF EXISTS "Public can view analytics data" ON analytics_events;

-- Analytics data is now write-only for the public
-- Reading requires admin authentication at the application level