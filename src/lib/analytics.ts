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

