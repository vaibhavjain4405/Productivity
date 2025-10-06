import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { destinations } from "@/data/destinations";

export const dynamic = "force-static";

export default function DestinationDetail({ params }: { params: { slug: string } }) {
  const destination = destinations.find((d) => d.slug === params.slug);
  if (!destination) return notFound();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <Link href="/destinations" className="text-sm underline underline-offset-4">Back to all destinations</Link>
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-2 gap-3">
            {(destination.gallery || [destination.thumbnail]).map((src, idx) => (
              <div key={idx} className="relative aspect-[4/3] rounded-lg overflow-hidden bg-foreground/5">
                <Image src={src} alt="" fill className="object-contain p-6" />
              </div>
            ))}
          </div>
        </div>
        <aside className="space-y-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{destination.name}</h1>
            <p className="text-foreground/70">{destination.country}</p>
          </div>
          <div className="rounded-lg border border-foreground/10 p-4">
            <p className="text-sm">Starting from</p>
            <p className="text-3xl font-bold">${destination.priceFrom}</p>
            <Link href={`/booking?destination=${destination.slug}`} className="mt-4 inline-flex items-center justify-center rounded-full bg-foreground text-background h-11 px-6 font-medium">Book now</Link>
          </div>
          {destination.summary && (
            <p className="text-foreground/70">{destination.summary}</p>
          )}
          <div className="flex flex-wrap gap-2">
            {destination.tags.map((t) => (
              <span key={t} className="rounded-full border border-foreground/20 px-3 py-1 text-xs">
                {t}
              </span>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
