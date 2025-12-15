import React from 'react';

const news = [
    {
        title: 'Open Source Job Report Show More Openings.',
        category: 'Technology',
        image: 'https://images.unsplash.com/photo-1504384308090-c54be3855833?auto=format&fit=crop&q=80&w=600',
        date: '20 Oct 2024',
        author: 'Admin'
    },
    {
        title: 'Tech Firms Support Huawei\'s 5G Plans.',
        category: 'Agency',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600',
        date: '18 Oct 2024',
        author: 'Admin'
    },
    {
        title: 'Servo Project Joins The Linux Foundation.',
        category: 'IT Solution',
        image: 'https://images.unsplash.com/photo-1531297461136-82lw8e129e?auto=format&fit=crop&q=80&w=600',
        date: '15 Oct 2024',
        author: 'Admin'
    }
];

const Blog = () => {
    return (
        <section id="blog" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8">

                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="mb-6 md:mb-0">
                        <span className="text-primary font-bold tracking-wide uppercase text-sm mb-2 block font-sans">Blog & News</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-secondary font-heading">
                            Read Latest <span className="text-primary">News</span>
                        </h2>
                    </div>
                    <button className="hidden md:block bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-full font-bold transition-all">
                        View All News
                    </button>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {news.map((item, index) => (
                        <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                            <div className="relative h-60 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    {item.category}
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-sans">
                                    <span className="flex items-center gap-1">
                                        <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                        {item.date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                        {item.author}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-secondary mb-4 line-clamp-2 hover:text-primary transition-colors font-heading cursor-pointer">
                                    {item.title}
                                </h3>

                                <a href="#" className="inline-flex items-center gap-2 text-secondary font-bold text-sm tracking-wide group-hover:text-primary transition-colors font-sans">
                                    Read More
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <button className="bg-secondary text-white px-8 py-3 rounded-full font-bold">
                        View All News
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Blog;
