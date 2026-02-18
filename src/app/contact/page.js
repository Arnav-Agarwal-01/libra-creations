// FILE: src/app/contact/page.js
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
    return (
        <div className="bg-off-black min-h-screen text-cream">

            {/* HERO SECTION */}
            <section className="pt-48 pb-12 px-6 md:px-12">
                <div className="container mx-auto">
                    <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-cream mb-6">
                        LET&apos;S TALK
                    </h1>
                    <p className="font-sans text-xl text-cream/70 max-w-2xl mb-12">
                        Ready to elevate your corporate identity? Whether it&apos;s a new uniform line, a festive gifting suite, or a landmark event—we&apos;re here to make it happen.
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
                            <h3 className="font-display text-3xl text-burgundy mb-8">Headquarters</h3>
                            <p className="font-sans text-lg text-cream/80 leading-relaxed">
                                Libra Creations<br />
                                Plot No. 45, Jubilee Hills,<br />
                                Hyderabad, Telangana 500033<br />
                                India
                            </p>
                        </div>

                        <div>
                            <h3 className="font-display text-3xl text-burgundy mb-8">Reach Us</h3>
                            <div className="space-y-4 font-sans text-lg text-cream/80">
                                <p>
                                    <span className="text-cream/40 uppercase text-xs tracking-wider block mb-1">Phone</span>
                                    <a href="tel:+919393220094" className="hover:text-white transition-colors">+91 93932 20094</a>
                                </p>
                                <p>
                                    <span className="text-cream/40 uppercase text-xs tracking-wider block mb-1">Email</span>
                                    <a href="mailto:creations.libra@gmail.com" className="hover:text-white transition-colors">creations.libra@gmail.com</a>
                                </p>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-cream/10">
                            <p className="font-sans text-sm text-cream/40 uppercase tracking-widest mb-4">
                                Working Hours
                            </p>
                            <p className="font-sans text-cream/80">
                                Mon - Sat: 10:00 AM - 7:00 PM<br />
                                Sun: Closed
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-cream/5 p-8 md:p-12 rounded-3xl backdrop-blur-sm border border-cream/10">
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-xs uppercase tracking-wider mb-2 text-cream/60">Name</label>
                                    <input type="text" className="w-full bg-transparent border-b border-cream/20 py-3 focus:outline-none focus:border-burgundy transition-colors" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase tracking-wider mb-2 text-cream/60">Company</label>
                                    <input type="text" className="w-full bg-transparent border-b border-cream/20 py-3 focus:outline-none focus:border-burgundy transition-colors" placeholder="Company Ltd" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-wider mb-2 text-cream/60">Email</label>
                                <input type="email" className="w-full bg-transparent border-b border-cream/20 py-3 focus:outline-none focus:border-burgundy transition-colors" placeholder="john@company.com" />
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-wider mb-2 text-cream/60">Service Interest</label>
                                <select className="w-full bg-transparent border-b border-cream/20 py-3 focus:outline-none focus:border-burgundy transition-colors text-cream [&>option]:text-black">
                                    <option>Corporate Uniforms</option>
                                    <option>Corporate Gifting</option>
                                    <option>Event Management</option>
                                    <option>Brand Merchandising</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-wider mb-2 text-cream/60">Message</label>
                                <textarea rows="4" className="w-full bg-transparent border-b border-cream/20 py-3 focus:outline-none focus:border-burgundy transition-colors resize-none" placeholder="Tell us about your project requirements..." />
                            </div>

                            <button type="button" className="w-full py-5 bg-burgundy text-cream font-medium rounded-full hover:bg-cream hover:text-off-black transition-all duration-300 mt-6 text-lg">
                                Send Inquiry
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* MAP PLACEHOLDER */}
            <section className="h-[50vh] w-full bg-cream/10 relative">
                <div className="absolute inset-0 flex items-center justify-center text-cream/20 font-display text-4xl">
                    [ GOOGLE MAP INTEGRATION ]
                </div>
                {/* In a real app, this would be an iframe or map component */}
                <div className="w-full h-full bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Hyderabad,India&zoom=12&size=1600x600&sensor=false')] bg-cover bg-center opacity-50 grayscale hover:grayscale-0 transition-all duration-700" />
            </section>
        </div>
    );
}
