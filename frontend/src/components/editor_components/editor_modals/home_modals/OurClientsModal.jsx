import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful';

const OurClientsModal = ({ isOpen, onClose }) => {
  // Initial state based on the provided JSON
  const initialData = {
    title: "Our Clients",
    bgColor: "white",
    textColor: "#000",
    clients: [
      {
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png",
        link: "https://www.samsung.com"
      },
      {
        logo: "https://i.pinimg.com/originals/77/cd/5a/77cd5aef056d75c2c9e17c581681ed0c.png",
        link: "https://www.example.com/client2"
      },
      {
        logo: "https://e7.pngegg.com/pngimages/144/206/png-clipart-unilever-pureit-pure-it-logo-icons-logos-emojis-product-logos.png",
        link: "https://www.example.com/client3"
      },
      {
        logo: "https://logos-world.net/wp-content/uploads/2020/11/Hewlett-Packard-Logo-2008-2014.png",
        link: "https://www.hp.com"
      },
      {
        logo: "https://i.pinimg.com/originals/6f/14/e1/6f14e17403cf65d3d5adeef024e85c1f.png",
        link: "https://www.example.com/client5"
      },
      {
        logo: "https://seeklogo.com/images/P/pran-logo-17F049097A-seeklogo.com.png",
        link: "https://www.example.com/client6"
      },
    ]
  };

  const [data, setData] = useState(initialData);

  const handleInputChange = (field, value) => {
    setData({ ...data, [field]: value });
  };

  const handleClientChange = (index, field, value) => {
    const updatedClients = [...data.clients];
    updatedClients[index][field] = value;
    setData({ ...data, clients: updatedClients });
  };

  const handleLogoUpload = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleClientChange(index, 'logo', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeClient = (index) => {
    const updatedClients = data.clients.filter((_, i) => i !== index);
    setData({ ...data, clients: updatedClients });
  };

  const addNewClient = () => {
    const newClient = {
      logo: '',
      link: ''
    };
    setData({ ...data, clients: [...data.clients, newClient] });
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log(data);
  };

  return (
    <dialog className={`modal ${isOpen ? 'modal-open' : ''}`}>
      <div className="modal-box w-full max-w-5xl relative">
        <button onClick={onClose} className="btn btn-sm btn-circle absolute right-2 top-2">✕</button>

        <h3 className="font-bold text-lg mb-2">Manage Our Clients</h3>

        <div className="mb-4">
          <label className="block mb-1">Title</label>
          <input
            type="text"
            value={data.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
            className="input input-bordered w-full"
            placeholder="Title"
          />
        </div>

        <div className="mb-4 ">
          <label className="block mb-1 mr-2">Background Color</label>
          <div className="hex flex items-center">
            <HexColorPicker
              color={data.bgColor}
              onChange={(color) => handleInputChange('bgColor', color)}
              className="w-12 h-12"
            />
            <input
              type="text"
              value={data.bgColor}
              onChange={(e) => handleInputChange('bgColor', e.target.value)}
              className="input input-bordered w-20 ml-2"
              placeholder="#ffffff"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-1 mr-2">Text Color</label>
          <div className="hex flex items-center">
            <HexColorPicker
              color={data.textColor}
              onChange={(color) => handleInputChange('textColor', color)}
              className="w-12 h-12"
            />
            <input
              type="text"
              value={data.textColor}
              onChange={(e) => handleInputChange('textColor', e.target.value)}
              className="input input-bordered w-20 ml-2"
              placeholder="#000000"
            />
          </div>
        </div>

        <table className="table-auto w-full border border-gray-300 overflow-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-2 py-2 border">Logo</th>
              <th className="px-2 py-2 border">Link</th>
              <th className="px-2 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client, index) => (
              <tr key={index} className="border-t">
                <td className="px-2 py-2 border text-center">
                  <img
                    src={client.logo}
                    alt="Client Logo"
                    className="h-16 w-16 object-contain mb-2"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleLogoUpload(index, e)}
                    className="file-input file-input-bordered w-full"
                  />
                </td>
                <td className="px-2 py-2 border text-center">
                  <input
                    type="text"
                    value={client.link}
                    onChange={(e) => handleClientChange(index, 'link', e.target.value)}
                    className="input input-bordered w-full"
                    placeholder="Client Link"
                  />
                </td>
                <td className="px-2 py-2 border text-center">
                  <button
                    onClick={() => removeClient(index)}
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
          <button className="btn btn-primary" onClick={addNewClient}>Add New Client</button>
          <button className="btn btn-success" onClick={handleSubmit}>Save Changes</button>
        </div>
      </div>
    </dialog>
  );
};

export default OurClientsModal;
