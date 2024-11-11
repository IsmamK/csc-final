import React, { useState,useEffect } from 'react';
import { HexColorPicker } from 'react-colorful';

const CardsModal = ({ isOpen, onClose }) => {
  const [data, setData] = useState({
    divider: '',
    bgColor: '',
    textColor: '',
    heading: '',
    overlayColor: '',
    overlayTextColor: '',
    cards: []
  }
  );
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    // Mock JSON data
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/home/cards`); // Replace with your API endpoint
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching hero data:", error);
      }
    };


    // Simulating an API call
    fetchData()
  }, []);
  
  // Function to handle API submission
  const handleSubmit = async () => {
    try {
      // Convert heroData to JSON string
      const payload = JSON.stringify(heroData);

      // Make the PATCH request
      const response = await fetch(`${apiUrl}/home/cards/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: payload,
      });

      if (response.ok) {
        console.log('Updated Hero Data successfully!');
        onClose(); // Close modal after saving
      } else {
        console.error('Failed to update Hero Data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };




  // Function to handle card changes
  const handleCardChange = (index, field, value) => {
    const newCards = [...data.cards];
    newCards[index][field] = value;
    setHeroData((prevData) => ({
      ...prevData,
      cards: newCards,
    }));
  };

  // Function to handle image upload and convert to base64
  const handleImageUpload = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleCardChange(index, 'imageSrc', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to add a new card
  const addCard = () => {
    setHeroData((prevData) => ({
      ...prevData,
      cards: [
        ...prevData.cards,
        { imageSrc: '', title: '', additionalDetails: '' },
      ],
    }));
  };

  // Function to remove a card
  const removeCard = (index) => {
    setHeroData((prevData) => ({
      ...prevData,
      cards: prevData.cards.filter((_, i) => i !== index),
    }));
  };

  return (
    <dialog className={`modal ${isOpen ? 'modal-open' : ''}`}>
      <div className="modal-box w-11/12 max-w-4xl relative">
        <button onClick={onClose} className="btn btn-sm btn-circle absolute right-2 top-2">✕</button>

        <h3 className="font-bold text-lg mb-6">Edit Cards Section</h3>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Heading:</label>
          <input
            type="text"
            value={data.heading}
            onChange={(e) => setHeroData({ ...heroData, heading: e.target.value })}
            className="input input-bordered w-full mb-4"
          />
        </div>

        {/* Cards Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3 border-b-2">Image</th>
                <th className="p-3 border-b-2">Title</th>
                <th className="p-3 border-b-2">Details</th>
                <th className="p-3 border-b-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.cards.map((card, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="p-3 border-b">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(index, e)}
                      className="input input-bordered w-full"
                    />
                    {card.imageSrc && (
                      <img
                        src={card.imageSrc}
                        alt="Card"
                        className="mt-2 w-24 h-24 object-cover rounded-md"
                      />
                    )}
                  </td>
                  <td className="p-3 border-b">
                    <input
                      type="text"
                      value={card.title}
                      onChange={(e) => handleCardChange(index, 'title', e.target.value)}
                      className="input input-bordered w-full"
                      placeholder="Enter card title"
                    />
                  </td>
                  <td className="p-3 border-b">
                    <textarea
                      value={card.additionalDetails}
                      onChange={(e) => handleCardChange(index, 'additionalDetails', e.target.value)}
                      className="textarea textarea-bordered w-full"
                      rows={3}
                      placeholder="Enter additional details"
                    />
                  </td>
                  <td className="p-3 border-b text-center">
                    <button className="btn btn-error btn-sm" onClick={() => removeCard(index)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button className="btn btn-primary mt-6" onClick={addCard}>Add Card</button>

        <div className="modal-action">
          <button className="btn btn-success" onClick={handleSubmit}>Save Changes</button>
        </div>
      </div>
    </dialog>
  );
};

export default CardsModal;
