import React, { useState } from 'react';
import { HexColorPicker } from "react-colorful"; // Ensure you install react-colorful for color picking

const HeroModal = ({ isOpen, onClose }) => {
  // Static data for the hero component
  const [heroData, setHeroData] = useState({
    divider: "", // Set your divider image path if needed
    bgColor: "white", // Default background color
    textColor: "#333", // Default text color
    title: "We're the one you're looking for",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati eum culpa nihil perferendis consectetur voluptas eaque cum odio numquam consequuntur.",
    buttonText: "Call to Action",
    imageUrl: "https://img.freepik.com/premium-photo/technical-support-operators-with-headsets-white-background_495423-53547.jpg?w=2000"
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setHeroData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = () => {
    console.log('Updated Hero Data:', heroData);
    onClose(); // Close modal after saving
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
          <label className="block mb-1">Image URL:</label>
          <input
            type="text"
            name="imageUrl"
            value={heroData.imageUrl}
            onChange={handleChange}
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
