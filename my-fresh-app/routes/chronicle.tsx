// ChroniclePage.tsx
import { h } from "preact";
import { Head } from "$fresh/runtime.ts";
import Layout from "../components/Layout.tsx";
import PosterBanner from "../islands/PosterBanner.tsx";

export default function ChroniclePage() {
  return (
    <>
      <Head>
        <title>Chronicle - Our Timeline</title>
        <link href="https://fonts.googleapis.com/css2?family=Red+Rose:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300..800&display=swap" rel="stylesheet" />
      </Head>
      <Layout>
        <div className="h-screen w-full grid grid-rows-[75vh_25vh]">
          <section className="row-span-1 relative bg-cover bg-center text-white flex flex-col items-center justify-center px-6 overflow-hidden" style="background-image:url('/chroniclebg.png');">
            <div className="absolute inset-0 bg-gradient-to-b from-[#480082] via-[#440076] to-[#58267D] opacity-25 pointer-events-none"></div>

            <h1 className="text-5xl md:text-6xl font-redrose font-bold mb-6">Chronicle</h1>

            <div className="space-y-4 max-w-4xl text-lg md:text-xl leading-relaxed">
              <p>We’re in the early stages of igniting a global movement.</p>
              <p>We launched this website, designed to spread awareness, rally support, and spotlight the cause we stand for: decentralizing finance, connectivity, and access.</p>
              <p>This is just the beginning.</p>
              <p>We’re writing our own new network, built for real-world utility and value creation.</p>
              <p>Delivering a secure, decentralized wallet app that empowers peer-to-peer economic empowerment.</p>
              <p>It’s more than a product roadmap. It’s a blueprint for freedom.</p>
              <p>We’re building the infrastructure to a world where people transact, connect, and thrive on their own terms.</p>
              <p>The revolution is going live, one block at a time.</p>
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
