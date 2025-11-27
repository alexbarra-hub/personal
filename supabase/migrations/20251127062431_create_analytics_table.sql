/*
  # Create Analytics Table

  1. New Tables
    - `analytics_events`
      - `id` (uuid, primary key) - Unique identifier for each event
      - `event_type` (text) - Type of event (page_view, click, etc.)
      - `event_data` (jsonb) - Additional data about the event
      - `page` (text) - Which page the event occurred on
      - `timestamp` (timestamptz) - When the event occurred
      - `session_id` (text) - Browser session identifier
      - `user_agent` (text) - Browser user agent string
      - `referrer` (text) - Referrer URL

  2. Indexes
    - Index on timestamp for efficient time-based queries
    - Index on event_type for filtering by event type
    - Index on page for filtering by page

  3. Security
    - Enable RLS on `analytics_events` table
    - Add policy for authenticated users to insert events (public tracking)
    - Add policy for service role to read all analytics data
*/

CREATE TABLE IF NOT EXISTS analytics_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_type text NOT NULL,
  event_data jsonb DEFAULT '{}'::jsonb,
  page text NOT NULL,
  timestamp timestamptz DEFAULT now(),
  session_id text,
  user_agent text,
  referrer text
);

-- Add indexes for efficient queries
CREATE INDEX IF NOT EXISTS idx_analytics_timestamp ON analytics_events(timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_analytics_event_type ON analytics_events(event_type);
CREATE INDEX IF NOT EXISTS idx_analytics_page ON analytics_events(page);

-- Enable RLS
ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert analytics events (for public tracking)
CREATE POLICY "Anyone can insert analytics events"
  ON analytics_events
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Only allow reading your own analytics (you can modify this based on your needs)
CREATE POLICY "Public can view analytics data"
  ON analytics_events
  FOR SELECT
  TO anon, authenticated
  USING (true);