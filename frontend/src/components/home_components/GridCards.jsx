import React, { useState } from 'react';

const GridCards = ({ divider, bgColor, textColor }) => {
  const cardData = {
    title: "Explore Beautiful Destinations",
    subtitle: "Choose your dream destination and explore nature",
    gridCards: [
      {
        image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
        title: "Mountain View",
        description: "A beautiful view of the mountains during sunset.",
        flipBgColor: "#f5c6a5",
        flipTextColor: "#333",
      },
      {
        image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
        title: "Beachfront",
        description: "Relax by the calming waves and sandy beach.",
        flipBgColor: "#a5d5f5",
        flipTextColor: "#222",
      },
      {
        image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
        title: "City Lights",
        description: "An amazing view of the city skyline at night.",
        flipBgColor: "#f5e1a5",
        flipTextColor: "#111",
      },
      {
        image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
        title: "Forest Trail",
        description: "Hike through lush green forests and enjoy nature.",
        flipBgColor: "#c3f5a5",
        flipTextColor: "#222",
      },
      {
        image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
        title: "Desert Dunes",
        description: "Experience the serenity of the vast desert landscape.",
        flipBgColor: "#f5d2a5",
        flipTextColor: "#333",
      },
      {
        image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
        title: "Lake House",
        description: "Enjoy a peaceful stay by the lake with scenic views.",
        flipBgColor: "#d3a5f5",
        flipTextColor: "#222",
      },
      {
        image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
        title: "Snowy Peaks",
        description: "Feel the chill of snow-capped mountains in winter.",
        flipBgColor: "#a5f5f2",
        flipTextColor: "#111",
      },
      {
        image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
        title: "Countryside",
        description: "Escape to the quiet and tranquility of the countryside.",
        flipBgColor: "#f5a5a5",
        flipTextColor: "#222",
      },
    ],
  };

  const [flippedCardIndex, setFlippedCardIndex] = useState(null);

  const handleClick = (index) => {
    setFlippedCardIndex(index === flippedCardIndex ? null : index);
  };

  const handleHover = (index, isHovering) => {
    setFlippedCardIndex(isHovering ? index : null);
  };

  return (
    <div className="relative w-full" style={{ backgroundColor: bgColor, color: textColor }}>
      {divider && <img src={divider} className="absolute top-0 z-10 w-full" alt="Divider" />}

      <div className="p-10 md:p-20 lg:p-30 mx-auto max-w-96 md:max-w-[1000px] lg:max-w-[1500px]">
        <h1 className="text-center text-4xl md:text-6xl lg:text-7xl font-bold my-5">{cardData.title}</h1>
        <p className="text-center text-lg md:text-2xl lg:text-3xl mb-10">{cardData.subtitle}</p>

        <div
          className="grid gap-10 "
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          }}
        >
          {cardData.gridCards.map((card, index) => (
            <div
              key={index}
              className={`flip-card ${flippedCardIndex === index ? 'flipped' : ''}`}
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleHover(index, true)}
              onMouseLeave={() => handleHover(index, false)}
            >
              <div className="flip-card-inner transform transition-transform duration-500">
                <div className="flip-card-front">
                  <img className="w-full h-full rounded-lg object-cover" src={card.image} alt={card.title} />
                </div>
                <div
                  className="flip-card-back p-5 flex flex-col justify-center rounded-lg"
                  style={{ backgroundColor: card.flipBgColor, color: card.flipTextColor }}
                >
                  <h2 className="text-xl font-bold mb-2">{card.title}</h2>
                  <p>{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GridCards;
