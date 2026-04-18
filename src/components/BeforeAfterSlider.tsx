import { useState, useRef } from "react";

export function BeforeAfterSlider({ image, alt = "Before and after comparison" }: { image: string; alt?: string }) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = (clientX: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  return (
    <div
      ref={ref}
      className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-elegant select-none cursor-ew-resize"
      onMouseDown={() => (dragging.current = true)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onMouseMove={(e) => dragging.current && move(e.clientX)}
      onTouchStart={() => (dragging.current = true)}
      onTouchEnd={() => (dragging.current = false)}
      onTouchMove={(e) => move(e.touches[0].clientX)}
    >
      {/* The uploaded images already have BEFORE/AFTER side by side; we use the image itself and slide a clip */}
      <img src={image} alt={alt} className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img src={image} alt="" className="absolute inset-0 w-[200%] h-full object-cover pointer-events-none" style={{ clipPath: "inset(0 50% 0 0)" }} />
      </div>
      <div className="absolute top-0 bottom-0 w-1 bg-white shadow-elegant" style={{ left: `${pos}%`, transform: "translateX(-50%)" }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white grid place-items-center shadow-elegant">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-primary"><path d="M9 6l-6 6 6 6M15 6l6 6-6 6"/></svg>
        </div>
      </div>
    </div>
  );
}
