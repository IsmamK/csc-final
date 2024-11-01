import React from 'react';

// Mock JSON data for the Location component
const locationData = {
  title: "Our Location",
  description: "We are located at the heart of the city, making it easy to reach us from anywhere. Feel free to stop by our office for any inquiries, or simply to say hello!",
  address: "1234 Street Name, City, Country",
  phone: "+1 (234) 567-8901",
  email: "contact@company.com",
  workingHours: "Mon - Fri, 9 AM - 5 PM",
  mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.7266501527824!2d90.4051615759951!3d23.792746387148036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7617fda4ea1%3A0xe097ea5c0a771a32!2sStech%20Group!5e0!3m2!1sen!2sbd!4v1730331846729!5m2!1sen!2sbd",
  bgColor: "black", // Default background color
  textColor: "white", // Default text color
};

const Location = () => {
  return (
    <div className='relative' style={{ backgroundColor: locationData.bgColor, color: locationData.textColor }}>
      {/* Divider */}
      <img src="" className='absolute top-0 w-full'  />

      {/* Location Section */}
      <div className='max-w-7xl mx-auto px-6 py-24 md:pt-60'>
        <h1 className='text-6xl font-extrabold text-center mb-16 leading-tight'>{locationData.title}</h1>
        
        <div className='grid gap-12 md:grid-cols-2 items-start'>
          
          {/* Left: Location Info */}
          <div className='space-y-8'>
            <h2 className='text-3xl font-semibold'>Visit Us</h2>
            <p className='text-lg leading-relaxed'>
              {locationData.description}
            </p>
            <div className='space-y-4'>
              <p className='text-xl'>
                <strong>Address:</strong> {locationData.address}
              </p>
              <p className='text-xl'>
                <strong>Phone:</strong> {locationData.phone}
              </p>
              <p className='text-xl'>
                <strong>Email:</strong> {locationData.email}
              </p>
              <p className='text-xl'>
                <strong>Working Hours:</strong> {locationData.workingHours}
              </p>
            </div>
          </div>

          {/* Right: Google Maps Embed */}
          <div className='relative h-96'>
            <iframe
              src={locationData.mapSrc} // Use map source from the data
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
              title="Our Location"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
