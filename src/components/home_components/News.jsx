import React from 'react';

const News = ({ divider, bgColor = '#f8fafc', textColor = '#333' }) => {
  const newsItems = [
    {
      title: "Company Launches New Product",
      date: "October 20, 2024",
      summary: "We are excited to introduce our new innovative product to the market, aiming to revolutionize the industry.",
      image: "https://img.freepik.com/free-vector/flat-news-landing-page-template_23-2148245885.jpg?w=2000",
    },
    {
      title: "Quarterly Earnings Report Released",
      date: "October 15, 2024",
      summary: "Our latest earnings report highlights significant growth and expansion in key areas of the business.",
      image: "https://img.freepik.com/free-vector/news-concept-landing-page_52683-11080.jpg?w=2000",
    },
    {
      title: "New Office Opened in New York",
      date: "October 10, 2024",
      summary: "Our company is expanding its presence with a brand-new office located in the heart of New York City.",
      image: "https://img.freepik.com/free-vector/news-concept-landing-page_52683-12359.jpg?w=1800",
    },
  ];

  return (
    <div className="relative" style={{ backgroundColor: bgColor, color: textColor }}>
      {divider && <img src={divider} className="absolute top-0 w-full" alt="Divider" />}

      <div className="px-6 py-10 md:px-20 mx-auto text-center">
        <h2 className="text-5xl lg:text-7xl font-extrabold mb-12">Latest News</h2>

        <div className="grid gap-10 grid-cols-1 lg:grid-cols-3">
          {newsItems.map((news, index) => (
            <div
              key={index}
              className="bg-black text-csc  rounded-lg  hover:shadow-lg transition-shadow duration-300 p-4"
            >
              <img
                className="rounded-t-lg w-full h-48 object-cover"
                src={news.image}
                alt={news.title}
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold ">{news.title}</h3>
                <p className="text-sm ">{news.date}</p>
                <p className="mt-2 ">{news.summary}</p>
                <a
                  href="#"
                  className="inline-flex items-center mt-4 px-4 py-2 text-sm font-semibold text-black bg-csc  rounded-lg shadow hover:bg-gray-100 transition duration-300"
                >
                  Read more
                  <svg
                    className="ml-2 w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
