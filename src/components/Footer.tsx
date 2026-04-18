import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z"/></svg>
);
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
import logo from "@/assets/logo.jpg";
import { PHONE, PHONE_DISPLAY, FACEBOOK, EMAIL } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="bg-primary-deep text-white" style={{ backgroundColor: "oklch(0.22 0.11 258)" }}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="D&C" className="h-12 w-12 rounded-full" />
            <div>
              <div className="font-bold">D&C Exterior Cleaning</div>
              <div className="text-xs text-white/60">Melbourne, Australia</div>
            </div>
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            Premium exterior cleaning specialists delivering spotless results across Melbourne. Reliable, equipped, and customer-focused.
          </p>
          <div className="flex gap-3 mt-5">
            <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="h-10 w-10 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 transition-smooth">
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Instagram" className="h-10 w-10 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 transition-smooth">
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-white">Services</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/services" className="hover:text-white">House Washing</Link></li>
            <li><Link to="/services" className="hover:text-white">Gutter Cleaning</Link></li>
            <li><Link to="/services" className="hover:text-white">Solar Panel Cleaning</Link></li>
            <li><Link to="/services" className="hover:text-white">Window Cleaning</Link></li>
            <li><Link to="/services" className="hover:text-white">Exterior Surface Cleaning</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/gallery" className="hover:text-white">Our Work</Link></li>
            <li><Link to="/reviews" className="hover:text-white">Reviews</Link></li>
            <li><Link to="/booking" className="hover:text-white">Book Online</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-white">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 shrink-0" /><a href={`tel:${PHONE}`} className="hover:text-white">{PHONE_DISPLAY}</a></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 shrink-0" /><a href={`mailto:${EMAIL}`} className="hover:text-white break-all">{EMAIL}</a></li>
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> Melbourne, VIC, Australia</li>
            <li className="flex gap-3"><Clock className="h-4 w-4 mt-0.5 shrink-0" /> Mon–Sat: 7:00 AM – 7:00 PM</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-5 flex flex-col md:flex-row justify-between gap-2 text-xs text-white/60">
          <div>© {new Date().getFullYear()} D&C Exterior Cleaning Service Melbourne. All rights reserved.</div>
          <div>Proudly serving Melbourne homeowners & businesses.</div>
        </div>
      </div>
    </footer>
  );
}
