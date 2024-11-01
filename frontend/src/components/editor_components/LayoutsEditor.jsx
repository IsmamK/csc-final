import React from 'react';
import Navbar from '../layout_components/Navbar';
import Footer from '../layout_components/Footer';

const LayoutsEditor = () => {
  return (
    <div className="flex gap-20 items-center justify-between p-10">
      {/* Buttons Section */}
      <div className="flex flex-col gap-10">
        <button className="btn btn-primary px-20">Edit Navbar</button>
        <button className="btn btn-primary px-20">Edit Footer</button>
      </div>

      {/* Mockup Browser Section */}
        <div className="bg-gray-200 rounded shadow-lg">
          <div className="mockup-browser-toolbar mb-4 p-3 bg-gray-300 rounded-t-lg flex items-center justify-center">
            <div className="text-gray-500">https://sample-website.com</div>
          </div>

          {/* Render Navbar and Footer */}
          <div className="p-5 space-y-10">
            <div className="border-b-2 pb-4">
              <Navbar />
            </div>

            <div className="pt-4 border-t-2">
              <Footer bgColor="black" textColor="white" />
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default LayoutsEditor;
