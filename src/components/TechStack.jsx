import { FaPython, FaGitAlt } from "react-icons/fa";
import { SiArduino } from "react-icons/si";
import { MdPrecisionManufacturing, MdDesignServices } from "react-icons/md";


const groups = [
  {
    title: "Programming",
    icon: <FaPython size={18} />,
    items: ["Python", "MATLAB"],
  },
  {
    title: "CAD & Design",
    icon: <MdDesignServices size={18} />,
    items: ["SolidWorks", "Fusion 360"],
  },
  {
    title: "Manufacturing",
    icon: <MdPrecisionManufacturing size={18} />,
    items: ["CNC Machining", "FDM / SLA 3D Printing"],
  },
  {
    title: "Embedded Systems",
    icon: <SiArduino size={18} />,
    items: ["Arduino", "Sensors", "Motor Drivers"],
  },
  {
    title: "Tools",
    icon: <FaGitAlt size={18} />,
    items: ["Git / GitHub", "Technical Documentation"],
  },
];



function Card({ title, icon, items }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5 hover:bg-zinc-950/60 transition">
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
  Experience
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
