export default function TopoBackground() {
  return (
    <div aria-hidden="true" className="fixed inset-0 z-0 pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 1400 600"
        preserveAspectRatio="none"
      >
        <g
          fill="none"
          stroke="rgb(var(--topo-color, 16 185 129))"
          strokeWidth="1.4"          // uniform thickness
          strokeOpacity="0.22"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ transition: "stroke 250ms ease" }}
        >
          {/* Primary waves */}
          <path d="M -200 120 C 0 80, 200 160, 400 120 S 800 160, 1200 120 S 1600 80, 2000 120" />
          <path d="M -200 160 C 0 120, 200 200, 400 160 S 800 200, 1200 160 S 1600 120, 2000 160" />
          <path d="M -200 200 C 0 160, 200 240, 400 200 S 800 240, 1200 200 S 1600 160, 2000 200" />
          <path d="M -200 240 C 0 200, 200 280, 400 240 S 800 280, 1200 240 S 1600 200, 2000 240" />

          {/* Offset waves (adds depth without clutter) */}
          <path d="M -200 90  C 150 140, 300 60, 520 120 S 900 180, 1400 100 S 1800 40, 2200 120" />
          <path d="M -200 300 C 100 260, 260 340, 500 300 S 900 340, 1300 300 S 1700 260, 2100 300" />
          <path d="M -200 340 C 120 320, 320 380, 560 340 S 960 380, 1360 340 S 1760 300, 2160 340" />

          {/* Very subtle background waves */}
          <path d="M -200 420 C 200 380, 400 460, 700 420 S 1200 460, 1600 420 S 2000 380, 2400 420" />
          <path d="M -200 470 C 220 430, 440 510, 740 470 S 1240 510, 1640 470 S 2040 430, 2440 470" />
        </g>
      </svg>
    </div>
  );
}
