import { HiOutlinePencilSquare, HiOutlineCpuChip, HiOutlineWrenchScrewdriver, HiOutlineClipboardDocumentList, HiOutlineFilm, HiOutlineCommandLine } from "react-icons/hi2";

const tech = [
  {
    group: "Mechanical Design & CAD",
    icon: HiOutlinePencilSquare,
    items: [
      { label: "Fusion 360", tier: "p" },
      { label: "SolidWorks", tier: "e" },
      { label: "Blender", tier: "f" },
    ],
  },
  {
    group: "Robotics & Control Systems",
    icon: HiOutlineCpuChip,
    items: [
      { label: "Inverse Kinematics", tier: "f" },
      { label: "Forward Kinematics", tier: "f" },
      { label: "Trajectory Planning", tier: "f" },
      { label: "PID Control", tier: "f" },
      { label: "Null-Space Control", tier: "f" },
    ],
  },
  {
    group: "Simulation & Fabrication",
    icon: HiOutlineWrenchScrewdriver,
    items: [
      { label: "3D Printing", tier: "p" },
      { label: "CNC Machining", tier: "p" },
      { label: "Laser Cutting", tier: "p" },
      { label: "Stress Analysis", tier: "e" },
      { label: "CFD", tier: "e" },
      { label: "ANSYS (FEA)", tier: "f" },
    ],
  },
  {
    group: "Technical Documentation",
    icon: HiOutlineClipboardDocumentList,
    items: [
      { label: "LaTeX", tier: "p" },
      { label: "Microsoft 365", tier: "p" },
      { label: "Git / GitHub", tier: "e" },
      { label: "Technical Documentation", tier: "e" },
    ],
  },
  {
    group: "Programming & Prototyping",
    icon: HiOutlineCommandLine,
    items: [
      { label: "Python", tier: "e" },
      { label: "MATLAB", tier: "e" },
      { label: "Arduino", tier: "e" },
      { label: "React", tier: "e" },
      { label: "Vite", tier: "e" },
      { label: "Tailwind CSS", tier: "e" },
      { label: "Raspberry Pi", tier: "e" },
      { label: "Unreal Engine 5", tier: "f" },
      { label: "Motion Caputre: Flow Studio", tier: "f" },
    ],
  },
  {
    group: "Visualization & Media",
    icon: HiOutlineFilm,
    items: [
      { label: "Photoshop", tier: "e" },
      { label: "Illustrator", tier: "e" },
      { label: "Premiere Pro", tier: "e" },
      { label: "DaVinci Resolve", tier: "e" },
      { label: "After Effects", tier: "f" },
    ],
  },
];

const tierClass = {
  p: "tech-chip--p",
  e: "tech-chip--e",
  f: "tech-chip--f",
};

export default function TechStack() {
  const totalItems = tech.reduce((a, g) => a + g.items.length, 0);

  return (
    <section id="tech" className="section">
      <div className="container">
        <div className="section-head reveal">
          <h2>Tech &amp; Tools</h2>
          <span className="rule" />
          <span className="meta">{totalItems} Tools</span>
        </div>

        <div className="tech-legend reveal">
          <span className="tech-chip tech-chip--p">Proficient</span>
          <span className="tech-chip tech-chip--e">Experienced</span>
          <span className="tech-chip tech-chip--f">Familiar</span>
        </div>

        <div className="tech-grid reveal-stagger">
          {tech.map((group) => {
            const Icon = group.icon;
            return (
              <div className="tech-card" key={group.group}>
                <div className="head">
                  <span className="num"><Icon size={18} /></span>
                  <h3>{group.group}</h3>
                </div>
                <div className="tech-chips">
                  {group.items.map((item) => (
                    <span key={item.label} className={`tech-chip ${tierClass[item.tier]}`}>
                      {item.label}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
