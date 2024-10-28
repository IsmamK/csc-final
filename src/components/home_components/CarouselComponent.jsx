import React from 'react'
import { Carousel } from "flowbite-react";

const CarouselComponent = () => {
  return (
    <div className="h-48 md:h-80 ">
        <Carousel slideInterval={1000} >
          <img     className="carousel-image h-full w-full object-cover" src="https://img.freepik.com/free-photo/tourists-city-looking-map_23-2147635460.jpg?t=st=1730106757~exp=1730110357~hmac=a6048fa26550529cdd8738e9e6594721f10dbad361dd60905e9fed287322c634&w=2000" alt="" />
          <img     className="carousel-image h-full w-full object-cover" src="https://img.freepik.com/free-photo/medium-shot-teenage-friends-approving_23-2148225342.jpg?t=st=1730106783~exp=1730110383~hmac=b209dcc3e9c9bf0762d6ff4ade5bfad9ad341857fc6448f8354f7c0824c15671&w=2000" alt="" />
          <img      className="carousel-image h-full w-full object-cover" src="https://img.freepik.com/free-photo/man-women-walking-from-studies_23-2147860784.jpg?t=st=1730106802~exp=1730110402~hmac=22024215517f18666efdffba196b74d0529013672a5119272afa51e7e4384de4&w=2000" alt="" />
          <img     className="carousel-image h-full w-full object-cover"src="https://img.freepik.com/free-photo/tourists-standing-waterfront_23-2147654278.jpg?t=st=1730106829~exp=1730110429~hmac=7a60daf14375626fadca41c110666b1874b6ee382bd40f4812b79c5753ed23cb&w=2000" alt="" />
          <img     className="carousel-image h-full w-full object-cover" src="https://img.freepik.com/free-photo/students-posing-with-cups-coffee_23-2147650698.jpg?t=st=1730106856~exp=1730110456~hmac=b12c878877d56ed87491018fe87ed4d740284d6056610b57ed72328db093aecd&w=2000" alt="" />

        </Carousel>
  </div>
  )
}

export default CarouselComponent
