import { redirect } from "next/navigation";
import Link from "next/link";

export const dynamic = "force-static";

export default function ThanksPage({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }) {
  const destination = (searchParams.destination as string) || "";
  const name = (searchParams.name as string) || "Traveler";
  const email = (searchParams.email as string) || "";
  const est = (searchParams.est as string) || "";

  if (!destination) redirect("/booking");

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold tracking-tight">Thanks, {name}!</h1>
      <p className="mt-2 text-foreground/70">
        Your request for <span className="font-medium">{destination}</span> has been received.
      </p>
      <div className="mt-6 rounded-lg border border-foreground/10 p-4">
        <p className="text-sm">We emailed a copy of your request to</p>
        <p className="font-medium">{email}</p>
        {est && (
          <p className="mt-2 text-foreground/70">Estimated total: ${est}</p>
        )}
      </div>
      <div className="mt-6">
        <Link href="/destinations" className="rounded-full bg-foreground text-background px-6 py-3 font-medium">Continue exploring</Link>
      </div>
    </div>
  );
}
