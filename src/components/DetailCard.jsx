export default function DetailCard({ title, children }) {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6">
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <div className="mt-3 text-sm text-zinc-400 leading-relaxed">{children}</div>
    </section>
  );
}
