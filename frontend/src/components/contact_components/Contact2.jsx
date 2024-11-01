import React, { useEffect, useState } from 'react';

const Contact2 = () => {
  const [contactData, setContactData] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Mock function to simulate fetching data from an API
  const fetchContactData = async () => {
    // Simulated fetched data
    const data = {
      title: "Contact Us",
      subtitle: "Reach Out To Us",
      phone: "470-601-1911",
      email: "Pagedone1234@gmail.com",
      address: "789 Oak Lane, Lakeside, TX 54321",
      imageUrl: "https://pagedone.io/asset/uploads/1696245837.png",
    };
    setContactData(data);
  };

  useEffect(() => {
    fetchContactData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically handle the form submission to your backend
  };

  if (!contactData) {
    return <div>Loading...</div>; // Loading state while fetching data
  }

  return (
    <div>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-24">
            <div className="flex items-center lg:mb-0 mb-10">
              <div>
                <h4 className="text-indigo-600 text-base font-medium leading-6 mb-4 lg:text-left text-center">{contactData.title}</h4>
                <h2 className="text-gray-900 font-manrope text-4xl font-semibold leading-10 mb-9 lg:text-left text-center">{contactData.subtitle}</h2>
                <form onSubmit={handleSubmit}>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full h-14 shadow-sm text-gray-600 placeholder-text-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none py-2 px-4 mb-8" 
                    placeholder="Name"
                  />
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-14 shadow-sm text-gray-600 placeholder-text-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none py-2 px-4 mb-8" 
                    placeholder="Email"
                  />
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full h-48 shadow-sm resize-none text-gray-600 placeholder-text-400 text-lg font-normal leading-7 rounded-2xl border border-gray-200 focus:outline-none px-4 py-4 mb-8" 
                    placeholder="Message"
                  />
                  <button className="w-full h-12 text-center text-white text-base font-semibold leading-6 rounded-full bg-indigo-600 shadow transition-all duration-700 hover:bg-indigo-800">Submit</button>
                </form>
              </div>
            </div>
            <div className="lg:max-w-xl w-full h-[600px] flex items-center justify-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${contactData.imageUrl})` }}>
              <div className="lg:w-96 w-auto h-auto bg-white shadow-xl lg:p-6 p-4">
                <a href="javascript:;" className="flex items-center mb-6">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3092 18.3098C22.0157 18.198 21.8689 18.1421 21.7145 18.1287C21.56 18.1154 21.4058 18.1453 21.0975 18.205L17.8126 18.8416C17.4392 18.9139 17.2525 18.9501 17.0616 18.9206C16.8707 18.891 16.7141 18.8058 16.4008 18.6353C13.8644 17.2551 12.1853 15.6617 11.1192 13.3695C10.9964 13.1055 10.935 12.9735 10.9133 12.8017C10.8917 12.6298 10.9218 12.4684 10.982 12.1456L11.6196 8.72559C11.6759 8.42342 11.7041 8.27233 11.6908 8.12115C11.6775 7.96998 11.6234 7.82612 11.5153 7.5384L10.6314 5.18758C10.37 4.49217 10.2392 4.14447 9.95437 3.94723C9.6695 3.75 9.29804 3.75 8.5551 3.75H5.85778C4.58478 3.75 3.58264 4.8018 3.77336 6.06012C4.24735 9.20085 5.64674 14.8966 9.73544 18.9853C14.0295 23.2794 20.2151 25.1426 23.6187 25.884C24.9335 26.1696 26.0993 25.1448 26.0993 23.7985V21.2824C26.0993 20.5428 26.0993 20.173 25.9034 19.8888C25.7076 19.6046 25.362 19.4729 24.6708 19.2096L22.3092 18.3098Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                  <h5 className="text-black text-base font-normal leading-6 ml-5">{contactData.phone}</h5>
                </a>
                <a href="javascript:;" className="flex items-center mb-6">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.81501 8.75L10.1985 13.6191C12.8358 15.2015 14.1544 15.9927 15.6032 15.9582C17.0519 15.9237 18.3315 15.0707 20.8905 13.3647L27.185 8.75M12.5 25H17.5C22.214 25 24.5711 25 26.0355 23.5355C27.5 22.0711 27.5 19.714 27.5 15C27.5 10.286 27.5 7.92893 26.0355 6.46447C24.5711 5 22.214 5 17.5 5H12.5C7.78595 5 5.42893 5 3.96447 6.46447C2.5 7.92893 2.5 10.286 2.5 15C2.5 19.714 2.5 22.0711 3.96447 23.5355C5.42893 25 7.78595 25 12.5 25Z" stroke="#000000" strokeWidth="2" strokeLinecap="round"></path>
                  </svg>
                  <h5 className="text-black text-base font-normal leading-6 ml-5">{contactData.email}</h5>
                </a>
                <a href="javascript:;" className="flex items-center mb-6">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 20H25C25.5304 20 26.0391 20.2107 26.4142 20.5858C26.7893 20.9609 27 21.4696 27 22V25C27 25.5304 26.7893 26.0391 26.4142 26.4142C26.0391 26.7893 25.5304 27 25 27H5C4.46957 27 3.96086 26.7893 3.58579 26.4142C3.21071 26.0391 3 25.5304 3 25V22C3 21.4696 3.21071 20.9609 3.58579 20.5858C3.96086 20.2107 4.46957 20 5 20Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M3 14V7C3 5.34315 4.34315 4 6 4H24C25.6569 4 27 5.34315 27 7V14" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                  <h5 className="text-black text-base font-normal leading-6 ml-5">{contactData.address}</h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact2;
