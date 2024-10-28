import React from 'react';

const Contact = ({ divider,bgColor,textColor }) => {
  return (
    <div className='relative'
    style={{ backgroundColor: bgColor, color: textColor }}>
      {/* Divider */}
      <img src={divider || ""} className='absolute top-0 w-full' />
      
      {/* Contact Section */}
      <div className='max-w-7xl mx-auto p-10'
       
      >
        <h1 className='text-5xl lg:text-7xl font-extrabold text-center mb-16  leading-tight'>Let’s Talk</h1>
        
        <div className='grid gap-12 md:grid-cols-2 items-center'>
          
          {/* Left: Company Info */}
          <div className='space-y-8'>
            <h2 className='text-3xl font-semibold '>Get in Touch</h2>
            <p className='text-lg  leading-relaxed'>
              We’re here to answer any questions you may have about our services. Please reach out and we’ll get back to you as soon as possible.
            </p>
            <div className='space-y-4'>
              <p className='text-xl '>
                <strong>Phone:</strong> +1 (234) 567-8901
              </p>
              <p className='text-xl '>
                <strong>Email:</strong> contact@company.com
              </p>
              <p className='text-xl '>
                <strong>Address:</strong> 1234 Street Name, City, Country
              </p>
              <p className='text-xl '>
                <strong>Working Hours:</strong> Mon - Fri, 9 AM - 5 PM
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className='p-4 md:p-10 rounded-xl shadow-lg'>
            <form className='space-y-8'>
              <div className='flex flex-col'>
                <label className='text-lg font-semibold mb-2'>Your Name</label>
                <input
                  type='text'
                  className='p-4 border-4 border-csc rounded-lg text-csc text-lg focus:outline-none focus:ring-4 focus:ring-blue-400 transition duration-300'
                  placeholder='Enter your name'
                />
              </div>
              <div className='flex flex-col'>
                <label className='text-lg font-semibold  mb-2'>Email Address</label>
                <input
                  type='email'
                  className='p-4 border-4 border-csc rounded-lg text-lg focus:outline-none focus:ring-4 focus:ring-blue-400 transition duration-300'
                  placeholder='Enter your email'
                />
              </div>
              <div className='flex flex-col'>
                <label className='text-lg font-semibold  mb-2'>Message</label>
                <textarea
                  className='p-4 border-4 border-csc rounded-lg text-lg focus:outline-none focus:ring-4 focus:ring-blue-400 transition duration-300'
                  placeholder='Write your message here'
                  rows='6'
                ></textarea>
              </div>
              <button
                type='submit'
                className='w-full btn bg-black text-csc text-center h-full rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
