import React from 'react';

const OurClients = () => {
  const data = {
    title: "Our Clients",
    bgColor: "white", // Background color
    textColor: "#000",   // Text color
    divider: "path_to_divider_image.png", // Add your divider image path here
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

  return (
    <div className="relative" style={{ backgroundColor: data.bgColor, color: data.textColor }}>
      {/* Divider Image */}
      {data.divider && <img src={data.divider} alt="" className="absolute top-0 z-100" />}
      
      <div className="overflow-hidden py-40">
        <div className="flex items-center justify-center">
          <h2 className="text-7xl font-bold mb-6 mt-10">{data.title}</h2>
        </div>

        {/* Logo Slider Container */}
        <div className="w-10/12 mx-auto relative flex overflow-x-hidden mt-10 border-x-8 border-black">
          <div className="flex animate-marquee gap-5">
            {/* Map over clients to display logos */}
            {data.clients.concat(data.clients).map((client, index) => (
              <a key={index} href={client.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={client.logo}
                  alt={`Client Logo ${index + 1}`}
                  className="h-32 w-full object-contain  transition-transform duration-300 hover:scale-150" // Increased height and added flex-shrink-0
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
