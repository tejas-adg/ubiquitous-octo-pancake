// WithinPage.tsx
import { h } from "preact";
import { Head } from "$fresh/runtime.ts";
import Layout from "../components/Layout.tsx";
import PosterBanner from "../islands/PosterBanner.tsx";

export default function WithinPage() {
  return (
    <>
      <Head>
        <title>Within - Our Values</title>
        <link href="https://fonts.googleapis.com/css2?family=Red+Rose:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300..800&display=swap" rel="stylesheet" />
      </Head>
      <Layout>
        <div class="h-screen w-full grid grid-rows-[75vh_25vh]">
          <section class="row-span-1 relative bg-cover bg-center text-white flex flex-col items-center justify-center px-6 overflow-hidden" style="background-image:url('/withinbg.png');">
            <div class="absolute inset-0 bg-gradient-to-b from-[#480082] via-[#440076] to-[#58267D] opacity-25 pointer-events-none"></div>

            <h1 class="text-5xl md:text-6xl font-redrose font-bold mb-6">Within</h1>

            <div class="space-y-4 max-w-4xl text-lg md:text-xl leading-relaxed">
              <p>At our core, we believe in equity of opportunity—a world where access to basic services isn’t a luxury controlled by massive institutions, but basic right.</p>
              <p>Regardless of background or perception, everyone should have the right to build, grow, and connect without being surveilled, filtered, or blocked by centralized powers.</p>
              <p>We’re grounded in decentralization, transparency, and user sovereignty.</p>
              <p>We’re building systems that put people first—by design, protected by code, and freed from oppressive infrastructures.</p>
            </div>
          </section>
          <section class="row-span-1 bg-white text-black flex flex-col">
            <div class="flex-1 overflow-hidden">
              <PosterBanner color="black" />
            </div>
            <footer class="flex justify-between items-end px-6 pb-4 text-xs md:text-sm font-redrose">
              <span>© Disruptor LLC, all rights reserved</span>
              <span>Made proudly on Earth, for our World</span>
            </footer>
          </section>
        </div>
      </Layout>
    </>
  );
}
