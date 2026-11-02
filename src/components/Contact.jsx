import EnquiryForm from "@/components/EnquiryForm";
import { site } from "@/lib/siteData";

const steps = [
  { title: "Share your requirement", text: "Tell us the product, quantity, timeline and branding you have in mind." },
  { title: "Receive a tailored proposal", text: "We will align options, customization and pricing around your brief." },
  { title: "Approve and leave the coordination to us", text: "We manage production and delivery through one point of contact." },
];

export default function Contact({ fullPage = false, initialService = "", initialItem = "" }) {
  const Heading = fullPage ? "h1" : "h2";

  return (
    <section id="contact" className="section bg-mist">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="mb-3 text-sm font-semibold text-muted">A clear brief is all we need</p>
            <Heading className="display-lg text-ink">
              {fullPage ? "Tell us what you need." : "Found something you like?"}
            </Heading>
            <p className="lede mt-5 text-base">
              Send your requirement directly to our team. If you are not sure about the details yet, start with what you know and we will help with the rest.
            </p>

            <ol className="mt-8 space-y-5">
              {steps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink text-xs font-bold text-white" aria-hidden="true">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-ink">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-8 border-t border-ink/15 pt-6 text-sm">
              <p className="font-bold text-ink">Prefer to talk first?</p>
              <div className="mt-2 flex flex-col items-start gap-1 text-muted">
                <a href={site.phoneHref} className="inline-flex min-h-8 items-center font-semibold text-ink hover:underline">{site.phone}</a>
                <a href={site.emailHref} className="inline-flex min-h-8 items-center break-all hover:text-ink">{site.email}</a>
              </div>
            </div>
          </div>

          <EnquiryForm initialService={initialService} initialItem={initialItem} />
        </div>
      </div>
    </section>
  );
}
