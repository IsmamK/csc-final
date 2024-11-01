import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful';

const StatisticsModal = ({ isOpen, onClose }) => {
  // Mock JSON data for statistics
  const mockData = {
    divider: "", // Replace with your divider image
    heading: "Numbers That Amaze",
    bgColor: "#f9f9f9", // Background color for the statistics section
    textColor: "#333", // Text color for the statistics section
    statsList: [
      {
        value: "500+",
        description: "Secure Installations",
        bgColor: "#4A5568", // Background color for this stat
        textColor: "#fff" // Text color for this stat
      },
      {
        value: "1000+",
        description: "Cleaning Projects",
        bgColor: "#2B6CB0", // Background color for this stat
        textColor: "#fff" // Text color for this stat
      },
      {
        value: "800+",
        description: "Pest Control Jobs",
        bgColor: "#DD6B20", // Background color for this stat
        textColor: "#fff" // Text color for this stat
      },
      {
        value: "1200+",
        description: "Happy Households",
        bgColor: "#38A169", // Background color for this stat
        textColor: "#fff" // Text color for this stat
      },
    ],
  };

  const [statisticsData, setStatisticsData] = useState(mockData);

  // Handle changes for the background color
  const handleBgColorChange = (color) => {
    setStatisticsData({ ...statisticsData, bgColor: color });
  };

  const handleTextColorChange = (color) => {
    setStatisticsData({ ...statisticsData, textColor: color });
  };

  // Handle input changes for statistics
  const handleStatChange = (index, field, value) => {
    const updatedStats = [...statisticsData.statsList];
    updatedStats[index][field] = value;
    setStatisticsData({ ...statisticsData, statsList: updatedStats });
  };

  // Handle heading change
  const handleHeadingChange = (e) => {
    setStatisticsData({ ...statisticsData, heading: e.target.value });
  };

  // Handle form submission
  const handleSubmit = () => {
    console.log('Updated Statistics Data:', statisticsData);
    onClose(); // Close modal after saving
  };

  // Add a new stat entry
  const handleAddStat = () => {
    const newStat = {
      value: "",
      description: "",
      bgColor: "#000000", // Default background color
      textColor: "#ffffff", // Default text color
    };
    setStatisticsData((prevData) => ({
      ...prevData,
      statsList: [...prevData.statsList, newStat],
    }));
  };

  return (
    <dialog className={`modal ${isOpen ? 'modal-open' : ''}`}>
      <div className="modal-box w-11/12 max-w-7xl relative">
        <button onClick={onClose} className="btn btn-sm btn-circle absolute right-2 top-2">✕</button>

        <h3 className="font-bold text-lg mb-4">Edit Statistics Section</h3>

        {/* Editable Heading */}
        <div className="mb-4">
          <label className="block mb-1">Heading:</label>
          <input
            type="text"
            value={statisticsData.heading}
            onChange={handleHeadingChange}
            className="input input-bordered w-full"
            placeholder="Enter heading"
          />
        </div>

        {/* Background Color Picker */}
        <div className="mb-4">
          <label className="block mb-1">Background Color:</label>
          <div className='flex items-center'>
            <div className="hex">
                dv
            <HexColorPicker
              color={statisticsData.bgColor}
              onChange={handleBgColorChange}
              className="w-20 h-20"
            />
            </div>
            <input
              type="text"
              value={statisticsData.bgColor}
              onChange={(e) => handleBgColorChange(e.target.value)}
              className="input input-bordered w-32 ml-2"
              placeholder="Hex Code"
            />
         
          </div>
        </div>

        {/* Text Color Picker */}
        <div className="mb-4">
          <label className="block mb-1">Text Color:</label>
          <div className='flex items-center'>

            <div className="hex">
            <HexColorPicker
              color={statisticsData.textColor}
              onChange={handleTextColorChange}
              className="w-20 h-20"
            />
            </div>
            <input
              type="text"
              value={statisticsData.textColor}
              onChange={(e) => handleTextColorChange(e.target.value)}
              className="input input-bordered w-32 ml-2"
              placeholder="Hex Code"
            />
          </div>
        </div>

        {/* Statistics List Table */}
        <table className="table w-full">
          <thead>
            <tr>
              <th>Value</th>
              <th>Description</th>
              <th>Background Color</th>
              <th>Text Color</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {statisticsData.statsList.map((stat, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={stat.value}
                    onChange={(e) => handleStatChange(index, 'value', e.target.value)}
                    className="input input-bordered w-full"
                    placeholder="Enter value"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={stat.description}
                    onChange={(e) => handleStatChange(index, 'description', e.target.value)}
                    className="input input-bordered w-full"
                    placeholder="Enter description"
                  />
                </td>
                <td>
                  <div className='flex items-center'>
                    <div className="hex">
                    <HexColorPicker
                      color={stat.bgColor}
                      onChange={(color) => handleStatChange(index, 'bgColor', color)}
                      className="w-20 h-20"
                    />
                    </div>
                    <input
                      type="text"
                      value={stat.bgColor}
                      onChange={(e) => handleStatChange(index, 'bgColor', e.target.value)}
                      className="input input-bordered w-32 ml-2"
                      placeholder="Hex Code"
                    />
                  </div>
                </td>
                <td>
                  <div className='flex items-center'>
                    <div className="hex">
                    <HexColorPicker
                      color={stat.textColor}
                      onChange={(color) => handleStatChange(index, 'textColor', color)}
                      className="w-20 h-20"
                    />
                    </div>
                    <input
                      type="text"
                      value={stat.textColor}
                      onChange={(e) => handleStatChange(index, 'textColor', e.target.value)}
                      className="input input-bordered w-32 ml-2"
                      placeholder="Hex Code"
                    />
                  </div>
                </td>
                <td>
                  <button className="btn btn-danger" onClick={() => {
                    const updatedStats = [...statisticsData.statsList];
                    updatedStats.splice(index, 1); // Remove stat
                    setStatisticsData({ ...statisticsData, statsList: updatedStats });
                  }}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-end mb-4">
          <button className="btn btn-secondary" onClick={handleAddStat}>Add Statistic</button>
        </div>

        <div className="flex justify-end">
          <button className="btn btn-primary" onClick={handleSubmit}>Save Changes</button>
        </div>
      </div>
    </dialog>
  );
};

export default StatisticsModal;
