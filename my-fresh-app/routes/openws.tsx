//import { h } from "preact";
import { Head } from "$fresh/runtime.ts";
import Layout from "../components/Layout.tsx";
import PosterBanner from "../islands/PosterBanner.tsx";

export default function WallExPage() {
  return (
    <>
      <Head>
        <title>WallEX - Next Generation Wallet</title>
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
        <div className="h-screen w-full grid grid-rows-[75vh_25vh]">
          <section
            className="row-span-1 relative bg-cover bg-center text-white flex flex-col items-center justify-center px-6 overflow-hidden"
            style="background-image:url('/openws_bg.png');"
            >
            <div className="absolute inset-0 bg-gradient-to-b from-[#480082] via-[#440076] to-[#58267D] opacity-25 pointer-events-none"></div>
            <h1 className="text-5xl md:text-6xl font-redrose font-bold mb-6">
              OpenWS
            </h1>

            <div className="space-y-4 max-w-4xl text-lg md:text-xl leading-relaxed">
              <p>
                The internet was meant to be free, open, and peer-to-peer, but what we got instead was a walled garden ruled by data-hungry corporations and centralized gatekeepers. OpenWS is our answer to that betrayal.
              </p>
              <p>
                It's a decentralized connectivity service designed to restore the internet's original promise: true, unrestricted communication between people and devices—anytime, anywhere.
              </p>
              <p>
                Powered by native IPv6 addressing, OpenWS lets users directly connect across the globe without dependency on centralized DNS, NATs, or ISP-controlled infrastructure. It's like tearing down digital borders—no more routing through bottlenecks or being watched, throttled, or denied access. You can transmit anything, to anyone, peer-to-peer, across a resilient, user-powered mesh.
              </p>
              <p>
                At launch, users will pay for endpoint access to the global internet, but as our network grows, we flip the model.
              </p>
              <p>
                More users means, more resilience. Eventually, we won't need the legacy internet at all. We'll build our own Internet, unfiltered, self-sustaining, and owned by us. 
              </p>
              <p>
                OpenWS isn't just a service—it's liberation.
              </p>
            </div>
          </section>

          {/* ─── Bottom 35 % : white block with banner + footer ── */}
          <section className="row-span-1 bg-white text-black flex flex-col">
            {/* Banner eats the top of white block */}
            <div className="flex-1 overflow-hidden">
              <PosterBanner color="black"/>
            </div>

            {/* Footer sticks to very bottom */}
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
