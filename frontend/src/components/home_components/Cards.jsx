import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Cards = () => {
  const [data, setData] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const apiUrl = import.meta.env.VITE_API_URL;


  useEffect(() => {
    // Mock JSON data
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/home/cards`); // Replace with your API endpoint
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching hero data:", error);
      }
    };


    // Simulating an API call
    fetchData()
  }, []);

  if (!data) return <div>Loading...</div>; // Loading state

  return (
    <div className='relative'>
      <img src={data.divider || ""} className='absolute top-0 z-100' />
      <div className='hero p-20 lg:p-30 flex flex-col-reverse md:flex-col gap-10 md:gap-20' style={{ backgroundColor: data.bgColor, color: data.textColor }}>
      <h1 className='text-5xl lg:text-7xl font-bold'>{data.heading}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center g:mt-28">
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
                      className={` mt-2 ml-5 text-xl font-extrabold ${hoveredIndex === index ? 'rotate-180' : ''}`} 
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
      </div>
    </div>
  );
};

export default Cards;
