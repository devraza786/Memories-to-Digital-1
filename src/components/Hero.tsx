import { Disc3, Video, CloudUpload } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Floating decorative elements */}
      <div className="absolute top-32 left-[10%] animate-float opacity-20">
        <Disc3 className="w-16 h-16 text-neon-purple" />
      </div>
      <div className="absolute top-48 right-[12%] animate-float-delayed opacity-20">
        <Video className="w-12 h-12 text-neon-cyan" />
      </div>
      <div className="absolute bottom-32 left-[15%] animate-float-slow opacity-15">
        <CloudUpload className="w-14 h-14 text-neon-blue" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass-subtle px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-muted-foreground">
            Preserve Your Memories — Digitized Forever
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          Convert Your Old Tapes{" "}
          <span className="text-gradient">to Digital</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Bring your memories back to life. We convert VHS, MiniDV, Hi8, cassette
          tapes, and camcorder recordings into modern digital formats you can
          watch on phones, computers, and TVs.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-lg hover:shadow-[0_0_30px_hsl(var(--neon-cyan)/0.3)] transition-all duration-300 hover:scale-105">
            Start Your Conversion
          </button>
          <button className="px-8 py-4 rounded-2xl border border-border text-foreground font-semibold text-lg hover:border-primary/50 hover:text-primary transition-all duration-300">
            View Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
