import Contact from "@/components/Contact";
import { getServiceBySlug } from "@/lib/siteData";

export const metadata = {
  title: "Start an Enquiry",
  description: "Tell Libra Creations about your corporate uniform, gifting or event requirement.",
};

export default async function ContactPage({ searchParams }) {
  const params = await searchParams;
  const requestedService = typeof params.service === "string" ? params.service : "";
  const service = getServiceBySlug(requestedService);
  const initialItem = typeof params.item === "string" ? params.item : "";
  const initialService = service?.slug || (["multiple", "other"].includes(requestedService) ? requestedService : "");

  return <Contact fullPage initialService={initialService} initialItem={initialItem} />;
}
