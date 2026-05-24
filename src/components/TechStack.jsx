const tech = [
  {
    group: "Programming",
    items: ["Python", "MATLAB (Robotics System Toolbox)", "React", "Vite", "Tailwind CSS"],
  },
  {
    group: "CAD & Design",
    items: ["SolidWorks", "Fusion 360", "Blender"],
  },
  {
    group: "Robotics",
    items: ["Inverse Kinematics", "Forward Kinematics", "Trajectory Planning", "PID Control", "Null-Space Control (Redundancy Resolution)"],
  },
  {
    group: "Manufacturing & Simulation",
    items: ["CNC Machining", "FDM / SLA 3D Printing", "Laser Cutting", "Stress Analysis", "CFD", "ANSYS (FEA)"],
  },
  {
    group: "Embedded Systems",
    items: ["Arduino", "Sensors", "Motor Drivers"],
  },
  {
    group: "Technical Workflow",
    items: ["Git / GitHub", "LaTeX", "Technical Documentation", "Microsoft 365 (Excel, Word, PowerPoint, Teams)"],
  },
  {
    group: "Creative & Media",
    items: ["Adobe After Effects", "Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere Pro", "DaVinci Resolve"],
  },
];

const roman = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

export default function TechStack() {
  return (
    <section id="tech" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="idx">III.</span>
          <h2>Tech &amp; Tools</h2>
          <span className="rule" />
          <span className="meta">{tech.reduce((a, g) => a + g.items.length, 0)} Tools</span>
        </div>

        <div className="tech-grid reveal-stagger">
          {tech.map((group, i) => (
            <div className="tech-card" key={group.group}>
              <div className="head">
                <span className="num">{roman[i] || (i + 1) + "."}</span>
                <h3>{group.group}</h3>
              </div>
              <div className="tech-chips">
                {group.items.map((t) => (
                  <span key={t} className="tech-chip">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
