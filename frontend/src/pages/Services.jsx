import React from 'react';
import { useParams } from 'react-router-dom';
import { servicesData } from '../servicesData';

const Services = () => {
    const { serviceSlug } = useParams();
    const service = servicesData.find((service) => service.slug === serviceSlug);

    if (!service) {
        return <div className="text-center text-gray-600 mt-10">Service not found</div>;
    }

    return (
        <div className="relative">
            {/* Hero Section */}
            <div className="bg-white pb-6 sm:pb-8 lg:pb-12 pt-24">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
                        {/* Content - start */}
                        <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
                            <p className="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">{service.tagline}</p>
                            <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">{service.title}</h1>
                            <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">{service.description}</p>
                            <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
                                <a href={service.startLink} className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Start now</a>
                                <a href={service.tourLink} className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Take tour</a>
                            </div>
                        </div>
                        {/* Content - end */}

                        {/* Image - start */}
                        <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
                            <img src={service.imageUrl} loading="lazy" alt={service.altText} className="h-full w-full object-cover object-center" />
                        </div>
                        {/* Image - end */}
                    </section>
                </div>
            </div>

            {/* Main Content */}
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="mb-10 md:mb-16">
                        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">{service.featuresTitle}</h2>
                        <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">{service.featuresDescription}</p>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
                        {service.features.map((feature, index) => (
                            <div key={index} className="flex gap-4 md:gap-6">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d={feature.iconPath} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="mb-2 text-lg font-semibold md:text-xl">{feature.name}</h3>
                                    <p className="mb-2 text-gray-500">{feature.description}</p>
                                    <a href={feature.link} className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">More</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
