import { Check, Star, Video, Music, Image, Disc, Laptop, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const servicePrices = [
  {
    icon: Video,
    name: "Video Tapes To DVD",
    price: "$10.00",
    description: "BETA, VHS, VHS-C, 8MM, HI8MM, MINI-DV",
    details: ["Professional DVD Transfer", "High Quality Encoding", "Disc Labeling"]
  },
  {
    icon: Music,
    name: "Audio Tapes/Records To CD",
    price: "$5.00",
    description: "Cassettes and Vinyl Records",
    details: ["Noise Reduction", "CD Burning Included", "Individual Track Separation"]
  },
  {
    icon: Image,
    name: "Photos & Slides",
    price: "10¢ Each",
    description: "35MM SLIDES/PHOTOS TO DVD/THUMB DRIVE",
    details: ["High Resolution Scanning", "$5.00 Minimum Order", "Color Correction"]
  }
];

const formats = [
  "BETA", "VHS-C", "8MM", "HI8MM", "MINI-DV", "SUPER 8MM", "35MM SLIDES", "RECORDS", "AUDIO TAPES"
];

const transferMedia = [
  { name: "DVD", icon: Disc },
  { name: "THUMB DRIVE", icon: Laptop },
  { name: "BLU-RAY", icon: Disc }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-5" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-primary font-bold mb-4"
          >
            Services & Pricing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight"
          >
            Transparent <span className="text-gradient">Pricing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg mb-8"
          >
            Preserve your memories with our affordable digitization services.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block glass neon-glow-cyan px-6 py-4 rounded-2xl mb-12"
          >
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm font-semibold text-foreground">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" /> 15 Years Experience
              </span>
              <span className="hidden md:inline text-border">|</span>
              <span className="italic text-primary">"Treat each person's order as if it was my own"</span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {servicePrices.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex flex-col p-8 rounded-3xl border border-border bg-background hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <pkg.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl font-extrabold text-primary">{pkg.price}</span>
                </div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{pkg.description}</p>
              </div>

              <div className="space-y-4 mb-8 flex-1 border-t border-border pt-6">
                {pkg.details.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full py-3 rounded-xl font-bold bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                Order Now
              </button>
            </motion.div>
          ))}
        </div>

        {/* Support media section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-12 rounded-[3rem] border border-border/50 text-center max-w-5xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-8">We Transfer To:</h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12">
            {transferMedia.map((m) => (
              <div key={m.name} className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center neon-glow-purple border border-border">
                  <m.icon className="w-8 h-8 text-primary" />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest">{m.name}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-border/50 pt-8">
            <p className="text-sm text-muted-foreground mb-6 uppercase tracking-[0.2em] font-bold">Supported Formats</p>
            <div className="flex flex-wrap justify-center gap-3">
              {formats.map((f) => (
                <span key={f} className="px-4 py-2 rounded-full bg-muted/50 border border-border text-xs font-bold text-foreground hover:border-primary/50 hover:bg-muted transition-all">
                  {f}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
