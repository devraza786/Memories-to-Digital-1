import { Star, Film } from "lucide-react";
import heroReel from "@/assets/hero-reel-center.png";
import vhsImg from "@/assets/vhs-tape.jpg";
import cassetteImg from "@/assets/cassette-tape.jpg";

const Hero = () => {
  const handleSeeServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleOrderNow = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen pt-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="relative z-10 flex flex-col lg:flex-row min-h-[calc(100vh-6rem)]">
        {/* Left Panel - Dark */}
        <div className="relative flex-1 flex flex-col justify-center px-8 md:px-16 py-12 lg:py-0">

          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center">
              <Film className="w-5 h-5 text-background" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">Memories to Digital</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary font-bold">15 Years Exp.</span>
              </div>
              <span className="text-xs text-muted-foreground uppercase tracking-wider italic">"Treat each order as if it was my own"</span>
            </div>
          </div>

          {/* Large title */}
          <h1 className="text-6xl md:text-8xl font-extrabold leading-none mb-8 tracking-tight">
            <span className="text-foreground/10 block">Analog</span>
            <span className="text-gradient">to Digital</span>
          </h1>

        </div>

        {/* Center Reel - overlapping both panels */}
        <div className="absolute left-1/2 top-[calc(33.333%-4px)] md:top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
          <div className="w-[280px] h-[280px] md:w-[360px] md:h-[360px] lg:w-[420px] lg:h-[420px] xl:w-[500px] xl:h-[500px] animate-[spin_20s_linear_infinite]">
            <img src={heroReel} alt="Film reel" className="w-full h-full object-contain drop-shadow-[0_0_40px_hsl(var(--neon-cyan)/0.3)]" />
          </div>
        </div>

        {/* Right Panel - Accent colored */}
        <div className="relative flex-1 flex flex-col justify-center px-8 md:px-16 py-12 lg:py-0 bg-gradient-to-br from-neon-purple/20 to-primary/10 border-l border-border/30">
          {/* Featured service images */}
          <div className="flex gap-4 mb-8 lg:pl-16">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-xl">
              <img src={vhsImg} alt="VHS Tape" className="w-full h-full object-cover" />
            </div>
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-xl mt-8">
              <img src={cassetteImg} alt="Cassette" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="lg:pl-16">
            {/* Service name */}
            <p className="text-xs uppercase tracking-widest text-primary mb-1">Featured Service</p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
              Preserving Memories in College Place
            </h2>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-primary fill-primary" />
                <span className="text-sm text-muted-foreground">15 Years Experience</span>
              </div>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm font-mono text-primary">Washington State</span>
            </div>

            {/* Description */}
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Info</p>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mb-8">
              Convert your precious VHS, BETA, MiniDV, 8mm film, and audio records into digital files.
              We treat each person's order as if it was our own with 15 years of expertise.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-4">
              <button onClick={handleOrderNow} className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_30px_hsl(var(--neon-cyan)/0.3)] transition-all duration-300 hover:scale-105">
                Order Now
              </button>
              <button onClick={handleSeeServices} className="px-6 py-3 rounded-full border border-border text-foreground font-semibold hover:border-primary/50 transition-all">
                See Services
              </button>
            </div>
          </div>

          {/* Faded background text */}
          <div className="absolute bottom-8 right-8 text-[8rem] md:text-[12rem] font-extrabold leading-none text-foreground/[0.03] pointer-events-none select-none tracking-tighter">
            REEL
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
