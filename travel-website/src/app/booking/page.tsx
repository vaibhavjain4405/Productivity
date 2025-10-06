import { Suspense } from "react";
import BookingForm from "@/components/BookingForm";

export default function BookingPage() {
  return (
    <Suspense>
      <BookingForm />
    </Suspense>
  );
}
