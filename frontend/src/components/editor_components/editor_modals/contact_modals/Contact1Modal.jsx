import React, { useState } from 'react';

const Contact1Modal = ({ isOpen, onClose }) => {
  // Prefill form with initial data
  const [header, setHeader] = useState('Get In Touch');
  const [subHeader, setSubHeader] = useState('Whether you have a concern or simply want to say hello, We are here to facilitate communication with you.');
  const [buttonText, setButtonText] = useState('Contact Us');
  const [emailLabel, setEmailLabel] = useState('Email Address');
  const [phoneLabel, setPhoneLabel] = useState('Phone Number');
  const [email, setEmail] = useState('pagedone@gmail.com');
  const [phone, setPhone] = useState('470-601-1911');
  const [locations, setLocations] = useState([
    {
      country: 'United Kingdom',
      address: '123 High Street, Westminster, London',
      imgSrc: 'https://pagedone.io/asset/uploads/1696246502.png',
    },
    {
      country: 'Germany',
      address: '101 Unter den Linden, Mitte District, Berlin',
      imgSrc: 'https://pagedone.io/asset/uploads/1696246522.png',
    },
    {
      country: 'France',
      address: '456 Rue de la Paix, 8th Arrondissement, Paris',
      imgSrc: 'https://pagedone.io/asset/uploads/1696246551.png',
    },
    {
      country: 'Switzerland',
      address: '987 Bahnhofstrasse, Zurich City Center, Zurich',
      imgSrc: 'https://pagedone.io/asset/uploads/1696246565.png',
    },
  ]);

  const handleLocationChange = (index, field, value) => {
    const newLocations = [...locations];
    newLocations[index][field] = value;
    setLocations(newLocations);
  };

  const addLocation = () => {
    setLocations([...locations, { country: '', address: '', imgSrc: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Structure the form data as desired
    const data = {
      header,
      subHeader,
      buttonText,
      emailLabel,
      phoneLabel,
      email,
      phone,
      locations,
    };

    console.log(data); // Log data or send it to an API
    onClose();
  };

  return (
    <dialog id="contact1_modal" className={`modal ${isOpen ? 'modal-open' : ''}`}>
      <div className="modal-box w-11/12 max-w-5xl relative">
      <button onClick={onClose} className="btn btn-sm btn-circle absolute right-2 top-2">
          ✕
        </button>
        <h3 className="font-bold text-lg mb-4">Contact Form</h3>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label className="font-bold mb-1">Header:</label>
          <input
            type="text"
            className="input border border-gray-300 rounded p-2"
            value={header}
            onChange={(e) => setHeader(e.target.value)}
          />
          <label className="font-bold mb-1">Subheader:</label>
          <input
            type="text"
            className="input border border-gray-300 rounded p-2"
            value={subHeader}
            onChange={(e) => setSubHeader(e.target.value)}
          />
          <label className="font-bold mb-1">Button Text:</label>
          <input
            type="text"
            className="input border border-gray-300 rounded p-2"
            value={buttonText}
            onChange={(e) => setButtonText(e.target.value)}
          />
          <label className="font-bold mb-1">Email Label:</label>
          <input
            type="text"
            className="input border border-gray-300 rounded p-2"
            value={emailLabel}
            onChange={(e) => setEmailLabel(e.target.value)}
          />
          <label className="font-bold mb-1">Phone Label:</label>
          <input
            type="text"
            className="input border border-gray-300 rounded p-2"
            value={phoneLabel}
            onChange={(e) => setPhoneLabel(e.target.value)}
          />
          <label className="font-bold mb-1">Email:</label>
          <input
            type="email"
            className="input border border-gray-300 rounded p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="font-bold mb-1">Phone:</label>
          <input
            type="text"
            className="input border border-gray-300 rounded p-2"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <h4 className="font-bold mt-4">Locations:</h4>
          <table className="table-auto w-full mb-4 border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">Country</th>
                <th className="border border-gray-300 p-2">Address</th>
                <th className="border border-gray-300 p-2">Image Source</th>
              </tr>
            </thead>
            <tbody>
              {locations.map((location, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2">
                    <input
                      type="text"
                      className="w-full p-1 border rounded"
                      value={location.country}
                      onChange={(e) => handleLocationChange(index, 'country', e.target.value)}
                    />
                  </td>
                  <td className="border border-gray-300 p-2">
                    <input
                      type="text"
                      className="w-full p-1 border rounded"
                      value={location.address}
                      onChange={(e) => handleLocationChange(index, 'address', e.target.value)}
                    />
                  </td>
                  <td className="border border-gray-300 p-2">
                    <input
                      type="text"
                      className="w-full p-1 border rounded"
                      value={location.imgSrc}
                      onChange={(e) => handleLocationChange(index, 'imgSrc', e.target.value)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button type="button" className="btn mt-2" onClick={addLocation}>
            Add Location
          </button>

          <button type="submit" className="btn mt-4">Submit</button>
        </form>
        <div className="modal-action mt-4">
          <button className="btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </dialog>
  );
};

export default Contact1Modal;
