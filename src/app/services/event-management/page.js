import ServiceDetail from "@/components/ServiceDetail";
import { getServiceBySlug } from "@/lib/siteData";

const service = getServiceBySlug("event-management");

export const metadata = {
  title: "Corporate Events",
  description: service.short,
};

export default function EventsPage() {
  return <ServiceDetail service={service} />;
}
