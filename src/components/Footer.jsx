import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#050520] text-gray-300 pt-20 pb-8 text-sm">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Info */}
                    <div className="space-y-6">
                        <a href="#" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                                G
                            </div>
                            <div className="flex flex-col justify-center">
                                <span className="text-2xl font-bold font-heading leading-none tracking-tight text-white">
                                    Globantis<span className="text-primary">labs</span>
                                </span>
                            </div>
                        </a>
                        <p className="text-gray-400 leading-relaxed font-sans">
                            We are a premium agency that gives you the best IT solutions for your business. We are always ready to help you grow.
                        </p>
                        <div className="flex gap-4">
                            {['facebook', 'twitter', 'instagram', 'linkedin'].map(social => (
                                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                    <span className="sr-only">{social}</span>
                                    <div className="w-4 h-4 bg-current rounded-sm"></div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links 1 */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 font-heading">Company</h3>
                        <ul className="space-y-3 font-sans">
                            <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Our History</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Our Team</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Links 2 */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 font-heading">Services</h3>
                        <ul className="space-y-3 font-sans">
                            <li><a href="#" className="hover:text-primary transition-colors">Web Development</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">App Solutions</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Cloud Tech</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Data Analysis</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Cyber Security</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 font-heading">Contact Info</h3>
                        <ul className="space-y-4 font-sans">
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-primary">📍</span>
                                <span>1234 New York, USA <br /> NY 10001</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-primary">📞</span>
                                <span>+123 456 7890</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-primary">✉️</span>
                                <span>info@techtlk.com</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-center md:text-left">© 2024 Techtlk. All Rights Reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
