import React, { useState } from 'react';

const CarouselModal = ({ isOpen, onClose }) => {
  // Initial state with predefined images
  const [images, setImages] = useState([
    "https://flowbite.com/docs/images/carousel/carousel-1.svg",
    "https://flowbite.com/docs/images/carousel/carousel-2.svg",
    "https://flowbite.com/docs/images/carousel/carousel-3.svg",
    "https://flowbite.com/docs/images/carousel/carousel-4.svg",
    "https://flowbite.com/docs/images/carousel/carousel-5.svg",
  ]);

  // Handle image upload
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map(file => URL.createObjectURL(file)); // Create local URLs for uploaded images
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  // Handle removing an image
  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  // Handle form submission (if needed)
  const handleSubmit = () => {
    // Here you can handle the submission logic (e.g., API call)
    console.log('Updated Carousel Images:', images);
    onClose(); // Close modal after saving
  };

  return (
    <dialog className={`modal ${isOpen ? 'modal-open' : ''}`}>
      <div className="modal-box w-11/12 max-w-2xl relative">
        <button onClick={onClose} className="btn btn-sm btn-circle absolute right-2 top-2">✕</button>

        <h3 className="font-bold text-lg mb-4">Edit Carousel Images</h3>

        <div className="mb-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            multiple
            className="input input-bordered w-full mb-1"
          />
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          {images.map((image, index) => (
            <div key={index} className="relative">
              <img src={image} alt={`Carousel Image ${index + 1}`} className="w-full h-auto rounded-md" />
              <button
                className="btn btn-circle btn-error absolute top-2 right-2"
                onClick={() => handleRemoveImage(index)}
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <button className="btn btn-primary" onClick={handleSubmit}>Save Changes</button>
        </div>
      </div>
    </dialog>
  );
};

export default CarouselModal;
