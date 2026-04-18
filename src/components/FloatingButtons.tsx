import { Phone, MessageCircle } from "lucide-react";
import { PHONE, WA_DEFAULT } from "@/lib/contact";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-4">
      <a
        href={WA_DEFAULT}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="ripple-ring relative h-14 w-14 grid place-items-center rounded-full text-white shadow-elegant hover:scale-110 transition-smooth"
        style={{ backgroundColor: "#25D366" }}
      >
        <MessageCircle className="h-7 w-7 relative z-10" fill="currentColor" />
      </a>
      <a
        href={`tel:${PHONE}`}
        aria-label="Call now"
        className="ripple-ring relative h-14 w-14 grid place-items-center rounded-full text-white shadow-elegant hover:scale-110 transition-smooth bg-gradient-primary"
      >
        <Phone className="h-6 w-6 relative z-10" fill="currentColor" />
      </a>
    </div>
  );
}
