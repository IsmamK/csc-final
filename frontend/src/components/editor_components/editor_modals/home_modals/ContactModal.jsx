import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful';

const ContactModal = ({ isOpen, onClose }) => {
  const initialData = {
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

  const [data, setData] = useState(initialData);

  const handleInputChange = (field, value) => {
    setData({ ...data, [field]: value });
  };

  const handleContactInfoChange = (field, value) => {
    setData({ ...data, contactInfo: { ...data.contactInfo, [field]: value } });
  };

  const handleColorChange = (colorField, value) => {
    setData({
      ...data,
      colors: {
        ...data.colors,
        [colorField]: value,
      },
    });
  };

  const handleSubmit = () => {
    console.log(data);
  };

  return (
    <dialog className={`modal ${isOpen ? 'modal-open' : ''}`}>
      <div className="modal-box w-full max-w-lg relative">
        <button onClick={onClose} className="btn btn-sm btn-circle absolute right-2 top-2">✕</button>
        
        <h3 className="font-bold text-lg mb-4">Edit Contact Information</h3>

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
          <label className="block mb-1">Subtitle</label>
          <textarea
            value={data.subtitle}
            onChange={(e) => handleInputChange('subtitle', e.target.value)}
            className="textarea textarea-bordered w-full"
            placeholder="Subtitle"
          />
        </div>

        {/* Color Pickers */}
        <div className="mb-4">
          <label className="block mb-2">Background Color</label>
          <div className="hex flex items-center">
            <HexColorPicker
              color={data.colors.bgColor}
              onChange={(color) => handleColorChange('bgColor', color)}
              className="w-10 h-10"
            />
            <input
              type="text"
              value={data.colors.bgColor}
              onChange={(e) => handleColorChange('bgColor', e.target.value)}
              className="input input-bordered w-20 ml-2"
              placeholder="#ffffff"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Text Color</label>
          <div className="hex flex items-center">
            <HexColorPicker
              color={data.colors.textColor}
              onChange={(color) => handleColorChange('textColor', color)}
              className="w-10 h-10"
            />
            <input
              type="text"
              value={data.colors.textColor}
              onChange={(e) => handleColorChange('textColor', e.target.value)}
              className="input input-bordered w-20 ml-2"
              placeholder="#333333"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Form Background Color</label>
          <div className="hex flex items-center">
            <HexColorPicker
              color={data.colors.formBgColor}
              onChange={(color) => handleColorChange('formBgColor', color)}
              className="w-10 h-10"
            />
            <input
              type="text"
              value={data.colors.formBgColor}
              onChange={(e) => handleColorChange('formBgColor', e.target.value)}
              className="input input-bordered w-20 ml-2"
              placeholder="#ffffff"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Form Text Color</label>
          <div className="hex flex items-center">
            <HexColorPicker
              color={data.colors.formTextColor}
              onChange={(color) => handleColorChange('formTextColor', color)}
              className="w-10 h-10"
            />
            <input
              type="text"
              value={data.colors.formTextColor}
              onChange={(e) => handleColorChange('formTextColor', e.target.value)}
              className="input input-bordered w-20 ml-2"
              placeholder="#000000"
            />
          </div>
        </div>

        {/* Contact Information */}
        <h4 className="font-bold text-lg mb-2">Contact Information</h4>
        <div className="mb-4">
          <label className="block mb-1">Phone</label>
          <input
            type="text"
            value={data.contactInfo.phone}
            onChange={(e) => handleContactInfoChange('phone', e.target.value)}
            className="input input-bordered w-full"
            placeholder="Phone Number"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            value={data.contactInfo.email}
            onChange={(e) => handleContactInfoChange('email', e.target.value)}
            className="input input-bordered w-full"
            placeholder="Email Address"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Address</label>
          <input
            type="text"
            value={data.contactInfo.address}
            onChange={(e) => handleContactInfoChange('address', e.target.value)}
            className="input input-bordered w-full"
            placeholder="Address"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Working Hours</label>
          <input
            type="text"
            value={data.contactInfo.workingHours}
            onChange={(e) => handleContactInfoChange('workingHours', e.target.value)}
            className="input input-bordered w-full"
            placeholder="Working Hours"
          />
        </div>

        <button onClick={handleSubmit} className="btn btn-success">Submit</button>
      </div>
    </dialog>
  );
};

export default ContactModal;
