import React from 'react';

// Updated JSON Data with styling colors and content
const newsData = {
  title: "News",
  subtitle: "This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.",
  colors: {
    bgColor: '#f8fafc',
    textColor: '#333',
    articleBgColor: 'white',
    articleTextColor: 'black',
  },
  articles: [
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
  ],
};

const News = ({ divider }) => {
  const { title, subtitle, colors, articles } = newsData;

  return (
    <div className="relative" style={{ backgroundColor: colors.bgColor, color: colors.textColor }}>
      {divider && <img src={divider} className="absolute top-0 w-full" alt="Divider" />}
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          {/* Text Section with dynamic title and subtitle */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold md:mb-6 lg:text-3xl">{title}</h2>
            <p className="mx-auto max-w-screen-md text-center" style={{ color: colors.textColor }}>
              {subtitle}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8">
            {/* Dynamically loaded articles */}
            {articles.map((item, index) => (
              <div key={index} className="flex items-start overflow-hidden rounded-lg border" style={{ backgroundColor: colors.articleBgColor }}>
                <a href="#" className="relative block h-full w-full  overflow-hidden bg-gray-100">
                  <img src={item.image} loading="lazy" alt={item.title} className="absolute inset-0 h-full w-full object-fit object-center transition duration-200 group-hover:scale-110" />
                </a>
                
                <div className="flex flex-col gap-2 p-4 lg:p-6" style={{ color: colors.articleTextColor }}>
                  <span className="text-sm">{item.date}</span>
                  <h2 className="text-xl font-bold">
                    <a href="#" className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">{item.title}</a>
                  </h2>
                  <p>{item.summary}</p>
                  <div>
                    <a href="#" className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Read more</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
