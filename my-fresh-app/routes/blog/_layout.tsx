// This layout ONLY affects pages under /blog/
// It will be wrapped by _app.tsx automatically
import { PageProps } from "$fresh/server.ts";

export default function BlogLayout({ Component }: PageProps) {
  return (
    <div class="blog-specific-wrapper">
      <nav>Blog Menu</nav>
      <main>
        <Component /> {/* This is where your blog pages appear */}
      </main>
      <aside>Blog Sidebar</aside>
    </div>
  );
}
