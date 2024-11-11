import React, { useState, useEffect } from "react";
import { HexColorPicker } from "react-colorful";

const Contact2Modal = ({ isOpen, onClose }) => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    phone: "",
    email: "",
    address: "",
    imageUrl: "",
    bgColor: "",
    textColor: "",
  });

  useEffect(() => {
    // Fetch data from the API
    fetch(`${apiUrl}/contact/contact2/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFormData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleBgColorChange = (color) => {
    setFormData((prevData) => ({
      ...prevData,
      bgColor: color,
    }));
  };

  const handleTextColorChange = (color) => {
    setFormData((prevData) => ({
      ...prevData,
      textColor: color,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = async (e) => {
    const convertToBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file); // Convert to Base64
      });
    };

 


    const file = e.target.files[0];
    const imageBase64 = await convertToBase64(file)
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        imageUrl: imageBase64,
      }));
    }
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();

  
  

    // Send PATCH request
    fetch(`${apiUrl}/contact/contact2/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Updated Data:", data);
        onClose();
        window.location.reload();
      })
      .catch((error) => console.error("Error updating data:", error));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-10 bg-black bg-opacity-50 flex items-center justify-center overflow-y-auto">
      <div className="bg-white p-8 rounded shadow-lg max-w-xl w-full max-h-screen overflow-y-auto relative my-8 mx-4">
        <h2 className="text-2xl mb-4">Edit Contact Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-bold">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="border p-2 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold">Subtitle</label>
            <textarea
              name="subtitle"
              value={formData.subtitle}
              onChange={handleChange}
              className="border p-2 rounded-lg"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block font-bold">Phone</label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border p-2 rounded-lg"
            ></input>
          </div>
          <div className="mb-4">
            <label className="block font-bold">Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 rounded-lg"
            ></input>
          </div>
          <div className="mb-4">
            <label className="block font-bold">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="border p-2 rounded-lg"
            ></textarea>
          </div>

          {/* Background and Text Color Pickers */}
          <div className="mb-4">
            <label className="block font-bold">Background Color</label>
            <div className="hex flex items-center">
              <HexColorPicker
                color={formData.bgColor}
                onChange={handleBgColorChange}
                className="mr-4"
              />
              <input
                type="text"
                name="bgColor"
                value={formData.bgColor}
                onChange={handleChange}
                className="border p-2 rounded-lg"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block font-bold">Text Color</label>
            <div className="hex flex items-center">
              <HexColorPicker
                color={formData.textColor}
                onChange={handleTextColorChange}
                className="mr-4"
              />
              <input
                type="text"
                name="textColor"
                value={formData.textColor}
                onChange={handleChange}
                className="border p-2 rounded-lg"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block font-bold">Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="border p-2 rounded-lg"
            />
            {formData.imageUrl && (
              <img
                src={formData.imageUrl}
                alt="Contact"
                className="mt-2 max-h-32 object-cover"
              />
            )}
          </div>

          {/* Save and Cancel Buttons */}
          <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 p-2 rounded mr-2"
            >
              Cancel
            </button>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact2Modal;
