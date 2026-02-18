export default function Footer() {
    return (
        <footer className="bg-off-black text-cream pt-24 pb-12 px-6 md:px-12 rounded-t-[3rem] mt-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
                    <div>
                        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl mb-8 leading-none">
                            Let&apos;s Create<br />Impact.
                        </h2>
                        <p className="font-sans text-lg text-cream/70 max-w-md">
                            Ready to elevate your corporate identity? Partner with us for premium uniforms, gifting, and events.
                        </p>
                    </div>

                    <div className="space-y-12">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div>
                                <h3 className="font-display text-xl mb-4 text-sage">Contact</h3>
                                <p className="font-sans text-cream/90 hover:text-white transition-colors">
                                    <a href="tel:+919393220094">+91 93932 20094</a>
                                </p>
                                <p className="font-sans text-cream/90 hover:text-white transition-colors">
                                    <a href="mailto:creations.libra@gmail.com">creations.libra@gmail.com</a>
                                </p>
                            </div>

                            <div>
                                <h3 className="font-display text-xl mb-4 text-sage">Location</h3>
                                <p className="font-sans text-cream/90">
                                    Hyderabad, Telangana<br />
                                    Serving Clients Pan-India
                                </p>
                            </div>
                        </div>

                        <div className="border-t border-cream/10 pt-8">
                            <h3 className="font-display text-xl mb-4 text-sage">Services</h3>
                            <ul className="grid grid-cols-2 gap-4 font-sans text-cream/80">
                                <li>Corporate Uniforms</li>
                                <li>Corporate Gifting</li>
                                <li>Event Management</li>
                                <li>Brand Merchandising</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-end pt-12 border-t border-cream/10">
                    <div className="mb-6 md:mb-0">
                        <h4 className="font-display text-9xl md:text-[12rem] leading-none opacity-10 select-none">
                            LIBRA
                        </h4>
                    </div>

                    <div className="flex gap-8 font-sans text-sm text-cream/50">
                        <span>© 2024 Libra Creations</span>
                        <a href="#" className="hover:text-cream transition-colors">Privacy</a>
                        <a href="#" className="hover:text-cream transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
