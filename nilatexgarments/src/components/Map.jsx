const Map = () => {
  const locations = [
    {
      label: "Mfg Unit & Mkt",
      name: "Karamadai, Coimbatore",
      address: "31/4, Gandhi Nagar, Karamadai,",
      city: "Mettupalayam, Coimbatore,",
      state: "Tamil Nadu – 641104, India",
      mapQuery:
        "31/4+Gandhi+Nagar+Karamadai+Mettupalayam+Coimbatore+Tamil+Nadu+641104+India",
    },
    {
      label: "Sales & Mktg",
      name: "Sriperumbuthur, Kanchipuram",
      address: "781/A, Kirubhai Tower, S.V. Chathiram,",
      city: "Sriperumbuthur, Kanchipuram,",
      state: "Tamil Nadu – 602106, India",
      mapQuery:
        "781/A+Kirubhai+Tower+SV+Chathiram+Sriperumbuthur+Kanchipuram+Tamil+Nadu+602106+India",
    },
  ];

  return (
    <section className="relative w-full py-24 overflow-hidden bg-[#02123a]">
      {/* Background glow decorations */}
      <div
        className="absolute top-0 left-1/4 w-125 h-125 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(77,166,255,0.08) 0%, transparent 70%)",
          transform: "translate(-50%, -40%)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-150 h-150 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(6,52,118,0.35) 0%, transparent 70%)",
          transform: "translate(30%, 30%)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-200 h-100 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(77,166,255,0.04) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[#4da6ff] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Visit Us
          </span>

          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-12 bg-linear-to-r from-transparent to-[#4da6ff] opacity-60" />
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Our Locations
            </h2>
            <div className="h-px w-12 bg-linear-to-l from-transparent to-[#4da6ff] opacity-60" />
          </div>

          <p className="text-[#93d0ff] text-base sm:text-lg max-w-xl leading-relaxed opacity-80">
            We operate across multiple facilities in Tamil Nadu, combining
            manufacturing excellence with a dedicated sales presence.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {locations.map((loc, index) => (
            <div
              key={index}
              className="flex flex-col gap-0 rounded-3xl overflow-hidden"
              style={{
                border: "1px solid rgba(77,166,255,0.18)",
                boxShadow:
                  "0 8px 40px rgba(2,18,58,0.6), 0 0 0 1px rgba(77,166,255,0.06) inset",
                background: "rgba(6,52,118,0.12)",
                backdropFilter: "blur(8px)",
              }}
            >
              {/* Map Embed */}
              <div className="relative w-full" style={{ height: "420px" }}>
                <iframe
                  title={loc.name}
                  src={`https://www.google.com/maps?q=${loc.mapQuery}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{
                    border: "none",
                    display: "block",
                    filter: "brightness(0.88) saturate(1.1) contrast(1.05)",
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                {/* Map overlay tint for design consistency */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(2,18,58,0.08) 0%, rgba(2,18,58,0.18) 100%)",
                  }}
                />
              </div>

              {/* Info Card */}
              <div
                className="px-7 py-6 flex flex-col gap-1"
                style={{
                  borderTop: "1px solid rgba(77,166,255,0.12)",
                  background:
                    "linear-gradient(135deg, rgba(6,52,118,0.30) 0%, rgba(2,18,58,0.45) 100%)",
                }}
              >
                <span className="text-[#4da6ff] text-xs font-semibold tracking-[0.2em] uppercase mb-1">
                  {loc.label}
                </span>
                <h3 className="text-white text-xl font-semibold mb-2">
                  {loc.name}
                </h3>
                <div className="flex items-start gap-3">
                  {/* Pin icon */}
                  <svg
                    className="mt-0.5 shrink-0"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                      fill="#4da6ff"
                      opacity="0.85"
                    />
                  </svg>
                  <p className="text-[#93d0ff] text-sm leading-relaxed opacity-80">
                    {loc.address}
                    <br />
                    {loc.city}
                    <br />
                    {loc.state}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Map;