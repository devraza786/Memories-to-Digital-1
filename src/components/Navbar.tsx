import { Search, Phone, User, Film } from "lucide-react";

const Navbar = () => {
  const menuItems = ["Home", "Services", "Pricing", "How It Works", "Contact"];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="glass neon-glow-cyan px-6 py-3 flex items-center justify-between gap-4">
        {/* Left: Logo + Menu */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Film className="w-6 h-6 text-primary" />
            <span className="font-bold text-lg text-foreground">ReelRevive</span>
          </div>
          <div className="hidden lg:flex items-center gap-6">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Center: Search */}
        <div className="hidden md:flex items-center flex-1 max-w-xs mx-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search services…"
              className="w-full bg-muted/50 border border-border rounded-xl pl-9 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
            />
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-xl hover:bg-muted/50 transition-colors">
            <Phone className="w-4 h-4 text-muted-foreground" />
          </button>
          <button className="hidden sm:block text-sm px-4 py-2 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all">
            Order Status
          </button>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center">
            <User className="w-4 h-4 text-background" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
