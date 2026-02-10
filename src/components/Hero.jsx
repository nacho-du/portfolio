import Boomerang from "./Boomerang.jsx";
import IgnacioMotif from "../assets/motif-bg-hero-ignacio.svg";
export default function Hero() {
  return (
    <section
      id="home"
      data-topo="hero"
      className="
                  relative overflow-hidden
                  bg-[url('/motifs/motif-bg-tesalation.svg')]
                  min-h-screen
                  flex items-center
                  px-6
                  py-24 sm:py-32 md:py-40
                "
                    >
      <div className="max-w-6xl mx-auto w-full grid gap-12 lg:grid-cols-2 items-center relative z-10">
          {/* LEFT: Text */}
            <div className="flex flex-col items-center text-center">
              <p
                className="
                  font-semibold 
                  text-2xl
    
                  uppercase
                  tracking-[0.22em]
                  text-[rgb(var(--text-main))]
                  mb-4
                "
              >
                Hi, I’m
              </p>

              <img
                src={IgnacioMotif}
                alt="Ignacio Duarte"
                className="
                  w-[22rem]
                  sm:w-[26rem]
                  md:w-[32rem]
                  lg:w-[36rem]
                  h-auto
                  mb-6
                  select-none
                  pointer-events-none
                "
              />

              <p
                className="
                  font-body
                  text-base
                  md:text-lg
                  text-[rgba(var(--text-main),0.78)]
                  max-w-xl
                  leading-relaxed
                  mx-auto
                "
              >
                I’m a mechanical engineering student at UTEP with a strong interest in hands-on
                engineering, prototyping, and building real-world mechanical and robotic systems.
              </p>
            </div>

      

        <div className="flex justify-center lg:justify-end">
  <div className="relative isolate">

    {/* Boomerang motif (behind image) */}
    <Boomerang
      className="
        pointer-events-none select-none
        absolute inset-0
        scale-[3.8]
        translate-x-20 translate-y-40
        opacity-65
        z-0
        text-[rgb(var(--accent-hero))]
      "
    />

    {/* Profile image */}
    <div
      className="
        relative z-10
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

      </div>
    </section>
  );
}
