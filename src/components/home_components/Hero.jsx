import React from 'react'

const Hero = ({divider,bgColor,textColor}) => {
  return (
    <div className={`relative`}>
            <img src={divider || ""} className='absolute top-0 z-100' />

            <div style={{ backgroundColor: bgColor, color: textColor }}>
        <section className="">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
        <div className="mr-auto place-self-center lg:col-span-7 mt-10 md:mt-10 ">
            <h1 className="max-w-2xl mb-4 text-5xl md:text-7xl font-extrabold tracking-tight leading-none  dark:text-white">We're the one you're looking for</h1>
            <p className="max-w-2xl mb-6 font-light  lg:mb-8 md:text-lg lg:text-xl ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati eum culpa nihil perferendis consectetur voluptas eaque cum odio numquam consequuntur.</p>
            
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 font-medium text-center  border-2 border-purple-800 rounded-lg bg-black hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Call to Action
            </a> 
        </div>
        <div className=" lg:mt-0 lg:col-span-5 ">
            <img src="https://img.freepik.com/premium-photo/technical-support-operators-with-headsets-white-background_495423-53547.jpg?w=2000" alt="mockup"/>
        </div>                
    </div>
</section>
        </div>
      
    </div>
  )
}

export default Hero
