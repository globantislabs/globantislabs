import React from 'react';

const projects = [
    {
        title: 'Product Design',
        category: 'IT Technology',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
    },
    {
        title: 'Platform Integration',
        category: 'IT Technology',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
    },
    {
        title: 'Web Development',
        category: 'IT Technology',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600',
    }
];

const CaseStudies = () => {
    return (
        <section className="py-20 bg-[#F2F4F8]">
            <div className="container mx-auto px-4 md:px-8">

                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="mb-6 md:mb-0">
                        <span className="text-primary font-bold tracking-wide uppercase text-sm mb-2 block font-sans">Project</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-secondary font-heading">
                            Explore Our Recent <br /> <span className="text-primary">Case Studies</span>
                        </h2>
                    </div>
                    <button className="hidden md:block bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-full font-bold transition-all">
                        View All Projects
                    </button>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-3xl h-[400px]">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-75"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/50 to-transparent opacity-90 transition-opacity duration-300"></div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <span className="text-primary font-bold text-sm mb-2 block font-sans">{project.category}</span>
                                <h3 className="text-2xl font-bold text-white mb-4 font-heading">{project.title}</h3>
                                <a href="#" className="inline-flex items-center gap-2 text-white font-bold text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 font-sans">
                                    Read More
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <button className="bg-secondary text-white px-8 py-3 rounded-full font-bold">
                        View All Projects
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
