import React, { useState } from 'react';
import { HexColorPicker } from "react-colorful"; // Ensure you have react-colorful installed for color picking

const HeroModal = ({ isOpen, onClose }) => {
  // Static data for the hero component
  const apiUrl = import.meta.env.VITE_API_URL;

  const [heroData, setHeroData] = useState({
    bgColor: "white", // Default background color
    textColor: "#333", // Default text color
    title: "We're the one you're looking for",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati eum culpa nihil perferendis consectetur voluptas eaque cum odio numquam consequuntur.",
    buttonText: "Call to Action",
    image1: null, // Will hold the file object for image 1
    image2: null, // Will hold the file object for image 2
    altText1: "Hero Image 1",
    altText2: "Hero Image 2",
    contactLink: "#",
    contactText: "Contact Us",
    ctaLink: "#",
    ctaText: "Call to Action",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setHeroData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to convert file to Base64
  const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
    });
  };

  // Handle file input changes
  const handleFileChange = async (e) => {
    const { name, files } = e.target;
    if (files[0]) {
      const base64Image = await toBase64(files[0]);
      setHeroData((prevData) => ({
        ...prevData,
        [name]: base64Image,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async () => {
    try {
      // Prepare data to patch
      const dataToPatch = {
        ...heroData,
      };

      // Send PATCH request to the API
      const response = await fetch(`${apiUrl}/home/hero/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToPatch),
      });

      if (!response.ok) {
        throw new Error('Failed to update hero data');
      }

      console.log('Updated Hero Data:', dataToPatch);
      onClose(); // Close modal after saving
    } catch (error) {
      console.error("Error updating hero data:", error);
    }
  };

  return (
    <dialog className={`modal ${isOpen ? 'modal-open' : ''}`}>
      <div className="modal-box w-11/12 max-w-2xl relative">
        <button onClick={onClose} className="btn btn-sm btn-circle absolute right-2 top-2">✕</button>

        <h3 className="font-bold text-lg mb-4">Edit Hero Section</h3>

        <div className="mb-4">
          <label className="block mb-1">Title:</label>
          <input
            type="text"
            name="title"
            value={heroData.title}
            onChange={handleChange}
            className="input input-bordered w-full mb-2"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Description:</label>
          <textarea
            name="description"
            value={heroData.description}
            onChange={handleChange}
            className="textarea textarea-bordered w-full mb-2"
            rows={3}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Button Text:</label>
          <input
            type="text"
            name="buttonText"
            value={heroData.buttonText}
            onChange={handleChange}
            className="input input-bordered w-full mb-2"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Upload Image 1:</label>
          <input
            type="file"
            name="image1"
            accept="image/*"
            onChange={handleFileChange}
            className="input input-bordered w-full mb-2"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Upload Image 2:</label>
          <input
            type="file"
            name="image2"
            accept="image/*"
            onChange={handleFileChange}
            className="input input-bordered w-full mb-2"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Background Color:</label>
          <div className="flex items-center mb-2">
            <div className="hex">
              <HexColorPicker
                color={heroData.bgColor}
                onChange={(color) => setHeroData((prevData) => ({ ...prevData, bgColor: color }))}
                className="w-24 h-24" // Set the dimensions for the color picker
              />
            </div>
            <input
              type="text"
              name="bgColor"
              value={heroData.bgColor}
              onChange={handleChange}
              className="input input-bordered w-24 ml-2" // Small input for hex code
              placeholder="#ffffff" // Placeholder for hex code
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-1">Text Color:</label>
          <div className="flex items-center mb-2">
            <div className="hex">
              <HexColorPicker
                color={heroData.textColor}
                onChange={(color) => setHeroData((prevData) => ({ ...prevData, textColor: color }))}
                className="w-24 h-24" // Set the dimensions for the color picker
              />
            </div>
            <input
              type="text"
              name="textColor"
              value={heroData.textColor}
              onChange={handleChange}
              className="input input-bordered w-24 ml-2" // Small input for hex code
              placeholder="#333333" // Placeholder for hex code
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button className="btn btn-primary" onClick={handleSubmit}>Save Changes</button>
        </div>
      </div>
    </dialog>
  );
};

export default HeroModal;
