import React from 'react';

const servicesList = [
  {
    title: "Security Solutions",
    description: "We provide comprehensive security services ensuring the safety of your property with 24/7 surveillance and professional personnel.",
    reviewerName: "John Doe",
    reviewerTitle: "Security Manager at SafeGuard",
    reviewerImage: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
  },
  {
    title: "Professional Cleaning",
    description: "Our expert cleaning team ensures a spotless environment, utilizing eco-friendly products to maintain hygiene and freshness.",
    reviewerName: "Jane Smith",
    reviewerTitle: "Operations Lead at CleanTech",
    reviewerImage: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
  },
  {
    title: "Pest Control",
    description: "We offer effective pest control solutions, using safe and modern techniques to keep your spaces free from pests.",
    reviewerName: "Michael Brown",
    reviewerTitle: "Pest Control Specialist at BugFree",
    reviewerImage: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
  },
  {
    title: "Housekeeping Services",
    description: "Our dedicated housekeeping staff provides daily services to ensure that your property is always clean, organized, and welcoming.",
    reviewerName: "Emily Davis",
    reviewerTitle: "Housekeeping Supervisor at HomeClean",
    reviewerImage: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
  },

];

const Services = ({ divider,bgColor,textColor }) => {
  return (
    <div className='relative'>
      <img src={divider || ""} className='absolute top-0 z-100'  />

      <div className=''
      style={{ backgroundColor: bgColor, color: textColor }}>
        <h1 className="text-5xl lg:text-7xl font-extrabold text-center my-10 ">Our Services</h1>

        <div className="grid mb-8 gap-10  rounded-lg  md:mb-12 md:grid-cols-2   mt-4 w-3/4 mx-auto">
          {servicesList.map((service, index) => (
            <figure key={index} className="flex flex-col shadow-md items-center  justify-center p-8 text-center  border border-gray-400 bg-csc text-black rounded-lg ">
              <blockquote className="max-w-2xl mx-auto mb-4  lg:mb-8 ">
                <h3 className="text-lg font-semibold ">{service.title}</h3>
                <p className="my-4">{service.description}</p>
              </blockquote>
              <figcaption className="flex items-center justify-center ">
                <img className="rounded-full w-9 h-9" src={service.reviewerImage} alt="profile" />
                <div className="space-y-0.5 font-medium  text-left rtl:text-right ms-3">
                  <div>{service.reviewerName}</div>
                  <div className="text-sm ">{service.reviewerTitle}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
