export default function Contact() {
  return (
    <section
      id="contact"
      data-topo="251 146 60"
      className="py-20 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <h3 className="text-3xl font-bold tracking-tight">
            Contact
          </h3>

          <p className="mt-3 text-zinc-400 leading-relaxed">
            Want to collaborate or talk about a project? The fastest way to reach me is email.
          </p>

          <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6">
            <div className="flex flex-col gap-3 text-sm">
              <a
                className="hover:text-white text-zinc-300"
                href="mailto:you@example.com"
              >
                you@example.com
              </a>

              <a
                className="hover:text-white text-zinc-300"
                href="https://github.com/yourusername"
              >
                GitHub: yourusername
              </a>

              <a
                className="hover:text-white text-zinc-300"
                href="https://linkedin.com/in/yourhandle"
              >
                LinkedIn: yourhandle
              </a>
            </div>

            <div className="mt-6">
              <a
                href="mailto:you@example.com"
                className="inline-flex text-sm px-5 py-2.5 rounded-md bg-white text-black font-medium hover:bg-zinc-200"
              >
                Email me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
