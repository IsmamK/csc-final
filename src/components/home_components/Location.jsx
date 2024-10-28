import React from 'react';

const Location = ({ divider,bgColor,textColor }) => {
  return (
    <div className='relative' style={{ backgroundColor: bgColor, color: textColor }}>
      {/* Divider */}
      <img src={divider || ""}  className='absolute top-0 w-full' />

      {/* Location Section */}
      <div className='max-w-7xl mx-auto px-6 p-10'>
        <h1 className='text-6xl font-extrabold text-center mb-16 leading-tight'>Our Location</h1>
        
        <div className='grid gap-12 md:grid-cols-2 items-start'>
          
          {/* Left: Location Info */}
          <div className='space-y-8'>
            <h2 className='text-3xl font-semibold'>Visit Us</h2>
            <p className='text-lg leading-relaxed'>
              We are located at the heart of the city, making it easy to reach us from anywhere. Feel free to stop by our office for any inquiries, or simply to say hello!
            </p>
            <div className='space-y-4'>
              <p className='text-xl'>
                <strong>Address:</strong> 1234 Street Name, City, Country
              </p>
              <p className='text-xl'>
                <strong>Phone:</strong> +1 (234) 567-8901
              </p>
              <p className='text-xl'>
                <strong>Email:</strong> contact@company.com
              </p>
              <p className='text-xl'>
                <strong>Working Hours:</strong> Mon - Fri, 9 AM - 5 PM
              </p>
            </div>
          </div>

          {/* Right: Google Maps Embed */}
          <div className='relative h-96'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531570743!3d-37.81627974202139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1d90e7b%3A0x2a8a56770374244!2s1234%20Street%20Name%2C%20City%2C%20Country!5e0!3m2!1sen!2sus!4v1623840348711!5m2!1sen!2sus"
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
