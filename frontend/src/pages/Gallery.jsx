import React from 'react';

// Array of gallery data including images, subtitles, titles, and descriptions
const gallery = {
  title: "Our Gallery", // Main gallery title
  subtitle: "Discover our stunning collection of images",
  items: [
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
]

}

const Gallery = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{gallery.title}</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{gallery.subtitle}</p>
        </div>
        <div className="flex flex-wrap -m-4">
          {gallery.items.map((item, index) => (
            <div key={index} className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={item.image} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">{item.subtitle}</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{item.title}</h1>
                  <p className="leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Gallery;
