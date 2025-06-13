import { Head } from "$fresh/runtime.ts";
import DynamicTitle from "../islands/DynamicTitle.tsx";
import DynamicTagline from "../islands/DynamicTagline.tsx";
import DynamicSubtitle from "../islands/DynamicSubtitle.tsx";
import DynamicHeader from "../islands/DynamicHeader.tsx";

export default function WallExPage() {

  return (
    <>
      <Head>
        <title>WallEX - Finally, crypto that works like money</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300..800&family=Funnel+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
      </Head>

      {/* Dynamic Header */}
      <DynamicHeader 
        title="WallEX"
        onMenuClick={() => console.log("Menu clicked")}
        onEnterClick={() => console.log("Enter clicked")}
      />

      <div className="min-h-screen w-full relative overflow-hidden bg-black dark:bg-black">
        {/* Fixed Background */}
        <div 
          className="fixed inset-0 bg-cover bg-center bg-no-repeat"
          style="background-image: url('/wallex_bg.jpg');"
        />
        
        {/* Dark overlay for better text contrast */}
        <div className="fixed inset-0 bg-black/30" />
        
        {/* Content */}
        <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 lg:px-12 2xl:px-24 text-white" id="wallex-content">
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
      </div>
    </>
  );
}
