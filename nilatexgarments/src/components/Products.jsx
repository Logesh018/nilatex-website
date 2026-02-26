import { useEffect, useRef } from "react";
import poloTshirt from "../assets/Products/polo_tshirt_upscaled.jpeg";
import roundNeck from "../assets/Products/round-neck.png";
import sweatShirt from "../assets/Products/sweat-shirt.jpeg";
import hoodie from "../assets/Products/hoodie.png";
import shorts from "../assets/Products/shorts.png";
import trackPants from "../assets/Products/track-pants.jpeg";
import jogger from "../assets/Products/jogger.jpeg";
import sports from "../assets/Products/sports.jpeg";
import sJersey from "../assets/Products/school_uniform.jpeg";
import pTops from "../assets/Products/printed_tops.png";


const PRODUCTS = [
  { name: "Polo T-Shirts", image: poloTshirt },
  { name: "Round Neck T-Shirt", image: roundNeck },
  { name: "Sweat Shirt", image: sweatShirt },
  { name: "Hoodie", image: hoodie },
  { name: "Shorts", image: shorts },
  { name: "Track Pants", image: trackPants },
  { name: "Jogger", image: jogger },
  { name: "School Sports Uniform", image: sJersey },
  { name: "Sports Jersey", image: sports },
  { name: "Printed Tops", image: pTops },
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
      className="font-outfit relative overflow-hidden bg-[#f8faff] py-10 px-[clamp(20px,5vw,80px)]"
    >
      {/* ── Decor Blobs ── */}
      <div className="pointer-events-none absolute -top-30px -right-30 h-120 w-120 rounded-full bg-[radial-gradient(circle,rgba(29,143,207,0.07)_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute bottom-20 -left-20 h-80 w-[320px] rounded-full bg-[radial-gradient(circle,rgba(10,85,160,0.06)_0%,transparent_70%)]" />

      {/* ── Section header ── */}
      <div className="relative mx-auto mb-14 max-w-300 text-center">
        <div className="mb-4.5 flex items-center justify-center gap-3.5">
          <span className="block h-0.5 w-10 rounded-sm bg-linear-to-r from-transparent to-[#38bdf8]" />
          <span className="text-[0.72rem] font-bold uppercase tracking-[0.24em] text-[#1d8fcf]">
            What We Make
          </span>
          <span className="block h-0.5 w-10 rounded-sm bg-linear-to-l from-transparent to-[#38bdf8]" />
        </div>

        <h2 className="mb-4 text-[clamp(2rem,4.5vw,3.2rem)] font-black leading-[1.1] text-[#02123a]">
          Our Specialized <span className="text-[#1d8fcf]">Manufacturing</span>
        </h2>

        <p className="mx-auto max-w-130 text-[clamp(0.9rem,1.5vw,1.05rem)] font-normal leading-[1.75] text-[#5a7090]">
          Factory-direct garments crafted with precision — from sportswear to customized uniforms, built exactly to your specification.
        </p>
      </div>

      {/* ── Product grid ── */}
      <div className="mx-auto grid max-w-300 grid-cols-2 gap-3 sm:gap-3.5 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 xl:gap-5">
        {PRODUCTS.map((product, i) => (
          <div
            key={product.name}
            data-card
            className="group cursor-default overflow-hidden rounded-2xl bg-white opacity-0 shadow-[0_2px_12px_rgba(10,60,130,0.07)] transition-all duration-350 translate-y-7 hover:shadow-[0_16px_40px_rgba(10,85,160,0.12)] border border-gray-200"
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            {/* Image Wrap */}
            <div className="relative aspect-3/4 w-full overflow-hidden bg-[#efefef]">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="block h-full w-full object-contain scale-[1.01] transition-transform duration-600 ease-in-out group-hover:scale-[1.06]"
              />
            </div>

            {/* Name Bar */}
            <div className="border-t border-[#1d8fcf14] bg-gray-100 p-2.5 text-center md:px-3.5 md:py-3">
              <p className="text-[0.7rem] font-bold leading-[1.3] tracking-[0.01em] text-[#02123a] md:text-[0.8rem]">
                {product.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Customization banner ── */}
      <div className="relative mx-auto mt-13 max-w-300 overflow-hidden rounded-[20px] border border-[#38bdf833] bg-[linear-gradient(125deg,#02123a_0%,#063476_50%,#083880_100%)] shadow-[0_20px_60px_rgba(2,18,58,0.18)]">
        {/* Banner Glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(29,143,207,0.25)_0%,transparent_65%)]" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center flex-wrap gap-4 md:gap-8 p-[clamp(22px,3vw,36px)] md:px-[clamp(24px,4vw,52px)]">
          {/* Icon */}
          <div className="flex shrink-0 h-14.5 w-14.5 items-center justify-center rounded-[14px] border border-[#38bdf859] bg-[linear-gradient(135deg,rgba(29,143,207,0.3),rgba(10,85,160,0.4))] text-[#38bdf8]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
          </div>

          {/* Text */}
          <p className="min-w-60 flex-1 text-[clamp(0.92rem,1.5vw,1.08rem)] font-normal leading-[1.7] text-[rgba(210,235,255,0.92)]">
            We offer <strong className="font-bold text-white">Customization</strong> based on your order with <strong className="font-bold text-white">Logo Embroidery</strong> and <strong className="font-bold text-white">DTF, Vinyl &amp; Screen Based Printing</strong>.
          </p>

          {/* Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {PRINT_METHODS.map((m) => (
              <span
                key={m}
                className="cursor-default whitespace-nowrap rounded-full border border-[#38bdf84d] bg-[#38bdf81a] px-3.25 py-1.25 text-[0.72rem] font-bold uppercase tracking-[0.06em] text-[#38bdf8] transition-colors duration-250 hover:bg-[#38bdf838] hover:text-white"
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