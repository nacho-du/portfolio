import { FaPython, FaGitAlt, FaRobot } from "react-icons/fa";
import { SiArduino, SiAutodesk } from "react-icons/si";
import { MdPrecisionManufacturing, MdDesignServices } from "react-icons/md";
import { LuNotebookPen, LuGlobe } from "react-icons/lu";

const groups = [
  {
    title: "Programming",
    icon: <FaPython size={18} />,
    items: ["Python", "MATLAB (Robotics System Toolbox)"],
  },
  {
    title: "CAD & Design",
    icon: <MdDesignServices size={18} />,
    items: ["SolidWorks", "Fusion 360"],
  },
  {
    title: "Robotics",
    icon: <FaRobot size={18} />,
    items: ["Inverse Kinematics", "Forward Kinematics", "Trajectory Planning", "PID Control", "Null-Space Control (Redundancy Resolution)"
    ],

  },

  {
    title: "Manufacturing",
    icon: <MdPrecisionManufacturing size={18} />,
    items: ["CNC Machining", "FDM / SLA 3D Printing"],
  },
  {
    title: "Analysis & Simulation",
    icon: <LuNotebookPen size={18} />,
    items: ["Finite Element Analysis (FEA)", "Stress Analysis", "CFD"],
  },

  {
    title: "Embedded Systems",
    icon: <SiArduino size={18} />,
    items: ["Arduino", "Sensors", "Motor Drivers"],
  },
  {
    title: "Web Development",
    icon: <LuGlobe size={18} />,
    items: ["React", "Vite", "Tailwind CSS", "GitHub Pages"],
  },
  {
    title: "Tools",
    icon: <FaGitAlt size={18} />,
    items: ["LaTeX", "Git / GitHub", "Technical Documentation"],
  },
];



function Card({ title, icon, items }) {
  return (
    <div className="
      rounded-2xl
      border border-[rgba(var(--text-muted),0.25)]
      bg-[rgba(var(--bg-card),0.7)]
      backdrop-blur-md
      supports-[backdrop-filter]:bg-[rgba(var(--bg-card),0.55)]
      p-5
      transition
      hover:border-[rgba(var(--accent),0.45)]
      hover:bg-[rgba(var(--bg-card),0.8)]
      hover:shadow-[0_4px_16px_rgba(var(--accent),0.12)]
      ">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-zinc-300">{icon}</span>
        <h4 className="font-semibold text-zinc-100">{title}</h4>
      </div>

      <ul className="space-y-2 text-sm text-zinc-300">
        {items.map((x) => (
          <li key={x} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
            <span>{x}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TechStack() {
  return (
    <section
      id="tech"
      data-topo="56 189 248"
      className="py-20 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-6">
          <h3 className="text-3xl font-bold tracking-tight flex items-center gap-3">
  <span className="h-6 w-1 rounded-full bg-[rgb(var(--accent))]" />
  Technologies
</h3>
        
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <Card key={g.title} title={g.title} icon={g.icon} items={g.items} />

          ))}
        </div>
      </div>
    </section>
  );
}
