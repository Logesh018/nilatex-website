import { useEffect, useRef } from "react";

const PRODUCTS = [
  { name: "Polo T-Shirts", image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=600&q=80&auto=format&fit=crop" },
  { name: "Round Neck T-Shirt", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80&auto=format&fit=crop" },
  { name: "Sweat Shirt", image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }, // Replaced broken URL
  { name: "Hoodie", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9vZGllfGVufDB8fDB8fHww" },
  { name: "Shorts", image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&q=80&auto=format&fit=crop" }, // Replaced broken URL
  { name: "Track Pants", image: "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=600&q=80&auto=format&fit=crop" },
  { name: "Jogger", image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&q=80&auto=format&fit=crop" },
  { name: "School Sports Uniform", image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80&auto=format&fit=crop" },
  { name: "Sports Jersey", image: "https://images.unsplash.com/photo-1580087256394-dc596e1c8f4f?w=600&q=80&auto=format&fit=crop" },
  { name: "Corporate Uniform", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80&auto=format&fit=crop" },
  { name: "Nurse & Scrubs", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80&auto=format&fit=crop" },
  { name: "Printed Tops", image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=80&auto=format&fit=crop" },
];

const PRINT_METHODS = ["Logo Embroidery", "DTF Printing", "Vinyl Print", "Screen Print"];

export default function Products() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll("[data-card]");
    if (!cards) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.07 }
    );
    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="font-outfit relative overflow-hidden bg-[#f8faff] py-[clamp(64px,9vw,110px)] px-[clamp(20px,5vw,80px)]"
    >
      {/* ── Decor Blobs ── */}
      <div className="pointer-events-none absolute -top-[120px] -right-[120px] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(29,143,207,0.07)_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute bottom-[80px] -left-[80px] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(10,85,160,0.06)_0%,transparent_70%)]" />

      {/* ── Section header ── */}
      <div className="relative mx-auto mb-14 max-w-[1200px] text-center">
        <div className="mb-[18px] flex items-center justify-center gap-3.5">
          <span className="block h-[2px] w-10 rounded-sm bg-gradient-to-r from-transparent to-[#38bdf8]" />
          <span className="text-[0.72rem] font-bold uppercase tracking-[0.24em] text-[#1d8fcf]">
            What We Make
          </span>
          <span className="block h-[2px] w-10 rounded-sm bg-gradient-to-l from-transparent to-[#38bdf8]" />
        </div>

        <h2 className="mb-4 text-[clamp(2rem,4.5vw,3.2rem)] font-black leading-[1.1] text-[#02123a]">
          Our Specialized <span className="text-[#1d8fcf]">Manufacturing</span> Products
        </h2>

        <p className="mx-auto max-w-[520px] text-[clamp(0.9rem,1.5vw,1.05rem)] font-normal leading-[1.75] text-[#5a7090]">
          Factory-direct garments crafted with precision — from sportswear to corporate uniforms, built exactly to your specification.
        </p>
      </div>

      {/* ── Product grid ── */}
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-3 sm:gap-3.5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 xl:gap-5">
        {PRODUCTS.map((product, i) => (
          <div
            key={product.name}
            data-card
            className="group cursor-default overflow-hidden rounded-2xl border border-[#1d8fcf1a] bg-white opacity-0 shadow-[0_2px_12px_rgba(10,60,130,0.07)] transition-all duration-350 translate-y-[28px] hover:shadow-[0_16px_40px_rgba(10,85,160,0.12)]"
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            {/* Image Wrap */}
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#eef4fb]">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="block h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>

            {/* Name Bar */}
            <div className="border-t border-[#1d8fcf14] bg-white p-2.5 text-center md:px-[14px] md:py-3">
              <p className="text-[0.7rem] font-bold leading-[1.3] tracking-[0.01em] text-[#02123a] md:text-[0.8rem]">
                {product.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Customization banner ── */}
      <div className="relative mx-auto mt-[52px] max-w-[1200px] overflow-hidden rounded-[20px] border border-[#38bdf833] bg-[linear-gradient(125deg,#02123a_0%,#063476_50%,#083880_100%)] shadow-[0_20px_60px_rgba(2,18,58,0.18)]">
        {/* Banner Glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(29,143,207,0.25)_0%,transparent_65%)]" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center flex-wrap gap-4 md:gap-[32px] p-[clamp(22px,3vw,36px)] md:px-[clamp(24px,4vw,52px)]">
          {/* Icon */}
          <div className="flex shrink-0 h-[58px] w-[58px] items-center justify-center rounded-[14px] border border-[#38bdf859] bg-[linear-gradient(135deg,rgba(29,143,207,0.3),rgba(10,85,160,0.4))] text-[#38bdf8]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
          </div>

          {/* Text */}
          <p className="min-w-[240px] flex-1 text-[clamp(0.92rem,1.5vw,1.08rem)] font-normal leading-[1.7] text-[rgba(210,235,255,0.92)]">
            We offer <strong className="font-bold text-white">Customization</strong> based on your order with <strong className="font-bold text-white">Logo Embroidery</strong> and <strong className="font-bold text-white">DTF, Vinyl &amp; Screen Based Printing</strong>.
          </p>

          {/* Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {PRINT_METHODS.map((m) => (
              <span
                key={m}
                className="cursor-default whitespace-nowrap rounded-full border border-[#38bdf84d] bg-[#38bdf81a] px-[13px] py-[5px] text-[0.72rem] font-bold uppercase tracking-[0.06em] text-[#38bdf8] transition-colors duration-250 hover:bg-[#38bdf838] hover:text-white"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}