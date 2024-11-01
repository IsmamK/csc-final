import React, { useState } from 'react';

const GalleryModal = ({ isOpen, onClose }) => {
    const [galleryData, setGalleryData] = useState(  [
        {
          image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
          subtitle: "The First Light",
          title: "Shooting Stars",
          description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
        },
        {
          image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
          subtitle: "The Second Light",
          title: "The Catalyzer",
          description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
        },
        {
          image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
          subtitle: "The Third Light",
          title: "The 400 Blows",
          description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
        },
        {
          image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
          subtitle: "The Fourth Light",
          title: "Neptune",
          description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
        },
        {
          image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
          subtitle: "The Fifth Light",
          title: "Holden Caulfield",
          description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
        },
        {
          image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
          subtitle: "The Sixth Light",
          title: "Alper Kamu",
          description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
        },
        {
          image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
          subtitle: "The Seventh Light",
          title: "The Awakening",
          description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
        },
        {
          image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
          subtitle: "The Eighth Light",
          title: "The Discovery",
          description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
        },
        {
          image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
          subtitle: "The Ninth Light",
          title: "The Horizon",
          description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
        },
        {
          image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
          subtitle: "The Tenth Light",
          title: "The Reflection",
          description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
        },
        {
          image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
          subtitle: "The Eleventh Light",
          title: "The Journey",
          description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
        },
        {
          image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
          subtitle: "The Twelfth Light",
          title: "The Dream",
          description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
        },
      ]);

    const handleInputChange = (index, field, value) => {
        const updatedGallery = [...galleryData];
        updatedGallery[index][field] = value;
        setGalleryData(updatedGallery);
    };

    const handleImageUpload = (index, event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            const updatedGallery = [...galleryData];
            updatedGallery[index].image = imageUrl;
            setGalleryData(updatedGallery);
        }
    };

    const addNewImage = () => {
        setGalleryData([
            ...galleryData,
            {
                image: null,
                subtitle: "",
                title: "",
                description: ""
            }
        ]);
    };

    const handleRemoveImage = (index) => {
        setGalleryData(galleryData.filter((_, i) => i !== index));
    };

    const handleSave = () => {
        console.log("Gallery Data Saved:", galleryData);
        onClose();
    };

    return (
        <dialog id="gallery_modal" className={`modal ${isOpen ? 'modal-open' : ''} `}>
      
            <div className="modal-box w-11/12 max-w-5xl relative">
            <button onClick={onClose} className="btn btn-sm btn-circle absolute right-2 top-2">
          ✕
        </button>
                <h3 className="font-bold text-lg mb-4">Gallery</h3>

                <table className="w-full table-fixed border-collapse">
                    <thead>
                        <tr>
                            <th className="border p-2 w-1/5">Image</th>
                            <th className="border p-2 w-1/5">Subtitle</th>
                            <th className="border p-2 w-1/5">Title</th>
                            <th className="border p-2 w-1/5">Description</th>
                            <th className="border p-2 w-1/5">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {galleryData.map((item, index) => (
                            <tr key={index}>
                                <td className="border p-2 text-center align-middle">
                                    {item.image ? (
                                        <div>
                                            <img src={item.image} alt={item.title} className="w-20 h-20 object-cover mb-2" />
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) => handleImageUpload(index, e)}
                                                className="btn btn-sm btn-outline w-full"
                                            />
                                        </div>
                                    ) : (
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => handleImageUpload(index, e)}
                                            className="input border border-gray-300 rounded p-2"
                                        />
                                    )}
                                </td>
                                <td className="border p-2 align-middle">
                                    <input
                                        type="text"
                                        className="input border border-gray-300 rounded p-2 w-full"
                                        placeholder="Subtitle"
                                        value={item.subtitle}
                                        onChange={(e) => handleInputChange(index, 'subtitle', e.target.value)}
                                    />
                                </td>
                                <td className="border p-2 align-middle">
                                    <input
                                        type="text"
                                        className="input border border-gray-300 rounded p-2 w-full"
                                        placeholder="Title"
                                        value={item.title}
                                        onChange={(e) => handleInputChange(index, 'title', e.target.value)}
                                    />
                                </td>
                                <td className="border p-2 align-middle">
                                    <textarea
                                        className="textarea border border-gray-300 rounded p-2 w-full"
                                        placeholder="Description"
                                        rows="2"
                                        value={item.description}
                                        onChange={(e) => handleInputChange(index, 'description', e.target.value)}
                                    />
                                </td>
                                <td className="border p-2 text-center align-middle ">
                                    <div className='flex flex-col gap-4'>
                                    <button
                                        className="btn btn-sm btn-error mb-2"
                                        onClick={() => handleRemoveImage(index)}
                                    >
                                        Remove
                                    </button>
                                  
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="flex justify-between mt-4">
                    <button className="btn btn-primary" onClick={addNewImage}>
                        Add New Image
                    </button>
                    <div className="modal-action">
                        <button className="btn" onClick={onClose}>Close</button>
                        <button className="btn btn-success" onClick={handleSave}>Save</button>
                    </div>
                </div>
            </div>
        </dialog>
    );
};

export default GalleryModal;
