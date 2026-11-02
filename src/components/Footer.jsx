import Link from "next/link";
import Brand from "@/components/Brand";
import { services, site, whatsappLink } from "@/lib/siteData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-deep text-white">
      <div className="shell py-12 md:py-16">
        <div className="grid gap-10 border-b border-white/15 pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Brand light />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">
              Corporate uniforms, thoughtful gifts and well-managed events, delivered with one point of contact.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold text-white">Catalogue</h2>
            <ul className="mt-4 space-y-3 text-sm text-white/65">
              {services.map((service) => (
                <li key={service.id}>
                  <Link className="inline-flex min-h-7 items-center hover:text-white" href={`/services/${service.slug}`}>
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link className="inline-flex min-h-7 items-center hover:text-white" href="/services">
                  View all solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold text-white">Company</h2>
            <ul className="mt-4 space-y-3 text-sm text-white/65">
              <li><Link className="inline-flex min-h-7 items-center hover:text-white" href="/about">About us</Link></li>
              <li><Link className="inline-flex min-h-7 items-center hover:text-white" href="/portfolio">Our clients</Link></li>
              <li><Link className="inline-flex min-h-7 items-center hover:text-white" href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold text-white">Talk to us</h2>
            <address className="mt-4 space-y-3 text-sm not-italic leading-relaxed text-white/65">
              <a className="block break-words hover:text-white" href={site.phoneHref}>{site.phone}</a>
              <a className="block break-words hover:text-white" href={site.emailHref}>{site.email}</a>
              <a
                className="inline-flex min-h-8 items-center font-semibold text-white hover:underline"
                href={whatsappLink("Hello Libra Creations, I would like to discuss a corporate requirement.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
              <p>{site.address}<br />{site.addressLine2}</p>
            </address>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-6 text-xs leading-relaxed text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p>Hyderabad, India · Serving organizations pan-India</p>
        </div>
      </div>
    </footer>
  );
}
