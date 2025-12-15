import React from 'react';
import { motion } from 'framer-motion';

const ModernCTA = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="bg-secondary rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center shadow-2xl">
                    {/* Background Circles */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10 max-w-4xl mx-auto space-y-8"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold font-heading text-white leading-tight">
                            Ready to <span className="text-primary">Dominate</span> Your Industry?
                        </h2>
                        <p className="text-lg md:text-xl text-gray-300 font-sans max-w-2xl mx-auto leading-relaxed">
                            Stop chasing trends. Start setting them. Join the 500+ global brands that trust Globantislabs to deliver world-class digital experiences.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <a href="#contact" className="inline-block bg-primary hover:bg-orange-600 text-white px-10 py-5 rounded-full font-bold text-lg transition-transform hover:-translate-y-1 shadow-xl shadow-orange-500/20">
                                Get Your Proposal
                            </a>
                            <a href="#portfolio" className="inline-block bg-transparent border border-white/30 hover:bg-white/10 text-white px-10 py-5 rounded-full font-bold text-lg transition-transform hover:-translate-y-1 backdrop-blur-sm">
                                View Our Work
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ModernCTA;
