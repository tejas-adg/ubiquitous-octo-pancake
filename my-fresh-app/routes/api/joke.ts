// This is an API endpoint, accessible at: https://beamcampus.com/api/joke
// The URL path is determined by:
// - Files in the /routes directory map to URLs
// - The file path relative to /routes becomes the URL path
// - So /routes/api/joke.ts maps to /api/joke

// This endpoint is accessible through:
// 1. Browser direct visit: https://beamcampus.com/api/joke
// 2. Fetch API: await fetch('https://beamcampus.com/api/joke').then(r => r.text())
// 3. curl: curl https://beamcampus.com/api/joke
//
// The 'api' folder name is just a convention - it doesn't restrict access methods.
// Since we return plain text with new Response(body), browsers can display it directly.
// If we returned JSON, browsers would show the JSON text.

import { FreshContext } from "$fresh/server.ts";

// Jokes courtesy of https://punsandoneliners.com/randomness/programmer-jokes/
const JOKES = [
  "Why do Java developers often wear glasses? They can't C#.",
  "A SQL query walks into a bar, goes up to two tables and says “can I join you?”",
  "Wasn't hard to crack Forrest Gump's password. 1forrest1.",
  "I love pressing the F5 key. It's refreshing.",
  "Called IT support and a chap from Australia came to fix my network connection.  I asked “Do you come from a LAN down under?”",
  "There are 10 types of people in the world. Those who understand binary and those who don't.",
  "Why are assembly programmers often wet? They work below C level.",
  "My favourite computer based band is the Black IPs.",
  "What programme do you use to predict the music tastes of former US presidential candidates? An Al Gore Rhythm.",
  "An SEO expert walked into a bar, pub, inn, tavern, hostelry, public house.",
];

export const handler = (_req: Request, _ctx: FreshContext): Response => {
  const randomIndex = Math.floor(Math.random() * JOKES.length);
  const body = JOKES[randomIndex];

  /* Option 1: Return HTML content
  const html = `
    <html>
      <body>
        <div style="text-align: center; padding: 20px;">
          <h1>${body}</h1>
          <button onclick="location.reload()">New Joke</button>
        </div>
      </body>
    </html>
  `;
  
  return new Response(html, {
    headers: {
      "content-type": "text/html",
    },
  });
  */

  return new Response(body);
};
