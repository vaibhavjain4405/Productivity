import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-foreground/70 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Travel Voyage. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link className="hover:underline underline-offset-4" href="/about">About</Link>
          <Link className="hover:underline underline-offset-4" href="/contact">Contact</Link>
          <Link className="hover:underline underline-offset-4" href="/privacy">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
