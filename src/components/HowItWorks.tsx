import { Package, Cpu, Download } from "lucide-react";

const steps = [
  {
    icon: Package,
    step: "01",
    title: "Send Your Tapes",
    desc: "Ship your tapes or drop them off at our location.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "We Digitize Them",
    desc: "Professional high-quality conversion with care.",
  },
  {
    icon: Download,
    step: "03",
    title: "Receive Digital Files",
    desc: "Receive files on DVD, thumb drive, or Blu-ray.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 relative" id="how-it-works">
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      <div className="relative max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          How It <span className="text-gradient">Works</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-md mx-auto">
          Three simple steps to preserve your memories
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={s.step} className="glass p-8 text-center group hover:neon-glow-cyan transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="text-xs font-bold text-primary tracking-widest">{s.step}</span>
              <h3 className="text-xl font-semibold text-foreground mt-2 mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                  {/* connector line handled by layout */}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
