import { useEffect, useState } from "react";
import heroReel from "@/assets/hero-reel-center.png";

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for the page to fully load
    const handleLoad = () => {
      setIsLoading(false);
    };

    // Check if page is already loaded
    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-background flex items-center justify-center animate-out fade-out duration-500" style={{
      animation: isLoading ? "none" : "fadeOut 0.5s ease-out forwards"
    }}>
      <style>{`
        @keyframes fadeOut {
          from {
            opacity: 1;
            pointer-events: auto;
          }
          to {
            opacity: 0;
            pointer-events: none;
          }
        }
      `}</style>
      
      {/* Spinning Disk Loader */}
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-40 h-40 animate-[spin_20s_linear_infinite]">
          <img 
            src={heroReel} 
            alt="Loading..." 
            className="w-full h-full object-contain drop-shadow-[0_0_40px_hsl(var(--neon-cyan)/0.3)]"
          />
        </div>
        <div className="text-center">
          <p className="text-sm font-semibold text-foreground">Loading Your Memories</p>
          <p className="text-xs text-muted-foreground mt-2">Preparing your digitization experience...</p>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
