import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import vhsImg from "@/assets/vhs-tape.jpg";
import minidvImg from "@/assets/minidv-tape.jpg";
import cassetteImg from "@/assets/cassette-tape.jpg";
import hi8Img from "@/assets/hi8-tape.jpg";
import dvdImg from "@/assets/dvd-cloud.jpg";

const services = [
  { title: "VHS to Digital", desc: "Convert old VHS tapes into MP4 files.", img: vhsImg, rating: 4.8 },
  { title: "MiniDV Conversion", desc: "Transfer camcorder tapes to digital format.", img: minidvImg, rating: 4.9 },
  { title: "Cassette to Digital", desc: "Restore and digitize old audio recordings.", img: cassetteImg, rating: 4.8 },
  { title: "Hi8 / Video8 Conversion", desc: "Professional Hi8 and Video8 transfer.", img: hi8Img, rating: 4.7 },
  { title: "DVD & Cloud Delivery", desc: "Receive files via DVD, USB, or cloud.", img: dvdImg, rating: 4.9 },
];

const ServicesCarousel = () => {
  const [active, setActive] = useState(2);
  const isMobile = useIsMobile();

  const prev = () => setActive((a) => (a === 0 ? services.length - 1 : a - 1));
  const next = () => setActive((a) => (a === services.length - 1 ? 0 : a + 1));

  return (
    <section className="relative py-20 overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Featured <span className="text-gradient">Services</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Professional conversion for every format
        </p>

        {/* Carousel */}
        <div className="relative flex items-center justify-center gap-4 md:gap-6 min-h-[400px]">
          <button onClick={prev} className="absolute left-0 z-20 p-3 glass rounded-full hover:neon-glow-cyan transition-all">
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>

          <div className="flex items-center justify-center gap-4 w-full overflow-hidden">
            {services.map((s, i) => {
              const isActive = i === active;
              const distance = Math.abs(i - active);
              const isVisible = isMobile ? distance === 0 : distance <= 2;
              if (!isVisible) return null;

              return (
                <div
                  key={s.title}
                  onClick={() => setActive(i)}
                  className={`
                    glass cursor-pointer overflow-hidden transition-all duration-500 flex-shrink-0
                    ${isActive
                      ? "w-72 md:w-80 scale-100 neon-glow-cyan opacity-100 z-10"
                      : distance === 1
                        ? "w-56 md:w-64 scale-90 opacity-60"
                        : "w-48 md:w-52 scale-80 opacity-30 hidden md:block"
                    }
                  `}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex items-center gap-1 glass-subtle px-2 py-1">
                      <Star className="w-3 h-3 text-primary fill-primary" />
                      <span className="text-xs font-medium text-foreground">{s.rating}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-foreground mb-1">{s.title}</h3>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <button onClick={next} className="absolute right-0 z-20 p-3 glass rounded-full hover:neon-glow-cyan transition-all">
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === active ? "bg-primary w-6" : "bg-muted-foreground/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
