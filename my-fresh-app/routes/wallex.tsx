import { h } from "preact";
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
        <div class="h-screen w-full grid grid-rows-[75vh_25vh]">
          <section
            class="row-span-1 relative bg-cover bg-center text-white flex flex-col items-center justify-center px-6 overflow-hidden"
            style="background-image:url('/wallex_safe.png');"
            >
            <div class="absolute inset-0 bg-gradient-to-b from-[#480082] via-[#440076] to-[#58267D] opacity-25 pointer-events-none"></div>
            <h1 class="text-5xl md:text-6xl font-redrose font-bold mb-6">
              WallEX
            </h1>

            <div class="space-y-4 max-w-4xl text-lg md:text-xl leading-relaxed">
              <p>
                WallEX is our next-generation crypto wallet built for security,
                freedom, and seamless peer-to-peer interaction.
              </p>
              <p>
                It’s both a hardware and software solution. The hardware wallet
                serves permissionless users needing full sovereignty and offline
                protection—ideal for maximum control and censorship resistance.
              </p>
              <p>
                The software wallet, an intuitive mobile app, offers a secure
                yet user-friendly experience for permissioned users demanding
                strong protections.
              </p>
              <p>
                WallEX isn’t just storage—it’s a P2P transaction engine and
                payment interface, letting you send, receive, and manage money
                instantly.
              </p>
              <p>
                Hashed-key safety keeps your assets under your control. A
                built-in exchange enables seamless swaps and trading without
                leaving the wallet.
              </p>
              <p>
                Whether you’re all-in on decentralisation or just getting
                started, WallEX is your gateway to secure, sovereign finance.
              </p>
            </div>
          </section>

          {/* ─── Bottom 35 % : white block with banner + footer ── */}
          <section class="row-span-1 bg-white text-black flex flex-col">
            {/* Banner takes up space above footer */}
            <div class="h-[25vh]">
                <PosterBanner color="black" />
            </div>

            {/* Footer sticks nicely to bottom */}
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
