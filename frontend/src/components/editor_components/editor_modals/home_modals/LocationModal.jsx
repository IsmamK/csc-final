import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful';

const LocationModal = ({ isOpen, onClose }) => {
  const initialData = {
    title: "Our Location",
    description: "We are located at the heart of the city, making it easy to reach us from anywhere. Feel free to stop by our office for any inquiries, or simply to say hello!",
    address: "1234 Street Name, City, Country",
    phone: "+1 (234) 567-8901",
    email: "contact@company.com",
    workingHours: "Mon - Fri, 9 AM - 5 PM",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.7266501527824!2d90.4051615759951!3d23.792746387148036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7617fda4ea1%3A0xe097ea5c0a771a32!2sStech%20Group!5e0!3m2!1sen!2sbd!4v1730331846729!5m2!1sen!2sbd",
    bgColor: "#f8f9fa", // Default background color
    textColor: "#212529", // Default text color
  };

  const [data, setData] = useState(initialData);

  const handleInputChange = (field, value) => {
    setData({ ...data, [field]: value });
  };

  const handleColorChange = (colorField, value) => {
    setData({ ...data, [colorField]: value });
  };

  const handleSubmit = () => {
    console.log(data);
  };

  return (
    <dialog className={`modal ${isOpen ? 'modal-open' : ''}`}>
      <div className="modal-box w-full max-w-lg relative">
        <button onClick={onClose} className="btn btn-sm btn-circle absolute right-2 top-2">✕</button>
        
        <h3 className="font-bold text-lg mb-4">Edit Location Information</h3>

        <div className="mb-4">
          <label className="block mb-1">Title</label>
          <input
            type="text"
            value={data.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
            className="input input-bordered w-full"
            placeholder="Title"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Description</label>
          <textarea
            value={data.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            className="textarea textarea-bordered w-full"
            placeholder="Description"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Address</label>
          <input
            type="text"
            value={data.address}
            onChange={(e) => handleInputChange('address', e.target.value)}
            className="input input-bordered w-full"
            placeholder="Address"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Phone</label>
          <input
            type="text"
            value={data.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="input input-bordered w-full"
            placeholder="Phone Number"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="input input-bordered w-full"
            placeholder="Email Address"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Working Hours</label>
          <input
            type="text"
            value={data.workingHours}
            onChange={(e) => handleInputChange('workingHours', e.target.value)}
            className="input input-bordered w-full"
            placeholder="Working Hours"
          />
        </div>

        {/* Color Pickers */}
        <div className="mb-4">
          <label className="block mb-2">Background Color</label>
          <div className="flex items-center">
            <HexColorPicker
              color={data.bgColor}
              onChange={(color) => handleColorChange('bgColor', color)}
              className="w-10 h-10"
            />
            <input
              type="text"
              value={data.bgColor}
              onChange={(e) => handleColorChange('bgColor', e.target.value)}
              className="input input-bordered w-20 ml-2"
              placeholder="#f8f9fa"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Text Color</label>
          <div className="flex items-center">
            <HexColorPicker
              color={data.textColor}
              onChange={(color) => handleColorChange('textColor', color)}
              className="w-10 h-10"
            />
            <input
              type="text"
              value={data.textColor}
              onChange={(e) => handleColorChange('textColor', e.target.value)}
              className="input input-bordered w-20 ml-2"
              placeholder="#212529"
            />
          </div>
        </div>

        {/* Google Maps Embed */}
        <h4 className="font-bold text-lg mb-2">Map Location</h4>
        <input
          type="text"
          value={data.mapSrc}
          onChange={(e) => handleInputChange('mapSrc', e.target.value)}
          className="input input-bordered w-full mb-4"
          placeholder="Google Maps Embed URL"
        />
        <iframe
          src={data.mapSrc}
          width="100%"
          height="200"
          className="border-2 border-gray-300 mb-4"
          style={{ borderRadius: '8px' }}
          loading="lazy"
          title="Location Map"
        ></iframe>

        <button onClick={handleSubmit} className="btn btn-success">Submit</button>
      </div>
    </dialog>
  );
};

export default LocationModal;
