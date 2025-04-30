// TalePage.tsx
import { h } from "preact";
import { Head } from "$fresh/runtime.ts";
import Layout from "../components/Layout.tsx";
import PosterBanner from "../islands/PosterBanner.tsx";

export default function TalePage() {
  return (
    <>
      <Head>
        <title>Tale - Our Story</title>
        <link href="https://fonts.googleapis.com/css2?family=Red+Rose:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300..800&display=swap" rel="stylesheet" />
      </Head>
      <Layout>
        <div className="h-screen w-full grid grid-rows-[75vh_25vh]">
          <section className="row-span-1 relative bg-cover bg-center text-white flex flex-col items-center justify-center px-6 overflow-hidden" style="background-image:url('/talebg.png');">
            <div className="absolute inset-0 bg-gradient-to-b from-[#480082] via-[#440076] to-[#58267D] opacity-25 pointer-events-none"></div>

            <h1 className="text-5xl md:text-6xl font-redrose font-bold mb-6">Tale</h1>

            <div className="space-y-4 max-w-4xl text-lg md:text-xl leading-relaxed">
              <p>Decentralize Everything.</p>
              <p>We’re not here to fit in—we’re here to dismantle the system.</p>
              <p>With our decentralized wallet, borderless blockchain, and open tokens, we’re giving power back to the people.</p>
              <p>No permissions. No middlemen. Just programmable freedom.</p>
              <p>This isn’t innovation. DeFi was web3’s mid. A decentralized network driven by real users—because access is money and connectivity should be human right.</p>
              <p>This isn’t finance. This is a rebellion. Against surveillance. Against control. Against theft masked as progress.</p>
              <p>The future isn’t coming. The old guard is collapsing. Unstoppable, and this is the first crack.</p>
              <p>This is new order. Our order. Built to be change.</p>
              <p>This is the new order.</p>
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
