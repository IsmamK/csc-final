import React, { useState } from 'react';
import CarouselComponent from '../components/home_components/CarouselComponent';
import Cards from '../components/home_components/Cards';
import Services from '../components/home_components/Services';
import GridCards from '../components/home_components/GridCards';
import WhyUs from '../components/home_components/WhyUs';
import OurClients from '../components/home_components/OurClients';
import News from '../components/home_components/News';
import Contact from '../components/home_components/Contact';
import Statistics from '../components/home_components/Statistics';
import Location from '../components/home_components/Location';
import Hero from '../components/home_components/Hero';
import FeaturedVideo from '../components/home_components/FeaturedVideo';
import { useOutletContext } from 'react-router-dom';

const Home = () => {
  const { getDivider, availableShapes } = useOutletContext(); // Fetch shapes dynamically
  const [currentShape, setCurrentShape] = useState('None'); // Default shape

  const handleShapeChange = (event) => {
    setCurrentShape(event.target.value); // Update shape based on selection
  };

  
  return (
    <>

    
      <CarouselComponent />
      <Hero divider={getDivider('currentShape')} bgColor = "white" textColor="black" />
      <Cards divider={getDivider(currentShape)} bgColor = "black" textColor="white" />
      <Services divider={getDivider(currentShape)} bgColor = "white" textColor="black" />
      <Statistics divider={getDivider(currentShape)} bgColor = "black" textColor="white"  />
      <GridCards divider={getDivider(currentShape)} bgColor = "white" textColor="black" />
      <WhyUs divider={getDivider(currentShape)} bgColor = "black" textColor="white"  />
      <OurClients divider={getDivider(currentShape)} bgColor = "white" textColor="black"  />
      <News divider={getDivider(currentShape)} bgColor = "black" textColor="white" />
      <Contact divider={getDivider(currentShape)} bgColor = "white" textColor="black" />
      <Location divider={getDivider(currentShape)} bgColor = "black" textColor="white"  />
      <FeaturedVideo divider={getDivider(currentShape)} bgColor = "white" textColor="black" />

      {/* Floating dropdown to select divider shape */}
      <div className="fixed top-5 right-5 z-50 bg-white p-4 rounded-lg shadow-lg">
        <label htmlFor="dividerShape" className="text-sm font-medium text-gray-700 mb-1 block">
          Select Divider Shape
        </label>
        <select
          id="dividerShape"
          value={currentShape}
          onChange={handleShapeChange}
          className="block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option >
              None
            </option>
          {availableShapes.map((shape) => (
            <option key={shape} value={shape}>
              {shape.charAt(0).toUpperCase() + shape.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Home;
