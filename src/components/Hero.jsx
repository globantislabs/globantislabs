import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
            {/* Background shape */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f2f4f8] -skew-x-12 transform origin-top-right z-0"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="inline-block px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-blue-100/50 shadow-sm">
                            <span className="text-secondary font-bold tracking-wider text-sm font-sans flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                TRANSFORMING BUSINESSES GLOBALLY
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-[1.1] text-secondary">
                            Transform Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600">Vision</span> Into <br />
                            Digital Reality
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed font-sans">
                            Don't just compete—dominate your market. We craft high-impact digital solutions that drive growth, engage customers, and elevate your brand authority.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button className="bg-primary hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2 hover:-translate-y-1">
                                Start Your Transformation
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                            <button className="bg-white hover:bg-gray-50 text-secondary border border-gray-200 px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 hover:-translate-y-1">
                                View Success Stories
                            </button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="pt-8 flex items-center gap-8 text-sm font-bold text-gray-400 font-heading">
                            <div className="flex items-center gap-2">
                                <span className="text-3xl text-secondary">500+</span>
                                <span className="leading-tight text-xs">Projects <br /> Delivered</span>
                            </div>
                            <div className="w-px h-8 bg-gray-300"></div>
                            <div className="flex items-center gap-2">
                                <span className="text-3xl text-secondary">98%</span>
                                <span className="leading-tight text-xs">Client <br /> Retention</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Images (Collage) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative z-10 grid grid-cols-2 gap-6">
                            <div className="space-y-6 mt-16">
                                <img
                                    src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=600"
                                    alt="Meeting"
                                    className="rounded-3xl shadow-xl w-full h-[220px] object-cover hover:scale-105 transition-transform duration-500"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600"
                                    alt="Working"
                                    className="rounded-3xl shadow-xl w-full h-[280px] object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="space-y-6">
                                <img
                                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600"
                                    alt="Planning"
                                    className="rounded-3xl shadow-xl w-full h-[280px] object-cover hover:scale-105 transition-transform duration-500"
                                />
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-primary p-6 rounded-3xl shadow-xl text-white flex flex-col justify-center items-center text-center h-[220px] relative overflow-hidden group border-4 border-white"
                                >
                                    <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                                    <div className="relative z-10">
                                        <h3 className="text-5xl font-bold mb-2 font-heading">25+</h3>
                                        <p className="text-white/90 group-hover:text-white text-sm font-medium tracking-wide">Years Experience <br /> In IT Solutions</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-100/40 rounded-full blur-3xl -z-10"></div>

                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -bottom-8 -left-8 bg-white p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-20 hidden md:block border-l-4 border-primary"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full bg-[#E6F0FF] flex items-center justify-center text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-secondary font-heading">3.5k+</p>
                                    <p className="text-sm text-gray-500 font-sans">Active Clients</p>
                                </div>
                            </div>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
