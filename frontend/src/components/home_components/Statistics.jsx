import React, { useState, useEffect } from 'react';

const Statistics = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Mock API data
    const mockData = {
      divider: "", // Replace with your divider image
      heading:"Numbers That Amaze",
      bgColor: "#f9f9f9", // Background color for the statistics section
      textColor: "#333", // Text color for the statistics section
      statsList: [
        {
          value: "500+",
          description: "Secure Installations",
          bgColor: "#4A5568", // Background color for this stat
          textColor: "#fff" // Text color for this stat
        },
        {
          value: "1000+",
          description: "Cleaning Projects",
          bgColor: "#2B6CB0", // Background color for this stat
          textColor: "#fff" // Text color for this stat
        },
        {
          value: "800+",
          description: "Pest Control Jobs",
          bgColor: "#DD6B20", // Background color for this stat
          textColor: "#fff" // Text color for this stat
        },
        {
          value: "1200+",
          description: "Happy Households",
          bgColor: "#38A169", // Background color for this stat
          textColor: "#fff" // Text color for this stat
        },
      ],
    };

    // Simulating an API call
    setData(mockData);
  }, []);

  if (!data) return <div>Loading...</div>; // Loading state

  return (
    <div className='relative py-16' style={{ backgroundColor: data.bgColor, color: data.textColor }}>
      <img src={data.divider || ""} className='absolute top-0 z-100 over' />

      <div className='container mx-auto px-4 pt-20 md:pt-40'>
        <h1 className='text-4xl lg:text-6xl font-bold text-center mb-10'>
          {data.heading}
        </h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center'>
          {data.statsList.map((stat, index) => (
            <div key={index} className='p-6 rounded-lg shadow-lg' style={{ backgroundColor: stat.bgColor, color: stat.textColor }}>
              <h2 className='text-5xl font-bold mb-4'>{stat.value}</h2>
              <p className='text-lg'>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
