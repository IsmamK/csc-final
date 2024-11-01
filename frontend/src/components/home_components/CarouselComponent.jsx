import React from 'react';
import { Carousel } from "flowbite-react";

const CarouselComponent = () => {
  // Array of image URLs
  const images = [
    "https://flowbite.com/docs/images/carousel/carousel-1.svg",
    "https://flowbite.com/docs/images/carousel/carousel-2.svg",
    "https://flowbite.com/docs/images/carousel/carousel-3.svg",
    "https://flowbite.com/docs/images/carousel/carousel-4.svg",
    "https://flowbite.com/docs/images/carousel/carousel-5.svg",
    
  ];

  return (
    <div className="h-80 lg:h-[700px]">
      <Carousel slideInterval={1000}>
        {/* Map over the images array to create img elements */}
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Carousel image ${index + 1}`} />
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
