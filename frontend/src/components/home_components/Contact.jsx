import React from 'react';

// Mock JSON Data for Contact Section
const contactData = {
  title: "Let’s Talk",
  subtitle: "We’re here to answer any questions you may have about our services. Please reach out and we’ll get back to you as soon as possible.",
  colors: {
    bgColor: 'white',
    textColor: '#333',
    formBgColor: 'white',
    formTextColor: 'black',
  },
  contactInfo: {
    phone: "+1 (234) 567-8901",
    email: "contact@company.com",
    address: "1234 Street Name, City, Country",
    workingHours: "Mon - Fri, 9 AM - 5 PM",
  },
};

const Contact = ({ divider }) => {
  const { title, subtitle, colors, contactInfo } = contactData;

  return (
    <div className="relative" style={{ backgroundColor: colors.bgColor, color: colors.textColor }}>
      {/* Divider */}
      <img src={divider || ""} className="absolute top-0 w-full" />
      
      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-6 py-48 md:px-20">
        <h1 className="text-6xl font-extrabold text-center mb-16 leading-tight">{title}</h1>
        
        <div className="grid gap-12 md:grid-cols-2 items-center">
          
          {/* Left: Company Info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold">Get in Touch</h2>
            <p className="text-lg leading-relaxed">{subtitle}</p>
            <div className="space-y-4">
              <p className="text-xl"><strong>Phone:</strong> {contactInfo.phone}</p>
              <p className="text-xl"><strong>Email:</strong> {contactInfo.email}</p>
              <p className="text-xl"><strong>Address:</strong> {contactInfo.address}</p>
              <p className="text-xl"><strong>Working Hours:</strong> {contactInfo.workingHours}</p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="p-4 md:p-10 rounded-xl shadow-lg" style={{ backgroundColor: colors.formBgColor, color: colors.formTextColor }}>
            <form className="space-y-8">
              <div className="flex flex-col">
                <label className="text-lg font-semibold mb-2">Your Name</label>
                <input
                  type="text"
                  className="p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-4 focus:ring-blue-400 transition duration-300"
                  placeholder="Enter your name"
                  style={{ backgroundColor: colors.formBgColor, color: colors.formTextColor }}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-lg font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  className="p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-4 focus:ring-blue-400 transition duration-300"
                  placeholder="Enter your email"
                  style={{ backgroundColor: colors.formBgColor, color: colors.formTextColor }}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-lg font-semibold mb-2">Message</label>
                <textarea
                  className="p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-4 focus:ring-blue-400 transition duration-300"
                  placeholder="Write your message here"
                  rows="6"
                  style={{ backgroundColor: colors.formBgColor, color: colors.formTextColor }}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full btn btn-outline text-center h-full rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-300"
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
