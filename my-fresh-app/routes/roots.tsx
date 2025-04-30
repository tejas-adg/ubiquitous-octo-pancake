// RootsPage.tsx
//import { h } from "preact";
import { Head } from "$fresh/runtime.ts";
import Layout from "../components/Layout.tsx";
import PosterBanner from "../islands/PosterBanner.tsx";

export default function RootsPage() {
  return (
    <>
      <Head>
        <title>Roots - Our Origins</title>
        <link href="https://fonts.googleapis.com/css2?family=Red+Rose:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300..800&display=swap" rel="stylesheet" />
      </Head>
      <Layout>
        <div className="h-screen w-full grid grid-rows-[75vh_25vh]">
          <section className="row-span-1 relative bg-cover bg-center text-white flex flex-col items-center justify-center px-6 overflow-hidden" style="background-image:url('/rootsbg.png');">
            <div className="absolute inset-0 bg-gradient-to-b from-[#480082] via-[#440076] to-[#58267D] opacity-25 pointer-events-none"></div>

            <h1 className="text-5xl md:text-6xl font-redrose font-bold mb-6">Roots</h1>

            <div className="space-y-4 max-w-4xl text-lg md:text-xl leading-relaxed">
              <p>We’re inspired by a truth our generation knows too well: we’ve been handed broken systems.</p>
              <p>Broken governance, corporate bureaucracies, and legacy institutions—built for profit, not for people.</p>
              <p>While we face economic instability, censorship and exclusion, they profit off our disconnection.</p>
              <p>We reject it.</p>
              <p>We believe in a new foundation—redistributed financial, technical, and creative power back to the people.</p>
              <p>The future belongs to us.</p>
            </div>
          </section>
          <section className="row-span-1 bg-white text-black flex flex-col">
            <div className="flex-1 overflow-hidden">
              <PosterBanner color="black" />
            </div>
            <footer className="flex justify-between items-end px-6 pb-4 text-xs md:text-sm font-redrose">
              <span>© Disruptor LLC, all rights reserved</span>
              <span>Made proudly on Earth, for our World</span>
            </footer>
          </section>
        </div>
      </Layout>
    </>
  );
}
