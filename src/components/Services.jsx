import React from 'react';

const services = [
    {
        id: 1,
        title: 'Enterprise Software',
        description: 'Scalable, secure, and custom-built architectures that drive operational efficiency and future-proof your business.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
        color: 'bg-primary'
    },
    {
        id: 2,
        title: 'App Development',
        description: 'Engage customers on the go with intuitive, high-performance mobile experiences that convert users into loyal advocates.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
        ),
        color: 'bg-primary'
    },
    {
        id: 3,
        title: 'Strategic IT Consulting',
        description: 'Navigate digital transformation with confidence. Our experts map out the technology improvements that will yield the highest ROI.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
            </svg>
        ),
        color: 'bg-primary'
    },
    {
        id: 4,
        title: 'Cyber Security',
        description: 'Protect your brand reputation and data assets. We build ironclad security perimeters that let you operate without fear.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
        ),
        color: 'bg-primary'
    }
];

const Services = () => {
    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">

                <div className="flex justify-between items-end mb-16">
                    <div className="max-w-2xl">
                        <span className="text-primary font-bold tracking-wide uppercase text-sm mb-2 block">Our Services</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-secondary">
                            We Provide The Best <br />
                            <span className="text-primary">IT Solutions</span>
                        </h2>
                    </div>
                    <button className="hidden md:block bg-primary hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-orange-500/20">
                        View All Services
                    </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-10 rounded-[20px] shadow-[0_0_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 group border border-transparent hover:border-orange-100 hover:-translate-y-2"
                        >
                            <div className={`w-[70px] h-[70px] rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm text-white`}>
                                {service.icon}
                            </div>
                            <h3 className="text-[22px] font-bold text-secondary mb-4 group-hover:text-primary transition-colors font-heading">
                                {service.title}
                            </h3>
                            <p className="text-[#505056] mb-6 line-clamp-3 leading-relaxed">
                                {service.description}
                            </p>
                            <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-secondary group-hover:text-primary transition-colors uppercase tracking-wider">
                                Read More
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <button className="bg-primary hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-orange-500/20">
                        View All Services
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Services;
