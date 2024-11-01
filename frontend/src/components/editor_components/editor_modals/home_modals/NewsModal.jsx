import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful';

const NewsModal = ({ isOpen, onClose }) => {
  const initialData = {
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
        date: "2024-10-20",
        summary: "We are excited to introduce our new innovative product to the market, aiming to revolutionize the industry.",
        image: "https://img.freepik.com/free-vector/flat-news-landing-page-template_23-2148245885.jpg?w=2000",
      },
      {
        title: "Quarterly Earnings Report Released",
        date: "2024-10-15",
        summary: "Our latest earnings report highlights significant growth and expansion in key areas of the business.",
        image: "https://img.freepik.com/free-vector/news-concept-landing-page_52683-11080.jpg?w=2000",
      },
      {
        title: "New Office Opened in New York",
        date: "2024-10-10",
        summary: "Our company is expanding its presence with a brand-new office located in the heart of New York City.",
        image: "https://img.freepik.com/free-vector/news-concept-landing-page_52683-12359.jpg?w=1800",
      },
    ],
  };

  const [data, setData] = useState(initialData);
  const [newArticle, setNewArticle] = useState({ title: '', date: '', summary: '', image: '' });

  const handleInputChange = (field, value) => {
    setData({ ...data, [field]: value });
  };

  const handleColorChange = (colorField, value) => {
    setData({
      ...data,
      colors: {
        ...data.colors,
        [colorField]: value
      }
    });
  };

  const handleArticleChange = (index, field, value) => {
    const updatedArticles = [...data.articles];
    updatedArticles[index][field] = value;
    setData({ ...data, articles: updatedArticles });
  };

  const handleImageUpload = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleArticleChange(index, 'image', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddArticle = () => {
    setData({ ...data, articles: [...data.articles, newArticle] });
    setNewArticle({ title: '', date: '', summary: '', image: '' });
  };

  const handleRemoveArticle = (index) => {
    const updatedArticles = data.articles.filter((_, i) => i !== index);
    setData({ ...data, articles: updatedArticles });
  };

  const handleSubmit = () => {
    console.log(data);
  };

  return (
    <dialog className={`modal ${isOpen ? 'modal-open' : ''}`}>
      <div className="modal-box w-full max-w-4xl relative">
        <button onClick={onClose} className="btn btn-sm btn-circle absolute right-2 top-2">✕</button>
        
        <h3 className="font-bold text-lg mb-4">Manage News Section</h3>

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

        <div className="mb-4">
          <label className="block mb-1">Subtitle</label>
          <textarea
            value={data.subtitle}
            onChange={(e) => handleInputChange('subtitle', e.target.value)}
            className="textarea textarea-bordered w-full"
            placeholder="Subtitle"
          />
        </div>

        {/* Color Pickers */}
        <div className="mb-4">
          <label className="block mb-2">Background Color</label>
          <div className="flex hex items-center">
            <HexColorPicker
              color={data.colors.bgColor}
              onChange={(color) => handleColorChange('bgColor', color)}
              className="w-10 h-10"
            />
            <input
              type="text"
              value={data.colors.bgColor}
              onChange={(e) => handleColorChange('bgColor', e.target.value)}
              className="input input-bordered w-20 ml-2"
              placeholder="#f8fafc"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Text Color</label>
          <div className="flex hex items-center">
            <HexColorPicker
              color={data.colors.textColor}
              onChange={(color) => handleColorChange('textColor', color)}
              className="w-10 h-10"
            />
            <input
              type="text"
              value={data.colors.textColor}
              onChange={(e) => handleColorChange('textColor', e.target.value)}
              className="input input-bordered w-20 ml-2"
              placeholder="#333"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Article Background Color</label>
          <div className="flex hex items-center">
            <HexColorPicker
              color={data.colors.articleBgColor}
              onChange={(color) => handleColorChange('articleBgColor', color)}
              className="w-10 h-10"
            />
            <input
              type="text"
              value={data.colors.articleBgColor}
              onChange={(e) => handleColorChange('articleBgColor', e.target.value)}
              className="input input-bordered w-20 ml-2"
              placeholder="#ffffff"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Article Text Color</label>
          <div className="flex hex items-center">
            <HexColorPicker
              color={data.colors.articleTextColor}
              onChange={(color) => handleColorChange('articleTextColor', color)}
              className="w-10 h-10"
            />
            <input
              type="text"
              value={data.colors.articleTextColor}
              onChange={(e) => handleColorChange('articleTextColor', e.target.value)}
              className="input input-bordered w-20 ml-2"
              placeholder="#000000"
            />
          </div>
        </div>

        {/* Articles Table */}
        <h4 className="font-bold text-lg mb-2">Articles</h4>
        <table className="table w-full mb-4">
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Summary</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.articles.map((article, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={article.title}
                    onChange={(e) => handleArticleChange(index, 'title', e.target.value)}
                    className="input input-bordered w-full"
                  />
                </td>
                <td>
                  <input
                    type="date"
                    value={article.date}
                    onChange={(e) => handleArticleChange(index, 'date', e.target.value)}
                    className="input input-bordered w-full"
                  />
                </td>
                <td>
                  <textarea
                    value={article.summary}
                    onChange={(e) => handleArticleChange(index, 'summary', e.target.value)}
                    className="textarea textarea-bordered w-full"
                  />
                </td>
                <td>
                  <img src={article.image} alt="Article Image" className="h-24 w-24 object-cover mb-2" />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(index, e)}
                    className="file-input file-input-bordered w-full"
                  />
                </td>
                <td>
                  <button onClick={() => handleRemoveArticle(index)} className="btn btn-error">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Add New Article */}
        <h4 className="font-bold text-lg mb-2">Add New Article</h4>
        <div className="mb-4">
          <input
            type="text"
            value={newArticle.title}
            onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
            className="input input-bordered w-full mb-2"
            placeholder="Article Title"
          />
          <input
            type="date"
            value={newArticle.date}
            onChange={(e) => setNewArticle({ ...newArticle, date: e.target.value })}
            className="input input-bordered w-full mb-2"
          />
          <textarea
            value={newArticle.summary}
            onChange={(e) => setNewArticle({ ...newArticle, summary: e.target.value })}
            className="textarea textarea-bordered w-full mb-2"
            placeholder="Summary"
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(-1, e)} // -1 for new article
            className="file-input file-input-bordered w-full mb-2"
          />
          <button onClick={handleAddArticle} className="btn btn-primary">Add Article</button>
        </div>

        <button onClick={handleSubmit} className="btn btn-success">Submit</button>
      </div>
    </dialog>
  );
};

export default NewsModal;
