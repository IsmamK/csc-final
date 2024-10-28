import {React,useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Card = ({ imageSrc, title, initialDetails, additionalDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    
    <div 
      className="relative w-64 h-64 group "
    >
      {/* Image */}
      <img 
        src={imageSrc} 
        alt={title} 
        className="object-cover w-full h-full rounded-lg transition-transform transform hover:border-8  hover:border-yellow-300 " 
      />
      
      
      <div className='absolute bottom-0 text-center bg-black w-full opacity-80 text-csc font-extrabold p-5 hover:h-[85%] hover:text-left'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={()=>setIsHovered(!isHovered)}
      >

        <div className='flex'>
          <h1>
        {title}
        <FontAwesomeIcon icon={faArrowUp} className = {`text-white mt-2 ml-5 text-xl font-extrabold ${isHovered ? 'rotate-180':'' }`} />
        </h1>
        </div>

        <p className='text-sm mt-3 text-left'>
        { isHovered ?  additionalDetails : "" }
        </p>
      </div>
   
    </div>
  );
};
const Cards = ({divider,bgColor,textColor}) => {
  const cardsData = [
    {
      imageSrc: 'pholder1.png',
      title: 'Card 1',
      details: 'This is a detail about Card 1.',
      additionalDetails: 'This is a detail about Card 1. This is way more involved and much more detail to help with everything and clearance.',
    },
    {
      imageSrc: 'pholder2.png',
      title: 'Card 2',
      details: 'This is a detail about Card 2.',
      additionalDetails: 'This is a detail about Card 1. This is way more involved and much more detail to help with everything and clearance.',

    },
    {
      imageSrc: 'pholder3.png',
      title: 'Card 3',
      details: 'This is a detail about Card 3.',
      additionalDetails: 'This is a detail about Card 1. This is way more involved and much more detail to help with everything and clearance.',

    },
    
  ];

  return (
    <div className='relative'>
            <img src={divider || ""} className='absolute top-0 z-100' />

 
    <div className='hero flex flex-col-reverse md:flex-col gap-10 md:gap-20 pb-10' style={{ backgroundColor: bgColor, color: textColor }} >
      
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center mt-10 lg:mt-28">
      {cardsData.map((card, index) => (
        <Card 
          key={index}
          imageSrc={card.imageSrc}
          title={card.title}
          details={card.details}
          additionalDetails={card.additionalDetails}
        />
      ))}
    </div>
      <h1 className=' text-5xl lg:text-7xl font-bold'>What you need is what you get</h1>
    </div>
    </div>
  );
};

export default Cards;
