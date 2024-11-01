import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful';

const ServicesModal = ({ isOpen, onClose }) => {
  // Mock JSON data
  const mockData = {
    divider: "", // Replace with your divider image
    bgColor: "white", // Background color for the services section
    textColor: "black", // Text color for the services section
    cardBgColor: "#ffffff", // Background color for the service cards
    cardTextColor: "#000000", // Text color for the service cards
    heading: "Our Services",
    servicesList: [
      {
        title: "Security Solutions",
        description: "We provide comprehensive security services ensuring the safety of your property with 24/7 surveillance and professional personnel.",
      },
      {
        title: "Professional Cleaning",
        description: "Our expert cleaning team ensures a spotless environment, utilizing eco-friendly products to maintain hygiene and freshness.",
      },
      {
        title: "Pest Control",
        description: "We offer effective pest control solutions, using safe and modern techniques to keep your spaces free from pests.",
      },
      {
        title: "Housekeeping Services",
        description: "Our dedicated housekeeping staff provides daily services to ensure that your property is always clean, organized, and welcoming.",
      },
    ]
  };

  const [servicesData, setServicesData] = useState(mockData);
  const [newService, setNewService] = useState({ title: "", description: "" }); // State for new service

  // Handle changes for the heading
  const handleHeadingChange = (e) => {
    setServicesData({ ...servicesData, heading: e.target.value });
  };

  // Handle input changes for services
  const handleServiceChange = (index, field, value) => {
    const updatedServices = [...servicesData.servicesList];
    updatedServices[index][field] = value;
    setServicesData({ ...servicesData, servicesList: updatedServices });
  };

  // Handle new service input changes
  const handleNewServiceChange = (field, value) => {
    setNewService({ ...newService, [field]: value });
  };

  // Add new service to the list
  const handleAddService = () => {
    if (newService.title && newService.description) {
      setServicesData({
        ...servicesData,
        servicesList: [...servicesData.servicesList, newService],
      });
      setNewService({ title: "", description: "" }); // Reset new service input
    }
  };

  // Handle colors change
  const handleBgColorChange = (color) => {
    setServicesData({ ...servicesData, bgColor: color });
  };

  const handleTextColorChange = (color) => {
    setServicesData({ ...servicesData, textColor: color });
  };

  const handleCardBgColorChange = (color) => {
    setServicesData({ ...servicesData, cardBgColor: color });
  };

  const handleCardTextColorChange = (color) => {
    setServicesData({ ...servicesData, cardTextColor: color });
  };

  // Handle hex code input for colors
  const handleHexColorChange = (field, value) => {
    if (/^#([0-9A-F]{3}){1,2}$/i.test(value) || value === "") {
      setServicesData({ ...servicesData, [field]: value });
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    console.log('Updated Services Data:', servicesData);
    onClose(); // Close modal after saving
  };

  return (
    <dialog className={`modal ${isOpen ? 'modal-open' : ''}`}>
      <div className="modal-box w-11/12 max-w-2xl relative">
        <button onClick={onClose} className="btn btn-sm btn-circle absolute right-2 top-2">✕</button>

        <h3 className="font-bold text-lg mb-4">Edit Services Section</h3>

        {/* Heading Input */}
        <div className="mb-4">
          <label className="block mb-1">Heading:</label>
          <input
            type="text"
            value={servicesData.heading}
            onChange={handleHeadingChange}
            className="input input-bordered w-full mb-2"
          />
        </div>

        {/* Background Color Picker */}
        <div className="mb-4 ">
          <label className="block mb-1">Background Color:</label>
          <div className="hex flex items-center">
          <HexColorPicker
            color={servicesData.bgColor}
            onChange={handleBgColorChange}
            className="w-20 h-20"
          />
          
          <input
            type="text"
            value={servicesData.bgColor}
            onChange={(e) => handleHexColorChange('bgColor', e.target.value)}
            className="input input-bordered ml-2"
            placeholder="Enter hex code"
          />
          </div>
        </div>

        {/* Text Color Picker */}
        <div className="mb-4">
          <label className="block mb-1">Text Color:</label>
          <div className="hex flex items-center">
          <HexColorPicker
            color={servicesData.textColor}
            onChange={handleTextColorChange}
            className="w-20 h-20"
          />
       
          <input
            type="text"
            value={servicesData.textColor}
            onChange={(e) => handleHexColorChange('textColor', e.target.value)}
            className="input input-bordered ml-2"
            placeholder="Enter hex code"
          />
          </div>
        </div>

        {/* Card Background Color Picker */}
        <div className="mb-4 ">
          <label className="block mb-1">Card Background Color:</label>
          <div className="hex flex items-center">
          <HexColorPicker
            color={servicesData.cardBgColor}
            onChange={handleCardBgColorChange}
            className="w-20 h-20"
          />
        
          <input
            type="text"
            value={servicesData.cardBgColor}
            onChange={(e) => handleHexColorChange('cardBgColor', e.target.value)}
            className="input input-bordered  ml-2"
            placeholder="Enter hex code"
          />
          </div>
        </div>

        {/* Card Text Color Picker */}
        <div className="mb-4">
          <label className="block mb-1">Card Text Color:</label>
          <div className="hex flex items-center">
          <HexColorPicker
            color={servicesData.cardTextColor}
            onChange={handleCardTextColorChange}
            className="w-20 h-20"
          />
       
          <input
            type="text"
            value={servicesData.cardTextColor}
            onChange={(e) => handleHexColorChange('cardTextColor', e.target.value)}
            className="input input-bordered  ml-2"
            placeholder="Enter hex code"
          />
          </div>
        </div>

        {/* New Service Input Form */}
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Add New Service</h4>
          <input
            type="text"
            value={newService.title}
            onChange={(e) => handleNewServiceChange('title', e.target.value)}
            className="input input-bordered w-full mb-2"
            placeholder="Enter service title"
          />
          <textarea
            value={newService.description}
            onChange={(e) => handleNewServiceChange('description', e.target.value)}
            className="textarea textarea-bordered w-full mb-2"
            rows={2}
            placeholder="Enter service description"
          />
          <button className="btn btn-primary" onClick={handleAddService}>Add Service</button>
        </div>

        {/* Services List Table */}
        <table className="table w-full">
          <thead>
            <tr>
              <th>Service</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {servicesData.servicesList.map((service, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={service.title}
                    onChange={(e) => handleServiceChange(index, 'title', e.target.value)}
                    className="input input-bordered w-full"
                    placeholder="Enter service title"
                  />
                </td>
                <td>
                  <textarea
                    value={service.description}
                    onChange={(e) => handleServiceChange(index, 'description', e.target.value)}
                    className="textarea textarea-bordered w-full"
                    rows={2}
                    placeholder="Enter service description"
                  />
                </td>
                <td>
                  <button className="btn btn-danger" onClick={() => {
                    const updatedServices = [...servicesData.servicesList];
                    updatedServices.splice(index, 1); // Remove service
                    setServicesData({ ...servicesData, servicesList: updatedServices });
                  }}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-end">
          <button className="btn btn-primary" onClick={handleSubmit}>Save Changes</button>
        </div>
      </div>
    </dialog>
  );
};

export default ServicesModal;
