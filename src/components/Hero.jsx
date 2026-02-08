export default function Hero() {
  return (
    <section
      id="home"
      data-topo="hero"
      className="relative overflow-hidden min-h-screen flex items-center px-6"
    >
      {/* Background boomerang SVG */}
      <img
        src={`${import.meta.env.BASE_URL}motifs/motif-hero-boomerang.svg`}
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none select-none
          absolute -top-28 -left-40
          w-[720px] md:w-[900px]
          opacity-25
        "
        style={{
          // Recolor black SVG → mustard (249,170,28) using CSS filters (good enough for now)
          filter:
            "brightness(0) saturate(100%) invert(75%) sepia(74%) saturate(1450%) hue-rotate(350deg) brightness(102%) contrast(101%)",
        }}
      />

      <div className="max-w-6xl mx-auto w-full grid gap-12 lg:grid-cols-2 items-center relative z-10">
        {/* LEFT: Text */}
        <div>
          <div
            className="
              inline-block
              max-w-2xl
              rounded-3xl
              bg-[rgb(var(--bg-main))]
              border border-[rgba(var(--ink),0.14)]
              px-7 py-6
              shadow-[0_10px_30px_rgba(0,0,0,0.06)]
            "
          >
            <p
              className="
                font-body
                text-xs
                uppercase
                tracking-[0.22em]
                text-[rgb(var(--accent))]
                mb-2
              "
            >
              Hi, I’m
            </p>

            {/* Keep your current name setup here */}
            <h1
              className="
                font-display
                text-5xl md:text-6xl
                tracking-tight
                text-[rgb(var(--text-main))]
                mb-4
              "
            >
              Ignacio
            </h1>

            <p
              className="
                font-body
                text-base md:text-lg
                text-[rgba(var(--text-main),0.78)]
                max-w-xl
                leading-relaxed
              "
            >
              I’m a mechanical engineering student at UTEP with a strong interest in hands-on
              engineering, prototyping, and building real-world mechanical and robotic systems.
            </p>
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="flex justify-center lg:justify-end">
          <div
            className="
              w-64 md:w-80 aspect-[3/4]
              rounded-3xl overflow-hidden
              border border-[rgba(var(--ink),0.18)]
              shadow-[0_14px_40px_rgba(0,0,0,0.10)]
            "
          >
            <img
              src="profile.jpg"
              alt="Ignacio Duarte"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
