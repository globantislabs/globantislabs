import React from 'react';

const features = [
    {
        title: 'Scalability & Flexibility',
        description: 'Our global marketing expertise, advanced supply chain technology & customized SEO solutions will help you analyze, develop.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        )
    },
    {
        title: 'Strong Security',
        description: 'We prioritize the security of your data with advanced encryption and robust protection measures against cyber threats.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
        )
    },
    {
        title: 'High Performance',
        description: 'Our solutions are optimized for speed and efficiency, ensuring your business operations run smoothly without interruption.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        )
    }
];

const WhyChooseUs = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Image Side */}
                    <div className="relative">
                        <div className="relative z-10 rounded-[30px] overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                                alt="Creative Team"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Floating Blue Card */}
                        <div className="absolute bottom-10 right-0 md:-right-10 z-20 bg-primary p-8 rounded-[20px] shadow-xl max-w-xs text-center text-white animate-[float_4s_ease-in-out_infinite]">
                            <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </div>
                            <h3 className="text-3xl font-bold mb-2 font-heading">Since 2005</h3>
                            <p className="text-white/90 font-medium font-sans">
                                We are giving IT Solutions Services over the world
                            </p>
                        </div>
                    </div>

                    {/* Right Content Side */}
                    <div className="space-y-8 pl-0 lg:pl-10">
                        <div>
                            <span className="text-primary font-bold tracking-wide uppercase text-sm mb-2 block font-heading">[ Why Techtlk ]</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-secondary leading-[1.2] font-heading">
                                We Make The Most Creative Digital Solutions
                            </h2>
                        </div>

                        {/* Feature List */}
                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex gap-6 group">
                                    <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-[#F3F5F9] flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                                        <div className="group-hover:text-white transition-colors duration-300">
                                            {feature.icon}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-secondary mb-3 font-heading">{feature.title}</h4>
                                        <p className="text-[#505056] leading-relaxed font-sans text-sm md:text-base">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
