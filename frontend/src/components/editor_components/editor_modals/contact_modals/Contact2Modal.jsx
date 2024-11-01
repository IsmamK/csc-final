import React, { useEffect, useState } from 'react';

const Contact2Modal = ({ isOpen, onClose }) => {
  const [contactData, setContactData] = useState({
    title: '',
    subtitle: '',
    phone: '',
    email: '',
    address: '',
    imageUrl: '',
  });

  const fetchContactData = async () => {
    const data = {
      title: "Contact Us",
      subtitle: "Reach Out To Us",
      phone: "470-601-1911",
      email: "Pagedone1234@gmail.com",
      address: "789 Oak Lane, Lakeside, TX 54321",
      imageUrl: "https://pagedone.io/asset/uploads/1696245837.png",
    };
    setContactData(data);
  };

  useEffect(() => {
    fetchContactData();
  }, []);

  // Update form values on input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', contactData);
    onClose();
  };

  return (
    <dialog id="contact2_modal" className={`modal ${isOpen ? 'modal-open' : ''}`}>
      <div className="modal-box w-11/12 max-w-5xl relative">
      <button onClick={onClose} className="btn btn-sm btn-circle absolute right-2 top-2">
          ✕
        </button>
        <h3 className="font-bold text-lg mb-4">Edit Contact Data</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="font-bold mb-1">Title:</label>
          <input
            type="text"
            name="title"
            className="input border border-gray-300 rounded p-2"
            value={contactData.title}
            onChange={handleInputChange}
          />

          <label className="font-bold mb-1">Subtitle:</label>
          <input
            type="text"
            name="subtitle"
            className="input border border-gray-300 rounded p-2"
            value={contactData.subtitle}
            onChange={handleInputChange}
          />

          <label className="font-bold mb-1">Phone:</label>
          <input
            type="tel"
            name="phone"
            className="input border border-gray-300 rounded p-2"
            value={contactData.phone}
            onChange={handleInputChange}
          />

          <label className="font-bold mb-1">Email:</label>
          <input
            type="email"
            name="email"
            className="input border border-gray-300 rounded p-2"
            value={contactData.email}
            onChange={handleInputChange}
          />

          <label className="font-bold mb-1">Address:</label>
          <input
            type="text"
            name="address"
            className="input border border-gray-300 rounded p-2"
            value={contactData.address}
            onChange={handleInputChange}
          />

          <label className="font-bold mb-1">Background Pattern Image URL:</label>
          <input
            type="text"
            name="imageUrl"
            className="input border border-gray-300 rounded p-2"
            value={contactData.imageUrl}
            onChange={handleInputChange}
          />

          <div className="modal-action mt-4">
            <button type="button" className="btn" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn btn-primary">Save</button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default Contact2Modal;
