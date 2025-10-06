import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 dark:border-white/10 bg-background/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <span className="inline-block rounded bg-foreground text-background px-2 py-1">Travel</span>
            <span className="text-foreground">Voyage</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="hover:underline underline-offset-4">Home</Link>
            <Link href="/destinations" className="hover:underline underline-offset-4">Destinations</Link>
            <Link href="/about" className="hover:underline underline-offset-4">About</Link>
            <Link href="/contact" className="hover:underline underline-offset-4">Contact</Link>
          </nav>

          <div className="hidden md:block">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center rounded-full bg-foreground text-background h-10 px-5 text-sm font-medium transition-colors hover:opacity-90"
            >
              Book Now
            </Link>
          </div>

          <div className="md:hidden">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center rounded-full bg-foreground text-background h-9 px-4 text-sm font-medium"
            >
              Book
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
