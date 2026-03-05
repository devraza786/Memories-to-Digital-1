import { Film } from "lucide-react";
import heroVhs from "@/assets/hero-vhs-player.jpg";
import heroUsb from "@/assets/hero-usb.jpg";
import heroCamcorder from "@/assets/hero-camcorder.jpg";
import heroDvd from "@/assets/hero-dvd.jpg";
import heroCassette from "@/assets/hero-cassette.jpg";

const cards = [
  { img: heroDvd, label: "DVD" },
  { img: heroUsb, label: "USB" },
  { img: heroCamcorder, label: "Camcorder" },
  { img: heroCassette, label: "Cassette" },
  { img: heroVhs, label: "VHS Player" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Large faded background icon */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 opacity-[0.04] pointer-events-none">
        <Film className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] text-foreground" />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-6xl mx-auto px-6">
        {/* Logo icon */}
        <div className="mb-8">
          <Film className="w-8 h-8 text-primary" />
        </div>

        {/* Fan-spread cards */}
        <div className="relative flex items-center justify-center mb-14 h-[260px] md:h-[340px] w-full">
          {cards.map((card, i) => {
            const rotations = [-24, -12, 0, 12, 24];
            const translates = ["-40px", "-12px", "0px", "-12px", "-40px"];
            const zIndexes = [1, 2, 3, 2, 1];
            const offsets = ["-180px", "-90px", "0px", "90px", "180px"];
            const mobileOffsets = ["-140px", "-70px", "0px", "70px", "140px"];

            return (
              <div
                key={card.label}
                className="absolute transition-all duration-500 hover:!scale-110 hover:!z-20 cursor-pointer group"
                style={{
                  transform: `translateX(var(--card-offset)) rotate(${rotations[i]}deg) translateY(${translates[i]})`,
                  zIndex: zIndexes[i],
                  // @ts-ignore
                  "--card-offset": offsets[i],
                }}
              >
                <div className="w-36 h-48 md:w-52 md:h-72 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={card.img}
                    alt={card.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent rounded-2xl" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-center leading-tight mb-6">
          Convert Your Old Tapes{" "}
          <span className="text-gradient">to Digital</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-center mb-10 leading-relaxed">
          Bring your memories back to life. We convert VHS, MiniDV, Hi8, cassette
          tapes, and camcorder recordings into modern digital formats.
        </p>

        {/* CTA Button */}
        <button className="group flex items-center gap-3 px-8 py-4 rounded-full border border-border bg-card/60 backdrop-blur-sm text-foreground font-semibold text-lg hover:border-primary/50 hover:neon-glow-cyan transition-all duration-300">
          Start Your Conversion
          <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg className="w-4 h-4 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
