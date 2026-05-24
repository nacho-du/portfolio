export default function ProjectThumb({ kind }) {
  const stroke = "rgba(201, 168, 76, 0.35)";
  const brass  = "#c9a84c";
  const dim    = "rgba(201, 168, 76, 0.10)";
  const bg     = "#0d1b2a";

  const Grid = () => (
    <g opacity="0.5">
      {[...Array(12)].map((_, i) => (
        <line key={"v"+i} x1={i*40} y1="0" x2={i*40} y2="300" stroke={dim} strokeWidth="0.5" />
      ))}
      {[...Array(8)].map((_, i) => (
        <line key={"h"+i} x1="0" y1={i*40} x2="480" y2={i*40} stroke={dim} strokeWidth="0.5" />
      ))}
    </g>
  );

  const Frame = () => (
    <g>
      <rect x="12" y="12" width="456" height="276" fill="none" stroke={stroke} strokeWidth="0.6" strokeDasharray="3 3" />
      <text x="24" y="32" fontFamily="Cinzel, serif" fontSize="9" fill={stroke} letterSpacing="0.18em">
        FIG. {String(kind).toUpperCase().slice(0, 4)}-01
      </text>
      <text x="456" y="32" fontFamily="Cinzel, serif" fontSize="9" fill={stroke} textAnchor="end" letterSpacing="0.18em">
        REV.A
      </text>
    </g>
  );

  const inner = () => {
    switch (kind) {
      case "robot":
        return (
          <g>
            <line x1="120" y1="240" x2="120" y2="160" stroke={brass} strokeWidth="2.5" />
            <line x1="120" y1="160" x2="200" y2="100" stroke={brass} strokeWidth="2.5" />
            <line x1="200" y1="100" x2="290" y2="120" stroke={brass} strokeWidth="2.5" />
            <line x1="290" y1="120" x2="340" y2="170" stroke={brass} strokeWidth="2.5" />
            <circle cx="120" cy="240" r="14" fill={bg} stroke={brass} strokeWidth="1.8" />
            <circle cx="120" cy="160" r="8"  fill={bg} stroke={brass} strokeWidth="1.8" />
            <circle cx="200" cy="100" r="8"  fill={bg} stroke={brass} strokeWidth="1.8" />
            <circle cx="290" cy="120" r="8"  fill={bg} stroke={brass} strokeWidth="1.8" />
            <rect x="335" y="158" width="22" height="22" fill={brass} />
            <path d="M 340 170 Q 380 110 420 80" fill="none" stroke={stroke} strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="420" cy="80" r="6" fill="none" stroke={stroke} strokeWidth="1" />
            <line x1="120" y1="252" x2="120" y2="270" stroke={stroke} strokeWidth="1" />
            <line x1="100" y1="270" x2="140" y2="270" stroke={stroke} strokeWidth="1" />
          </g>
        );
      case "head":
        return (
          <g>
            <path d="M 170 80 Q 240 60 310 80 L 320 200 Q 240 230 160 200 Z" fill="none" stroke={stroke} strokeWidth="1.5" />
            <circle cx="210" cy="140" r="22" fill={bg} stroke={brass} strokeWidth="1.8" />
            <circle cx="210" cy="140" r="9"  fill={brass} />
            <circle cx="275" cy="140" r="22" fill={bg} stroke={stroke} strokeWidth="1.5" strokeDasharray="3 2" />
            <line x1="180" y1="180" x2="300" y2="180" stroke={stroke} strokeWidth="1" />
            <text x="160" y="245" fontFamily="Cinzel, serif" fontSize="9" fill={stroke} letterSpacing="0.18em">EYE MODULE · WIP</text>
          </g>
        );
      case "sun":
        return (
          <g>
            <circle cx="360" cy="90" r="26" fill={brass} opacity="0.85" />
            {[...Array(8)].map((_, i) => {
              const a = (i * 45) * Math.PI / 180;
              return (
                <line key={i}
                  x1={360 + Math.cos(a) * 34} y1={90 + Math.sin(a) * 34}
                  x2={360 + Math.cos(a) * 50} y2={90 + Math.sin(a) * 50}
                  stroke={brass} strokeWidth="1.4"
                />
              );
            })}
            <line x1="160" y1="240" x2="160" y2="170" stroke={stroke} strokeWidth="2" />
            <rect x="120" y="120" width="120" height="60" fill="none" stroke={brass} strokeWidth="1.8" transform="rotate(-25 180 150)" />
            <line x1="120" y1="240" x2="200" y2="240" stroke={stroke} strokeWidth="2" />
            <path d="M 240 130 Q 300 110 350 95" fill="none" stroke={stroke} strokeWidth="1" strokeDasharray="3 3" />
          </g>
        );
      case "filament":
        return (
          <g>
            <circle cx="130" cy="160" r="56" fill="none" stroke={stroke} strokeWidth="1.5" />
            <circle cx="130" cy="160" r="14" fill={brass} />
            <path d="M 130 160 m -42 0 a 42 42 0 1 0 84 0" fill="none" stroke={brass} strokeWidth="1.8" />
            <rect x="260" y="120" width="80" height="80" fill="none" stroke={stroke} strokeWidth="1.5" />
            <rect x="290" y="200" width="20" height="40" fill={brass} />
            <path d="M 186 160 Q 230 160 260 160" fill="none" stroke={brass} strokeWidth="2" />
            <text x="260" y="110" fontFamily="Cinzel, serif" fontSize="9" fill={stroke} letterSpacing="0.18em">EXTRUDER</text>
            <text x="100" y="240" fontFamily="Cinzel, serif" fontSize="9" fill={stroke} letterSpacing="0.18em">PLA · RECYCLED</text>
          </g>
        );
      case "buckle":
        return (
          <g>
            <defs>
              <marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" fill={stroke} />
              </marker>
            </defs>
            <rect x="150" y="110" width="180" height="80" rx="10" fill="none" stroke={brass} strokeWidth="1.8" />
            <rect x="170" y="130" width="140" height="40" rx="4"  fill="none" stroke={brass} strokeWidth="1.8" />
            <line x1="240" y1="110" x2="240" y2="190" stroke={brass} strokeWidth="1.8" />
            <line x1="80"  y1="150" x2="148" y2="150" stroke={stroke} strokeWidth="1.5" markerEnd="url(#arr)" />
            <line x1="400" y1="150" x2="332" y2="150" stroke={stroke} strokeWidth="1.5" markerEnd="url(#arr)" />
            <text x="80"  y="135" fontFamily="Cinzel, serif" fontSize="10" fill={stroke} letterSpacing="0.18em">F = 5000 N</text>
            <text x="330" y="135" fontFamily="Cinzel, serif" fontSize="10" fill={stroke} letterSpacing="0.18em">5000 N</text>
            <text x="150" y="220" fontFamily="Cinzel, serif" fontSize="9"  fill={stroke} letterSpacing="0.18em">Ti-6Al-4V</text>
          </g>
        );
      case "web":
      default:
        return (
          <g>
            <rect x="120" y="80"  width="240" height="160" rx="6" fill="none" stroke={stroke} strokeWidth="1.5" />
            <line x1="120" y1="108" x2="360" y2="108" stroke={stroke} strokeWidth="1" />
            <circle cx="134" cy="94" r="3" fill={stroke} />
            <circle cx="146" cy="94" r="3" fill={stroke} />
            <circle cx="158" cy="94" r="3" fill={stroke} />
            <rect x="138" y="124" width="80"  height="50" fill={brass} opacity="0.85" />
            <rect x="228" y="124" width="50"  height="50" fill="none" stroke={stroke} />
            <rect x="288" y="124" width="50"  height="50" fill="none" stroke={stroke} />
            <line x1="138" y1="190" x2="338" y2="190" stroke={stroke} strokeWidth="1" />
            <line x1="138" y1="206" x2="280" y2="206" stroke={stroke} strokeWidth="1" />
            <line x1="138" y1="220" x2="240" y2="220" stroke={stroke} strokeWidth="1" />
          </g>
        );
    }
  };

  return (
    <svg viewBox="0 0 480 300" preserveAspectRatio="xMidYMid slice">
      <rect width="480" height="300" fill={bg} />
      <Grid />
      <Frame />
      {inner()}
    </svg>
  );
}
