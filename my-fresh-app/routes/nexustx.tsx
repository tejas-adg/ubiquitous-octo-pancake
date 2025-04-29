import { h } from "preact";
import { Head } from "$fresh/runtime.ts";
import Layout from "../components/Layout.tsx";
import PosterBanner from "../islands/PosterBanner.tsx";

export default function NexusTXPage() {
  return (
    <>
      <Head>
        <title>NexusTX - Decentralized Connectivity</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Red+Rose:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300..800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Layout>
        <div class="h-screen w-full grid grid-rows-[75vh_25vh]">
        <section
            class="row-span-1 relative bg-cover bg-center text-white flex flex-col items-center justify-center px-6 overflow-hidden"
            style="background-image:url('/nexustx_bg.png');"
            >
            <div class="absolute inset-0 bg-gradient-to-b from-[#480082] via-[#440076] to-[#58267D] opacity-25 pointer-events-none"></div>

            <h1 class="text-5xl md:text-6xl font-redrose font-bold mb-6">
              NexusTX
            </h1>

            <div class="space-y-4 max-w-4xl text-lg md:text-xl leading-relaxed">
              <p>
                We’re done waiting on bloated cell towers that guzzle power, fail at coverage, and answer only to profits.
              </p>
              <p>
                NexusTX, in partnership with HNT, is flipping the script, deploying physical meshed-network WiFi routers to the places traditional telecoms ignore.
              </p>
              <ul class="list-disc list-inside space-y-1 pl-4">
                <li>Rural zones.</li>
                <li>Dead spots.</li>
                <li>Underserved communities.</li>
              </ul>
              <p>
                All it takes is one wired connection, and boom! We light up the area with fast, reliable 5/6-Ghz WiFi and Cellular.
              </p>
              <p>
                No overpriced plans. No carrier contracts. Just pure, decentralized connectivity. While legacy towers burn energy and still drop your calls, we’re building a leaner, greener, smarter alternative—a wide-area mesh that thrives on community, not corporations.
              </p>
              <p>
                NexusTX isn’t just bridging the digital divide—we’re bulldozing it. One node at a time. One connection at a time. This is telecom unplugged, decentralized, and defiant.
              </p>
              <p>
                Signal for the people. Not the towers.
              </p>
            </div>
          </section>

          {/* ─── Bottom 25% : white block with banner + footer ── */}
          <section class="row-span-1 bg-white text-black flex flex-col">
            {/* Banner eats the top of white block */}
            <div class="flex-1 overflow-hidden">
              <PosterBanner color="black" />
            </div>

            {/* Footer sticks to very bottom */}
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