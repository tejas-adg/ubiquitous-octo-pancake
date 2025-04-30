import BannerScroll from "../islands/BannerScroll.tsx";
import Rectangle from "../components/Rectangle.tsx";

export default function HeroGridPage() {
  const sections = [
    { title: "WallEX", image: "/wallex.png" },
    { title: "OpenWS", image: "/ope.png" },
    { title: "NexusTX", image: "/nexus.png" },
  ];

  const menuItems = [
    { title: "Tale", desc: "Our Story" }, // 1
    { title: "Roots", desc: "Where it all began" }, // 2
    { title: "Within", desc: "What we believe in" }, // 3
    { title: "Kindred", desc: "The people behind the Purpose" }, // 4
    { title: "Chronicle", desc: "Moments that shaped us" }, // 5
    { title: "Scroll", desc: "Thoughts, Writings & Dispatches" }, // 6
    { title: "Light", desc: "What guides us" }, // 7
    { title: "Grace", desc: "How we move through the world" }, // 8
    { title: "", desc:"" }, // 9
    { title: "Covenant", desc: "Our Word, Your Rights" }, // 10
    { title: "Word", desc: "Send us a message" }, // 11
    { title: "", desc:"" }, // 12
  ];

  //const roll = Array(40).fill("New World Order • ").join("");

  return (
    <>
        <div className="h-screen w-full grid grid-cols-3 relative overflow-hidden">
          {sections.map(({ title, image }) => (
            <div
              className="relative bg-cover bg-center "
              style={`background-image:url('${image}')`}
            >
              <Rectangle height="25%" width="100%" color="#4B0082" opacity={35}/>
              <Rectangle height="50%" width="100%" className=" bg-indigo-fade"/>
              <Rectangle height="25%" width="100%" color="#18002A" opacity={35}/>
              <a
                href={`/${title.toLowerCase()}`}
                className="absolute inset-0 flex font-redrose items-center justify-center text-white font-bold text-7xl"
              >
                {title}
              </a>
            </div>
          ))}
          <BannerScroll />
        </div>

        <div
          className="min-h-screen bg-cover bg-center bg-[url('/comic.png')] text-white flex items-center justify-center p-12 relative font-redrose"
        >
          
            <div className="grid grid-cols-4 grid-rows-3 gap-12 text-center w-1/2 mx-auto">
              {menuItems.map(({ title, desc }) => (
              <a href={`/${title.toLowerCase()}`} className="">
                <h2 className="text-6xl font-bold">{title}</h2>
                <p className="text-xl">{desc}</p>
              </a>
              ))}

            </div>

          <div className="absolute bottom-4 left-4 text-lg">
            © Disruptor LLC, all rights reserved
          </div>
          <div className="absolute bottom-4 right-4 text-lg">
            Made proudly on Earth, for our World
          </div>
        </div>
    </>
  );
}