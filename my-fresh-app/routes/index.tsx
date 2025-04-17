import { h } from "preact";
import { Head } from "$fresh/runtime.ts";
import Layout from "../components/Banner.tsx";

export default function HeroGridPage() {
  const sections = [
    { title: "WallEX", image: "/wallex.png" },
    { title: "OpenWS", image: "/ope.png" },
    { title: "NexusTX", image: "/nexus.png" },
  ];

  const menuItems = [
    { title: "Tale", desc: "Our Story" },
    { title: "Roots", desc: "Where it all began" },
    { title: "Within", desc: "What we believe in" },
    { title: "Kindred", desc: "The people behind the Purpose" },
    { title: "Chronicle", desc: "Moments that shaped us" },
    { title: "Scroll", desc: "Thoughts, Writings & Dispatches" },
    { title: "Light", desc: "What guides us" },
    { title: "Grace", desc: "How we move through the world" },
    { title: "Covenant", desc: "Our Word, Your Rights" },
    { title: "Word", desc: "Send us a message" },
  ];

  return (
    <>
      <Head>
        <title>Hero Grid</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Red+Rose:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300..800&family=Red+Rose:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <div class="h-screen w-full grid grid-cols-3 relative overflow-hidden">
          {sections.map(({ title, image }) => (
            <div
              class="relative bg-cover bg-center"
              style={`background-image:url('${image}')`}
            >
              <div class="absolute inset-0 bg-black/40" />
              <h2 class="absolute inset-0 flex font-redrose items-center justify-center text-white font-bold text-4xl">
                {title}
              </h2>
            </div>
          ))}
        </div>

        <div
          class="min-h-screen bg-cover bg-center text-white flex items-center justify-center p-12 relative"
          style="background-image: url('/comic.png');"
        >
          <div class="flex-col justify-center">
            <div class="grid grid-cols-4 gap-12 text-center text-xl font-redrose max-w-screen-lg mx-auto">
              {menuItems.slice(0, 8).map(({ title, desc }) => (
                <div>
                  <h2 class="text-3xl font-bold">{title}</h2>
                  <p>{desc}</p>
                </div>
              ))}
            </div>

            {/* Spacer */}
            <div class="h-20" />

            {/* FINAL 2 in centered row */}
            <div class="flex justify-center gap-12 text-center text-xl font-redrose">
              {menuItems.slice(8).map(({ title, desc }) => (
                <div>
                  <h2 class="text-3xl font-bold">{title}</h2>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div class="absolute bottom-4 left-4 text-s text-white font-redrose">
            © Disruptor LLC, all rights reserved
          </div>
          <div class="absolute bottom-4 right-4 text-s text-white font-redrose">
            Made proudly on Earth, for our World
          </div>
        </div>
      </Layout>
    </>
  );
}