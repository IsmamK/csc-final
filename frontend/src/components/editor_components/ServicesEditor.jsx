import React, { useEffect, useState } from 'react';
import { HexColorPicker } from 'react-colorful';

// Initial services data



// ServicesEditor component
const ServicesEditor = () => {
  const [servicesData, setServicesData] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;


  useEffect(()=>{
    fetch(`${apiUrl}/services/`)
    .then(res=>res.json())
    .then(data=>{
      setServicesData(data)
    })
  },[])
  
  // Handle adding a new service page
  const addService = () => {
    setServicesData([
      ...servicesData,
      {
        slug: '',
        title: '',
        description: '',
        heroText: '',
        heroBgColor: "#000000",
        heroTextColor: "#FFFFFF",
        featuresBgColor: "#000000",
        featuresTextColor: "#FFFFFF",
        heroImage: '',
        features: [],
      },
    ]);
  };



  // Handle removing a service page
  const removeService = (index) => {
    const updatedServicesData = servicesData.filter((_, i) => i !== index);
    setServicesData(updatedServicesData);
  };

  // Handle updating a specific service page
  const updateService = (index, field, value) => {
    const updatedServicesData = servicesData.map((service, i) =>
      i === index ? { ...service, [field]: value } : service
    );
    setServicesData(updatedServicesData);
  };

  // Handle updating feature data for a specific service
  const updateFeature = (serviceIndex, featureIndex, field, value) => {
    const updatedServicesData = [...servicesData];
    updatedServicesData[serviceIndex].features[featureIndex][field] = value;
    setServicesData(updatedServicesData);
  };

  // Convert image to Base64
  const convertToBase64 = (file, callback) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => callback(reader.result);
    reader.onerror = (error) => console.error('Error converting image:', error);
  };

  const handleIconUpload = (serviceIndex, featureIndex, file) => {
    convertToBase64(file, (base64Image) => {
      updateFeature(serviceIndex, featureIndex, 'iconImage', base64Image);
    });
  };

  const saveServices = async () => {
    function formatString(str) {
      return str.toLowerCase().replace(/\s+/g, '-');
    }
    servicesData.forEach(service=>{
      if (!service.slug){
        service.slug = formatString(service.title)
      }
    })
    try {
      const response = await fetch(`${apiUrl}/services/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(servicesData),
      });
      if (!response.ok) throw new Error('Error saving services');
      alert('Services saved successfully!');
    } catch (error) {
      console.error('Save error:', error);
      alert('Failed to save services');
    }
  };

  
  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold mb-4">Services Editor</h1>

      {/* Service List */}
      {servicesData.map((service, serviceIndex) => (
        <div key={serviceIndex} className="bg-gray-100 p-5 rounded-lg mb-4">
          <div className="flex justify-between items-center">
            <input
              type="text"
              className="text-xl font-semibold w-full p-2 mb-2 border rounded"
              placeholder="Service Title"
              value={service.title}
              onChange={(e) => updateService(serviceIndex, 'title', e.target.value)}
            />
            <button
              className="text-red-500 ml-4"
              onClick={() => removeService(serviceIndex)}
            >
              Remove Service
            </button>
          </div>

          {/* Editable fields for description and hero text */}
          <div className="mb-4">
            <label className="block">Service Description:</label>
            <textarea
              className="w-full p-2 border rounded"
              placeholder="Description"
              value={service.description}
              onChange={(e) => updateService(serviceIndex, 'description', e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block">Hero Text:</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Hero Text"
              value={service.heroText}
              onChange={(e) => updateService(serviceIndex, 'heroText', e.target.value)}
            />
          </div>

          {/* Editable fields for colors */}
          <div className="flex mb-4 space-x-4">
            <div className='hex'>
              <label className="block">Hero Background Color:</label>
              <HexColorPicker
                color={service.heroBgColor}
                onChange={(color) => updateService(serviceIndex, 'heroBgColor', color)}
              />
        
              <input
                type="text"
                value={service.heroBgColor}
                onChange={(color) => updateService(serviceIndex, 'heroBgColor', e.target.value)}
                className="input input-bordered w-20 ml-2 mt-2"
              />

              </div>
            <div className='hex'>
              <label className="block">Hero Text Color:</label>
              <HexColorPicker
                color={service.heroTextColor}
                onChange={(color) => updateService(serviceIndex, 'heroTextColor', color)}
              />
              <input
                type="text"
                value={service.heroTextColor}
                onChange={(color) => updateService(serviceIndex, 'heroTextColor', e.target.value)}
                className="input input-bordered w-20 ml-2 mt-2"
              />
            </div>
            <div className='hex'>
              <label className="block">Features Background Color:</label>
              <HexColorPicker
                color={service.featuresBgColor}
                onChange={(color) => updateService(serviceIndex, 'featuresBgColor', color)}
              />
               <input
                type="text"
                value={service.featuresBgColor}
                onChange={(color) => updateService(serviceIndex, 'featuresBgColor', e.target.value)}
                className="input input-bordered w-20 ml-2 mt-2"
              />
            </div>
            <div className='hex'>
              <label className="block">Features Text Color:</label>
              <HexColorPicker
                color={service.featuresTextColor}
                onChange={(color) => updateService(serviceIndex, 'featuresTextColor', color)}
              />
              <input
                type="text"
                value={service.featuresTextColor}
                onChange={(color) => updateService(serviceIndex, 'featuresTextColor', e.target.value)}
                className="input input-bordered w-20 ml-2 mt-2"
              />
            </div>
          </div>

          {/* Features Section */}
          <h3 className="text-lg font-semibold mb-2">Features</h3>
          {service.features.map((feature, featureIndex) => (
            <div key={featureIndex} className="mb-4 p-4 border rounded">
              <input
                type="text"
                className="font-semibold w-full p-2 mb-2 border rounded"
                placeholder="Feature Title"
                value={feature.title}
                onChange={(e) => updateFeature(serviceIndex, featureIndex, 'title', e.target.value)}
              />
              
              {/* Image Upload for Icon */}
              <label className="block mb-2">Upload Icon Image:</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleIconUpload(serviceIndex, featureIndex, e.target.files[0])}
                className="mb-2"
              />
              {feature.iconImage && (
                <img src={feature.iconImage} alt="Feature Icon" className="h-10 w-10 mb-2" />
              )}

              <textarea
                className="w-full p-2 border rounded"
                placeholder="Feature Description"
                value={feature.description}
                onChange={(e) =>
                  updateFeature(serviceIndex, featureIndex, 'description', e.target.value)
                }
              />
            </div>
          ))}

          <button
            className="bg-green-500 text-white p-2 rounded"
            onClick={() => {
              const newFeature = { title: '', description: '', iconPath: '' };
              updateService(serviceIndex, 'features', [...service.features, newFeature]);
            }}
          >
            Add Feature
          </button>
        </div>
      ))}

      {/* Add Service Button */}
      <div className='flex gap-10'>
      <button
        className="bg-blue-500 text-white p-3 rounded mt-5"
        onClick={addService}
      >
        Add New Service Page
      </button>

      <button
        className="bg-purple-500 text-white p-3 rounded mt-5"
        onClick={saveServices}
      >
        Save Services
      </button>
    </div>
    </div>
  );
};

export default ServicesEditor;
