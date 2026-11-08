export default {
  async fetch(request, env) {
    const requestUrl = new URL(request.url);
    if (requestUrl.pathname === '/api/video-download') {
      if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: corsHeaders() });
      if (request.method !== 'GET') return new Response('Method not allowed', { status: 405 });
      const target = requestUrl.searchParams.get('url');
      if (!target) return json({ error: 'Missing url parameter' }, 400);
      let parsed;
      try { parsed = new URL(target); } catch { return json({ error: 'Invalid url' }, 400); }
      const allowedHosts = new Set(['platform-outputs.agnes-ai.space', 'platform-outputs.agnes-ai.com']);
      if (parsed.protocol !== 'https:' || parsed.port || !allowedHosts.has(parsed.hostname)) return json({ error: 'Host not allowed' }, 403);
      try {
        const upstream = await fetch(parsed, { headers: { 'User-Agent': 'yugank-studio/1.0' } });
        if (!upstream.ok) return new Response(JSON.stringify({ error: `Upstream ${upstream.status}` }), { status: upstream.status, headers: { ...corsHeaders(), 'Content-Type': 'application/json' } });
        const headers = new Headers(corsHeaders());
        headers.set('Cache-Control', 'public, max-age=86400');
        for (const name of ['Content-Type', 'Content-Length']) {
          const value = upstream.headers.get(name);
          if (value) headers.set(name, value);
        }
        return new Response(upstream.body, { status: 200, headers });
      } catch (error) {
        return new Response(JSON.stringify({ error: 'Fetch failed', detail: String(error) }), { status: 502, headers: { ...corsHeaders(), 'Content-Type': 'application/json' } });
      }
    }
    return env.ASSETS.fetch(request);
  }
};
function corsHeaders() {
  return { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, OPTIONS', 'Access-Control-Allow-Headers': '*', 'Access-Control-Max-Age': '86400' };
}
function json(body, status) {
  return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json', ...corsHeaders() } });
}
