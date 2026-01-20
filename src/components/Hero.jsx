export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6"
    >
      <div className="max-w-6xl mx-auto w-full grid gap-12 lg:grid-cols-2 items-center">
        
        {/* LEFT: Text */}
        <div>
          <p className="text-zinc-400 mb-3">Hi, I’m</p>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Ignacio Duarte
          </h1>

          <p className="text-xl md:text-2xl text-zinc-400 max-w-xl leading-relaxed">
            I’m a mechanical engineering student at UTEP with a strong interest in hands-on
            engineering, prototyping, and building real-world mechanical and robotic systems.
          </p>
        </div>

        {/* RIGHT: Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-64 md:w-80 aspect-[3/4] rounded-2xl overflow-hidden border border-zinc-800">
            <img
              src="/profile.jpg"
              alt="Ignacio Duarte"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
