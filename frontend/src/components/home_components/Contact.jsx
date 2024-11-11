import React,{useState,useEffect} from 'react';

// Mock JSON Data for Contact Section


const Contact = ({ divider }) => {

  const apiUrl = import.meta.env.VITE_API_URL;
  const [contactData,setContactData] = useState({
    "title": "",
    "subtitle": "",
    "bgColor": "",
    "textColor": "",
    "divsBgColor":"",
    "divsTextColor":"",
    "card1": {
        "icon": "",
        "title": "",
        "description": ""
    },
    "card2": {
        "icon": "",
        "title": "",
        "description": ""
    }
}
)

useEffect(()=>{
  fetch(`${apiUrl}/home/contact`)
  .then(res=>res.json())
  .then(data=>{
    setContactData(data)
    console.log(data)
  }

)
  
 
},[])
  return (
    <div className="relative" style={{ backgroundColor: contactData.bgColor, color: contactData.textColor }}>
      {/* Divider */}
      <img src={divider || ""} className="absolute top-0 w-full" />
      
      {/* Contact Section */}
      <section class="w-full xl:py-24 lg:py-20 py-12 ">
        
          <div class="w-full max-w-7xl px-6 lg:px-8 mx-auto">
            <div class="grid lg:grid-cols-2 grid-cols-1 gap-x-16 xl:gap-x-24 gap-y-14 max-w-lg md:max-w-3xl lg:max-w-full mx-auto">
              <div>
                <h1 class="font-manrope  md:text-5xl text-4xl font-bold leading-tight mb-8 lg:text-left text-center">{contactData.title}</h1>
                <p class=" text-lg font-normal leading-7 lg:text-left text-center">{contactData.subtitle}</p>

                {/* Cards*/}
                <div class="my-12 grid md:grid-cols-2 grid-cols-1 md:gap-x-8 gap-y-8">
                  {/* Card 1*/}
                  <div class="rounded-2xl border border-gray-200  p-7 group transition-all duration-500 " style={{ backgroundColor: contactData.divsBgColor, color: contactData.divsTextColor }}>
                    <a href="javascript:;" class="w-14 h-14 rounded-full flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-white cursor-pointer" style={{ backgroundColor:contactData.divsTextColor}}>
                     <img src={contactData.card1.icon} className='w-14 h-14 rounded-[100%]'/>
                    </a>
                    <h5 class=" text-xl font-semibold leading-8 mb-3 transition-all duration-500 group-hover:text-white">{contactData.card1.title}</h5>
                    <p class=" text-sm font-normal leading-5 transition-all duration-500 group-hover:text-white">{contactData.card1.description}</p>
                  </div>
                  {/* Card 2*/}
                  <div class="rounded-2xl border border-gray-200  p-7 group transition-all duration-500 " style={{ backgroundColor: contactData.divsBgColor, color: contactData.divsTextColor }}>
                    <a href="javascript:;" class="w-14 h-14 rounded-full flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-white cursor-pointer" style={{ backgroundColor:contactData.divsTextColor}}>
                      <img src={contactData.card2.icon} className='w-14 h-14 rounded-[100%]'/>
                    </a>
                    <h5 class=" text-xl font-semibold leading-8 mb-3 transition-all duration-500 group-hover:text-white">{contactData.card2.title}</h5>
                    <p class=" text-sm font-normal leading-5 transition-all duration-500 group-hover:text-white">{contactData.card1.description} </p>
                  </div>
                </div>
              
              </div>
              <form action="" class="h-fit bg-white border border-slate-200 rounded-2xl lg:p-12 p-8 w-full max-w-lg md:max-w-3xl lg:max-w-full mx-auto text-black" style={{ backgroundColor: contactData.divsBgColor, color: contactData.divsTextColor }}>
                <div class="relative mb-8">
                  <label class="flex  items-center mb-2  text-base leading-6 font-medium">Name </label>
                  <div class="relative  focus-within:">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 21C20 18.1716 20 16.7574 19.1213 15.8787C18.2426 15 16.8284 15 14 15H10C7.17157 15 5.75736 15 4.87868 15.8787C4 16.7574 4 18.1716 4 21M12.1441 11C12.0541 10.991 11.9459 10.991 11.8468 11C9.7027 10.9278 8 9.16911 8 7.00451C8 4.79481 9.78378 3 12 3C14.2072 3 16 4.79481 16 7.00451C15.991 9.16911 14.2883 10.9278 12.1441 11Z" stroke="#111827" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                    <input type="text" id="default-search" class="w-full block h-12 pr-5 pl-12 py-2.5 text-lg leading-7 font-normal shadow-xs  bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none" placeholder="harsh"/>
                  </div>
                </div>
                <div class="relative mb-8">
                  <label class="flex  items-center mb-2  text-base leading-6 font-medium">Email </label>
                  <div class="relative  focus-within:">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.25201 7L8.15881 10.8953C10.2686 12.1612 11.3235 12.7941 12.4825 12.7665C13.6416 12.739 14.6652 12.0566 16.7124 10.6917L21.748 7M10 20H14C17.7712 20 19.6569 20 20.8284 18.8284C22 17.6569 22 15.7712 22 12C22 8.22876 22 6.34315 20.8284 5.17157C19.6569 4 17.7712 4 14 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20Z" stroke="#6B7280" stroke-width="1.5" stroke-linecap="round" />
                      </svg>
                    </div>
                    <input type="text" id="default-search" class="w-full block h-12 pr-5 pl-12 py-2.5 text-lg leading-7 font-normal shadow-xs  bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none" placeholder="Enter Your Email"/>
                  </div>
                </div>
                <div class="relative mb-8">
                  <label class="flex  items-center mb-2  text-base leading-6 font-medium">Message </label>
                  <div class="relative ">
                    <textarea class="block w-full h-40 px-4 py-2.5 text-lg leading-7 font-normal shadow-xs  bg-transparent border border-gray-300 rounded-2xl placeholder-gray-400 focus:outline-none resize-none" placeholder="Write your message"></textarea>
                  </div>
                </div>
                <button class="w-full h-12 rounded-full  transition-all duration-700 shadow-sm text-white text-base font-semibold leading-6 flex items-center justify-center" style={{ backgroundColor: contactData.divsTextColor, color:contactData.divsBgColor }}>Send message <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </section>
    </div>
  );
};

export default Contact;
