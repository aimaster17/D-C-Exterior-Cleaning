import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.jpg";
import { PHONE, PHONE_DISPLAY } from "@/lib/contact";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Our Work" },
  { to: "/reviews", label: "Reviews" },
  { to: "/booking", label: "Book Now" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-smooth ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-card" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="D&C Exterior Cleaning Melbourne" className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/20" />
          <div className="block">
            <div className="font-bold text-primary leading-tight text-sm sm:text-base">D&C Exterior Cleaning</div>
            <div className="text-[10px] sm:text-xs text-muted-foreground">Melbourne, Australia</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-smooth rounded-md hover:bg-secondary"
              activeProps={{ className: "px-3 py-2 text-sm font-semibold text-primary rounded-md bg-secondary" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${PHONE}`}
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant hover:shadow-glow transition-smooth"
          >
            <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
          </a>
          <button
            aria-label="Toggle menu"
            className="lg:hidden p-2 rounded-md hover:bg-secondary"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t bg-white animate-float-up">
          <nav className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-md text-foreground hover:bg-secondary"
                activeProps={{ className: "px-3 py-3 rounded-md bg-secondary text-primary font-semibold" }}
              >
                {l.label}
              </Link>
            ))}
            <a href={`tel:${PHONE}`} className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground">
              <Phone className="h-4 w-4" /> Call {PHONE_DISPLAY}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
