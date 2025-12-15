import React from 'react';

const Testimonials = () => {
    return (
        <section className="relative py-24 bg-[#0B0B3F] text-white overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="text-center mb-12">
                    <span className="text-primary font-bold tracking-wide uppercase text-sm mb-2 block font-sans">Testimonials</span>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading">
                        Free Consulting For <span className="text-primary">Customers</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                            <div className="flex items-center gap-4 mb-6">
                                <img
                                    src={`https://i.pravatar.cc/100?img=${item + 10}`}
                                    alt="User"
                                    className="w-14 h-14 rounded-full border-2 border-primary"
                                />
                                <div>
                                    <h4 className="font-bold text-lg font-heading">Albert Flores</h4>
                                    <p className="text-sm text-gray-400 font-sans">Marketing Coordinator</p>
                                </div>
                            </div>
                            <div className="flex text-yellow-400 mb-4 text-sm">
                                {'★'.repeat(5)}
                            </div>
                            <p className="text-gray-300 leading-relaxed italic">
                                "The team at Techtlk exceeded our expectations. Their attention to detail and innovative solutions helped us streamline our operations significantly."
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
