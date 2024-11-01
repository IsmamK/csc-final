import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful';

const GridCardsModal = ({ isOpen, onClose }) => {
  const initialData = {
    title: "Explore Beautiful Destinations",
    subtitle: "Choose your dream destination and explore nature",
    gridCards: [
      {
        image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
        title: "Mountain View",
        description: "A beautiful view of the mountains during sunset.",
        flipBgColor: "#f5c6a5",
        flipTextColor: "#333",
      },
      {
        image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
        title: "Beachfront",
        description: "Relax by the calming waves and sandy beach.",
        flipBgColor: "#a5d5f5",
        flipTextColor: "#222",
      },
      {
        image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
        title: "City Lights",
        description: "An amazing view of the city skyline at night.",
        flipBgColor: "#f5e1a5",
        flipTextColor: "#111",
      },
      {
        image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
        title: "Forest Trail",
        description: "Hike through lush green forests and enjoy nature.",
        flipBgColor: "#c3f5a5",
        flipTextColor: "#222",
      },
      {
        image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
        title: "Desert Dunes",
        description: "Experience the serenity of the vast desert landscape.",
        flipBgColor: "#f5d2a5",
        flipTextColor: "#333",
      },
      {
        image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
        title: "Lake House",
        description: "Enjoy a peaceful stay by the lake with scenic views.",
        flipBgColor: "#d3a5f5",
        flipTextColor: "#222",
      },
      {
        image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
        title: "Snowy Peaks",
        description: "Feel the chill of snow-capped mountains in winter.",
        flipBgColor: "#a5f5f2",
        flipTextColor: "#111",
      },
      {
        image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
        title: "Countryside",
        description: "Escape to the quiet and tranquility of the countryside.",
        flipBgColor: "#f5a5a5",
        flipTextColor: "#222",
      },
    ],
  };

  const [data, setData] = useState(initialData);

  const addNewCard = () => {
    const newCard = {
      image: "",
      title: "",
      description: "",
      flipBgColor: "#ffffff",
      flipTextColor: "#333333",
    };
    setData({ ...data, gridCards: [...data.gridCards, newCard] });
  };

  const removeCard = (index) => {
    const updatedCards = data.gridCards.filter((_, i) => i !== index);
    setData({ ...data, gridCards: updatedCards });
  };

  const handleInputChange = (index, field, value) => {
    const updatedCards = [...data.gridCards];
    updatedCards[index][field] = value;
    setData({ ...data, gridCards: updatedCards });
  };

  const handleImageUpload = (index, file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      handleInputChange(index, 'image', reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    console.log('Updated Destination Data:', data);
    onClose();
  };

  return (
    <dialog className={`modal ${isOpen ? 'modal-open' : ''}`}>
      <div className="modal-box w-full max-w-7xl relative">
        <button onClick={onClose} className="btn btn-sm btn-circle absolute right-2 top-2">✕</button>
        
        <h3 className="font-bold text-lg mb-2">{data.title}</h3>
        <p className="mb-4">{data.subtitle}</p>
        
        <table className="table ">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-2 py-2 border">Image</th>
              <th className="px-2 py-2 border">Title</th>
              <th className="px-2 py-2 border">Description</th>
              <th className="px-2 py-2 border">Background Color</th>
              <th className="px-2 py-2 border">Text Color</th>
              <th className="px-2 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.gridCards.map((card, index) => (
              <tr key={index} className="border-t">
                <td className="px-1 py-1 border">
                  <div className="flex flex-col items-center">
                  {card.image && (
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-fit h-fit object-cover border rounded"
                      />
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(index, e.target.files[0])}
                      className="input input-bordered w-full mb-2"
                    />
                   
                  </div>
                </td>
                <td className="px-2 py-2 border">
                  <input
                    type="text"
                    value={card.title}
                    onChange={(e) => handleInputChange(index, 'title', e.target.value)}
                    className="input input-bordered w-full"
                    placeholder="Title"
                  />
                </td>
                <td className="px-2 py-2 border">
                  <input
                    type="text"
                    value={card.description}
                    onChange={(e) => handleInputChange(index, 'description', e.target.value)}
                    className="input input-bordered w-full"
                    placeholder="Description"
                  />
                </td>
                <td className="px-2 py-2 border">
                  <div className="flex items-center">
                    <HexColorPicker
                      color={card.flipBgColor}
                      onChange={(color) => handleInputChange(index, 'flipBgColor', color)}
                      className="w-12 h-12"
                    />
                    <input
                      type="text"
                      value={card.flipBgColor}
                      onChange={(e) => handleInputChange(index, 'flipBgColor', e.target.value)}
                      className="input input-bordered w-20 ml-2"
                      placeholder="#ffffff"
                    />
                  </div>
                </td>
                <td className="px-2 py-2 border">
                  <div className="flex items-center">
                    <HexColorPicker
                      color={card.flipTextColor}
                      onChange={(color) => handleInputChange(index, 'flipTextColor', color)}
                      className="w-12 h-12"
                    />
                    <input
                      type="text"
                      value={card.flipTextColor}
                      onChange={(e) => handleInputChange(index, 'flipTextColor', e.target.value)}
                      className="input input-bordered w-20 ml-2"
                      placeholder="#333333"
                    />
                  </div>
                </td>
                <td className="px-2 py-2 border text-center">
                  <button
                    onClick={() => removeCard(index)}
                    className="btn btn-sm btn-error"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className="flex justify-between mt-4">
          <button className="btn btn-primary" onClick={addNewCard}>Add New Card</button>
          <button className="btn btn-success" onClick={handleSubmit}>Save Changes</button>
        </div>
      </div>
    </dialog>
  );
};

export default GridCardsModal;
