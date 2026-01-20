export default function Footer() {
  return (
    <footer className="border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-zinc-500 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Nacho Duarte</span>
        <a className="hover:text-zinc-300" href="#home">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
