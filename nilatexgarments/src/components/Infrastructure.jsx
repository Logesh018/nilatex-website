import { useState } from "react";
import Cutting from "../assets/infra/Cutting.jpeg";
import Stitching from "../assets/infra/Stitching.jpeg";
import Trimming from "../assets/infra/Trimming.jpeg";
import QC from "../assets/infra/Quality-check.jpeg";
import Printing from "../assets/infra/Printing.jpeg";
import Ironing from "../assets/infra/Ironing.jpeg";

const PROCESSES = [
  {
    title: "Laying & Cutting",
    short: "Precision begins at the cutting table. We utilize advanced laying techniques...",
    full: "Precision begins at the cutting table. We utilize advanced laying techniques to ensure maximum fabric utilization and accuracy. Our computerized cutting systems handle complex patterns across multiple layers with millimeter-perfect consistency, setting the foundation for a perfect fit.",
    image: Cutting,
    color: "#1d8fcf"
  },
  {
    title: "Stitching",
    short: "Our sewing lines are equipped with specialized industrial machinery...",
    full: "Our sewing lines are equipped with specialized industrial machinery for different garment types. From flatlocks to overlocks, our skilled operators ensure every seam is durable and aesthetically finished to meet international export standards.",
    image: Stitching,
    color: "#a855f7"
  },
  {
    title: "Trimming",
    short: "Attention to detail defines our final product. Every loose thread is meticulously...",
    full: "Attention to detail defines our final product. Every loose thread is meticulously removed during our trimming phase. This process ensures a clean, professional finish that enhances the overall quality perception of the garment.",
    image: Trimming,
    color: "#06b6d4"
  },
  {
    title: "Quality Check",
    short: "We maintain a zero-tolerance policy for defects. Our QC team performs...",
    full: "We maintain a zero-tolerance policy for defects. Our QC team performs 4-point inspection checks at every stage, from fabric arrival to final stitching, ensuring that only flawless pieces move forward to packing.",
    image: QC,
    color: "#f59e0b"
  },
  {
    title: "Printing & Embroidery",
    short: "Bring your brand to life with our in-house customization unit...",
    full: "Bring your brand to life with our in-house customization unit. We offer high-definition DTF printing, precision embroidery, and durable screen printing options to showcase your logos with vibrant colors and sharp details.",
    image: Printing,
    color: "#ec4899"
  },
  {
    title: "Ironing & Packing",
    short: "Steam pressing gives our garments the retail-ready look they deserve...",
    full: "Steam pressing gives our garments the retail-ready look they deserve. Finally, products are individually folded, tagged, and packed in eco-friendly polybags, organized systematically for secure global transit.",
    image: Ironing,
    color: "#10b981"
  }
];

function ProcessCard({ item }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Logic to separate the short text from the full text
  // We remove the trailing "..." from the short text for clean concatenation
  const cleanShort = item.short.endsWith("...") ? item.short.slice(0, -3) : item.short;
  const extraText = item.full.startsWith(cleanShort)
    ? item.full.substring(cleanShort.length)
    : item.full;

  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-md border-b-4 
                  transition-all duration-500 ease-in-out hover:shadow-xl
                  ${isExpanded ? "shadow-xl ring-1 ring-gray-100" : ""}`}
      style={{ borderBottomColor: item.color }}
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-3 text-xl font-extrabold uppercase tracking-tight text-[#02123a]">
          {item.title}
        </h3>

        <div className="text-sm leading-relaxed text-[#5a7090]">
          {/* Always visible text */}
          <span>{cleanShort}</span>

          {/* The "..." that fades out when expanded */}
          <span className={`transition-opacity duration-300 ${isExpanded ? 'opacity-0 hidden' : 'opacity-100'}`}>
            ...
          </span>

          {/* Expandable text wrapper using CSS Grid for smooth height animation */}
          <span
            className={`inline-grid transition-all duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
          >
            <span className="overflow-hidden">
              <span className={`inline transition-opacity duration-500 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
                {extraText}
              </span>
            </span>
          </span>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-auto pt-5 flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-widest text-[#1d8fcf] hover:text-[#0a55a0] transition-colors"
        >
          <span className="relative">
            {isExpanded ? "Read Less" : "Read More"}
            {/* Animated underline for the button */}
            <span className={`absolute left-0 -bottom-1 h-0.5 bg-[#1d8fcf] transition-all duration-300 ${isExpanded ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </span>

          <svg
            className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'translate-x-0 group-hover:translate-x-1'}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function Infrastructure() {
  return (
    <section id="infrastructure" className="bg-[#fcfdfe] py-20 px-6 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-16 text-center justify-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="block h-0.5 w-10 rounded-sm bg-linear-to-l from-transparent to-[#38bdf8]" />
            <span className="text-xs font-bold uppercase text-center tracking-[0.2em] text-[#1d8fcf]">Our Facility</span>
            <span className="block h-0.5 w-10 rounded-sm bg-linear-to-l from-transparent to-[#38bdf8]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#02123a] text-center">
            Modern <span className="text-[#1d8fcf]">Infrastructure</span>
          </h2>
          <p className="mt-4 text-[#5a7090] text-center max-w-2xl mx-auto">
            Our manufacturing unit is optimized for high-volume production without compromising on the artisanal quality your brand demands.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROCESSES.map((item, idx) => (
            <ProcessCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}