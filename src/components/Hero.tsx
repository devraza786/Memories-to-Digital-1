import { Star, Play } from "lucide-react";
import heroReel from "@/assets/hero-reel-center.png";
import vhsImg from "@/assets/vhs-tape.jpg";
import cassetteImg from "@/assets/cassette-tape.jpg";

const services = [
  { num: "01", title: "VHS to Digital", format: "MP4", duration: "~2hrs" },
  { num: "02", title: "Cassette to Digital", format: "WAV", duration: "~1hr" },
  { num: "03", title: "MiniDV Conversion", format: "MP4", duration: "~1.5hrs" },
  { num: "04", title: "Hi8 / Video8", format: "MP4", duration: "~2hrs" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="relative z-10 flex flex-col lg:flex-row min-h-[calc(100vh-6rem)]">
        {/* Left Panel - Dark */}
        <div className="relative flex-1 flex flex-col justify-center px-8 md:px-16 py-12 lg:py-0">
          {/* Badge */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm text-muted-foreground">See All</span>
            <span className="text-sm text-primary font-medium border-b border-primary pb-0.5">Top Picks</span>
            <span className="text-sm text-muted-foreground">Recent</span>
          </div>

          {/* User info */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">Your Collection</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">NEW</span>
              </div>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Conversion Queue</span>
            </div>
          </div>

          {/* Large title */}
          <h1 className="text-6xl md:text-8xl font-extrabold leading-none mb-8 tracking-tight">
            <span className="text-foreground/10 block">Analog</span>
            <span className="text-gradient">to Digital</span>
          </h1>

          {/* Service list */}
          <div className="space-y-3 max-w-md">
            {services.map((s, i) => (
              <div
                key={s.num}
                className={`flex items-center gap-4 p-3 rounded-xl transition-all cursor-pointer group ${
                  i === 1 ? "glass neon-glow-cyan" : "hover:bg-muted/30"
                }`}
              >
                <span className="text-xs text-muted-foreground w-6">{s.num}</span>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  i === 1 ? "bg-primary" : "bg-muted"
                }`}>
                  <Play className={`w-3 h-3 ${i === 1 ? "text-primary-foreground" : "text-muted-foreground"}`} fill="currentColor" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{s.title}</p>
                  <p className="text-xs text-muted-foreground">{s.format}</p>
                </div>
                <span className="text-xs text-muted-foreground font-mono">{s.duration}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Center Reel - overlapping both panels */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none hidden lg:block">
          <div className="w-[420px] h-[420px] xl:w-[500px] xl:h-[500px] animate-[spin_20s_linear_infinite]">
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
              Professional Digitization
            </h2>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-primary fill-primary" />
                <span className="text-sm text-muted-foreground">4.9</span>
              </div>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm font-mono text-primary">7 - 14 days</span>
            </div>

            {/* Description */}
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Info</p>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mb-8">
              Convert your precious VHS, MiniDV, Hi8, and cassette tapes into crystal-clear digital files. 
              We handle everything from pickup to cloud delivery with museum-grade care.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-4">
              <button className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_30px_hsl(var(--neon-cyan)/0.3)] transition-all duration-300 hover:scale-105">
                Order Now
              </button>
              <button className="px-6 py-3 rounded-full border border-border text-foreground font-semibold hover:border-primary/50 transition-all">
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

      {/* Bottom playback bar */}
      <div className="absolute bottom-0 left-0 right-0 z-30 glass border-t border-border/50 px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <button className="text-muted-foreground hover:text-foreground transition-colors">←</button>
          <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform">
            <Play className="w-4 h-4 text-primary-foreground" fill="currentColor" />
          </button>
          <button className="text-muted-foreground hover:text-foreground transition-colors">→</button>
          <div className="flex-1 mx-4">
            <div className="h-1 bg-muted rounded-full overflow-hidden">
              <div className="h-full w-1/3 bg-gradient-to-r from-primary to-neon-purple rounded-full" />
            </div>
          </div>
          <span className="text-xs font-mono text-muted-foreground">0:07</span>
          <span className="text-xs text-muted-foreground/50">/</span>
          <span className="text-xs font-mono text-muted-foreground">2:14</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
