import ServiceDetail from "@/components/ServiceDetail";
import { getServiceBySlug } from "@/lib/siteData";

const service = getServiceBySlug("corporate-gifting");

export const metadata = {
  title: "Corporate Gifting",
  description: service.short,
};

export default function GiftingPage() {
  return <ServiceDetail service={service} />;
}
