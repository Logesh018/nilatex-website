import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80",
    tag: "Premium Collection",
    headline: ["Knit & Woven", "Wear"],
    sub: "Crafted with precision — from everyday essentials to high-performance woven fabrics.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80",
    tag: "Uniform Specialists",
    headline: ["School & Industrial", "Uniforms"],
    sub: "Durable, standardized, and custom-branded uniforms for schools and industries across the region.",
  },
];

const stats = [
  { icon: "🏆", text: "3+ Years Excellence" },
  { icon: "🤝", text: "50+ Customers Across Industries" },
  { icon: "⚡", text: "On-Time Delivery" },
  { icon: "✂️", text: "Customization Available" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [textVisible, setTextVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextVisible(false);
      setAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setAnimating(false);
        setTimeout(() => setTextVisible(true), 100);
      }, 700);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const goTo = (idx) => {
    if (idx === current) return;
    setTextVisible(false);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
      setTimeout(() => setTextVisible(true), 100);
    }, 700);
  };

  const slide = slides[current];

  return (
    <>
      {/* Google Fonts — Outfit (headings) + DM Sans (body) */}
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap"
        rel="stylesheet"
      />

      <section
        id="home"
        className="relative w-full min-h-screen flex flex-col overflow-hidden"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* ── Background slides ── */}
        {slides.map((s, i) => (
          <div
            key={s.id}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === current && !animating ? 1 : 0 }}
          >
            <img
              src={s.image}
              alt={s.headline.join(" ")}
              className="w-full h-full object-cover object-center"
              style={{
                transform: i === current && !animating ? "scale(1.06)" : "scale(1)",
                transition: "transform 9s ease-out",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(125deg, rgba(2,18,58,0.92) 0%, rgba(6,52,118,0.82) 55%, rgba(2,25,72,0.78) 100%)",
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, transparent 40%, rgba(77,166,255,0.05) 60%, transparent 80%)",
              }}
            />
          </div>
        ))}

        {/* ── Grid texture ── */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,#fff 0,transparent 1px,transparent 80px,#fff 81px),repeating-linear-gradient(90deg,#fff 0,transparent 1px,transparent 80px,#fff 81px)",
          }}
        />

        {/* ── Content ── */}
        <div className="relative z-10 flex flex-col justify-center flex-1 max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16 pt-28 pb-16">
          <div className="max-w-2xl xl:max-w-3xl">

            {/* Tag badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#4da6ff]/40 bg-[#4da6ff]/10 mb-6 backdrop-blur-sm"
              style={{
                opacity: textVisible ? 1 : 0,
                transform: textVisible ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.45s ease 0.1s, transform 0.45s ease 0.1s",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#4da6ff] animate-pulse" />
              <span
                className="text-[#4da6ff] text-xs font-semibold tracking-[0.22em] uppercase"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {slide.tag}
              </span>
            </div>

            {/* Headline */}
            <h1 className="mb-5" style={{ fontFamily: "'Outfit', sans-serif" }}>
              <span
                className="block text-white font-extrabold leading-[1.05] text-[2.7rem] sm:text-6xl lg:text-7xl xl:text-[5rem]"
                style={{
                  opacity: textVisible ? 1 : 0,
                  transform: textVisible ? "translateX(0)" : "translateX(-28px)",
                  transition: "opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s",
                  letterSpacing: "-0.02em",
                }}
              >
                {slide.headline[0]}
              </span>

              <span
                className="block font-extrabold leading-[1.05] text-[2.7rem] sm:text-6xl lg:text-7xl xl:text-[5rem]"
                style={{
                  opacity: textVisible ? 1 : 0,
                  transform: textVisible ? "translateX(0)" : "translateX(-28px)",
                  transition: "opacity 0.5s ease 0.35s, transform 0.5s ease 0.35s",
                  letterSpacing: "-0.02em",
                }}
              >
                <span
                  className="relative inline-block"
                  style={{
                    background: "linear-gradient(90deg,#4da6ff 0%,#a8d8ff 55%,#4da6ff 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundSize: "200% auto",
                    animation: textVisible ? "shimmer 3.5s linear infinite" : "none",
                  }}
                >
                  {slide.headline[1]}
                  <span
                    className="absolute left-0 -bottom-1 h-[3px] rounded-full"
                    style={{
                      background: "linear-gradient(90deg,#4da6ff,#a8d8ff)",
                      width: textVisible ? "100%" : "0%",
                      transition: "width 0.75s ease 0.75s",
                    }}
                  />
                </span>
              </span>
            </h1>

            {/* Subtext */}
            <p
              className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-lg font-light"
              style={{
                opacity: textVisible ? 1 : 0,
                transform: textVisible ? "translateY(0)" : "translateY(10px)",
                transition: "opacity 0.5s ease 0.5s, transform 0.5s ease 0.5s",
              }}
            >
              {slide.sub}
            </p>

            {/* ── Stats — inline below subtext ── */}
            <div
              className="grid grid-cols-2 lg:grid-cols-4 gap-3"
              style={{
                opacity: textVisible ? 1 : 0,
                transform: textVisible ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.5s ease 0.62s, transform 0.5s ease 0.62s",
              }}
            >
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 px-4 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
                >
                  <span className="text-lg leading-none flex-shrink-0">{s.icon}</span>
                  <span
                    className="text-gray-200 text-xs sm:text-[13px] font-medium leading-snug"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {s.text}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ── Slide indicators ── */}
        <div className="absolute right-5 sm:right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3 items-center">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="group focus:outline-none"
              aria-label={`Go to slide ${i + 1}`}
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-[3px] h-8 bg-[#4da6ff]"
                    : "w-[3px] h-4 bg-white/30 group-hover:bg-white/60"
                }`}
              />
            </button>
          ))}
        </div>

        {/* ── Scroll hint ── */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1.5 opacity-40">
          <span
            className="text-white/60 text-[10px] tracking-[0.22em] uppercase"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Scroll
          </span>
          <span className="w-px h-7 bg-white/40 animate-pulse" />
        </div>
      </section>
    </>
  );
}