import { supabase } from './supabase';

let sessionId: string | null = null;

function getSessionId(): string {
  if (!sessionId) {
    sessionId = sessionStorage.getItem('analytics_session_id');
    if (!sessionId) {
      sessionId = crypto.randomUUID();
      sessionStorage.setItem('analytics_session_id', sessionId);
    }
  }
  return sessionId;
}

export async function trackEvent(
  eventType: string,
  page: string,
  eventData?: Record<string, any>
) {
  try {
    await supabase.from('analytics_events').insert({
      event_type: eventType,
      event_data: eventData || {},
      page,
      session_id: getSessionId(),
      user_agent: navigator.userAgent,
      referrer: document.referrer || null,
    });
  } catch (error) {
    console.error('Analytics tracking error:', error);
  }
}

export async function trackPageView(page: string) {
  await trackEvent('page_view', page);
}

export async function trackClick(page: string, element: string, additionalData?: Record<string, any>) {
  await trackEvent('click', page, {
    element,
    ...additionalData,
  });
}

export async function getAnalyticsSummary() {
  const { data: totalViews } = await supabase
    .from('analytics_events')
    .select('*', { count: 'exact', head: true })
    .eq('event_type', 'page_view');

  const { data: totalClicks } = await supabase
    .from('analytics_events')
    .select('*', { count: 'exact', head: true })
    .eq('event_type', 'click');

  const { data: uniqueSessions } = await supabase
    .from('analytics_events')
    .select('session_id')
    .eq('event_type', 'page_view');

  const uniqueSessionCount = uniqueSessions
    ? new Set(uniqueSessions.map(s => s.session_id)).size
    : 0;

  const { data: pageViews } = await supabase
    .from('analytics_events')
    .select('page')
    .eq('event_type', 'page_view');

  const pageViewCounts: Record<string, number> = {};
  pageViews?.forEach(pv => {
    pageViewCounts[pv.page] = (pageViewCounts[pv.page] || 0) + 1;
  });

  const { data: recentEvents } = await supabase
    .from('analytics_events')
    .select('*')
    .order('timestamp', { ascending: false })
    .limit(50);

  return {
    totalPageViews: totalViews?.count || 0,
    totalClicks: totalClicks?.count || 0,
    uniqueSessions: uniqueSessionCount,
    pageViewsByPage: pageViewCounts,
    recentEvents: recentEvents || [],
  };
}
