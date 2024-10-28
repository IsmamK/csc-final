import React, { useEffect, useState } from 'react';

const mockData = {
  title: "Our leading, strong & creative team",
  description: "These people work on making our product best.",
  buttonText: "Join our team",
  images: [
    "https://pagedone.io/asset/uploads/1696238644.png",
    "https://pagedone.io/asset/uploads/1696238665.png",
    "https://pagedone.io/asset/uploads/1696238684.png",
    "https://pagedone.io/asset/uploads/1696238702.png",
    "https://pagedone.io/asset/uploads/1696238720.png",
    "https://pagedone.io/asset/uploads/1696238737.png"
    
  ]
};

const Team = ({ bgColor, textColor }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    // Simulate data fetching
    const fetchData = () => {
      setTimeout(() => {
        setData(mockData);
      }, 1000); // Simulate a delay
    };

    fetchData();
  }, []);

  return (
    <section className="pb-10 " style={{ backgroundColor: bgColor, color: textColor }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center flex-col lg:flex-row md:mt-20">
          <div className="w-full lg:w-1/2">
            <h2 className="font-manrope text-5xl font-bold leading-[4rem] mb-7 text-center lg:text-left">
              {data.title}
            </h2>
            <p className="text-lg mb-16 text-center lg:text-left">
              {data.description}
            </p>
            <button className="cursor-pointer py-3 px-8 w-60  font-semibold transition-all duration-500 block bg-black text-csc text-center rounded-full  mx-auto lg:mx-0">
              {data.buttonText}
            </button>
          </div>
          <div className="w-full lg:w-1/2 lg:mt-0 md:mt-40 mt-16 max-lg:max-w-2xl">
            <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-8">
              {data.images && data.images.map((image, index) => (
                <img 
                  key={index} 
                  src={image} 
                  alt={`Team member ${index + 1}`} 
                  className="w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0" 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
