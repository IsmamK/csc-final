import React, { useState, useEffect } from 'react';

const Services = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Mock JSON data
    const mockData = {
      divider: "", // Replace with your divider image
      bgColor: "white", // Background color for the services section
      textColor: "black", // Text color for the services section
      cardBgColor: "#ffffff", // Background color for the service cards
      cardTextColor: "#000000", // Text color for the service cards
      heading: "Our Services",
      servicesList: [
        {
          title: "Security Solutions",
          description: "We provide comprehensive security services ensuring the safety of your property with 24/7 surveillance and professional personnel.",
       
        },
        {
          title: "Professional Cleaning",
          description: "Our expert cleaning team ensures a spotless environment, utilizing eco-friendly products to maintain hygiene and freshness.",
  
        },
        {
          title: "Pest Control",
          description: "We offer effective pest control solutions, using safe and modern techniques to keep your spaces free from pests.",
       
        },
        {
          title: "Housekeeping Services",
          description: "Our dedicated housekeeping staff provides daily services to ensure that your property is always clean, organized, and welcoming.",
         
        },
      ]
    };

    // Simulating an API call
    setData(mockData);
  }, []);

  if (!data) return <div>Loading...</div>; // Loading state

  return (
    <div className='relative'>
      <img src={data.divider || ""} className='absolute top-0 z-100' />

      <div className='pt-20 md:pt-20 lg:pt-40' style={{ backgroundColor: data.bgColor, color: data.textColor }}>
        <h1 className="text-7xl font-extrabold text-center my-10">{data.heading}</h1>

        <div className="grid mb-8 gap-10 rounded-lg md:mb-12 md:grid-cols-2 mt-4 w-3/4 mx-auto">
          {data.servicesList.map((service, index) => (
            <figure
              key={index}
              className="flex flex-col shadow-md items-center justify-center p-8 text-center border border-gray-400 rounded-lg"
              style={{ backgroundColor: data.cardBgColor, color: data.cardTextColor }} // Set card background and text color dynamically
            >
              <blockquote className="max-w-2xl mx-auto mb-4 lg:mb-8">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="my-4">{service.description}</p>
              </blockquote>
           
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
