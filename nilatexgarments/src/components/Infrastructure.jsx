import { useState, useEffect, useRef } from "react";

const PROCESSES = [
  {
    title: "Laying & Cutting",
    short: "Precision begins at the cutting table. We utilize advanced laying techniques...",
    full: "Precision begins at the cutting table. We utilize advanced laying techniques to ensure maximum fabric utilization and accuracy. Our computerized cutting systems handle complex patterns across multiple layers with millimeter-perfect consistency, setting the foundation for a perfect fit.",
    image: "https://plus.unsplash.com/premium_photo-1674273913289-8123021e022e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#1d8fcf"
  },
  {
    title: "Stitching",
    short: "Our sewing lines are equipped with specialized industrial machinery...",
    full: "Our sewing lines are equipped with specialized industrial machinery for different garment types. From flatlocks to overlocks, our skilled operators ensure every seam is durable and aesthetically finished to meet international export standards.",
    image: "https://images.unsplash.com/photo-1745095034955-1019067b7ce4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RpdGNoaW5nfGVufDB8fDB8fHww",
    color: "#a855f7"
  },
  {
    title: "Trimming",
    short: "Attention to detail defines our final product. Every loose thread is meticulously...",
    full: "Attention to detail defines our final product. Every loose thread is meticulously removed during our trimming phase. This process ensures a clean, professional finish that enhances the overall quality perception of the garment.",
    image: "https://plus.unsplash.com/premium_photo-1674273913197-0070a5638f45?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFRyaW1taW5nJTIwY2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
    color: "#06b6d4"
  },
  {
    title: "Quality Check",
    short: "We maintain a zero-tolerance policy for defects. Our QC team performs...",
    full: "We maintain a zero-tolerance policy for defects. Our QC team performs 4-point inspection checks at every stage, from fabric arrival to final stitching, ensuring that only flawless pieces move forward to packing.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    color: "#f59e0b"
  },
  {
    title: "Printing & Embroidery",
    short: "Bring your brand to life with our in-house customization unit...",
    full: "Bring your brand to life with our in-house customization unit. We offer high-definition DTF printing, precision embroidery, and durable screen printing options to showcase your logos with vibrant colors and sharp details.",
    image: "https://images.unsplash.com/photo-1629891060732-199a33f240bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByaW50aW5nJTIwY2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
    color: "#ec4899"
  },
  {
    title: "Ironing & Packing",
    short: "Steam pressing gives our garments the retail-ready look they deserve...",
    full: "Steam pressing gives our garments the retail-ready look they deserve. Finally, products are individually folded, tagged, and packed in eco-friendly polybags, organized systematically for secure global transit.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    color: "#10b981"
  }
];

function ProcessCard({ item, index }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef(null);

  return (
    <div
      ref={cardRef}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl border-b-4"
      style={{ borderBottomColor: item.color }}
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-3 text-xl font-extrabold uppercase tracking-tight text-[#02123a]">
          {item.title}
        </h3>
        
        <p className="text-sm leading-relaxed text-[#5a7090] transition-all duration-300">
          {isExpanded ? item.full : item.short}
        </p>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-auto pt-5 flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-widest text-[#1d8fcf] hover:text-[#0a55a0] transition-colors"
        >
          {isExpanded ? "Read Less" : "Read More"}
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
      <div className="mx-auto max-w-[1200px]">
        
        {/* Header */}
        <div className="mb-16 text-center justify-center">
          <div className="mb-4 flex items-center justify-center gap-3">
             <span className="h-0.5 w-10 bg-[#1d8fcf]" />
             <span className="text-xs font-bold uppercase text-center tracking-[0.2em] text-[#1d8fcf]">Our Facility</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#02123a] text-center">
            Modern <span className="text-[#1d8fcf]">Infrastructure</span>
          </h2>
          <p className="mt-4 text-[#5a7090] text-center justify-center items-center">
            Our manufacturing unit is optimized for high-volume production without compromising on the artisanal quality your brand demands.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROCESSES.map((item, idx) => (
            <ProcessCard key={idx} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}