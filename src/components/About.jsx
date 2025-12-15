import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Image */}
                    <div className="relative">
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/about-office.png"
                                alt="Team Collaboration"
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Experience Badge */}
                        <div className="absolute -bottom-10 -right-10 z-20 bg-primary p-8 rounded-tr-3xl rounded-bl-3xl shadow-xl max-w-xs hidden md:block animate-float">
                            <div className="flex items-start gap-4 text-white">
                                <div className="text-5xl font-bold font-heading">25+</div>
                                <div className="text-sm font-medium leading-tight pt-2 font-sans">Years Of <br /> Experience</div>
                            </div>
                        </div>

                        {/* Decorative dots */}
                        <div className="absolute -top-12 -left-12 w-64 h-64 bg-dots-pattern opacity-20 -z-10"></div>
                    </div>

                    {/* Right Content */}
                    <div className="space-y-8">
                        <div>
                            <span className="text-primary font-bold tracking-wide uppercase text-sm mb-2 block font-sans">About Us</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-secondary leading-tight font-heading">
                                We Are Increasing <br />
                                <span className="text-primary">Business Success</span> With <br />
                                IT Solution
                            </h2>
                        </div>

                        <p className="text-[#505056] text-lg leading-relaxed font-sans">
                            Whatever your business needs, we have the right IT solutions for your business. We are a team of experts who are ready to help you grow your business. We provide best-in-class services.
                        </p>

                        {/* Features/Checklist */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-secondary text-lg font-heading">Quality Solution</h4>
                                    <p className="text-sm text-[#505056]">We provide high quality solutions.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-primary mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-secondary text-lg font-heading">24/7 Support</h4>
                                    <p className="text-sm text-[#505056]">We are always here to help you.</p>
                                </div>
                            </div>
                        </div>

                        {/* Author/Signature */}
                        <div className="pt-6 border-t border-gray-100 flex items-center gap-6">
                            <div className="flex items-center gap-4">
                                <img src="https://ui-avatars.com/api/?name=David+Smith&background=random" alt="CEO" className="w-12 h-12 rounded-full" />
                                <div>
                                    <h5 className="font-bold text-secondary font-heading">David Smith</h5>
                                    <span className="text-sm text-gray-500 font-sans">CEO & Founder</span>
                                </div>
                            </div>
                            <div className="h-10 w-px bg-gray-200"></div>
                            <button className="text-primary font-bold hover:underline font-sans">
                                Discover More
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
