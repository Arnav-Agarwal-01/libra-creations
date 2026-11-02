import ServiceDetail from "@/components/ServiceDetail";
import { getServiceBySlug } from "@/lib/siteData";

const service = getServiceBySlug("corporate-uniforms");

export const metadata = {
  title: "Corporate Uniforms",
  description: service.short,
};

export default function UniformsPage() {
  return <ServiceDetail service={service} />;
}
