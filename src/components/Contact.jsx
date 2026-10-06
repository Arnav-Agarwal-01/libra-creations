"use client";
import { useState } from "react";
import { site, whatsappLink } from "@/lib/siteData";

export default function Contact() {
    const [form, setForm] = useState({ name: "", company: "", email: "", service: "Corporate Uniforms", message: "" });

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
            `Service: ${form.service}`,
            form.message ? `Requirement: ${form.message}` : null,
        ].filter(Boolean);
        window.open(whatsappLink(lines.join("\n")), "_blank");
    };

    return (
        <section id="contact" className="py-32 bg-off-black text-cream">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="font-display text-5xl md:text-7xl mb-8">
                            Start Your<br />Journey
                        </h2>
                        <p className="text-xl text-cream/70 mb-12 max-w-md">
                            Beginning your journey with us is simple. Share your vision, and we&apos;ll handle the rest.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group">
                                <div className="font-display text-4xl text-burgundy/50 group-hover:text-burgundy transition-colors">01</div>
                                <div>
                                    <h3 className="text-lg font-bold mb-2">Initial Consultation</h3>
                                    <p className="text-cream/60 text-sm">Share your vision, requirements, and brand guidelines.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-6 group">
                                <div className="font-display text-4xl text-burgundy/50 group-hover:text-burgundy transition-colors">02</div>
                                <div>
                                    <h3 className="text-lg font-bold mb-2">Custom Proposal</h3>
                                    <p className="text-cream/60 text-sm">Receive a detailed proposal with design mockups and pricing.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-6 group">
                                <div className="font-display text-4xl text-burgundy/50 group-hover:text-burgundy transition-colors">03</div>
                                <div>
                                    <h3 className="text-lg font-bold mb-2">Production & Delivery</h3>
                                    <p className="text-cream/60 text-sm">We handle everything from manufacturing to nationwide delivery.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-cream/10 space-y-3 font-sans text-sm">
                            <p className="text-cream/40 uppercase text-xs tracking-wider">Direct</p>
                            <p><a href={site.phoneHref} className="text-cream/80 hover:text-white transition-colors">{site.phone}</a></p>
                            <p><a href={site.emailHref} className="text-cream/80 hover:text-white transition-colors">{site.email}</a></p>
                        </div>
                    </div>

                    <div className="bg-cream/5 p-8 md:p-12 rounded-2xl backdrop-blur-sm border border-cream/10">
                        <p className="font-sans text-xs uppercase tracking-wider text-cream/40 mb-6">
                            This form prepares your enquiry and opens WhatsApp.
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-xs uppercase tracking-wider mb-2 text-cream/60">Name *</label>
                                    <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} className="w-full bg-transparent border-b border-cream/20 py-2 focus:outline-none focus:border-burgundy transition-colors" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label htmlFor="company" className="block text-xs uppercase tracking-wider mb-2 text-cream/60">Company</label>
                                    <input id="company" name="company" type="text" value={form.company} onChange={handleChange} className="w-full bg-transparent border-b border-cream/20 py-2 focus:outline-none focus:border-burgundy transition-colors" placeholder="Company Ltd" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-xs uppercase tracking-wider mb-2 text-cream/60">Email</label>
                                <input id="email" name="email" type="email" value={form.email} onChange={handleChange} className="w-full bg-transparent border-b border-cream/20 py-2 focus:outline-none focus:border-burgundy transition-colors" placeholder="you@company.com" />
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-xs uppercase tracking-wider mb-2 text-cream/60">Service Required *</label>
                                <select id="service" name="service" required value={form.service} onChange={handleChange} className="w-full bg-transparent border-b border-cream/20 py-2 focus:outline-none focus:border-burgundy transition-colors text-cream [&>option]:text-black">
                                    <option>Corporate Uniforms</option>
                                    <option>Corporate Gifting</option>
                                    <option>Corporate Events</option>
                                    <option>Multiple Services</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-xs uppercase tracking-wider mb-2 text-cream/60">Requirement / Message</label>
                                <textarea id="message" name="message" rows="4" value={form.message} onChange={handleChange} className="w-full bg-transparent border-b border-cream/20 py-2 focus:outline-none focus:border-burgundy transition-colors resize-none" placeholder="Tell us about your requirement..." />
                            </div>

                            <button type="submit" className="w-full py-4 bg-burgundy text-cream font-medium rounded-full hover:bg-cream hover:text-off-black transition-all duration-300 mt-4">
                                Send Enquiry on WhatsApp
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
