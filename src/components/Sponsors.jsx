import React from 'react';

const sponsors = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png'
];

const Sponsors = () => {
    return (
        <section className="py-12 border-t border-gray-100 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {sponsors.map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt="Sponsor"
                            className="h-8 md:h-10 object-contain hover:scale-110 transition-transform duration-300"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sponsors;
