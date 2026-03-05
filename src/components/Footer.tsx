import { Film, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const links = [
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="border-t border-border py-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <Film className="w-5 h-5 text-primary" />
              <span className="font-bold text-foreground">Memories to Digital</span>
            </div>
            <p className="text-sm text-muted-foreground italic text-center md:text-left max-w-xs">
              "Treat each person's order as if it was my own."
            </p>
            <p className="text-xs text-primary font-bold uppercase tracking-widest">
              15 Years Experience
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((l) => (
              <a key={l.name} href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {l.name}
              </a>
            ))}
          </nav>

          <div className="flex flex-col items-center md:items-end gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>College Place, Washington</span>
            </div>
            <a href="tel:5095092903" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4 text-primary" /> (509) 509-2903
            </a>
            <a href="mailto:Pnwbizz@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4 text-primary" /> Pnwbizz@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Memories to Digital. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
