// Fetches a private iCal URL server-side to bypass browser CORS restrictions.
// Called by the Calendar card in index.html via /.netlify/functions/calendar-proxy?url=...

exports.handler = async (event) => {
  const url = event.queryStringParameters?.url;

  if (!url) {
    return { statusCode: 400, body: 'Missing url parameter' };
  }

  // Validate URL is http/https
  try {
    const parsed = new URL(url);
    if (!['http:', 'https:'].includes(parsed.protocol)) {
      return { statusCode: 403, body: 'Only http/https URLs are allowed' };
    }
  } catch {
    return { statusCode: 400, body: 'Invalid URL' };
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      return { statusCode: response.status, body: `Upstream error: ${response.status}` };
    }
    const text = await response.text();
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/calendar; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
      },
      body: text,
    };
  } catch (err) {
    return { statusCode: 500, body: err.message };
  }
};