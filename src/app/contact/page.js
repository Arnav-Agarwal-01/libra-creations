// FILE: src/app/contact/page.js
"use client";
import { useState } from "react";
import { site, whatsappLink } from "@/lib/siteData";

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", service: "Corporate Uniforms", message: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const lines = [
            "Hello Libra Creations, I would like to enquire.",
            "",
            `Name: ${form.name || "—"}`,
            `Company: ${form.company || "—"}`,
            form.email ? `Email: ${form.email}` : null,
            form.phone ? `Phone: ${form.phone}` : null,
            `Service: ${form.service}`,
            form.message ? `Requirement: ${form.message}` : null,
        ].filter(Boolean);
        window.open(whatsappLink(lines.join("\n")), "_blank");
    };

    return (
        <div className="bg-off-black min-h-screen text-cream">

            {/* HERO SECTION */}
            <section className="pt-48 pb-12 px-6 md:px-12">
                <div className="container mx-auto">
                    <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-cream mb-6">
                        LET&apos;S TALK
                    </h1>
                    <p className="font-sans text-xl text-cream/70 max-w-2xl mb-12">
                        Let&apos;s create something remarkable together. Tell us what you need in corporate uniforms, corporate gifting, corporate events — or a combination of services.
                    </p>
                    <div className="w-full h-[1px] bg-cream/10" />
                </div>
            </section>

            {/* FORM & INFO SECTION */}
            <section className="py-24 px-6 md:px-12">
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <div className="space-y-16">
                        <div>
                            <p className="font-sans text-xs uppercase tracking-[0.3em] text-cream/40 mb-2">
                                Registered Office
                            </p>
                            <h3 className="font-display text-3xl text-burgundy mb-8">Talk to Our Team</h3>
                            <div className="space-y-6 font-sans text-lg text-cream/80">
                                <p>
                                    <span className="text-cream/40 uppercase text-xs tracking-wider block mb-1">Phone</span>
                                    <a href={site.phoneHref} className="hover:text-white transition-colors">{site.phone}</a>
                                </p>
                                <p>
                                    <span className="text-cream/40 uppercase text-xs tracking-wider block mb-1">Email</span>
                                    <a href={site.emailHref} className="hover:text-white transition-colors">{site.email}</a>
                                </p>
                                <p>
                                    <span className="text-cream/40 uppercase text-xs tracking-wider block mb-1">Address</span>
                                    <a href={site.mapsHref} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors leading-relaxed">
                                        {site.address}<br />
                                        {site.addressLine2}
                                    </a>
                                </p>
                            </div>
                            <p className="font-sans text-sm text-cream/40 mt-6 max-w-sm">
                                For quicker discussion, you can also send your requirement directly on WhatsApp.
                            </p>
                            <a
                                href={whatsappLink("Hello Libra Creations, I would like to discuss a corporate requirement.")}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-4 px-8 py-3 border border-cream/30 rounded-full font-sans font-medium text-sm hover:bg-cream hover:text-off-black transition-all"
                            >
                                Open WhatsApp
                            </a>
                        </div>

                        <div className="pt-8 border-t border-cream/10">
                            <p className="font-sans text-sm text-cream/40 uppercase tracking-widest mb-4">
                                What We Do
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-6">
                                    <span className="font-display text-2xl text-burgundy/60">01</span>
                                    <div>
                                        <h4 className="font-display text-xl mb-1">Corporate Uniforms</h4>
                                        <p className="font-sans text-sm text-cream/60">Formal wear, polos, workwear, healthcare, hospitality and branding support.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <span className="font-display text-2xl text-burgundy/60">02</span>
                                    <div>
                                        <h4 className="font-display text-xl mb-1">Corporate Gifting</h4>
                                        <p className="font-sans text-sm text-cream/60">Gift sets, employee kits, awards, merchandise, packaging and custom sourcing.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <span className="font-display text-2xl text-burgundy/60">03</span>
                                    <div>
                                        <h4 className="font-display text-xl mb-1">Corporate Events</h4>
                                        <p className="font-sans text-sm text-cream/60">Conferences, launches, annual days, branding, stage, AV and complete event management.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-cream/5 p-8 md:p-12 rounded-3xl backdrop-blur-sm border border-cream/10">
                        <p className="font-sans text-xs uppercase tracking-wider text-cream/40 mb-6">
                            Request a Quote — this form prepares your enquiry and opens WhatsApp.
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label htmlFor="name" className="block text-xs uppercase tracking-wider mb-2 text-cream/60">Name *</label>
                                    <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} className="w-full bg-transparent border-b border-cream/20 py-3 focus:outline-none focus:border-burgundy transition-colors" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label htmlFor="company" className="block text-xs uppercase tracking-wider mb-2 text-cream/60">Company Name</label>
                                    <input id="company" name="company" type="text" value={form.company} onChange={handleChange} className="w-full bg-transparent border-b border-cream/20 py-3 focus:outline-none focus:border-burgundy transition-colors" placeholder="Company Ltd" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label htmlFor="email" className="block text-xs uppercase tracking-wider mb-2 text-cream/60">Email</label>
                                    <input id="email" name="email" type="email" value={form.email} onChange={handleChange} className="w-full bg-transparent border-b border-cream/20 py-3 focus:outline-none focus:border-burgundy transition-colors" placeholder="you@company.com" />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-xs uppercase tracking-wider mb-2 text-cream/60">Phone *</label>
                                    <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} className="w-full bg-transparent border-b border-cream/20 py-3 focus:outline-none focus:border-burgundy transition-colors" placeholder="+91 XXXXX XXXXX" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-xs uppercase tracking-wider mb-2 text-cream/60">Service Required *</label>
                                <select id="service" name="service" required value={form.service} onChange={handleChange} className="w-full bg-transparent border-b border-cream/20 py-3 focus:outline-none focus:border-burgundy transition-colors text-cream [&>option]:text-black">
                                    <option>Corporate Uniforms</option>
                                    <option>Corporate Gifting</option>
                                    <option>Corporate Events</option>
                                    <option>Multiple Services</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-xs uppercase tracking-wider mb-2 text-cream/60">Requirement / Message *</label>
                                <textarea id="message" name="message" rows="4" required value={form.message} onChange={handleChange} className="w-full bg-transparent border-b border-cream/20 py-3 focus:outline-none focus:border-burgundy transition-colors resize-none" placeholder="Tell us about your requirement..." />
                            </div>

                            <button type="submit" className="w-full py-5 bg-burgundy text-cream font-medium rounded-full hover:bg-cream hover:text-off-black transition-all duration-300 mt-6 text-lg">
                                Send Enquiry on WhatsApp
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* MAP */}
            <section className="h-[50vh] w-full bg-cream/10 relative overflow-hidden">
                <a
                    href={site.mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-10 flex items-center justify-center"
                    aria-label="Open our location in Google Maps"
                >
                    <span className="font-display text-2xl md:text-4xl text-cream/60 border border-cream/20 rounded-full px-10 py-6 backdrop-blur-sm bg-off-black/40 hover:bg-off-black/70 hover:text-cream transition-all">
                        VIEW ON GOOGLE MAPS →
                    </span>
                </a>
                <div className="w-full h-full bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Goshamahal,Hyderabad,India&zoom=14&size=1600x600&sensor=false')] bg-cover bg-center opacity-40 grayscale" />
            </section>
        </div>
    );
}
