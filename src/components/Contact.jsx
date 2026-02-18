"use client";
export default function Contact() {
    return (
        <section id="contact" className="py-32 bg-off-black text-cream">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="font-display text-5xl md:text-7xl mb-8">
                            Start Your<br />Journey
                        </h2>
                        <p className="text-xl text-cream/70 mb-12 max-w-md">
                            Beginning your journey with us is simple. Share your vision, and we'll handle the rest.
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
                                    <p className="text-cream/60 text-sm">We handle everything from manufacturing to delivery.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-cream/5 p-8 md:p-12 rounded-2xl backdrop-blur-sm border border-cream/10">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs uppercase tracking-wider mb-2 text-cream/60">Name</label>
                                    <input type="text" className="w-full bg-transparent border-b border-cream/20 py-2 focus:outline-none focus:border-burgundy transition-colors" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase tracking-wider mb-2 text-cream/60">Company</label>
                                    <input type="text" className="w-full bg-transparent border-b border-cream/20 py-2 focus:outline-none focus:border-burgundy transition-colors" placeholder="Company Ltd" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-wider mb-2 text-cream/60">Email</label>
                                <input type="email" className="w-full bg-transparent border-b border-cream/20 py-2 focus:outline-none focus:border-burgundy transition-colors" placeholder="john@company.com" />
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-wider mb-2 text-cream/60">Services of Interest</label>
                                <select className="w-full bg-transparent border-b border-cream/20 py-2 focus:outline-none focus:border-burgundy transition-colors text-cream [&>option]:text-black">
                                    <option>Corporate Uniforms</option>
                                    <option>Corporate Gifting</option>
                                    <option>Event Management</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-wider mb-2 text-cream/60">Message</label>
                                <textarea rows="4" className="w-full bg-transparent border-b border-cream/20 py-2 focus:outline-none focus:border-burgundy transition-colors resize-none" placeholder="Tell us about your project..." />
                            </div>

                            <button type="button" className="w-full py-4 bg-burgundy text-cream font-medium rounded-full hover:bg-cream hover:text-off-black transition-all duration-300 mt-4">
                                Send Inquiry
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
