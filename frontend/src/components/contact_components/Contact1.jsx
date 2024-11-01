import React, { useEffect, useState } from 'react';

const Contact1 = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = async () => {
      // Simulated API response
      const data = {
        header: 'Get In Touch',
        subHeader: 'Whether you have a concern or simply want to say hello, We are here to facilitate communication with you.',
        buttonText: 'Contact Us',
        emailLabel: 'Email Address',
        phoneLabel: 'Phone Number',
        email: 'pagedone@gmail.com',
        phone: '470-601-1911',
        locations: [
          {
            country: 'United Kingdom',
            address: '123 High Street, Westminster, London',
            imgSrc: 'https://pagedone.io/asset/uploads/1696246502.png',
          },
          {
            country: 'Germany',
            address: '101 Unter den Linden, Mitte District, Berlin',
            imgSrc: 'https://pagedone.io/asset/uploads/1696246522.png',
          },
          {
            country: 'France',
            address: '456 Rue de la Paix, 8th Arrondissement, Paris',
            imgSrc: 'https://pagedone.io/asset/uploads/1696246551.png',
          },
          {
            country: 'Switzerland',
            address: '987 Bahnhofstrasse, Zurich City Center, Zurich',
            imgSrc: 'https://pagedone.io/asset/uploads/1696246565.png',
          },
        ],
      };

      // Update state with fetched data
      setContent(data);
    };

    fetchData();
  }, []);

  if (!content) {
    return <div className="text-center py-24">Loading...</div>;
  }

  return (
    <div>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="md:flex gap-x-24 clear-left md:mb-16 mb-10">
            <div className="md:mb-0 mb-4">
              <h2 className="text-black font-manrope text-4xl font-semibold leading-10 mb-5 md:text-left text-center">{content.header}</h2>
              <p className="text-gray-600 text-lg font-normal leading-7 mb-7 md:text-left text-center">
                {content.subHeader}
              </p>
              <div className="flex md:items-center md:justify-start justify-center">
                <button className="w-36 h-12 rounded-full bg-indigo-600 transition-all duration-700 hover:bg-indigo-800 shadow text-white text-center text-base font-semibold leading-6">
                  {content.buttonText}
                </button>
              </div>
            </div>
            <div className="border-l-2 md:border-indigo-600 border-white px-10 py-6">
              <div className="mb-8">
                <h6 className="text-gray-500 text-sm font-medium leading-5 pb-3 md:text-start text-center">{content.emailLabel}</h6>
                <h3 className="text-black text-xl font-semibold leading-8 md:text-start text-center">{content.email}</h3>
              </div>
              <div>
                <h6 className="text-gray-500 text-sm font-medium leading-5 pb-3 md:text-start text-center">{content.phoneLabel}</h6>
                <h3 className="text-black text-xl font-semibold leading-8 md:text-start text-center">{content.phone}</h3>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
            {content.locations.map((location, index) => (
              <div key={index} className="h-96 relative flex justify-center">
                <div className="w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50"></div>
                <img src={location.imgSrc} alt={`${location.country} image`} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 mb-6 text-center px-6">
                  <h5 className="text-white text-lg font-semibold leading-7 mb-2">{location.country}</h5>
                  <p className="text-white text-base font-medium leading-6">{location.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact1;
