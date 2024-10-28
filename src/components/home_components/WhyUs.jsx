import React from 'react';
import { FaHandshake, FaThumbsUp, FaLightbulb, FaDollarSign, FaHeadset } from 'react-icons/fa'; // Importing icons

const WhyUs = ({ divider, title, reasons,bgColor,textColor }) => {
  const defaultTitle = "Why Choose Us?";
  const defaultReasons = [
    {
      icon: <FaHandshake className="text-4xl text-csc" />,
      title: "Trusted Expertise",
      description: "Years of industry expertise ensuring success in every project we undertake."
    },
    {
      icon: <FaThumbsUp className="text-4xl text-csc" />,
      title: "Customer First",
      description: "Our customers are our priority. We guarantee satisfaction at every step."
    },
    {
      icon: <FaLightbulb className="text-4xl text-csc" />,
      title: "Innovative Solutions",
      description: "We offer modern and innovative solutions that keep your business ahead."
    },
    {
      icon: <FaDollarSign className="text-4xl text-csc" />,
      title: "Cost Effective",
      description: "Get the best value for your investment without compromising on quality."
    },
    {
      icon: <FaHeadset className="text-4xl text-csc" />,
      title: "24/7 Support",
      description: "We provide round-the-clock support to ensure all your needs are met."
    }
  ];

  const displayTitle = title || defaultTitle;
  const displayReasons = reasons || defaultReasons;

  return (
    <div className="relative pt-10 pb-16"
    style={{ backgroundColor: bgColor, color: textColor }}
    >
            {/* <img src={divider || ""} className='absolute top-0 z-100 over' /> */}

      <h2 className="text-5xl font-extrabold text-center  mb-12 tracking-wide ">
        {displayTitle}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-8 md:px-16 lg:px-24">
        {displayReasons.map((reason, index) => (
          <div 
            key={index} 
            className="bg-black backdrop-blur-lg p-8 rounded-xl shadow-2xl transform transition hover:scale-105 hover:bg-gray-600 duration-300 ease-in-out text-center"
          >
            <div className="mb-4">{reason.icon}</div>
            <h3 className="text-2xl font-semibold text-csc mb-2">{reason.title}</h3>
            <p className="text-csc text-opacity-80">{reason.description}</p>
          </div>
        ))}
      </div>

      <div className="absolute inset-0  opacity-80 pointer-events-none"></div>
    </div>
  );
};

export default WhyUs;
