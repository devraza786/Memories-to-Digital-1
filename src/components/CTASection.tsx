const CTASection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="glass neon-glow-purple p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Don't Let Your Memories{" "}
            <span className="text-gradient">Fade Away</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-lg mx-auto">
            Start preserving your precious recordings today with our professional digitization service.
          </p>
          <button className="px-10 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-lg hover:shadow-[0_0_40px_hsl(var(--neon-cyan)/0.4)] transition-all duration-300 hover:scale-105">
            Convert My Tapes
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
