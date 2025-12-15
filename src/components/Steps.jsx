import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const stepContent = [
    {
        id: 1,
        title: 'Step 1: Planning and Requirement Analysis',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ), // Placeholder for the "Car/Gear" icon
        features: [
            {
                title: 'Define The Project Scope',
                description: 'This step ensure a comprehensive approach to delivering IT solutions, addressing both the technical and user aspects of the project.'
            },
            {
                title: 'Gather Requirements',
                description: 'This step ensure a comprehensive approach to delivering IT solutions, addressing both the technical and user aspects of the project.'
            },
            {
                title: 'Create A Project Timeline',
                description: 'This step ensure a comprehensive approach to delivering IT solutions, addressing both the technical and user aspects of the project.'
            },
            {
                title: 'Develop A Project Budget',
                description: 'This step ensure a comprehensive approach to delivering IT solutions, addressing both the technical and user aspects of the project.'
            }
        ]
    },
    {
        id: 2,
        title: 'Step 2: Design & Prototyping',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        ),
        features: [
            {
                title: 'Create Wireframes',
                description: 'We build the blueprint of your application to visualize the structure and flow before development begins.'
            },
            {
                title: 'UI/UX Design',
                description: 'Our designers create intuitive and visually appealing interfaces that ensure a seamless user experience.'
            },
            {
                title: 'Interactive Prototypes',
                description: 'We develop clickable prototypes to test interactions and gather early feedback from stakeholders.'
            },
            {
                title: 'Technical Architecture',
                description: 'We verify the technical feasibility of the design and plan the underlying system architecture.'
            }
        ]
    },
    {
        id: 3,
        title: 'Step 3: Financial & Resource Planning',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        features: [
            {
                title: 'Cost Estimation',
                description: 'Detailed breakdown of development costs to ensure the project stays within the allocated budget.'
            },
            {
                title: 'Resource Allocation',
                description: 'Assigning the right team members and technologies to ensure efficient project execution.'
            },
            {
                title: 'Risk Assessment',
                description: 'Identifying potential financial risks and creating mitigation strategies to avoid overruns.'
            },
            {
                title: 'ROI Analysis',
                description: 'Analyzing the potential return on investment to maximize business value.'
            }
        ]
    },
    {
        id: 4,
        title: 'Step 4: Launch & Deployment',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        features: [
            {
                title: 'Final Testing',
                description: 'Rigorous QA testing to ensure the solution is bug-free and meets all requirements.'
            },
            {
                title: 'Deployment Strategy',
                description: 'Executing a smooth deployment plan to launch the application with minimal downtime.'
            },
            {
                title: 'User Training',
                description: 'Providing comprehensive training and documentation to ensure smooth adoption.'
            },
            {
                title: 'Post-Launch Support',
                description: 'Ongoing maintenance and support to ensure the long-term success of the solution.'
            }
        ]
    }
];

const Steps = () => {
    const [activeStep, setActiveStep] = useState(1);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-bold tracking-wide uppercase text-sm mb-2 block font-heading">[ How It Works ]</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-secondary font-heading">
                        4 Simple Steps to Success
                    </h2>
                </motion.div>

                {/* Steps Navigation */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 relative max-w-6xl mx-auto">
                    {stepContent.map((step, index) => (
                        <React.Fragment key={step.id}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                onClick={() => setActiveStep(step.id)}
                                className={`relative z-10 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 cursor-pointer transition-all duration-300 ${activeStep === step.id
                                    ? 'bg-primary text-white shadow-xl shadow-orange-500/30 scale-105'
                                    : 'bg-white text-secondary shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-lg hover:-translate-y-1'
                                    }`}
                            >
                                <div className={`text-4xl mb-2 transition-transform duration-300 ${activeStep === step.id ? 'scale-110' : 'text-primary'}`}>
                                    {/* Icons based on screenshot: 1:Business/Office, 2:Home/House, 3:Money/Finance, 4:Global/World */}
                                    {step.id === 1 && (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    )}
                                    {step.id === 2 && (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                        </svg>
                                    )}
                                    {step.id === 3 && (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    )}
                                    {step.id === 4 && (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    )}
                                </div>
                                <span className={`font-bold text-lg font-heading ${activeStep === step.id ? 'text-white' : 'text-secondary'}`}>Step {step.id}</span>

                                {/* Active Arrow Indicator */}
                                {activeStep === step.id && (
                                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-primary rotate-45 z-0"></div>
                                )}
                            </motion.div>

                            {/* Connecting Arrow */}
                            {
                                index < stepContent.length - 1 && (
                                    <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 -right-6 lg:-right-8 z-0 items-center justify-center w-12 text-gray-200">
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                            <path d="M4 12H20M20 12L15 7M20 12L15 17" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                )
                            }
                        </React.Fragment>
                    ))}
                </div>

                {/* Content Area */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-[#F8F9FC] rounded-[40px] p-8 md:p-16 relative overflow-hidden"
                >
                    {/* Decorative Blob */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeStep}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="text-center mb-12 relative z-10">
                                <h3 className="text-2xl md:text-3xl font-bold text-secondary font-heading">
                                    <span className="text-primary mr-2">Step {activeStep}:</span>
                                    {stepContent[activeStep - 1].title.split(': ')[1]}
                                </h3>
                            </div>

                            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 relative z-10">
                                {stepContent[activeStep - 1].features.map((feature, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-start gap-4"
                                    >
                                        <div className="flex-shrink-0 mt-1 text-primary">
                                            {/* Double Check Icon */}
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-secondary text-lg mb-2 font-heading">{feature.title}</h4>
                                            <p className="text-[#505056] leading-relaxed font-sans text-sm md:text-base">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>

            </div>
        </section >
    );
};

export default Steps;
