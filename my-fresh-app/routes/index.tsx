//import { h } from "preact";
//import Layout from "../components/Layout.tsx";
import BannerScroll from "../islands/BannerScroll.tsx";

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

  //const roll = Array(40).fill("New World Order • ").join("");

  return (
    <>
        <div className="h-screen w-full grid grid-cols-3 relative overflow-hidden">
          {sections.map(({ title, image }) => (
            <div
              className="relative bg-cover bg-center"
              style={`background-image:url('${image}')`}
            >
              <div className="absolute inset-0 bg-black/40" />
              <a
                href={`/${title.toLowerCase()}`}
                className="absolute inset-0 flex font-redrose items-center justify-center text-white font-bold text-4xl"
              >
                {title}
              </a>
            </div>
          ))}
          <BannerScroll />
        </div>

        <div
          className="min-h-screen bg-cover bg-center text-white flex items-center justify-center p-12 relative"
          style="background-image: url('/comic.png');"
        >
          <div className="flex-col justify-center">
            <div className="grid grid-cols-4 gap-12 text-center text-xl font-redrose max-w-screen-lg mx-auto">
              {menuItems.slice(0, 8).map(({ title, desc }) => (
              <a href={`/${title.toLowerCase()}`} className="hover:underline">
                <h2 className="text-3xl font-bold">{title}</h2>
                <p>{desc}</p>
              </a>
              ))}
            </div>

            {/* Spacer */}
            <div className="h-20" />

            {/* FINAL 2 in centered row */}
            <div className="flex justify-center gap-12 text-center text-xl font-redrose">
              {menuItems.slice(8).map(({ title, desc }) => (
                <div>
                  <h2 className="text-3xl font-bold">{title}</h2>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-4 left-4 text-s text-white font-redrose">
            © Disruptor LLC, all rights reserved
          </div>
          <div className="absolute bottom-4 right-4 text-s text-white font-redrose">
            Made proudly on Earth, for our World
          </div>
        </div>
    </>
  );
}