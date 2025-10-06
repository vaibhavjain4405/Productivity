import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[url('/globe.svg')] bg-no-repeat bg-right-top opacity-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
              Explore the world with Travel Voyage
            </h1>
            <p className="mt-4 text-lg text-foreground/70">
              Curated destinations, seamless bookings, and unforgettable experiences.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/destinations"
                className="inline-flex items-center justify-center rounded-full bg-foreground text-background h-12 px-6 text-base font-medium"
              >
                Browse Destinations
              </Link>
              <Link
                href="/booking"
                className="inline-flex items-center justify-center rounded-full border border-foreground/20 h-12 px-6 text-base font-medium hover:bg-foreground/5"
              >
                Start Booking
              </Link>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Bali, Indonesia", img: "/window.svg" },
              { title: "Kyoto, Japan", img: "/window.svg" },
              { title: "Santorini, Greece", img: "/window.svg" },
              { title: "Maui, Hawaii", img: "/window.svg" },
            ].map((d) => (
              <div
                key={d.title}
                className="rounded-xl border border-foreground/10 bg-background/50 p-4 hover:shadow-sm transition-shadow"
              >
                <div className="aspect-[16/9] relative rounded-lg overflow-hidden bg-foreground/5">
                  <Image src={d.img} alt="" fill className="object-contain p-6" />
                </div>
                <h3 className="mt-3 font-medium">{d.title}</h3>
                <p className="text-sm text-foreground/60">Hand-picked stays and activities.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Simple booking", "Expert guidance", "Best price"].map((s) => (
              <div key={s} className="rounded-xl bg-background/10 p-6">
                <h4 className="text-lg font-semibold">{s}</h4>
                <p className="mt-2 text-background/80">
                  Experience a smoother way to plan your trip.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
