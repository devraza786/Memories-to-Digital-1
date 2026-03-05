import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    text: "Finally watched my childhood tapes again after 20 years. Amazing service!",
    rating: 5,
  },
  {
    name: "James T.",
    text: "The quality of the digital files exceeded my expectations. Highly recommended.",
    rating: 5,
  },
  {
    name: "Linda R.",
    text: "So easy to use — shipped my tapes and got beautiful HD files within a week.",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-hero opacity-30" />
      <div className="relative max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          What Our <span className="text-gradient">Customers</span> Say
        </h2>
        <p className="text-muted-foreground text-center mb-12">Real reviews from real customers</p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="glass p-6 hover:neon-glow-cyan transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < t.rating ? "text-primary fill-primary" : "text-muted-foreground"}`}
                  />
                ))}
              </div>
              <p className="text-foreground mb-4 leading-relaxed">"{t.text}"</p>
              <span className="text-sm font-semibold text-muted-foreground">— {t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
