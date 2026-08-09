import { redirect } from "next/navigation";
import { services } from "@/lib/content";

export default function ServicesPage() {
  redirect(`/services/${services[0].slug}`);
}
