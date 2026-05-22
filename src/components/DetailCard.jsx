export default function DetailCard({ title, children }) {
  return (
    <section className="rounded-2xl border border-[rgba(var(--text-muted),0.25)] bg-[rgba(var(--bg-card),0.75)] p-6">
      <h3 className="text-lg font-semibold tracking-tight text-[rgb(var(--text-main))]">{title}</h3>
      <div className="mt-3 text-sm text-[rgb(var(--text-muted))] leading-relaxed">{children}</div>
    </section>
  );
}
