import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful';

const WhyUsModal = ({ isOpen, onClose }) => {
  // Hardcoded data
  const initialReasons = [
    {
      icon: '⭐',
      title: 'Quality Service',
      description: 'We provide top-notch service to our customers.',
      bgColor: '#f0f8ff',
      textColor: '#000000',
    },
    {
      icon: '🌟',
      title: 'Affordable Prices',
      description: 'Our prices are competitive and fair.',
      bgColor: '#fff5ee',
      textColor: '#000000',
    },
    {
      icon: '🏆',
      title: 'Expert Team',
      description: 'Our team consists of industry experts.',
      bgColor: '#ffe4e1',
      textColor: '#000000',
    },
  ];

  const [reasons, setReasons] = useState(initialReasons);

  const handleInputChange = (index, field, value) => {
    const newReasons = [...reasons];
    newReasons[index][field] = value;
    setReasons(newReasons);
  };

  const removeReason = (index) => {
    const newReasons = reasons.filter((_, i) => i !== index);
    setReasons(newReasons);
  };

  const addNewReason = () => {
    const newReason = {
      icon: '',
      title: '',
      description: '',
      bgColor: '#ffffff',
      textColor: '#000000',
    };
    setReasons([...reasons, newReason]);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log(reasons);
  };

  return (
    <dialog className={`modal ${isOpen ? 'modal-open' : ''}`}>
      <div className="modal-box w-full max-w-5xl relative">
        <button onClick={onClose} className="btn btn-sm btn-circle absolute right-2 top-2">✕</button>

        <h3 className="font-bold text-lg mb-2">Why Choose Us?</h3>

        <table className="table-auto w-full border border-gray-300 overflow-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-2 py-2 border">Icon</th>
              <th className="px-2 py-2 border w-1/4">Title</th>
              <th className="px-2 py-2 border">Description</th>
              <th className="px-2 py-2 border">Background Color</th>
              <th className="px-2 py-2 border">Text Color</th>
              <th className="px-2 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reasons.map((reason, index) => (
              <tr key={index} className="border-t">
                <td className="px-2 py-2 border text-center">{reason.icon}</td>
                <td className="px-2 py-2 border">
                  <input
                    type="text"
                    value={reason.title}
                    onChange={(e) => handleInputChange(index, 'title', e.target.value)}
                    className="input input-bordered w-full"
                    placeholder="Title"
                  />
                </td>
                <td className="px-2 py-2 border">
                  <input
                    type="text"
                    value={reason.description}
                    onChange={(e) => handleInputChange(index, 'description', e.target.value)}
                    className="input input-bordered w-full"
                    placeholder="Description"
                  />
                </td>
                <td className="px-2 py-2 border">
                  <div className="flex items-center">
                    <HexColorPicker
                      color={reason.bgColor}
                      onChange={(color) => handleInputChange(index, 'bgColor', color)}
                      className="w-12 h-12"
                    />
                    <input
                      type="text"
                      value={reason.bgColor}
                      onChange={(e) => handleInputChange(index, 'bgColor', e.target.value)}
                      className="input input-bordered w-20 ml-2"
                      placeholder="#ffffff"
                    />
                  </div>
                </td>
                <td className="px-2 py-2 border">
                  <div className="flex items-center">
                    <HexColorPicker
                      color={reason.textColor}
                      onChange={(color) => handleInputChange(index, 'textColor', color)}
                      className="w-12 h-12"
                    />
                    <input
                      type="text"
                      value={reason.textColor}
                      onChange={(e) => handleInputChange(index, 'textColor', e.target.value)}
                      className="input input-bordered w-20 ml-2"
                      placeholder="#000000"
                    />
                  </div>
                </td>
                <td className="px-2 py-2 border text-center">
                  <button
                    onClick={() => removeReason(index)}
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
          <button className="btn btn-primary" onClick={addNewReason}>Add New Reason</button>
          <button className="btn btn-success" onClick={handleSubmit}>Save Changes</button>
        </div>
      </div>
    </dialog>
  );
};

export default WhyUsModal;
