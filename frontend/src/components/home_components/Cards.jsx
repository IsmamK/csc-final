import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Cards = () => {
  const [data, setData] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    // Mock JSON data
    const mockData = {
      divider: "", // Replace with your divider image
      bgColor: "black", // Background color for the hero
      textColor: "white", // Text color for the hero
      heading: "What you need is what you get",
      overlayColor: "rgba(128, 0, 128, 0.8)", // Overlay color for the cards
      overlayTextColor: "#ffffff", // Overlay text color for the cards
      cards: [
        {
          imageSrc: 'pholder1.png', // Replace with actual image paths
          title: 'Card 1',
          additionalDetails: 'This is a detail about Card 1. This is way more involved and much more detail to help with everything and clearance.',
        },
        {
          imageSrc: 'pholder2.png', // Replace with actual image paths
          title: 'Card 2',
          additionalDetails: 'This is a detail about Card 2. This is way more involved and much more detail to help with everything and clearance.',
        },
        {
          imageSrc: 'pholder3.png', // Replace with actual image paths
          title: 'Card 3',
          additionalDetails: 'This is a detail about Card 3. This is way more involved and much more detail to help with everything and clearance.',
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
      <div className='hero p-20 lg:p-30 flex flex-col-reverse md:flex-col gap-10 md:gap-20' style={{ backgroundColor: data.bgColor, color: data.textColor }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center mt-10 lg:mt-28">
          {data.cards.map((card, index) => (
            <div 
              key={index} 
              className="relative w-64 h-64 group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <img 
                src={card.imageSrc} 
                alt={card.title} 
                className="object-cover w-full h-full rounded-lg transition-transform transform hover:border-8 hover:border-yellow-300" 
              />
              
              <div 
                className='absolute bottom-0 text-center w-full p-5'
                style={{ backgroundColor: data.overlayColor, color: data.overlayTextColor }}
              >
                <div className='flex'>
                  <h1>
                    {card.title}
                    <FontAwesomeIcon 
                      icon={faArrowUp} 
                      className={`text-white mt-2 ml-5 text-xl font-extrabold ${hoveredIndex === index ? 'rotate-180' : ''}`} 
                    />
                  </h1>
                </div>

                <p className='text-sm mt-3 text-left'>
                  {hoveredIndex === index ? card.additionalDetails : ""}
                </p>
              </div>
            </div>
          ))}
        </div>
        <h1 className='text-5xl lg:text-7xl font-bold'>{data.heading}</h1>
      </div>
    </div>
  );
};

export default Cards;
