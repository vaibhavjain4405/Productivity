import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/data/destinations";

export const dynamic = "force-static";

export default function DestinationsPage({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }) {
  const region = (searchParams?.region as string) || "";
  const budget = Number(searchParams?.max || 0);

  const filtered = destinations.filter((d) => {
    const regionOk = region ? d.region.toLowerCase() === region.toLowerCase() : true;
    const budgetOk = budget ? d.priceFrom <= budget : true;
    return regionOk && budgetOk;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold tracking-tight">Destinations</h1>
      <form className="mt-6 grid grid-cols-1 sm:grid-cols-4 gap-4" action="/destinations" method="get">
        <select name="region" defaultValue={region} className="rounded-md border border-foreground/20 bg-background px-3 py-2">
          <option value="">All regions</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="North America">North America</option>
        </select>
        <input name="max" type="number" placeholder="Max budget" defaultValue={budget || ""} className="rounded-md border border-foreground/20 bg-background px-3 py-2" />
        <button className="rounded-full bg-foreground text-background px-6 py-2 font-medium" type="submit">Filter</button>
      </form>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((d) => (
          <Link key={d.slug} href={`/destinations/${d.slug}`} className="group rounded-xl border border-foreground/10 p-4 hover:shadow-sm transition-shadow">
            <div className="aspect-[16/9] relative rounded-lg overflow-hidden bg-foreground/5">
              <Image src={d.thumbnail} alt="" fill className="object-contain p-6 group-hover:scale-105 transition-transform" />
            </div>
            <div className="mt-3 flex items-center justify-between">
              <div>
                <h3 className="font-semibold">{d.name}</h3>
                <p className="text-sm text-foreground/60">{d.country}</p>
              </div>
              <div className="text-right">
                <p className="text-sm">From</p>
                <p className="font-semibold">${d.priceFrom}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
