// GracePage.tsx
import { h } from "preact";
import { Head } from "$fresh/runtime.ts";
import Layout from "../components/Layout.tsx";
import PosterBanner from "../islands/PosterBanner.tsx";

export default function GracePage() {
  return (
    <>
      <Head>
        <title>Grace - Our Ethos</title>
        <link href="https://fonts.googleapis.com/css2?family=Red+Rose:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300..800&display=swap" rel="stylesheet" />
      </Head>
      <Layout>
        <div className="h-screen w-full grid grid-rows-[75vh_25vh]">
          <section className="row-span-1 relative bg-cover bg-center text-white flex flex-col items-center justify-center px-6 overflow-hidden" style="background-image:url('/gracebg.png');">
            <div className="absolute inset-0 bg-gradient-to-b from-[#480082] via-[#440076] to-[#58267D] opacity-25 pointer-events-none"></div>

            <h1 className="text-5xl md:text-6xl font-redrose font-bold mb-6">Grace</h1>

            <div className="space-y-4 max-w-4xl text-lg md:text-xl leading-relaxed">
              <p>We stand for defiance, not compliance.</p>
              <p>Grace is rooted in the belief that no one should need permission to connect, move, or express openly.</p>
              <p>We reject the gatekeeping of legacy institutions and the silent control of centralized systems.</p>
              <p>We build radical transparency, user sovereignty, and decentralized independence into everything we create.</p>
              <p>It’s more than tech. It’s a stance.</p>
              <p>It’s a world we accept only when we control the means to it.</p>
              <p>We’re building systems that are open by design, secure by code, and fueled by purpose.</p>
              <p>For the youth. For the creators. For everyone tired of waiting.</p>
              <p>We don’t ask for freedom, we build it.</p>
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
