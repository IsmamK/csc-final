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
import { div } from 'framer-motion/client';
import About1 from '../components/about_components/About1';
import About2 from '../components/about_components/About2';
import Team from '../components/about_components/Team';
import FAQ from '../components/about_components/FAQ';

const About = () => {
 
  
  return (
    <div>
        <About1 bgColor = "#b9965b" textColor="black"/>
        <About2 bgColor = "white" textColor="#b9965b"/>
        <Team bgColor = "#b9965b" textColor="black"/>
        <FAQ bgColor = "white" textColor="#b9965b"/>
    </div>
    
        
  );
};

export default About;
