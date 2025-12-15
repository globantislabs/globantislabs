import React from 'react';

const team = [
    {
        name: 'Robert Fox',
        role: 'Senior Engineer',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
    },
    {
        name: 'Kristin Watson',
        role: 'Product Manager',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    },
    {
        name: 'Cody Fisher',
        role: 'UI/UX Designer',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
    },
];

const Team = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">

                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wide uppercase text-sm mb-2 block">Team Members</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-secondary">
                        Our Support <span className="text-primary">Engineers</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className="relative overflow-hidden h-80">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                {/* Social Overlay */}
                                <div className="absolute inset-0 bg-secondary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                        {['twitter', 'facebook', 'linkedin', 'instagram'].map((social) => (
                                            <a key={social} href="#" className="w-10 h-10 rounded-full bg-white text-secondary hover:bg-primary hover:text-white flex items-center justify-center transition-colors">
                                                <span className="sr-only">{social}</span>
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                                </svg>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-[22px] font-bold text-secondary mb-1 font-heading">{member.name}</h3>
                                <p className="text-[#505056] font-medium font-sans">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Team;
