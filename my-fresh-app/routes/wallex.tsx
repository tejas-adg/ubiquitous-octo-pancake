import { Head } from "$fresh/runtime.ts";
import DynamicTitle from "../islands/DynamicTitle.tsx";
import DynamicTagline from "../islands/DynamicTagline.tsx";
import DynamicSubtitle from "../islands/DynamicSubtitle.tsx";
import DynamicHeader from "../islands/DynamicHeader.tsx";
//import BreakpointIndicator from "../components/BreakpointIndicator.tsx";

export default function WallExPage() {

  return (
    <>
      <Head>
        <title>WallEX - Finally, crypto that works like money</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300..800&family=Funnel+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
      </Head>

      {/* Breakpoint Indicator */}
      {/* <BreakpointIndicator /> */}

      {/* Dynamic Header */}
      <DynamicHeader 
        title="WallEX"
        onMenuClick={() => console.log("Menu clicked")}
        onEnterClick={() => console.log("Enter clicked")}
        scrollContainerSelector="#wallex-scroll-container" // Pass selector!
      />

      <div id="wallex-scroll-container" className="h-screen w-full relative overflow-y-scroll scroll-smooth snap-y snap-mandatory bg-black dark:bg-black">
        {/* Fixed Background */}
        <div 
          className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
          style="background-image: url('/wallex_bg.jpg');"
        />
        
        {/* Dark overlay for better text contrast */}
        <div className="fixed inset-0 bg-black/30 z-1" />
        
        {/* Content */}
        <div className="snap-start relative z-20 h-screen flex flex-col justify-center px-6 lg:px-12 2xl:px-24 text-white" id="wallex-content">
          {/* Main Logo/Title - Left aligned and dynamically sized */}
          <div className="mb-8">
            <DynamicTitle 
              text="WallEX"
              targetWidthPercent={0.8}
              parentSelector="#wallex-content"
            />
          </div>
          
          {/* Main Tagline - 50% width */}
          <div className="mb-4">
            <DynamicTagline 
              text="Finally, crypto that works like money"
              targetWidthPercent={0.5}
              parentSelector="#wallex-content"
            />
          </div>
          
          {/* Subtitle - 30% width */}
          <div>
            <DynamicSubtitle 
              text="Fast. Familiar. Reliable."
              targetWidthPercent={0.3}
              parentSelector="#wallex-content"
            />
          </div>
        </div>
        {/* About Section */}
        <div id="wallex-about" className="snap-start relative z-20 h-screen px-6 lg:px-12 2xl:px-24 flex flex-col justify-center items-start text-white space-y-8">
          {/* About Tagline */}
          <div>
            <DynamicTagline
              text="Built Differently, On Purpose"
              targetWidthPercent={0.8}
              parentSelector="#wallex-about"
            />
          </div>
          {/* About Subtitle */}
          <div>
            <DynamicSubtitle
              text="Because, complexity kills adoption"
              targetWidthPercent={0.5}
              parentSelector="#wallex-about"
            />
          </div>
          {/* Paragraphs and Image Container */}
          <div className="w-full flex flex-col lg:flex-row gap-8">
            <div id="wallex-about-paragraphs" className="lg:w-3/4 space-y-4">
              <p className="text-white md:text-lg lg:text-xl 2xl:text-2xl">
                WallEX is a custodial crypto wallet that actually works like a modern money app.
              </p>
              <p className="text-white md:text-lg lg:text-xl 2xl:text-2xl">
                You can store stablecoins, send crypto to a friend using just their name, swap between assets in seconds, and cash out straight to your bank.
              </p>
              <p className="text-white md:text-lg lg:text-xl 2xl:text-2xl">
                No seed phrases. No networks to choose. No clunky interfaces. Just crypto that behaves the way money should.
              </p>
              <p className="text-white md:text-lg lg:text-xl 2xl:text-2xl">
                We're not building for traders. We're building for everyone else.
              </p>
            </div>
            <div id="wallex-about-image" className="lg:w-1/4 flex justify-center">
              <div className="w-64 h-96 bg-gray-700" />
            </div>
          </div>
        </div>
        {/* Company Section */}
        <div id="wallex-company" className="snap-start relative z-20 h-screen px-6 lg:px-12 2xl:px-24 flex flex-col justify-center items-start text-white space-y-8">
          {/* Company Tagline */}
          <div>
            <DynamicTagline
              text="Built for How You Actually Use Money"
              targetWidthPercent={0.8}
              parentSelector="#wallex-company"
            />
          </div>
          {/* Company Subtitle */}
          <div>
            <DynamicSubtitle
              text="Because you don’t ‘invest’ every time you buy coffee."
              targetWidthPercent={0.5}
              parentSelector="#wallex-company"
            />
          </div>
          {/* Paragraphs and Image Container */}
          <div className="w-full flex flex-col lg:flex-row gap-8">
            <div id="wallex-company-paragraphs" className="lg:w-3/4 space-y-4">
              <p className="text-white md:text-lg lg:text-xl 2xl:text-2xl">
                WallEX brings the convenience of apps like Venmo and Cash App to the world of crypto.
              </p>
              <p className="text-white md:text-lg lg:text-xl 2xl:text-2xl">
                You can send, receive, hold, and swap without even thinking about networks or chains.
              </p>
              <p className="text-white md:text-lg lg:text-xl 2xl:text-2xl">
                No steep learning curve. No surprise errors. Just money that moves.
              </p>
            </div>
            <div id="wallex-company-image" className="lg:w-1/4 flex justify-center">
              <div className="w-64 h-96 bg-gray-700" />
            </div>
          </div>
        </div>
        {/* Team Section */}
        <div id="wallex-team" className="snap-start relative z-20 h-screen px-6 lg:px-12 2xl:px-24 flex flex-col justify-center items-start text-white space-y-8">
          {/* Team Tagline */}
          <div>
            <DynamicTagline
              text="The People Behind the Vision"
              targetWidthPercent={0.8}
              parentSelector="#wallex-team"
            />
          </div>
          {/* Team Members Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-48 md:h-48 bg-gray-700 rounded-full mb-4" />
              <h3 className="text-xl font-bold">Tejas A. M.</h3>
              <p className="text-gray-400">CEO & Co-Founder</p>
            </div>
            {/* Team Member 2 */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-48 md:h-48 bg-gray-700 rounded-full mb-4" />
              <h3 className="text-xl font-bold">Jayant Babu</h3>
              <p className="text-gray-400">CTO & Co-Founder</p>
            </div>
            {/* Team Member 3 */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-48 md:h-48 bg-gray-700 rounded-full mb-4" />
              <h3 className="text-xl font-bold">Tirna Chakraborty</h3>
              <p className="text-gray-400">C{"{"}F,O{"}"}O & Co-Founder</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
