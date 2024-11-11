import React, { useState, useEffect } from 'react';
import { Carousel } from "flowbite-react";

const CarouselComponent = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch the data from the API
    const fetchImages = async () => {
      try {
        const response = await fetch(`${apiUrl}/home/carousel`);
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
        const data = await response.json();
        setImages(data); // Update the images state
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [apiUrl]);

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
