import React from 'react';
import { FaHandshake, FaThumbsUp, FaLightbulb, FaDollarSign, FaHeadset } from 'react-icons/fa'; // Importing icons

const WhyUs = () => {
  const options = {
    divider: "path_to_divider_image.png", // Set your image path
    title: "Why Choose Us?",
    reasons: [
      {
        icon: <FaHandshake className="text-4xl" />,
        title: "Trusted Expertise",
        description: "Years of industry expertise ensuring success in every project we undertake.",
        bgColor: "#4A5568", // Background color for this reason
        textColor: "#fff" // Text color for this reason
      },
      {
        icon: <FaThumbsUp className="text-4xl" />,
        title: "Customer First",
        description: "Our customers are our priority. We guarantee satisfaction at every step.",
        bgColor: "#2B6CB0", // Background color for this reason
        textColor: "#fff" // Text color for this reason
      },
      {
        icon: <FaLightbulb className="text-4xl" />,
        title: "Innovative Solutions",
        description: "We offer modern and innovative solutions that keep your business ahead.",
        bgColor: "#38A169", // Background color for this reason
        textColor: "#fff" // Text color for this reason
      },
      {
        icon: <FaDollarSign className="text-4xl" />,
        title: "Cost Effective",
        description: "Get the best value for your investment without compromising on quality.",
        bgColor: "#D53F8C", // Background color for this reason
        textColor: "#fff" // Text color for this reason
      },
      {
        icon: <FaHeadset className="text-4xl" />,
        title: "24/7 Support",
        description: "We provide round-the-clock support to ensure all your needs are met.",
        bgColor: "#ED8936", // Background color for this reason
        textColor: "#fff" // Text color for this reason
      }
    ],
    bgColor: "#1a202c", // Main container background color
    textColor: "#fff" // Main container text color
  };

  return (
    <div className="relative py-16"
      style={{ backgroundColor: options.bgColor, color: options.textColor }} // Fallback colors
    >
      <img src={options.divider || ""} className='absolute top-0 z-100 over' alt="" />

      <h2 className="text-5xl font-extrabold text-center mb-12 tracking-wide mt-20 md:mt-40">
        {options.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-8 md:px-16 lg:px-24">
        {options.reasons.map((reason, index) => (
          <div 
            key={index} 
            className="backdrop-blur-lg p-8 rounded-xl shadow-2xl transform transition hover:scale-105 duration-300 ease-in-out text-center"
            style={{
              backgroundColor: reason.bgColor || '#4A5568', // Fallback color
              color: reason.textColor || '#fff' // Fallback color
            }}
          >
            <div className="mb-4">{reason.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{reason.title}</h3>
            <p className="text-opacity-80">{reason.description}</p>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 opacity-80 pointer-events-none"></div>
    </div>
  );
};

export default WhyUs;
