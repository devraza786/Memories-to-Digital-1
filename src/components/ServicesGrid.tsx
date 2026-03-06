import vhsImg from "@/assets/vhs-tape.jpg";
import minidvImg from "@/assets/minidv-tape.jpg";
import cassetteImg from "@/assets/cassette-tape.jpg";
import filmImg from "@/assets/film-reel.jpg";
import photoImg from "@/assets/photo-scan.jpg";
import dvdImg from "@/assets/dvd-cloud.jpg";

const services = [
  { title: "VHS to Digital", img: vhsImg },
  { title: "MiniDV Conversion", img: minidvImg },
  { title: "Cassette Audio Digitizing", img: cassetteImg },
  { title: "Film Reel Conversion", img: filmImg },
  { title: "Photo Scanning", img: photoImg },
  { title: "DVD / USB Delivery", img: dvdImg },
];

const ServicesGrid = () => {
  return (
    <section className="py-20" id="all-services">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          All <span className="text-gradient">Services</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-md mx-auto">
          Everything you need to digitize your media collection
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              onClick={() => {
                const pricingSection = document.getElementById("pricing");
                pricingSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="glass group overflow-hidden hover:neon-glow-purple transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-foreground">{s.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
