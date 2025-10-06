"use client";
import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { destinations } from "@/data/destinations";

export default function BookingForm() {
  const params = useSearchParams();
  const preselected = params.get("destination") || "";
  const router = useRouter();

  const [form, setForm] = useState({
    destination: preselected,
    startDate: "",
    endDate: "",
    travelers: 2,
    email: "",
    name: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const totalEstimate = useMemo(() => {
    const d = destinations.find((x) => x.slug === form.destination);
    if (!d) return 0;
    const nights = form.startDate && form.endDate ? Math.max(1, Math.ceil((new Date(form.endDate).getTime() - new Date(form.startDate).getTime()) / (1000 * 60 * 60 * 24))) : 3;
    return Math.round(d.priceFrom * (form.travelers || 1) * (0.5 + nights / 7));
  }, [form]);

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function validate() {
    const next: Record<string, string> = {};
    if (!form.destination) next.destination = "Please select a destination.";
    if (!form.startDate) next.startDate = "Start date is required.";
    if (!form.endDate) next.endDate = "End date is required.";
    if (form.startDate && form.endDate && new Date(form.endDate) <= new Date(form.startDate)) {
      next.endDate = "End date must be after start date.";
    }
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Valid email required.";
    if (!form.name) next.name = "Name is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    const qs = new URLSearchParams({
      destination: form.destination,
      name: form.name,
      email: form.email,
      startDate: form.startDate,
      endDate: form.endDate,
      travelers: String(form.travelers),
      est: String(totalEstimate),
    });
    router.push(`/booking/thanks?${qs.toString()}`);
  }

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold tracking-tight">Book your trip</h1>
      <form onSubmit={submit} className="mt-6 space-y-5">
        <div>
          <label className="block text-sm mb-1">Destination</label>
          <select
            className="w-full rounded-md border border-foreground/20 bg-background px-3 py-2"
            value={form.destination}
            onChange={(e) => update("destination", e.target.value)}
          >
            <option value="">Select a destination</option>
            {destinations.map((d) => (
              <option key={d.slug} value={d.slug}>
                {d.name} ({d.country})
              </option>
            ))}
          </select>
          {errors.destination && <p className="text-sm text-red-600 mt-1">{errors.destination}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Start date</label>
            <input
              type="date"
              className="w-full rounded-md border border-foreground/20 bg-background px-3 py-2"
              value={form.startDate}
              onChange={(e) => update("startDate", e.target.value)}
            />
            {errors.startDate && <p className="text-sm text-red-600 mt-1">{errors.startDate}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">End date</label>
            <input
              type="date"
              className="w-full rounded-md border border-foreground/20 bg-background px-3 py-2"
              value={form.endDate}
              onChange={(e) => update("endDate", e.target.value)}
            />
            {errors.endDate && <p className="text-sm text-red-600 mt-1">{errors.endDate}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Travelers</label>
            <input
              type="number"
              min={1}
              className="w-full rounded-md border border-foreground/20 bg-background px-3 py-2"
              value={form.travelers}
              onChange={(e) => update("travelers", Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              className="w-full rounded-md border border-foreground/20 bg-background px-3 py-2"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
            />
            {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm mb-1">Name</label>
          <input
            type="text"
            className="w-full rounded-md border border-foreground/20 bg-background px-3 py-2"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
          />
          {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
        </div>

        <div className="rounded-lg border border-foreground/10 p-4">
          <p className="text-sm text-foreground/70">Estimated total</p>
          <p className="text-2xl font-bold">${totalEstimate}</p>
        </div>

        <button className="rounded-full bg-foreground text-background px-6 py-3 font-medium" type="submit">
          Confirm booking
        </button>
      </form>
    </div>
  );
}
