import { Film, Mail, Phone } from "lucide-react";

const Footer = () => {
  const links = ["Services", "Pricing", "FAQ", "Contact", "Privacy Policy"];

  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <Film className="w-5 h-5 text-primary" />
            <span className="font-bold text-foreground">ReelRevive</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((l) => (
              <a key={l} href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {l}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="tel:+1234567890" className="flex items-center gap-1 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" /> (123) 456-7890
            </a>
            <a href="mailto:info@reelrevive.com" className="flex items-center gap-1 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" /> info@reelrevive.com
            </a>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          © 2026 ReelRevive. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
