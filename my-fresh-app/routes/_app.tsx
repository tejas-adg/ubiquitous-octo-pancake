// This layout is automatically applied to all pages.
// When you create a new page like this:
/*
  // Example: /routes/about.tsx
  export default function AboutPage() {
    return (
      <div>About page content</div>  // This content will automatically be passed
    );                               // as the <Component /> in _app.tsx
  }
*/

// You don't need to wrap pages with the layout - Fresh does it automatically.
// The <Component /> below will be replaced with whatever page component is being rendered.

// This is a special layout file that doesn't have its own URL
// Files starting with underscore (_) are special files that don't create routes
// This file wraps all other pages and provides common layout/structure

import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/styles.css" />
        <title>New World Order</title>
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Red+Rose:wght@400;700&display=swap" />
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300..800&family=Red+Rose:wght@300..700&display=swap" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
